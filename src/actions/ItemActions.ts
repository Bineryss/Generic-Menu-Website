import { ListItem } from '../reducer/ShopingListReducer'

export type Action = {
	type:
		| 'ADD_ITEM'
		| 'REMOVE_ITEM'
		| 'DECREAS_ITEM_COUNT'
		| 'INCREAS_ITEM_COUNT'
	payload: ListItem
}

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

export const decreaseOne = (id: number) => ({
	type: 'DECREAS_ITEM_COUNT',
	payload: {
		id: id,
		count: 1,
		price: -1000
	}
})

export const increaseOne = (id: number) => ({
	type: 'INCREAS_ITEM_COUNT',
	payload: {
		id: id,
		count: 1,
		price: -1000
	}
})
