import { Link, useLoaderData } from "react-router-dom";
import BrandSingle from "../components/BrandSingle";

const Brands = () => {
  const { coupons } = useLoaderData();

  return (
    <div className="container mx-auto py-10">
      {/* Page title */}
      <h1 className="text-4xl text-center my-5">Brands</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Search bar */}
        <div className="">
          <form className="w-full lg:max-w-md mx-auto">
            <div className="relative border rounded-xl overflow-hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-4 ps-10 md:text-sm text-xs outline-none"
                placeholder="Search coupons with brand names"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        {/* coupon cards */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-5 p-2 md:p-0">
          {coupons?.map((coupon) => (
            <BrandSingle key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
