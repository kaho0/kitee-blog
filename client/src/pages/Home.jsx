import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1024px]">
        <div className="mt-[50px] flex flex-col gap-[150px]">
          {[
            {
              id: 1,
              title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
              img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              id: 2,
              title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
              img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              id: 3,
              title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
              img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              id: 4,
              title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
              img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          ].map((post) => (
            <div
              className="flex gap-[100px] even:flex-row-reverse"
              key={post.id}
            >
              <div className="flex-2 relative">
                <div className="after:content-[''] after:w-full after:h-full after:bg-[#b9e7e7] after:absolute after:top-[20px] after:-left-[20px] after:-z-[1]">
                  <img
                    src={post.img}
                    alt=""
                    className="w-full max-h-[400px] object-cover"
                  />
                </div>
              </div>
              <div className="flex-3 flex flex-col justify-between">
                <Link
                  className="no-underline text-inherit"
                  to={`/post/${post.id}`}
                >
                  <h1 className="text-[48px]">{post.title}</h1>
                </Link>
                <p className="text-[18px]">{post.desc}</p>
                <Link to={`/post/${post.id}`}>
                  <button className="w-max px-5 py-2.5 border-none cursor-pointer bg-white border border-teal-500 text-teal-500 hover:border-white hover:bg-[#b9e7e7] hover:text-black">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
