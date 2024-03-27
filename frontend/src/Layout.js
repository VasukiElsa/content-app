import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


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

        navigate('/explore', { state: { result, title }});   

    };
    
    

    return(
        <div>
            <h1>Historical Echoes</h1>
                {historicalEchoes.map((historicalEcho) => (   
                              
                <>
                <ul>
                    <li>
                        {historicalEcho.title}
                    </li>
                    <li>
                        {historicalEcho.description}
                    </li>
                    <li>
                        {historicalEcho.created_at}
                    </li>
                </ul>
                <button onClick={() => filterContents(historicalEcho._id)}>
                    Explore it!
                </button>   
              
                </>
                ))}

                
                

        </div>
    );

    
};

export default Layout;