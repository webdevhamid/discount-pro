import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const TopBrands = () => {
  const [topBrands, setTopBrands] = useState([]);
  useEffect(() => {
    fetch("topBrands.json")
      .then((res) => res.json())
      .then((data) => {
        const { top_brands } = data;
        setTopBrands(top_brands);
      });
  }, []);
  return (
    <section className="py-20">
      <SectionTitle sectionTitle="Top Brands" sectionIcon="🎉" />
      {/* Top Brands */}
      <Marquee pauseOnHover={true}>
        <div className="grid grid-cols-6 gap-3">
          {topBrands?.map((brand) => {
            return (
              <div key={brand._id}>
                <Link to={`/brand/${brand._id}`}>
                  <img
                    src={brand.brand_logo}
                    className="w-[250px] h-[100px] p-5 object-contain hover:opacity-60 transition"
                    alt=""
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};

export default TopBrands;
