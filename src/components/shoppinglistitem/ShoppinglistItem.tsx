import { IconButton, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove'
import React from 'react'
import { ListItem } from '../../reducer/ShopingListReducer'

export interface ShoppingListItemComponentProps {
	item: ShoppingListItemProps
	onRemove: (id: number) => void
}

export interface ShoppingListItemProps extends ListItem {
	title: string
}

const ShoppingListItem: React.FC<ShoppingListItemComponentProps> = ({
	item,
	onRemove
}) => {
	const { id, title, price, count } = item

	return (
		<React.Fragment>
			<Typography>
				{title}
			</Typography>
			<Grid
				container
				direction="row"
				alignItems="center"
				justify="space-between"
				style={{
					paddingTop: '10px',
					paddingBottom: '10px'
				}}
			>
				<Grid item>
					<Button>-</Button>
				</Grid>
				<Grid item>
					<Typography>{count}</Typography>
				</Grid>
				<Grid item>
					<Button>+</Button>
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

export default ShoppingListItem
