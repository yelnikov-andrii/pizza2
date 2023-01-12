import React from "react";
import { Link } from "react-router-dom";

export const BlogArticle: React.FC <any> = ({blog}) => {
  return (
    <div className="blogArticle" key={blog.name}>
      <img src={blog.img} alt="" className="blogArticle__img"/>
      <p className="blogArticle__date">
        {blog.data}
      </p>
      <p className="blogArticle__name">
        {blog.name}
      </p>
      <p className="blogArticle__preview">
        {blog.preview}
      </p>
      <Link 
        to={blog.link} 
        className="blogArticle__link"
      >
        Читати далі
      </Link>
    </div>
  )
}