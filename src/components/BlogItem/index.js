// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = blogItemDetails

  return (
    <Link to={`blogs/${id}`} className="blog-item-link">
      <li className="blog-item-container">
        <img src={imageUrl} alt={`blogImage${id}`} className="image" />
        <div>
          <p className="topic">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={`avatarUrl${id}`} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
