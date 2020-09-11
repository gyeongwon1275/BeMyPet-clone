import { combineReducers } from 'redux'
import AgeCalculator from './AgeCalculator/'

const rootReducer = combineReducers({ AgeCalculator })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
