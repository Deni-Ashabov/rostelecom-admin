import '../index.css'

import React from 'react'
import {
  CheckboxGroupInput,
  ImageField,
  ImageInput,
  NumberInput,
  required,
  SelectInput,
  TabbedForm,
  TextInput,
} from 'react-admin'

import {
  GOODS_IS_BESTSELLER,
  GOODS_IS_NEW,
  GOODS_POPULARITY,
  OFFICE_TYPES,
} from '../../../constants/goodsTypes'
import { IBaseFormProps } from '../../../types/goods'
import { allowedImageExtensions } from '../../../utils/validation'
import NotebookCharacteristics from '../NotebookCharacteristics/NotebookCharacteristics'
import PenCharacteristics from '../PenCharacteristics/PenCharacteristics'

export const OfficeForm = ({
  type,
  handleSelectType,
  maxImagesCount,
}: IBaseFormProps) => (
  <TabbedForm>
    <TabbedForm.Tab label='Основная информация'>
      <div className='block'>
        <SelectInput
          className='block__select'
          choices={OFFICE_TYPES}
          source='type'
          validate={[required()]}
          onChange={handleSelectType}
          optionValue='name'
        />
        <NumberInput
          min={0}
          className='block__select'
          source='price'
          validate={[required()]}
        />
        <TextInput
          className='block__select'
          source='name'
          validate={[required()]}
          resettable
        />
        <NumberInput
          min={0}
          className='block__select'
          source='inStock'
          validate={[required()]}
        />
        <TextInput
          source='description'
          validate={[required()]}
          multiline
          resettable
        />
      </div>
      <div className='block-right'>
        <SelectInput
          className='block__select'
          choices={GOODS_POPULARITY}
          source='popularity'
          validate={[required()]}
          optionValue='name'
        />
        <CheckboxGroupInput
          source='isNew'
          choices={GOODS_IS_NEW}
          optionValue='name'
        />
        <CheckboxGroupInput
          source='isBestseller'
          choices={GOODS_IS_BESTSELLER}
          optionValue='name'
        />
      </div>
      <ImageInput
        maxSize={3000000}
        label='Картинки товара'
        source='images'
        validate={[allowedImageExtensions(), maxImagesCount(), required()]}
        multiple
      >
        <>
          <ImageField source='url' title='desc' />
          <ImageField source='src' title='title' />
        </>
      </ImageInput>
    </TabbedForm.Tab>
    <TabbedForm.Tab label='Характеристики'>
      {type === OFFICE_TYPES[0].name && <NotebookCharacteristics />}
      {type === OFFICE_TYPES[1].name && <PenCharacteristics />}
    </TabbedForm.Tab>
  </TabbedForm>
)
