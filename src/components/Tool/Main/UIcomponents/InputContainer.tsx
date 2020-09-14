import * as React from 'react'

interface InputContainerProps {
  label: string
  value: string | number
  unit: string
  placeholder: string
  type: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function InputContainer({
  label,
  value,
  unit,
  placeholder,
  type,
  name,
  onChange,
}: InputContainerProps) {
  return (
    <div className="input-container">
      <label className="animal-select-label">{label}</label>
      <div className="input-wrapper">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          step={0.01}
          value={value}
          onChange={onChange}
        />

        <div className="unit-wrapper">{unit}</div>
      </div>
    </div>
  )
}

export default InputContainer
