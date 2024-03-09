const Section = ({ children, className, id, dataNaviitem, title, footer }) => {
  return (
    <section className={className} id={id} data-naviitem={dataNaviitem}>
      {title && <h1 className="title_page">{title}</h1>}
      {children}
      {footer && (
        <footer className="footer">
          <p>Copyright © 2023 Tip-Top</p>
          <p>Wszelkie prawa zastrzeżone</p>
          <p>Powered By Kamil Barski</p>
        </footer>
      )}
    </section>
  );
};

export default Section;
