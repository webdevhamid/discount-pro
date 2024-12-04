import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import "animate.css";
import "../index.css";

const BrandSingle = ({ coupon }) => {
  const { id, brand_logo, brand_name, description, rating, isSaleOn } = coupon || {};
  return (
    <div className="card md:card-side border" key={id}>
      <div className="w-2/4 md:w-1/4 flex flex-col items-center p-5">
        <img src={brand_logo} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{brand_name}</h2>
        <p>{description}</p>
        <div>
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
        </div>
        <div className="card-actions justify-between">
          <Link to={`/brand/${id}`}>
            <button className="btn bg-primary text-white hover:bg-black">View Coupons</button>
          </Link>
          {isSaleOn && (
            <span className="text-primary font-medium p-2 animate__animated animate__bounce">
              Sell is on
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandSingle;
