import * as React from 'react'
import './Age.scss'
import AgeFormContainer from './AgeFormContainer'
import AgeResult from './AgeResult'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../modules'
function Age() {
  const { type, result, age } = useSelector(
    (state: RootState) => state.calculator.age
  )

  /* 
  age 에서 ageresult 로 age 를 보내주면 됨 
  ageform 에서는 상태변경 
   */
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
      <AgeFormContainer />
      {result ? (
        <AgeResult age={age} animal={type === 'dog' ? '강아지' : '고양이'} />
      ) : (
        <></>
      )}
    </>
  )
}

export default Age
