import React from 'react'
import { Edit } from 'react-admin'

import { CLOTH_SOURCE_NAME } from '../../../constants/sourceNames'
import { useGoodsEdition } from '../../../hooks/useGoodsEdition'
import { EditTopToolbar } from '../../elements/EditTopToolbar/EditTopToolbar'
import { ClothForm } from '../ClothForm/ClothForm'

export const ClothEdit = () => {
  const {
    type,
    handleSelectType,
    maxImagesCount,
    handleClone,
    cloneProductSpinner,
  } = useGoodsEdition(CLOTH_SOURCE_NAME)

  return (
    <Edit
      actions={
        <EditTopToolbar
          handleClone={handleClone}
          spinner={cloneProductSpinner}
        />
      }
    >
      <ClothForm
        type={type}
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Edit>
  )
}
