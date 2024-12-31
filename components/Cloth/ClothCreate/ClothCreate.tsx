import { Create } from 'react-admin'

import { CLOTH_TYPES } from '../../../constants/goodsTypes'
import { useGoodsCreation } from '../../../hooks/useGoodsCreation'
import { ClothForm } from '../ClothForm/ClothForm'

export const ClothCreate = () => {
  const { type, handleSelectType, maxImagesCount } =
    useGoodsCreation(CLOTH_TYPES)

  return (
    <Create>
      <ClothForm
        type={type}
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Create>
  )
}
