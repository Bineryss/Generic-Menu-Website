import { Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../actions/ItemActions'
import { MenuItems } from '../../database/CardData'
import { ListItem, ListState } from '../../reducer/ShopingListReducer'
import ShoppingListItem from '../shoppinglistitem/ShoppinglistItem'

const ShoppingList: React.FC = () => {
	const items = useSelector<ListState, ListItem[]>(
		state => state.listItems.map(el => {return el.item})
	)
	const cardData = MenuItems

	const dispatch = useDispatch()

	const handleRemove = (id: number) => {
		console.log('Entfernen', id)
		dispatch(removeItem(id))
	}

	return (
		<Paper>
			{items.map(({ id, price }) => (
				<ShoppingListItem
					id={id}
					title={cardData[id].title}
					price={price}
					onRemove={handleRemove}
				/>
			))}
		</Paper>
	)
}

export default ShoppingList
