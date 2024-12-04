import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData, useParams } from "react-router-dom";
import CouponCard from "../components/CouponCard";

const BrandDetails = () => {
  const { coupons } = useLoaderData();
  const { id } = useParams();
  const currentBrand = coupons?.find((coupon) => coupon.id === id);
  const { brand_logo, brand_name, rating, coupons: brand_coupons, shop_link } = currentBrand || {};
  return (
    <div className="container mx-auto">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
          <li>Brand Name</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex place-content-center">
          <img src={brand_logo} alt="" className="h-[100px]" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold my-2">{brand_name}</h1>
          <Rating style={{ maxWidth: 180, margin: "auto" }} value={rating} readOnly />
        </div>

        <div className="flex-row md:flex gap-5 md:gap-8 justify-center py-20 px-5 lg:p-0">
          {brand_coupons?.map((coupon, i) => (
            <CouponCard coupon={coupon} shop_link={shop_link} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
