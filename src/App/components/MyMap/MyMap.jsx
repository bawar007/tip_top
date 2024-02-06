import "./MyMap.scss";

const MyMap = () => {
  return (
    <div id="map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.44445629043!2d20.274115777069962!3d52.99439230099879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c4b487650795d%3A0xaa2fc1d8a57f73f6!2sKowalewko%2048%2C%2006-522%20Kowalewko!5e0!3m2!1spl!2spl!4v1686319480411!5m2!1spl!2spl"
        width="500"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MyMap;
