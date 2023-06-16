import React, { useEffect, useState } from "react";
import "./Page.css";
import detailsContent from "../../detailsContent";
import { useParams } from "react-router-dom";

const Page = () => {
  const { id } = useParams();
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const selectedObject = detailsContent.find(
      (obj) => obj.id === parseInt(id)
    );
    setMyData(selectedObject);
  }, [id]);
  return (
    <>
      {myData && (
        <div className="page">
          <h1>{myData.title}</h1>
        </div>
      )}
    </>
  );
};

export default Page;
