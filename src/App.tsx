import { Admin, defaultTheme, Resource } from 'react-admin'

import { AccessoryCreate } from '../components/Accessory/AccessoryCreate/AccessoryCreate'
import { AccessoryEdit } from '../components/Accessory/AccessoryEdit/AccessoryEdit'
import { ClothCreate } from '../components/Cloth/ClothCreate/ClothCreate'
import { ClothEdit } from '../components/Cloth/ClothEdit/ClothEdit'
import { GoodsList } from '../components/GoodsList/GoodsList'
import { OfficeCreate } from '../components/Office/OfficeCreate/OfficeCreate'
import { OfficeEdit } from '../components/Office/OfficeEdit/OfficeEdit'
import { ProductShow } from '../components/ProductShow/ProductShow'
import { SouvenirsCreate } from '../components/Souvenirs/SouvenirsCreate/SouvenirsCreate'
import { SouvenirsEdit } from '../components/Souvenirs/SouvenirsEdit/SouvenirsEdit'
import { UsersCreate } from '../components/Users/UsersCreate/UsersCreate'
import { UsersEdit } from '../components/Users/UsersEdit/UsersEdit'
import { UsersList } from '../components/Users/UsersList/UsersList'
import { UsersShow } from '../components/Users/UsersShow/UsersShow'
import {
  ACCESSORIES_SOURCE_NAME,
  CLOTH_SOURCE_NAME,
  OFFICE_SOURCE_NAME,
  SOUVENIRS_SOURCE_NAME,
  USERS_SOURCE_NAME,
} from '../constants/sourceNames'
import { authProvider } from './authProvider'
import dataProvider from './dataProvider'

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    theme={{
      ...defaultTheme,
      palette: {
        mode: 'dark',
      },
    }}
  >
    <Resource
      name={USERS_SOURCE_NAME}
      list={UsersList}
      show={UsersShow}
      create={UsersCreate}
      edit={UsersEdit}
    />

    <Resource
      name={CLOTH_SOURCE_NAME}
      list={GoodsList}
      create={ClothCreate}
      show={ProductShow}
      edit={ClothEdit}
    />

    <Resource
      name={ACCESSORIES_SOURCE_NAME}
      list={GoodsList}
      create={AccessoryCreate}
      show={ProductShow}
      edit={AccessoryEdit}
    />

    <Resource
      name={OFFICE_SOURCE_NAME}
      list={GoodsList}
      create={OfficeCreate}
      show={ProductShow}
      edit={OfficeEdit}
    />

    <Resource
      name={SOUVENIRS_SOURCE_NAME}
      list={GoodsList}
      create={SouvenirsCreate}
      show={ProductShow}
      edit={SouvenirsEdit}
    />
  </Admin>
)
