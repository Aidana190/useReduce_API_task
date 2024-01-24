import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../context/TodoContextProvider";

const Details = () => {
  const { id } = useParams();
  const { details, getDetails } = useContext(TodoContext);
  useEffect(() => {
    getDetails(id);
  }, []);
  console.log(details);
  return (
    <div className="details">
      <h2>{details.name}</h2>
      <h3>{details.username}</h3>
      <h3>{details.email}</h3>
      <h5>{details.phone}</h5>
      <h5>{details.website}</h5>
    </div>
  );
};

export default Details;
