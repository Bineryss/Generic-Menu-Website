import { ListItem } from '../reducer/ShopingListReducer'

export type Action = { type: 'ADD_ITEM' | 'REMOVE_ITEM'; payload: ListItem }

export const addItem = (item: ListItem): Action => ({
	type: 'ADD_ITEM',
	payload: item
})

export const removeItem = (id: number): Action => ({
	type: 'REMOVE_ITEM',
	payload: {
		id: id,
		count: -1000,
		price: -1000
	}
})
