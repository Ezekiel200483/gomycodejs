import { Container, Navbar, Nav, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">My App</Navbar.Brand>

        <Nav className="nav-main">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar>

      <Container className="container-margin">
        <h1>GOMYC<span className="red-text">O</span>DE</h1>
        <div className="card-container">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>This is the first card's content.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is the second card's content.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is the third card's content.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default App;
