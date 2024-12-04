import BrandsOnSale from "../components/BrandsOnSale";
import Carousel from "../components/Carousel";
import CompareCoupon from "../components/CompareCoupon";
import GroceryBrands from "../components/GroceryBrands";
import TopBrands from "../components/TopBrands";
import { useLoaderData } from "react-router-dom";
import TopCoupons from "../components/TopCoupons";
import WelcomeUser from "../components/WelcomeUser";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const { coupons } = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <header className="container mx-auto">
      {user && <WelcomeUser user={user} color="primary" font="xl" content="Welcome" />}
      <Carousel />
      <div className="px-2 md:p-0">
        <TopBrands coupons={coupons} />
        <BrandsOnSale coupons={coupons} />
        <TopCoupons />
        <GroceryBrands coupons={coupons} />
        <CompareCoupon />
      </div>
    </header>
  );
};

export default Home;
