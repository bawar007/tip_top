const contactData = [
  {
    id: 1,
    text: "Artur Barski",
    imgSrc: "/icons/ovner.svg",
  },

  {
    id: 2,
    text: "508-531-655",
    imgSrc: "/icons/phone.svg",
  },
  {
    id: 3,
    text: "tiptopglazura@gmail.com",
    imgSrc: "/icons/mail.svg",
  },
  {
    id: 4,
    text: "Kowalewko, 06-445 Strzegowo",
    imgSrc: "/icons/location.svg",
  },
];

export const listContactData = contactData.map((item) => (
  <li key={item.id + item.text}>
    <img
      src={`${item.imgSrc}`}
      className="OfertNavitest"
      alt={item.id}
      width="40"
      height="40"
    />
    <span>{item.text}</span>
  </li>
));
