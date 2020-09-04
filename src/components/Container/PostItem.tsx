import * as React from 'react'
import './PostItem.scss'
/* 

사용자는 제네릭을 통해 여러 타입의 컴포넌트나 자신만의 타입을 사용할 수 있습니다.

*/

interface Props {
  title: string
  img: string
}
const PostItem: React.FC<Props> = ({ title, img }) => {
  return (
    <div className="post-card">
      <div className="post-thumbnail">
        <img src={img} />
      </div>
      <div className="post-title">{title}</div>
    </div>
  )
}

export default PostItem
