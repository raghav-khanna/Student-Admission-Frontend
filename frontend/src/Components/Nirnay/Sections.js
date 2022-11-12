import React, { useState } from "react"
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sections.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




const Sections = () => {
  const [key, setKey] = useState('home');
  return (
    <div>
      <Nav variant="flat" defaultActiveKey="/home" className="flex-container">
        <Nav.Item className="butn" >
          <Nav.Link eventkey="/home" className="words">UG Programmes</Nav.Link>
        </Nav.Item>
        <Nav.Item className="butn">
          <Nav.Link eventKey="link-1" className="words">PG Programmes</Nav.Link>
        </Nav.Item>
        <Nav.Item className="butn">
          <Nav.Link eventKey="disabled" className="words">Doctoral Programmes</Nav.Link>
        </Nav.Item>
      </Nav >
    </div >

  );
}

export default Sections;


<Nav variant="tabs" defaultActiveKey="/home" className="flex-container">
  <Nav.Item className="butn" >
    <Nav.Link eventkey="/home" className="words">UG Programmes</Nav.Link>
    <h1> first tab</h1>
  </Nav.Item>
  <Nav.Item className="butn">
    <Nav.Link eventKey="link-1" className="words">PG Programmes</Nav.Link>
    <h1> second tab</h1>
  </Nav.Item>
  <Nav.Item className="butn">
    <Nav.Link eventKey="disabled" className="words">Doctoral Programmes</Nav.Link>
    <h1> third tab</h1>
  </Nav.Item>
</Nav >





// {/* <Tabs
// id="controlled-tab-example"
// activeKey={key}
// onSelect={(k) => setKey(k)}
// variant="flat"
// className="flex-container"
// >
// <Tab eventKey="home" title="UG Programmes" className="butn">
//   <h1>Yo MAMA</h1>
// </Tab>
// <Tab eventKey="profile" title="PG Programmes" className="butn">
//   <h1>So FAT</h1>
// </Tab>
// <Tab eventKey="contact" title="Doctoral Programmes" className="butn">
//   <h1>She Falls from both side of the bed</h1>
// </Tab>
// </Tabs> */}