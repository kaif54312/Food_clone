import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from "./shimer";

const RestaurantMenu = ()=>{
    const {resId}= useParams();

    const restaurant = useRestaurantMenu(resId);

    // const[restaurant,setRestaurant]=useState(null);
    
    
    return !restaurant? (
        <Shimer/>
    ):(
        
        <div className="menu">
        <div>
            <h1> Restaurant id : {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.avgRating}</h3>
            <h3>{restaurant?.costForTwoMsg}</h3>
            <h3>{restaurant?.city}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item)=>{
                        <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        
        </div>

    );
};

export default RestaurantMenu;