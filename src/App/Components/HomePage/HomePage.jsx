const HomePage = ({ homeRef }) => {
  return (
    <section className="homePage" ref={homeRef}>
      <div className="homeInfo">
        <div
          className="info"
          // data-aos="fade-left"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="1500"
        >
          <h2>Tip - top</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            maiores, corporis labore totam ipsam laborum nostrum iste
            consectetur obcaecati, ratione vero cumque officia eveniet rerum
            distinctio placeat dolorem est dolor?
          </p>
        </div>
        <div
          className="info"
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="1500"
        >
          <h2>Tip - top</h2>
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
