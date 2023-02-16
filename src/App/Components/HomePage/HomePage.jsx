const HomePage = ({ homeRef }) => {
  return (
    <section className="homePage" ref={homeRef}>
      <div>
        <img src="/icons/LogoTipTopCss.svg" alt="logo" />
      </div>
      <div className="homeInfo">
        <div className="info">
          <h1>Tip</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            maiores, corporis labore totam ipsam laborum nostrum iste
            consectetur obcaecati, ratione vero cumque officia eveniet rerum
            distinctio placeat dolorem est dolor?
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
