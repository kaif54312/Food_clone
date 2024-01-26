import { IMG_CDN_URL } from "../../config";


const RestaurantCard = (props) => {
    const {resData}=props;
    let {name,cuisines,avgRating,cloudinaryImageId}=resData.info;
    
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
      
    </div>
  );
};
export default RestaurantCard;
