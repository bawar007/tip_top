import MyMap from "../../components/MyMap/MyMap";
import Section from "../../components/Section/Section";

import { listContactData } from "../../data/contactData";
import "./ContactPage.scss";

const Settings = {
  className: "contactPage",
  id: "contact",
  dataNaviitem: ".Contact-NaviItem",
  title: "kontakt",
  footer: true,
};

const ContactPage = () => {
  return (
    <Section {...Settings}>
      <div className="contactPage__content">
        <div className="contact">
          <ul className="contact_list">{listContactData}</ul>
        </div>
        <div className="picture">
          <MyMap />
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
