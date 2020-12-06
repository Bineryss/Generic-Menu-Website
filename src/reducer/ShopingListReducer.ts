import { Action } from '../actions/ItemActions'
import ListItemDO from './ListItemDO'

export interface ListState {
	listItems: ListItemDO[]
	price: number
}
export interface ListItem {
	id: number
	count: number

	price: number
}

const initalState = {
	listItems: [],
	price: 0
}

export const shopingListReducer = (
	state: ListState = initalState,
	action: Action
) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return addItem(state, action.payload)

		case 'REMOVE_ITEM':
			return removeItem(state, action.payload)

		case 'DECREAS_ITEM_COUNT':
			return decreasSetAmmount(state, action.payload)

		case 'INCREAS_ITEM_COUNT':
			return increaseSetAmmount(state, action.payload)
		default:
			return state
	}
}

const addItem = (state: ListState, payload: ListItem) => {
	let newItemList = state.listItems

	const exists = state.listItems.filter(item => {
		return item.id === payload.id
	})

	if (exists.length === 0) {
		newItemList = [...state.listItems, new ListItemDO(payload)]
	} else {
		newItemList = [
			...state.listItems.map(item => {
				if (item.id === payload.id) {
					item.increaseAmmount(payload.count)
				}
				return item
			})
		]
	}

	return { ...state, listItems: newItemList, price: updatePrice(newItemList) }
}

const removeItem = (state: ListState, payload: ListItem) => {
	const newItemList = state.listItems.filter(item => {
		return item.id !== payload.id
	})

	return {
		...state,
		listItems: newItemList,
		price: updatePrice(newItemList)
	}
}

const decreasSetAmmount = (state: ListState, payload: ListItem) => {
	const newItemList = state.listItems
		.filter(item => {
			console.log(item.id !== payload.id || item.count > 0)
			return item.id !== payload.id || item.count > 0
		})
		.map(item => {
			if (item.id === payload.id) {
				item.deacreaseAmmount(payload.count)
			}
			return item
		})

	return {
		...state,
		listItems: newItemList,
		price: updatePrice(newItemList)
	}
}

const increaseSetAmmount = (state: ListState, payload: ListItem) => {
	const newItemList = state.listItems.map(item => {
		if (item.id === payload.id) {
			item.increaseAmmount(payload.count)
		}
		return item
	})

	return {
		...state,
		listItems: newItemList,
		price: updatePrice(newItemList)
	}
}

const updatePrice = (itemList: ListItemDO[]) => {
	let newPrice = 0
	itemList.forEach(item => {
		newPrice += item.price
	})
	return newPrice
}
