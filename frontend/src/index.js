import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout.js";
import Blogs from "./Blogs.js";

export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="blogs" element={<Blogs/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

