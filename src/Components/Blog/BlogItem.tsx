type Blog = {
  name: string;
  article: string;
  preview: string;
  data: string;
  link: string;
  img: string;
}

type Props = {
  blog: Blog;
}

export const BlogItem: React.FC <Props> = ({ blog }) => {
  return (
    <div className="blogItem">
      <div className="container">
      <h1 className="blogItem__title">
        {blog.name}
      </h1>
      <p className="blogItem__data">
        {blog.data}
      </p>
      <img src={blog.img} alt="" className="blogItem__img"/>
      <p className="blogItem__description">
        {blog.article}
      </p>
      </div>
    </div>
  )
}