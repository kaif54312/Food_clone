import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from "./shimer";

const RestaurantMenu = () => {
    const { resID } = useParams();

    const restaurant = useRestaurantMenu(resID);
    // const[restaurant,setRestaurant]=useState(null);
    if(!restaurant){
        return <p>loading</p>
    }
    let { name, cuisines, costForTwoMessage,cloudinaryImageId,areaName } =restaurant.cards[0]?.card?.card?.info;;
    return !restaurant ? (
        <Shimer />
    ) : (

        <div className="menu">
            <div>
                <h1> Restaurant id : {resID}</h1>
                <h2>{name}</h2>
                <img src={IMG_CDN_URL + cloudinaryImageId}></img>
                <h3>{areaName}</h3>
                <h3>{restaurant?.avgRating}</h3>
                <h3>{costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards).map((item) => {
                        <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>

        </div>

    );
};

export default RestaurantMenu;