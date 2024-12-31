import React from 'react'
import { Create } from 'react-admin'

import { OFFICE_TYPES } from '../../../constants/goodsTypes'
import { useGoodsCreation } from '../../../hooks/useGoodsCreation'
import { OfficeForm } from '../OfficeForm/OfficeForm'

export const OfficeCreate = () => {
  const { type, handleSelectType, maxImagesCount } =
    useGoodsCreation(OFFICE_TYPES)

  return (
    <Create>
      <OfficeForm
        type={type}
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Create>
  )
}
