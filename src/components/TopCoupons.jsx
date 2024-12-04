import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const TopCoupons = () => {
  return (
    <section className="pb-20">
      <SectionTitle sectionTitle="Top Coupons" sectionIcon="🎊" />
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="border p-6 rounded-xl text-center flex flex-col justify-between max-h-[350px]">
          <div className="w-[250px] mx-auto max-h-[100px]">
            <img
              src={"https://i.ibb.co.com/hWJ6Tyj/swap.jpg"}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Swap</h1>
            <p className="text-xl font-semibold">35% OFF</p>
            <p className="mb-5">Get Flat 20% OFF on first Order</p>
            <Link className="bg-primary text-white py-2 px-5 rounded-lg" to={`/brand/sw014`}>
              Claim It
            </Link>
          </div>
        </div>
        <div className="border p-6 rounded-xl text-center flex flex-col justify-between max-h-[350px]">
          <div className="w-[250px] mx-auto max-h-[100px]">
            <img
              src={"https://i.ibb.co.com/bFRs422/kikinben.png"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">KiKenben</h1>
            <p className="text-xl font-semibold">25% OFF</p>
            <p className="mb-5">Get Flat 10% OFF on first Order</p>
            <Link className="bg-primary text-white py-2 px-5 rounded-lg" to="/brand/ki016">
              Claim It
            </Link>
          </div>
        </div>
        <div className="border p-6 rounded-xl text-center flex flex-col justify-between max-h-[350px]">
          <div className="w-[250px] mx-auto">
            <img
              src={"https://i.ibb.co.com/859J5Yb/jadroo.png"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Jadroo</h1>
            <p className="text-xl font-semibold">40% OFF</p>
            <p className="mb-5">Get Flat 20% OFF on first Order</p>
            <Link className="bg-primary text-white py-2 px-5 rounded-lg" to={`/brand/jb018`}>
              Claim It
            </Link>
          </div>
        </div>
        <div className="border p-6 rounded-xl text-center flex flex-col justify-between max-h-[350px]">
          <div className="w-[250px] mx-auto">
            <img
              src={"https://i.ibb.co.com/f17qyKr/daraz.png"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Daraz</h1>
            <p className="text-xl font-semibold">25% OFF</p>
            <p className="mb-5">25% off for new users</p>
            <Link className="bg-primary text-white py-2 px-5 rounded-lg" to="/brand/dz001">
              Claim It
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCoupons;
