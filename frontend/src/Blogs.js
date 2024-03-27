import { useLocation } from 'react-router-dom';

const Blogs = () => {

    const location = useLocation();
    const { result, title } = location.state;

    return(
        <div>
            <h2>{title}</h2>
            {result ? (
                <ul>
                    { result.map((item, index) => (
                        <li key={index}>
                            <p>{item.label}</p>
                            <p>{item.value}</p>
                        </li>
                        
                    ))}
                </ul>

            ) : (
                <p>No data received</p>
            )
        }

        </div>
    );
};

export default Blogs;