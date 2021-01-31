import React, { useEffect, useState } from "react";

const Tabs = () => {
  const url = "https://course-api.com/react-tabs-project";
  const [info, setInfo] = useState("");
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setInfo(JSON.stringify(data));
  };

  useEffect(() => {
    console.log("render is ready");
    getData();
  }, []);

  return <div>{info}</div>;
};

export default Tabs;
