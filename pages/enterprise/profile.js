import React from "react";
import { Col, Form, FormGroup, Label, FormText } from 'reactstrap';
import Link from 'next/link'
import { Button } from "reactstrap";
import Data from "variables/variable.js";
import axios from "axios";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Modal,
  UncontrolledTooltip,
} from "reactstrap";
// layout for this page
import Enterprise from "layouts/Enterprise.js";
// core components
import Header from "components/Headers/EnterpriseHeader.js";


const Profile = ({sam}) => {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);

  const [orgData, setOrgData] = React.useState(undefined);
  const loadOrgData = async () => {
    // setTimeout(() => {
      setOrgData(JSON.parse(localStorage.getItem("vh-org")));
    // }, 5000);
  }
  React.useEffect(loadOrgData, []);

  const updateOrg = async (event) => {
    event.preventDefault();
    console.log(event);
    const postData = {
      ...(event.target[0].value) && {NameofOrg: event.target[0].value},
      //...(event.target[1].value) && {phoneNumber: event.target[1].value},
      ...(event.target[2].value) && {Email: event.target[2].value},
    }
    const postResponse = await axios.patch(`http://3.6.32.110:3001/data/enterprise/${orgData.NameofOrg}`, postData);
    console.log(postResponse.data);
    alert("Please login again to see updated profile");
    await loadOrgData();
  }

  return (
    <>
      <Header />
      {/* Page content */}

      <Form role="form" onSubmit={updateOrg}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label >Name</Label>
                <Input type="text" name="name" id="nameOfOrganization" placeholder={orgData ? orgData.NameofOrg:"NameofOrg"}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label >Type</Label>
                <Input type="text" name="type" id="typeOfOrganization" placeholder={orgData ? orgData.orgType:"Type"} />
              </FormGroup>
            </Col>
          <Col md={6}>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input type="text" name="address" id="addressOfOrganization" placeholder={orgData ? orgData.Email:"address"}/>
          </FormGroup>
          </Col>
          </Row>
          <Button
            color="warning"
            type="submit"
            //onClick={updateOrg}
          >
            Update Details
          </Button>
        </Form>
    </>
  );
}

Profile.layout = Enterprise;

export default Profile;
