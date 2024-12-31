import '../index.css'

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
  CLOTH_TYPES,
  GOODS_IS_BESTSELLER,
  GOODS_IS_NEW,
  GOODS_POPULARITY,
  GOODS_SIZES,
} from '../../../constants/goodsTypes'
import { IBaseFormProps } from '../../../types/goods'
import { allowedImageExtensions } from '../../../utils/validation'
import { HoodieCharacteristics } from '../HoodieCharacteristics/HoodieCharacteristics'
import { LongSleevesCharacteristics } from '../LongSleevesCharacteristics/LongSleevesCharacteristics'
import { OuterwearCharacteristics } from '../OuterwearCharacteristics/OuterwearCharacteristics'
import { TShirtsCharacteristics } from '../TShirtsCharacteristics/TShirtsCharacteristics'

export const ClothForm = ({
  type,
  handleSelectType,
  maxImagesCount,
}: IBaseFormProps) => (
  <TabbedForm>
    <TabbedForm.Tab label='Основная информация'>
      <div className='block'>
        <SelectInput
          className='block__select'
          choices={CLOTH_TYPES}
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
          source='sizes'
          choices={GOODS_SIZES}
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
      {type === CLOTH_TYPES[0].name && <TShirtsCharacteristics />}
      {type === CLOTH_TYPES[1].name && <LongSleevesCharacteristics />}
      {type === CLOTH_TYPES[2].name && <HoodieCharacteristics />}
      {type === CLOTH_TYPES[3].name && <OuterwearCharacteristics />}
    </TabbedForm.Tab>
  </TabbedForm>
)
