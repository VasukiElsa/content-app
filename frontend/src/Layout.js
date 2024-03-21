import React, { useState, useEffect } from 'react';
import {Outlet, Link} from "react-router-dom";


const Layout = () => {
    const [historicalEchoes, setHistoricalEchoes] = useState([]);
    const [contents, setContents] = useState([]);
    const [filteredContents, setFilteredContents] = useState([]);

    useEffect(() => {
        getHistoricalEchoes();
        getContents();
    }, []);

    const getHistoricalEchoes = async() => {
        const response = await fetch('http://localhost:8000/historical_echo/');

        setHistoricalEchoes(await response.json());
    }

    const getContents = async() => {
        const response = await fetch('http://localhost:8000/contents/');
        setContents(await response.json());
    }

    

    const filterContents = (props) =>{
        const filteredContent = contents.filter(item=>item.historical_echo._id === props);
        setFilteredContents(filteredContent);
    }
    
    

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
                 <button onClick={() => filterContents(historicalEcho._id)}>Explore it!</button>
              
                </>
                ))}

                <h2>Contents</h2>
                {filteredContents.map((content) => (
                    <>
                    <ul>
                        <li>{content.label}</li>
                        <li>{content.value}</li>
                    </ul>
                    </>

                ))}
        </div>
    );

    
};

export default Layout;