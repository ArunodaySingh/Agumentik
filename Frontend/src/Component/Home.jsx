import { Container, Row, Col, Button } from "react-bootstrap";
import img from "../assets/1.jpg";

function TextAndImageLayout() {
  return (
    <Container>
      <Row style={{ marginTop: "2%", backgroundColor: "#F7F7FA" }}>
        <Col style={{ marginTop: "7%", marginLeft: "2%" }} md={7}>
          <h2 className="mb-2" style={{ textAlign: "left" }}>
            Find <span style={{ color: "#6246f9" }}>Perfect</span> Place <br />{" "}
            To Live Life.{" "}
          </h2>
          <div
            className="d-flex flex-wrap"
            style={{ marginRight: "25px", marginTop: "5%" }}
          >
            <Button
              variant="primary"
              className="mb-3 mb-md-0"
              style={{
                borderRadius: "25px",
                marginRight: "15px",
                padding: "5px 25px",
              }}
            >
              Buy
            </Button>
            <Button
              variant="primary"
              className="mb-3 mb-md-0"
              style={{
                borderRadius: "25px",
                marginRight: "15px",
                padding: "5px 25px",
              }}
            >
              Sell
            </Button>
            <Button
              variant="primary"
              className="mb-3 mb-md-0"
              style={{
                borderRadius: "25px",
                marginRight: "15px",
                padding: "5px 25px",
              }}
            >
              Rent
            </Button>
          </div>
          <div style={{ marginTop: "5%" }} className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="city">City</label>
              <select
                style={{ border: "none", backgroundColor: "#F7F7FA" }}
                className="form-select"
                id="city"
              >
                <option default value="">
                  India
                </option>
                <option value="city2">City 2</option>
                {/* Add more cities here */}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="propertyType">Property Type</label>
              <select
                style={{ border: "none", backgroundColor: "#F7F7FA" }}
                className="form-select"
                id="propertyType"
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                {/* Add more property types here */}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="priceRange">Price Range</label>
              <select
                style={{ border: "none", backgroundColor: "#F7F7FA" }}
                className="form-select"
                id="priceRange"
              >
                <option value="0-500">$0 - $500</option>
                <option value="500-1000">$500 - $1000</option>
                {/* Add more price ranges here */}
              </select>
            </div>
          </div>
        </Col>
        <Col style={{ marginLeft: "6%" }} md={4}>
          <img
            src={img}
            alt="Sample"
            style={{ width: "22rem", height: "28rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TextAndImageLayout;
