import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./item.scss";
function Item() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Titulo</Card.Title>
        <Card.Text className="fw-bold">Descripcion de la card</Card.Text>
        <Card.Text>Descripcion del pruducto</Card.Text>
        <Card.Text className="fw-bold">Due Date</Card.Text>
        <Card.Text>fecha : 3/5/2024</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="outline-info">Editar</Button>
        <Button variant="outline-danger">Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
