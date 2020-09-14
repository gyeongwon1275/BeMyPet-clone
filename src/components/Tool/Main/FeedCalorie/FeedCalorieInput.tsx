import * as React from 'react'
import InputContainer from '../UIcomponents/InputContainer'

function FeedCalorieInput() {
  return (
    <>
      <InputContainer
        label="조단백질"
        value={''}
        unit="%"
        placeholder="0.00"
        type="number"
        name="percent"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
        }}
      />

      <InputContainer
        label="조지방"
        value={''}
        unit="%"
        placeholder="0.00"
        type="number"
        name="percent"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
        }}
      />

      <InputContainer
        label="조섬유"
        value={''}
        unit="%"
        placeholder="0.00"
        type="number"
        name="percent"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
        }}
      />

      <InputContainer
        label="조회분"
        value={''}
        unit="%"
        placeholder="0.00"
        type="number"
        name="percent"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
        }}
      />

      <InputContainer
        label="칼슘"
        value={''}
        unit="%"
        placeholder="0.00"
        type="number"
        name="percent"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
        }}
      />

      <InputContainer
        label="인"
        value={''}
        unit="%"
        placeholder="0.00"
        type="number"
        name="percent"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
        }}
      />

      <InputContainer
        label="수분"
        value={''}
        unit="%"
        placeholder="0.00"
        type="number"
        name="percent"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
        }}
      />

      <InputContainer
        label="타우린"
        value={''}
        unit="%"
        placeholder="0.00"
        type="number"
        name="percent"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
        }}
      />
    </>
  )
}

export default FeedCalorieInput
