import { ListItem } from '../reducer/ShopingListReducer'

export type Action = { type: 'ADD_ITEM'; payload: ListItem }

export const addItem = (item: ListItem): Action => ({
	type: 'ADD_ITEM',
    payload: item
})
