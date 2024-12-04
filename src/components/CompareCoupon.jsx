import SectionTitle from "./SectionTitle";

const CompareCoupon = () => {
  return (
    <section className="pb-20">
      <SectionTitle sectionTitle="Save more money" sectionIcon="😀" />
      <div className="diff aspect-[16/9] max-h-[400px] !rounded-2xl">
        <div className="diff-item-1">
          <div className="bg-green-500  grid font-black text-primary-content  place-content-center">
            <h1 className="md:text-5xl text-3xl lg:text-8xl font-bold mb-5">With Coupon! 😍</h1>
            <p className="md:text-3xl text-2xl lg:text-5xl text-center">Saving 50% more</p>
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-primary grid  font-black text-primary-content  place-content-center">
            <h1 className="md:text-5xl text-3xl lg:text-8xl font-bold mb-5">😢 Without Coupon!</h1>
            <p className="md:text-3xl text-2xl lg:text-5xl text-center">Losing 50% more</p>
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </section>
  );
};

export default CompareCoupon;
