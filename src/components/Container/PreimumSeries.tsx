import * as React from 'react'
import './PreimumSeries.scss'
const PreimumSeries: React.FC = () => {
  return (
    <>
      <div className="premium-title-icon-wrapper">
        <img
          className="premium-title-icon"
          src="https://images.mypetlife.co.kr/content/uploads/2020/04/09160035/premium.png"
        />
      </div>
      <h3 className="premium-title">
        프리미엄 시리즈 <i className="fas fa-chevron-right" />
      </h3>

      <div className="premium-card-wrapper">
        <div className="premiun-card">
          <img
            className="premiun-thumbnail"
            src="https://images.mypetlife.co.kr/content/uploads/2020/06/19193010/%EA%B0%95%EC%95%84%EC%A7%80-%EA%B5%90%EA%B3%BC%EC%84%9C507x701.png"
          />
          <span>강아지 밥의 교과서</span>
        </div>

        <div className="premiun-card">
          <img
            className="premiun-thumbnail"
            src="https://images.mypetlife.co.kr/content/uploads/2020/08/05140916/%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%A7%91507x701.png"
          />
          <span>고양이를 위한 집 만들기</span>
        </div>

        <div className="premiun-card">
          <img
            className="premiun-thumbnail"
            src="https://images.mypetlife.co.kr/content/uploads/2020/07/08103157/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C-5.png"
          />
          <span>고양이의 기분을 이해하는 법 & ...</span>
        </div>

        <div className="premiun-card">
          <img
            className="premiun-thumbnail"
            src="https://images.mypetlife.co.kr/content/uploads/2020/06/19193106/%EB%82%98%EB%8A%94-%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC%EA%B3%BC-%EC%82%B0%EB%8B%A4-507x701-1.png"
          />
          <span>나는 반려동물과 산다</span>
        </div>

        <div className="premiun-card">
          <img
            className="premiun-thumbnail"
            src="https://images.mypetlife.co.kr/content/uploads/2020/08/05101118/%EB%82%B4-%EB%A7%90%EC%9D%80-%EA%B7%B8%EB%A7%90%EC%9D%B4-%EC%95%84%EB%83%A5507x701.png"
          />
          <span>내 말은 그 말이 아냥!</span>
        </div>
      </div>
    </>
  )
}

export default PreimumSeries
