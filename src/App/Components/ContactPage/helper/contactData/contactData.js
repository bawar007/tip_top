const contactData = [
  {
    id: 1,
    text: "Artur Barski",
    imgSrc: "/icons/ovner.svg",
  },

  {
    id: 3,
    text: "508-531-655",
    imgSrc: "/icons/phone.svg",
  },
  {
    id: 2,
    text: "tiptopglazura@gmail.com",
    imgSrc: "/icons/mail.svg",
  },
  {
    id: 5,
    text: "NIP: 5711511074",
    imgSrc: "/icons/contactform.svg",
  },
  {
    id: 6,
    text: "REGON: 130432598",
    imgSrc: "/icons/contactform.svg",
  },
  {
    id: 4,
    text: "Kowalewko, 06-445 Strzegowo",
    imgSrc: "/icons/location.svg",
  },
];

export const listContactData = contactData.map((item) => (
  <li key={item.id}>
    <img
      src={`/tip_top${item.imgSrc}`}
      className="OfertNavitest"
      alt={item.td}
    />
    <span>{item.text}</span>
  </li>
));
