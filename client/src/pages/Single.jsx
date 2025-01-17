import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Single = () => {
  const [post, setPost] = useState({
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    userImg:
      "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    username: "John Doe",
    date: "2023-07-20",
    title: "Sample Post",
    desc: "This is a sample post description",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const handleDelete = () => {
    navigate("/");
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted on {post.date}</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                alt=""
              />
            </Link>
            <img
              onClick={handleDelete}
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              alt=""
            />
          </div>
        </div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
      </div>
      <menu cat={post.cat} />
    </div>
  );
};

export default Single;
