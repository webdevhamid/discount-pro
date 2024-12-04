import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const GroceryBrands = ({ coupons }) => {
  const groceryBrands = coupons?.filter((coupon) => coupon.category === "Grocery");
  return (
    <div className="pb-20">
      <SectionTitle sectionTitle="Grocery Brands" sectionIcon="🍏" />
      {/* Grocery brands */}
      {/* <Marquee pauseOnHover={true}> */}
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-6">
        {groceryBrands?.map((brand) => {
          return (
            <div className="card max-h-[350px] border py-3" key={brand.id}>
              <figure className="max-h-[250px] px-5">
                <img src={brand.brand_logo} alt="Shoes" className="h-full w-full object-cover" />
              </figure>
              <div className="card-body flex-1">
                <h2 className="card-title">{brand.brand_name}</h2>
                <p>{brand.description}</p>
                <Link
                  className="bg-green-500 rounded py-2 px-3 text-white hover:bg-primary transition"
                  to={`/brand/${brand.id}`}
                >
                  Get Coupons 🎁
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* </Marquee> */}
    </div>
  );
};

export default GroceryBrands;
