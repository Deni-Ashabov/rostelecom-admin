import '../index.css'

import React from 'react'
import { required, SelectInput } from 'react-admin'

import {
  GOODS_COLLARS,
  GOODS_COLLECTIONS,
  GOODS_COLORS,
  GOODS_COMPOSITIONS,
  GOODS_DECORS,
  GOODS_PRINT,
  GOODS_SEASONS,
  GOODS_SILHOUETTE,
} from '../../../constants/goodsCharacteristics'

export const TShirtsCharacteristics = () => (
  <>
    <div className='block'>
      <SelectInput
        className='block__select'
        choices={GOODS_COLORS}
        source='characteristics.color'
        validate={[required()]}
        defaultValue={GOODS_COLORS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_COLLARS}
        source='characteristics.collar'
        validate={[required()]}
        defaultValue={GOODS_COLLARS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_SILHOUETTE}
        source='characteristics.silhouette'
        validate={[required()]}
        defaultValue={GOODS_SILHOUETTE[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_PRINT}
        source='characteristics.print'
        validate={[required()]}
        defaultValue={GOODS_PRINT[0].name}
        optionValue='name'
      />
    </div>
    <div className='block'>
      <SelectInput
        className='block__select'
        choices={GOODS_DECORS}
        source='characteristics.decor'
        validate={[required()]}
        defaultValue={GOODS_DECORS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_COMPOSITIONS}
        source='characteristics.composition'
        validate={[required()]}
        defaultValue={GOODS_COMPOSITIONS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_SEASONS}
        source='characteristics.season'
        validate={[required()]}
        defaultValue={GOODS_SEASONS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_COLLECTIONS}
        source='characteristics.collection'
        validate={[required()]}
        defaultValue={GOODS_COLLECTIONS[0].name}
        optionValue='name'
      />
    </div>
  </>
)
