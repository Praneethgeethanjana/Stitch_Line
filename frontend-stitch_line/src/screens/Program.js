import { Button, Form, FormControl, Table, Row, Col } from "react-bootstrap";
import React, { useState } from "react";

const Program = () => {

    const [pid, setPid] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [cid, setCid] = useState("");
    const [des, setDes] = useState("");

    const [searchId, setsearchId] = useState("");
     

    return (
        <div>
        <h5 className="m-4">MANAGE PROGRAM</h5>
        <div className="m-4 d-flex justify-content-end">
          <Form className="d-flex">
            <FormControl  onChange={(value) => {
                setsearchId(value.currentTarget.value);
              }}
            
              type="search"
              placeholder="Search Program"
              className="me-2"
              aria-label="Search"
            />
            <Button  variant="outline-success">Search</Button>
          </Form>
        </div>
        <div className="m-4  ">
          <Form>
            <Row>
              <Col md={3}>
                <Form.Group className="mb-3 w-100">
                  <Form.Label>Program ID</Form.Label>
                  <Form.Control value={pid} onChange={(value) => {
            setPid(value.currentTarget.value);
          }} placeholder="Program ID" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3 w-100">
                  <Form.Label>Program Name</Form.Label>
                  <Form.Control value={name} onChange={(value) => {
            setName(value.currentTarget.value);
          }} placeholder="Program Name" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3 w-100">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="date" value={price} onChange={(value) => {
            setPrice(value.currentTarget.value);
          }} placeholder="Price" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3 w-100">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control type="date" value={qty} onChange={(value) => {
            setQty(value.currentTarget.value);
          }} placeholder="Qty" />
                </Form.Group>
              </Col>
            </Row>
           
           
          </Form>
        </div>
        <div className="m-4">
          <Button  variant="primary">Add New Program</Button>{" "}
          <Button style={{color:'white'}} variant="warning">Update Program</Button>{" "}
          <Button  variant="danger">Remove Program</Button>{" "}
        </div>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>Program ID</th>
              <th>Program Name</th>
              <th>Start Date</th>
              <th>End Date</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Product 1</td>
              <td>C005</td>
              <td>Living Room furniture</td>
             
            </tr>
            <tr>
              <td>001</td>
              <td>Product 1</td>
              <td>C001</td>
              <td>Plastic furniture</td>
            
            </tr>
            <tr>
              <td>001</td>
              <td>Product 1</td>
              <td>C002</td>
              <td>Office furniture</td>
             
            </tr>
            <tr>
              <td>001</td>
              <td>Product 1</td>
              <td>C003</td>
              <td>Dining room furniture</td>
              
            </tr>
          </tbody>
        </Table>
      </div>
    )
}

export default Program
