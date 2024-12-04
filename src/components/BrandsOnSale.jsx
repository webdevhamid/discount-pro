import BrandsOnSaleSingle from "./BrandsOnSaleSingle";
import SectionTitle from "./SectionTitle";

const BrandsOnSale = ({ coupons }) => {
  const brandsOnSale = coupons?.filter((coupon) => coupon.isSaleOn === true);
  return (
    <section className="pb-20">
      <SectionTitle sectionTitle="Brands on sale" sectionIcon="🎀" />
      {/* brands on sale */}
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-3">
        {brandsOnSale?.map((brand) => (
          <BrandsOnSaleSingle brand={brand} key={brand.id} />
        ))}
      </div>
    </section>
  );
};

export default BrandsOnSale;
