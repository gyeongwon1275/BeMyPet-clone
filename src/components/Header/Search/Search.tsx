import * as React from 'react'
import './Search.scss'
const Search: React.FC = () => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <div className="description-wrapper">
          <h4>반려동물 지식정보 채널</h4>
          <h3>비마이펫 라이프</h3>
        </div>

        <div className="search-area-wrapper">
          <form action="" className="search-form">
            <div className="search-window">
              <input
                className="input-text"
                type="text"
                title="검색어 입력"
                maxLength={255}
                placeholder="궁금한 사항을 검색해주세요"
              />
              <button className="search_btn">검색</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
