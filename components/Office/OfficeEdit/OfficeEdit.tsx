import React from 'react'
import { Edit } from 'react-admin'

import { OFFICE_SOURCE_NAME } from '../../../constants/sourceNames'
import { useGoodsEdition } from '../../../hooks/useGoodsEdition'
import { EditTopToolbar } from '../../elements/EditTopToolbar/EditTopToolbar'
import { OfficeForm } from '../OfficeForm/OfficeForm'

export const OfficeEdit = () => {
  const {
    type,
    handleSelectType,
    maxImagesCount,
    handleClone,
    cloneProductSpinner,
  } = useGoodsEdition(OFFICE_SOURCE_NAME)

  return (
    <Edit
      actions={
        <EditTopToolbar
          handleClone={handleClone}
          spinner={cloneProductSpinner}
        />
      }
    >
      <OfficeForm
        type={type}
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Edit>
  )
}
