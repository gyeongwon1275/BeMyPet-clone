import * as React from 'react'
import PostItem from './PostItem'
import './PostList.scss'

/* 
안되는것

CSS 문제 
border-radius 안됨 
=> 요소를 감싸고 있는 div 의 border 를 설정한다고 해서 
내부 요소의 border 까지 설정되는 게 아님 
img 에 왼쪽 상단, 오른쪽 상단에만 border-radius 를 설정 
사진 크기가 안맞음 

*/
interface Posts {
  id: number
  title: string
  src: string
}

interface PostMeta {
  category: string
  morePost: string
  posts: Posts[]
}
// 🐶 강아지
const PostList: React.FC<PostMeta> = ({ category, morePost, posts }) => {
  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="post-meta">
          <span className="post-category">{category}</span>

          <span className="more-post">
            {morePost}
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="post-card-wrapper">
          {posts.map((data) => (
            <PostItem title={data.title} img={data.src} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostList
