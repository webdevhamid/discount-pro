const WelcomeUser = ({ content, user, color, font }) => {
  const { displayName } = user || {};
  return (
    <div className={`text-center mb-3 text-${font}  mx-auto`}>
      {content}, <span className={`text-${color}`}>{displayName}</span>
    </div>
  );
};

export default WelcomeUser;
