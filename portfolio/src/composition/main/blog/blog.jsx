import React from "react";
import CardList from "./blogmore";
import "./blog.css"

const img = [
    require("../.././images/blog/blog1.svg").default,
    require("../.././images/blog/blog2.svg").default,
    require("../.././images/blog/blog3.svg").default,
    require("../.././images/blog/blog4.svg").default,
    require("../.././images/blog/blog5.svg").default,
  ];
export const Blog = () => {
  return (
    <div className="contoo">
    <div className="conta">
      <CardList
        card1={{
          title: "There is more than you know",
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
          image: img[0],
        }}
        card2={{
          title: "There is more than you know",
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
          image: img[1],
        }}
        card3={{
          title: "There is more than you know",
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
          image: img[2],
        }}
        card4={{
            title: "There is more than you know",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            image: img[3],
          }}
          card5={{
            title: "There is more than you know",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            image: img[4],
          }}
      />
    </div>
    </div>
  );
};

