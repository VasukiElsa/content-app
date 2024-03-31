import { useLocation } from 'react-router-dom';

const Blogs = () => {

    const location = useLocation();
    const { result, title, cover } = location.state;
    console.log(location);

    const formatValue = (value) =>{
        const formattedValue = value.replace(/\r\n|\r|\n/g, '<br />');
        
        return { __html: formattedValue };
    };

    return(
        <div class="blog-container">

            <h2 className="blog-title">{title}</h2>
            <img className="blog-cover" src={cover} />

            {result ? (
                <ul>
                    { result.map((item, index) => (        
                        <li className="blog-list" key={index}>
                            <p className="label-el">{item.label}</p>
                            <p className="value-el" dangerouslySetInnerHTML={formatValue(item.value)}/>
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