import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { MenuItems } from '../../database/CardData'
import { ListItem, ListState } from '../../reducer/ShopingListReducer'
import ShoppingListItem from '../shoppinglistitem/ShoppinglistItem'

const ShoppingList: React.FC = () => {
	const items = useSelector<ListState, ListItem[]>(state => state.items)
	const cardData = MenuItems

	const handleRemove = (id: number) => {
		console.log('Entfernen', id)
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
