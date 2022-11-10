import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";

const Sections = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        {/* <Sonnet /> */}
        <h1>YO MAMA SO FAT</h1>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {/* <Sonnet /> */}
        <h2>SHE FALLS</h2>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        {/* <Sonnet /> */}
        <h3> FROM BOTH SIDES OF BED</h3>
      </Tab>
    </Tabs>
  );
};

export default Sections;
