import React, { useEffect, useState } from "react";

const Tabs = () => {
  const url = "https://course-api.com/react-tabs-project";
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setInfo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("render is ready");
    getData();
  }, []);

  if (isLoading) {
    return <section> Loading Content... </section>;
  }
  const { title, dates, duties, company } = info[value];
  return (
    <section>
      <article>
        <h1>{title}</h1>
        <h3>{dates}</h3>
        <ul>
          {duties.map((dutie, i) => {
            return (
              <li key={i}>
                <p>{dutie}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default Tabs;
