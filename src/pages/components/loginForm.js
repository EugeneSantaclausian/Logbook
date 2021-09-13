import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginForm() {
  return (
    <div
      className="App d-flex justify-content-center"
      style={{
        height: "100%",
        position: "absolute",
        left: "0px",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <header className="App-header">
        <h1 className="display-5 text-white text-center">Log In</h1>
        <p className="text-white fs-6 mb-4 text-muted text-center">
          Log In As A Basic User
        </p>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}
