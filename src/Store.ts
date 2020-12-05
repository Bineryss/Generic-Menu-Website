import { shopingListReducer } from './reducer/ShopingListReducer'
import { createStore } from 'redux'

export const store = createStore(shopingListReducer)
