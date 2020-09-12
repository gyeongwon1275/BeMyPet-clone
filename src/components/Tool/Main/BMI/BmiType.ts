import { BmiState } from '../../../../modules/calculator'

export interface BmiFormProps {
  animalBmiInfo: BmiState
  onInputBmiInfo: (animalBmiObject: BmiState) => void
}
