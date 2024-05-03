import "./App.scss";
import Item from "./components/Item/item";
import Form from "./components/Form/form";
import Menu from "./components/Menu/menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddingMobileButton from "./components/addingMobileButton/addingMobileButton";
function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col
            xs={0}
            md={0}
            className="d-none d-sm-block d-sm-none d-md-block "
          >
            <Form />
          </Col>
          <Col xs={0} sm={0}>
            <Row className="d-md-none">
              <div className="bg-transparent overlapping-div ">
                <AddingMobileButton className="float" />
              </div>
            </Row>
            <Row>
              <div className="scrolling">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
