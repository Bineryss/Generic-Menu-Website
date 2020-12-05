import { Action } from "../actions/ItemActions"

export interface ListState {
	items: ListItem[]
	price: number
}

export interface ListItem {
	id: number
	count: number
	price: number
}

const initalState = {
	items: [],
	price: 0
}


export const shopingListReducer = (
	state: ListState = initalState,
	action: Action
) => {
	switch (action.type) {
		case "ADD_ITEM": {
			return {
				...state,
				items: [...state.items, action.payload],
				price: state.price + action.payload.price
			}
		}
		default:
			return state
	}
}
