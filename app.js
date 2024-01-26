
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Error from "./src/components/Error";
import Profile from "./src/components/Profile";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";


// import { useState } from "react";

const Instamart = lazy(()=>import("./src/components/Instamart"))

const AppLayout= ()=>{
    return(
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
    );
};

const appRouter= createBrowserRouter([{

    
    path : "/",
    element : <AppLayout/>,
    
  

     children :[
        {
            path: "/",
            element: <Body/>,
        },

        {
            path: "/about",
            element: <About/>,
            children :[{

                path: "profile",
                element:<Profile/>,
            }
            ],
        },

        {
            path: "/contact",
            element: <Contact/>,
        },

        {
            path: "/restaurant/:resID",
            element: <RestaurantMenu/>,
        },
        {
            path: "/instamart",
            element: 
            <Suspense fallback={<h1>loading...</h1>}>
            <Instamart/>
            </Suspense>,
            
        },
    
    ], errorElement : <Error/>} 
   
] );


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

