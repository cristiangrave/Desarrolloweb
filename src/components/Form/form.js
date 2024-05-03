import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./form.scss";
function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name Task </Form.Label>
        <Form.Control type="text" placeholder="Write name for Task" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Descripcion" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Date Limit for Complete</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Button variant="info" type="submit">
        Guardar
      </Button>
    </Form>
  );
}

export default Formulario;
