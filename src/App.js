import "./App.scss";
import { Row, Col, Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Row className="mx-0">
        <Button as={Col} variant="primary">
          Button #1
        </Button>
        <Button as={Col} variant="secondary" className="mx-2">
          Button #2
        </Button>
        <Button as={Col} variant="success">
          Button #3
        </Button>
      </Row>
    </div>
  );
}

export default App;