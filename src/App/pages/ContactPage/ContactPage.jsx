import MyMap from "../../components/MyMap/MyMap";
import Section from "../../components/Section/Section";

import Opinions from "../OpinionsPage/Opinions";

import { listContactData } from "../../../constants/contactData";
import "./ContactPage.scss";
import ContactPageItem from "../../components/ContactPageItem/ContactPageItem";

const Settings = {
  className: "contactPage",
  id: "contact",
  title: "O NAS",
  boxFlip: true,
};

const ContactPage = () => {
  return (
    <Section {...Settings}>
      <div className="contactPage__content">
        <ContactPageItem>
          <ul className="contact_list">{listContactData}</ul>
        </ContactPageItem>
        <ContactPageItem>
          <MyMap />
        </ContactPageItem>
        <Opinions />
      </div>
    </Section>
  );
};

export default ContactPage;
