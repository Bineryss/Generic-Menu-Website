import { MenuItems } from '../database/CardData'
import { ListItem } from './ShopingListReducer'

export default class ListItemDO {
	private pItem: ListItem

	constructor(item: ListItem) {
		this.pItem = item
	}

	get id() {
		return this.pItem.id
	}

	get price() {
		return this.pItem.price
	}

	get item(): ListItem {
		return this.pItem
	}

	public increaseAmmount(count: number) {
		const newCount = this.pItem.count + count
		this.updateItem(newCount)
	}

	public deacreaseAmmount(count: number) {
		const newCount = this.pItem.count - count
		this.updateItem(newCount)
	}

	private updateItem(newCount: number) {
		const newPrice = MenuItems[this.pItem.id].price * newCount

		this.pItem = { ...this.pItem, count: newCount, price: newPrice }
	}
}
