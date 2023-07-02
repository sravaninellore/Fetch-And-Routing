// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsListData()
  }

  getBlogsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    console.log(data)

    const updatedData = data.map(eachBlogItem => ({
      author: eachBlogItem.author,
      avatarUrl: eachBlogItem.avatar_url,
      id: eachBlogItem.id,
      imageUrl: eachBlogItem.image_url,
      title: eachBlogItem.title,
      topic: eachBlogItem.topic,
    }))

    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blog-list-container">
            {blogList.map(eachBlogItem => (
              <BlogItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default BlogList
