import { Link } from "react-router-dom";

const BrandsOnSaleSingle = ({ brand }) => {
  return (
    <div className="card bg-base-100 border" key={brand.id}>
      {/* coupon brand image */}
      <figure className="w-[250px] h-[180px] mx-auto p-10 pb-0">
        <img src={brand.brand_logo} className="p-2 " />
      </figure>
      {/* card body */}
      <div className="card-body gap-2 pt-0 mx-auto text-center">
        {/* category */}
        <div className="border border-black rounded-2xl px-2 w-fit mx-auto">{brand.category}</div>

        {/* coupon brand */}
        <h2 className="card-title text-3xl">{brand.brand_name}</h2>
        {/* total coupons */}
        <p className="font-medium">Total Coupons: {brand.coupons.length}</p>
        {/* see coupons button */}
        <Link
          to={`/brand/${brand.id}`}
          className="bg-primary px-5 mx-auto w-fit text-white py-1 text-sm rounded-xl hover:bg-black transition"
        >
          See Coupons
        </Link>
      </div>
    </div>
  );
};

export default BrandsOnSaleSingle;
