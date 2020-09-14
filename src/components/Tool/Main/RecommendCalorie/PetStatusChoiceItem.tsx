import * as React from 'react'
import {
  CatStatus,
  DogStatus,
  RecommendCalorieFormProps,
} from './PetStatusUtils'

interface PetStatusChoiceItemProps extends RecommendCalorieFormProps {
  key: number
  status: DogStatus | CatStatus
}

function PetStatusChoiceItem({
  status,
  recommendCalorieInfo,
  onInputRecommendCalorieInfo,
}: PetStatusChoiceItemProps) {
  const handlePetStatus = React.useCallback(
    (status) => () => {
      const statusObject = recommendCalorieInfo
      statusObject.status = status
      statusObject.isStatusOpen = false
      onInputRecommendCalorieInfo(statusObject)
    },
    [recommendCalorieInfo]
  )
  return (
    <div className="choice-item" onClick={handlePetStatus(status)}>
      <p>{status}</p>
    </div>
  )
}

export default PetStatusChoiceItem
