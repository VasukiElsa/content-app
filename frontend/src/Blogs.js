
const Blogs = ({ data }) => {
    console.log("Called blogs file");
    
    return(
        
        <>
        <h2>Contents</h2>
        {data.map((content, index) => (
            <div key={index}>

               <ul>
                <li>{content.label}</li>
                <li>{content.value}</li>
              </ul>

            </div>

        ))}

        </>

    );
}

export default Blogs;