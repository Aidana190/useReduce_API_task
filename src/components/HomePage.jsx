import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContextProvider";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { posts, getPost } = useContext(TodoContext);
  useEffect(() => {
    getPost();
  }, []);
  console.log(posts);
  return (
    <div className="divka">
      {posts.map((elem) => (
        <div className="divka2">
          <Link to={`${elem.id}`} key={elem.id}>
            <h4 className="h4shka">{elem.title}</h4>
            <p className="pishka">{elem.body}</p>
          </Link>
          <Link to={`/details/${elem.id}`}>
            <button className="button">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
