import React, { useEffect, useState } from "react";
import "../../pages/simple/Slider.css";
const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "maria ferguson",
    title: "office manager",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "john doe",
    title: "regular guy",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "peter smith",
    title: "product designer",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "susan andersen",
    title: "the boss",
    quote:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
  },
];

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastItem = people.length - 1;
    if (index > lastItem) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastItem);
    }
  }, [index]);

  return (
    <section>
      <ul className="slider">
        {people.map((person, personIndex) => {
          const { image, name, title, quote } = person;
          let position = "slide-right";
          if (personIndex === index) {
            position = "slide-active";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "slide-left";
          }

          return (
            <li key={personIndex} className={"slide " + position}>
              <img src={image} alt={name} />
              <h2>{name}</h2>
              <span className="title">{title}</span>
              <p>{quote}</p>
            </li>
          );
        })}
      </ul>
      <button className="btn btn-prev" onClick={() => setIndex(index - 1)}>
        Prev
      </button>
      <button className="btn btn-next" onClick={() => setIndex(index + 1)}>
        Next
      </button>
    </section>
  );
};

export default Slider;
