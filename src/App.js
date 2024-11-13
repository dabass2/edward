import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import ImageLinks from "./images.js";

function App() {
  const [edward_image, change_image] = useState("edward_king.jpg");
  const [loading, change_loading] = useState(false);

  function change_edward_image() {
    change_loading(true);
    change_image(ImageLinks[Math.floor(Math.random() * ImageLinks.length)]);
    setTimeout(() => {
      change_loading(false);
    }, 200);
  }

  if (loading) {
    return (
      <div>
        <Spinner animation="border" role="status" variant="primary"></Spinner>
      </div>
    );
  } else {
    return (
      <div id="parent" className="App">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`./images/edward/${edward_image}`} />
          <Card.Body>
            <Card.Title>Edward the Cat</Card.Title>
            <Card.Text>
              <strong>Edward</strong> was a cat and he liked to{" "}
              <small>sit</small> places, not do <u>much</u>, and{" "}
              <code>eat</code>
            </Card.Text>
            <Button variant="primary" onClick={change_edward_image}>
              Edward
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
