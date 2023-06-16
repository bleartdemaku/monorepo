import React from "react";

import "./Home.css";

import Card from "../../components/card/Card";
import detailsContent from "../../detailsContent";
import Consulate from "../../components/consulate/Consulate";

const Home = () => {
  return (
    <>
      <div className="container">
        {detailsContent.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <Consulate />
    </>
  );
};

export default Home;
