import * as React from 'react'
import './Container.scss'
import PostList from './PostList'
import PreimumSeries from './PreimumSeries'
import {
  dummyDogDatas,
  dummyCatDatas,
  dogStress,
  dogTraining,
  catDailyCare,
  catMood,
} from './dummydata'

const Container: React.FC = () => {
  return (
    <div className="main-container">
      <h3 className="popular-title">인기 콘텐츠</h3>
      <PostList category="🐶 강아지" morePost="더보기 " posts={dummyDogDatas} />
      <PostList category="🐱 고양이" morePost="더보기 " posts={dummyCatDatas} />
      <PreimumSeries />
      <h3 className="editor-title">에디터 PICK</h3>
      <PostList
        category="#강아지 스트레스"
        morePost="키워드로 검색 "
        posts={dogStress}
      />
      <PostList
        category="#강아지 훈련"
        morePost="키워드로 검색 "
        posts={dogTraining}
      />
      <PostList
        category="#고양이 데일리케어"
        morePost="키워드로 검색 "
        posts={catDailyCare}
      />
      <PostList
        category="#고양이 기분"
        morePost="키워드로 검색 "
        posts={catMood}
      />
    </div>
  )
}

export default Container
