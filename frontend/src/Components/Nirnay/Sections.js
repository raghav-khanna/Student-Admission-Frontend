import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sections.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Sections = () => {
  const [key, setKey] = useState("home");

  const exampleText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab numquam dolorem odio magnam, voluptate asperiores in? Quia esse fuga neque assumenda eos pariatur laudantium, libero aliquid earum iure. Maiores exercitationem non dicta inventore! Officia cupiditate blanditiis aspernatur sapiente reiciendis accusamus rerum maiores officiis, porro delectus laudantium quidem eos tenetur eius adipisci quisquam, quia velit libero voluptatibus iure modi quaerat tempora inventore! Consequuntur labore necessitatibus ullam iste, ad tenetur exercitationem eaque. Error, esse magni provident harum nesciunt accusantium sit excepturi eum vitae laboriosam maiores veniam molestiae fugit? Pariatur, cumque. Rem, earum obcaecati dicta quos eius repudiandae libero qui assumenda! Odio, fuga!";

  return (
    <div>
      <section className="sections-container">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 sections-tabs"
          variant="pills"
        >
          <Tab
            eventKey="home"
            title="Home"
            className="sections-child"
            variant="danger"
          >
            {exampleText}
          </Tab>
          <Tab eventKey="profile" title="Profile" className="sections-child">
            {exampleText}
          </Tab>
          <Tab eventKey="contact" title="Contact" className="sections-child">
            {exampleText}
          </Tab>
        </Tabs>
      </section>
    </div>
  );
};

export default Sections;
