import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimer from "./shimer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";




  

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("");
  
 
  useEffect(() => {
   fetchData();
  }, []);
 
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5397507&lng=88.3789178&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    console.log(json)
  };


  const isOnline = useOnline();

  if(!isOnline){
     return <h1>please check your internet connextion !!</h1>
  };




  if(!allRestaurants) return null;
  // if(filteredRestaurants?.length==0)
  // return <h1>No restaurant found..</h1>;
  return allRestaurants?.length==0 ?(
    <Shimer/>
  ): (
    <>
      <div className="searchbar">
        <input
          type="text"
          className="searchInput"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() =>{
                // const lowerCaseSearch = searchText.trim().toLowerCase();
                // const filteredRestaurants = filterData.filter((allRestaurants) =>
                //   allRestaurants.info.name.toLowerCase().includes(lowerCaseSearch)
                // );

                const data = filterData(searchText,allRestaurants)
                setFilteredRestaurants(data);
                console.log(data)

              }}
        >
          search
        </button>
      </div>

      <div className="restaurantlist">
       {
          filteredRestaurants.map((rest,index) => (
            <Link to={"/restaurant/" + index}
            key={index}
            >
            
            <RestaurantCard   resData={rest} />
            </Link>

          ))
        }
      </div>
    </>
  );
};

export default Body; 


