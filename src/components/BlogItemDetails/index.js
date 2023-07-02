// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogItem: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogItem: updatedData, isLoading: false})
  }

  render() {
    const {blogItem, isLoading} = this.state
    const {author, avatarUrl, content, id, imageUrl, title} = blogItem

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-item">
            <h1 className="blog-item-title">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p className="author">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-image" />
            <p className="content">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
