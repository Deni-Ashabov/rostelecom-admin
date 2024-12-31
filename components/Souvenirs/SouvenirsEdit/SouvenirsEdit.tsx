import { Edit } from 'react-admin'

import { SOUVENIRS_SOURCE_NAME } from '../../../constants/sourceNames'
import { useGoodsEdition } from '../../../hooks/useGoodsEdition'
import { EditTopToolbar } from '../../elements/EditTopToolbar/EditTopToolbar'
import { SouvenirsForm } from '../SouvenirsForm/SouvenirsForm'

export const SouvenirsEdit = () => {
  const { handleSelectType, maxImagesCount, handleClone, cloneProductSpinner } =
    useGoodsEdition(SOUVENIRS_SOURCE_NAME)

  return (
    <Edit
      actions={
        <EditTopToolbar
          handleClone={handleClone}
          spinner={cloneProductSpinner}
        />
      }
    >
      <SouvenirsForm
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Edit>
  )
}
