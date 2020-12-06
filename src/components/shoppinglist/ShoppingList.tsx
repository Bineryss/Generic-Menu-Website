import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../actions/ItemActions'
import { ListItem, ListState } from '../../reducer/ShopingListReducer'
import ShoppingListItem from '../shoppinglistitem/ShoppinglistItem'
import { MenuItems } from '../../database/CardData'
import { Divider, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const ShoppingList: React.FC = () => {
	const items = useSelector<ListState, ListItem[]>(state =>
		state.listItems.map(el => {
			return el.item
		})
	)
	const price = useSelector<ListState, number>(state => state.price)

	const dispatch = useDispatch()

	const handleRemove = (id: number) => {
		console.log('Entfernen', id)
		dispatch(removeItem(id))
	}

	return (
		<React.Fragment>
			{items.map((item, index) => (
				<div style={{ minWidth: '250px', paddingBottom: '20px' }}>
					<ShoppingListItem
						item={{ ...item, title: MenuItems[item.id].title }}
						onRemove={handleRemove}
					/>
					<Divider />
				</div>
			))}
			<Grid
				container
				direction="row"
				alignItems="center"
				justify="space-between"
			>
				<Grid item>
					<Typography style={{ fontWeight: 'bold' }}>
						Gesamt
					</Typography>
				</Grid>
				<Grid item>
					<Typography style={{ fontWeight: 'bold' }}>
						{price}€
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default ShoppingList
