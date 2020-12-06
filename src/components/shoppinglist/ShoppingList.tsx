import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseOne, increaseOne, removeItem } from '../../actions/ItemActions'
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
		dispatch(removeItem(id))
	}

	const handleDecreas = (id: number) => {
		dispatch(decreaseOne(id))
	}

	const handleIncreas = (id: number) => {
		dispatch(increaseOne(id))
	}

	const renderList = () => {
		return (
			<React.Fragment>
				{items.map((item, index) => (
					<div style={{ paddingBottom: '20px' }}>
						<ShoppingListItem
							item={{ ...item, title: MenuItems[item.id].title }}
							onRemove={handleRemove}
							onDecreas={handleDecreas}
							onIncreas={handleIncreas}
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

	return (
		<div style={{ minWidth: '70vw' }}>
			{items.length > 0 ? (
				renderList()
			) : (
				<Typography>Bitte wähle etwas aus</Typography>
			)}
		</div>
	)
}

export default ShoppingList
