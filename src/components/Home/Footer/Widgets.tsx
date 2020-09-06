import * as React from 'react'
import './Widgets.scss'
const Widgets: React.FC = () => {
  return (
    <div className="widget-container">
      <div className="widget-wrapper">
        <h4 className="widget-text">더보기</h4>
        <ul className="widget-list">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://bemypet.kr"
            >
              비마이펫 소개
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://creators.mypetlife.co.kr/"
            >
              비마이펫 크리에이터즈
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tools.mypetlife.co.kr/"
            >
              비마이펫 툴즈
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mypetlife.co.kr/cbh/"
            >
              비마이펫 컴백홈
            </a>
          </li>
        </ul>
      </div>

      <div className="widget-wrapper">
        <h4 className="widget-text">함께해요</h4>
        <ul className="widget-list">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mypetlife.co.kr/writer-intro/"
            >
              편집자/작가 소개
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://bemypet.kr/business/"
            >
              제휴 문의
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mypetlife.co.kr/apply-writer/"
            >
              작가 지원
            </a>
          </li>
        </ul>
      </div>

      <div className="widget-wrapper">
        <h4 className="widget-text">자료 및 도구</h4>
        <ul className="widget-list">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tools.mypetlife.co.kr/recommend-calorie"
            >
              권장 칼로리 계산기
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tools.mypetlife.co.kr/food-calorie"
            >
              사료 열량 계산기
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tools.mypetlife.co.kr/"
            >
              더 보기
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Widgets
