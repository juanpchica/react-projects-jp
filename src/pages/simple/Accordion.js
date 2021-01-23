import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const data = [
  {
    id: 1,
    title: "Do I have to allow the use of cookies?",
    info:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    title: "How do I change my My Page password?",
    info:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "What is BankID?",
    info:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    title: "Whose birth number can I use?",
    info:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    title: "When do I recieve a password ordered by letter?",
    info:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
  },
];

const Accordion = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <Container>
      <Row>
        <Col xs lg="4">
          <h2>Accordion Example application</h2>
        </Col>
        <Col xs lg="8">
          <AccordionList questions={questions} />
        </Col>
      </Row>
    </Container>
  );
};

const AccordionList = (props) => {
  const questions = props.questions;
  return (
    <section>
      <ul className="accordion">
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </ul>
    </section>
  );
};

const Question = ({ id, title, info }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{info}</p>
    </li>
  );
};

export default Accordion;
