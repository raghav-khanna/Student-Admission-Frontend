// List Group Bootstrap
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideTable.css";

const SideTable = () => {
  return (
    <ListGroup className="listgrp" defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action href="#link3">
        Link 3
      </ListGroup.Item>
      <ListGroup.Item action href="#link4">
        Link 4
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SideTable;
