import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const CouponCard = ({ coupon, shop_link }) => {
  const { condition, coupon_code, coupon_type, description, expiry_date } = coupon || {};

  const couponAmount = (coupon_desc) => {
    const getWords = coupon_desc.split(" ");
    return getWords[0];
  };
  return (
    <div className="flex items-center justify-center mb-5">
      <div className="relative bg-gradient-to-br from-pink-50 to-orange-100 rounded-lg px-6 py-8 shadow-lg w-96">
        <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
          {couponAmount(description)}
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 rounded-full p-2">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl">
              🎁
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{description}</h2>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{coupon_code}</h2>
            <h2 className="mb-2">{coupon_type}</h2>
            <h2 className="text-xs font-semibold text-gray-800">{condition}</h2>
          </div>
        </div>

        <div className="flex flex-col">
          <CopyToClipboard
            text={coupon_code}
            onCopy={() => toast.success("Coupon successfully copied!")}
          >
            <button className="w-full mt-4 bg-primary hover:opacity-85 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Copy Code
            </button>
          </CopyToClipboard>

          <a href={shop_link} target="_blank">
            <button className="w-full mt-4 bg-green-500 hover:opacity-85 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Use now
            </button>
          </a>
          <p className="mt-2 text-sm text-gray-600">
            Expires On <span className="font-bold">{expiry_date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
