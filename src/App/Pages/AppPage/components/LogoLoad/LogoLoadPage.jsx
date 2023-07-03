const LogoLoadPage = () => {
  return (
    <div className="LogoLoadPage">
      <img
        srcSet="/icons/LogoTipTopCss.svg"
        alt="logo"
        className="LogoLoadPage--img"
        fetchpriority="high"
      />
    </div>
  );
};

export default LogoLoadPage;
