import React, { useState, useEffect } from "react";
import "../simple/Tour.css";

const Tours = () => {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </main>
  );
};

const Tour = ({ name, info, image, price }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

const Loading = () => {
  return <h2>Loading...</h2>;
};

export default Tours;
