import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Stay Updated with Our Latest Blogs</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="May 5, 2024"
          text="Exploring New Frontiers in Technology and Innovation"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="May 6, 2024"
          text="Unleashing the Potential of Creativity in Digital Age"
        />
        <Article
          imgUrl={blog03}
          date="May 7, 2024"
          text="Empowering Businesses with Cutting-Edge Solutions"
        />
        <Article
          imgUrl={blog04}
          date="May 8, 2024"
          text="Transforming Ideas into Reality with Modern Technologies"
        />
        <Article
          imgUrl={blog05}
          date="May 9, 2024"
          text="Innovating for Tomorrow: Trends Shaping the Future"
        />
      </div>
    </div>
  </div>
);

export default Blog;
