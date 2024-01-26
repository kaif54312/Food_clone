import { useState,useEffect } from "react";

const useRestaurantMenu = (resID)=>{
    const[restaurant,setRestaurant]= useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch("https:www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5397507&lng=88.3789178&restaurantId="+resID);
        const json = await data.json();
        console.log(json)
        setRestaurant(json.data);
        

    }

    return restaurant;
};

export default useRestaurantMenu;