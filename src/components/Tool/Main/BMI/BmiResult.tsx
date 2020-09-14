import * as React from 'react'
import './BmiResult.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../modules'
function BmiResult() {
  const { type, bmi, result } = useSelector(
    (state: RootState) => state.calculator.bmi
  )

  const getBmiResultText = React.useCallback(
    (index) => {
      const bmiResult: string[] = [
        '훨씬 더 많이 밥을 줘도 괜찮아요',
        '조금 더 많이 밥을 줘도 괜찮아요.',
        '적정 체중이네요. 아주 좋아요!',
        '살짝 비만이 걱정됩니다. 관리해주세요.',
        `비만이 걱정됩니다. 비마이펫 라이프에서 "${type} 비만"을 검색해보세요.`,
      ]

      return bmiResult[index - 1]
    },
    [type, bmi, result]
  )
  /* 
  TODO: 
  결과를 가지고 있다가 bmi props 로 받아서 확인하고 내용바꿔서 출력
  */
  return (
    <>
      {result ? (
        <div className="bmi-result-container">
          <h2>
            <span>비만도 계산 </span>
            결과
          </h2>
          <div className="bmi-result-wrapper">
            <h4>우리 아이는</h4>
            <h2>{getBmiResultText(bmi)}</h2>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default BmiResult
