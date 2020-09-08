import * as React from 'react'
import './Age.scss'
const Age: React.FC = () => {
  return (
    <>
      <div className="main-img-container">
        <div className="logo-text-wrapper">
          <h1>
            <span className="age-logo-span">나이계산기</span>
            란?
          </h1>
          <p>
            우리 아이의 나이,
            <br />
            사람나이로는 몇살일까요?
          </p>
        </div>

        <img src="https://tools.mypetlife.co.kr/static/media/ageMain.cd3a6905.png" />
      </div>

      <div className="age-calculator-container">
        <form className="age-wrapper-form">
          <div className="select-animal-wrapper">
            <label className="animal-select-label">반려동물 종류</label>
            <div className="select-image-wrapper">
              <div className="unselect-image-box">
                <img
                  alt="select-dog"
                  src="https://tools.mypetlife.co.kr/static/media/dog_select.f5854006.png"
                />
                <p>강아지</p>
              </div>
              <div className="unselect-image-box">
                <img
                  alt="select-cat"
                  src="https://tools.mypetlife.co.kr/static/media/cat_select.8ed0546a.png"
                />
                <p>고양이</p>
              </div>
            </div>
          </div>
          <div className="select-date-wrapper">
            <label className="animal-select-label">생년월일</label>
            <div className="date-input-wrapper">
              <div className="date-input-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none">
                    <path
                      d="M0 0H1260V1948H0z"
                      fill="transition"
                      transform="translate(-100 -1824)"
                    ></path>
                    <path
                      d="M117.657 1827c.39 0 .713.29.765.667l.007.104v1.298c1.441.13 2.571 1.341 2.571 2.817v10.285c0 1.563-1.266 2.829-2.829 2.829H105.83c-1.563 0-2.829-1.266-2.829-2.829v-10.285c0-1.476 1.13-2.687 2.571-2.817v-1.298c0-.426.346-.771.772-.771.39 0 .713.29.764.667l.007.104v1.286h4.114v-1.286c0-.39.29-.713.667-.764L112 1827c.39 0 .713.29.764.667l.007.104v1.286h4.114v-1.286c0-.39.29-.713.667-.764l.105-.007zm1.8 8.228h-14.915v6.943c0 .71.576 1.286 1.287 1.286h12.342c.71 0 1.286-.575 1.286-1.286v-6.943zm-1.286-4.628H105.83c-.71 0-1.286.576-1.286 1.286l-.001 1.799h14.915v-1.8c0-.71-.575-1.285-1.286-1.285z"
                      fill="#cfcece"
                      transform="translate(-100 -1824)"
                    ></path>
                  </g>
                </svg>
              </div>
              <input
                className="date-input"
                placeholder="0000.00.00"
                readOnly={true}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Age
