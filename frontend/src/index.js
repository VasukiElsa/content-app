import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.js';
import Blogs from './Blogs.js';

const route = createBrowserRouter([
    {
        path : '/',
        element : <Layout />,
    },
    {
        path : '/explore',
        element: <Blogs />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={route} />
    </React.StrictMode>
);