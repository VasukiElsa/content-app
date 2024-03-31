import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Layout = () => {
    const navigate = useNavigate();
    const [historicalEchoes, setHistoricalEchoes] = useState([]);
    const [contents, setContents] = useState([]);
   

    useEffect(() => {
        getHistoricalEchoes();
        getContents();
    }, []);


    const getHistoricalEchoes = async() => {
        const response = await fetch('http://localhost:8000/historical_echo/');

        setHistoricalEchoes(await response.json());
    };

    const getContents = async() => {
        const response = await fetch('http://localhost:8000/contents/');
        setContents(await response.json());
    };

    

    const filterContents = (props) =>{    
        const result = contents.filter(item=>item.historical_echo._id === props);

        const  particularEcho = historicalEchoes.find(echo => echo._id === props);
        
        const title = particularEcho.title;

        const cover = particularEcho.cover;

        navigate('/explore', { state: { result, title, cover }});   

    };

    const formatDate = (dateString) => {

        const date = new Date(dateString);
        const options = { month : 'short', day : 'numeric', year : 'numeric'};
        return date.toLocaleString('en-US', options);
        
    };

    
    return(
        <>
        <header>

            <h1 id="heading">Historical Echoes</h1>

            <p id="para">Explore ancient wonders that will leave you breathless!</p>

        </header>
        
        <div className="image-container">   

                {historicalEchoes.map((historicalEcho, index) => ( 
                    
               
                <div key={index} className="image-wrapper">
                
                  <img id = "imageEl" src={historicalEcho.cover} alt = {historicalEcho.title}  onClick={() => filterContents(historicalEcho._id)}/>
                
                  <ul className="echoes">

                    <li className="echo-title" onClick={() => filterContents(historicalEcho._id)}>
                        {historicalEcho.title}
                    </li>

                    <li className="echo-description"> 
                        {historicalEcho.description}
                    </li>

                    <li className="created-at">
                        Published at : {formatDate(historicalEcho.created_at)}
                    </li>

                </ul>

                </div>
              
                ))}
        </div>
      
        </>
    );


    
};

export default Layout;