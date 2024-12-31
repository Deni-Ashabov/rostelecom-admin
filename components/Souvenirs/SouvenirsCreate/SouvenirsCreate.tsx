import React from 'react'
import { Create } from 'react-admin'

import { SOUVENIRS_TYPES } from '../../../constants/goodsTypes'
import { useGoodsCreation } from '../../../hooks/useGoodsCreation'
import { SouvenirsForm } from '../SouvenirsForm/SouvenirsForm'

export const SouvenirsCreate = () => {
  const { handleSelectType, maxImagesCount } = useGoodsCreation(SOUVENIRS_TYPES)

  return (
    <Create>
      <SouvenirsForm
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Create>
  )
}
