import { Route, Routes } from "react-router-dom";
import { BlogItem } from "./BlogItem";
import { BlogArticle } from './BlogArticle';
import { blogArr } from "../../data";

export const Blog = () => {

  return (
    <Routes>
      <Route 
        path="" 
        element={
        <section className="blog">
          <div className="container">
            <h1 className="blog__title">
              Блог
            </h1>
            <div className="blog__block">
            {blogArr.map(blog => (
              <BlogArticle blog={blog} key={blog.article} />
            ))}
            </div>
          </div>
        </section>
        }
      >
      </Route>
      {blogArr.map(blog => (
        <Route 
          path={blog.link}
          key={blog.name}
          element={
            <BlogItem blog={blog} />
          }
        >
        </Route>
      ))}
    </Routes>
  )
}

