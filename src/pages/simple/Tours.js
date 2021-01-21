import React, { useState, useEffect } from "react";

const Tours = () => {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <ul>
        {tours.map((tour) => {
          <li>
            <Tour tour={tour} />
          </li>;
        })}
      </ul>
    </section>
  );
};

const Tour = (props) => {
  console.log(props);
  const { name, info, image, price } = props.tour;
  return (
    <>
      <img src={image} />
      <h2>{name}</h2>
    </>
  );
};

export default Tours;
