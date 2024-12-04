const SectionTitle = ({ sectionTitle, sectionIcon }) => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-center">
        {sectionTitle} {sectionIcon}
      </h1>
    </div>
  );
};

export default SectionTitle;
