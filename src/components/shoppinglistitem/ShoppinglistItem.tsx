import { IconButton, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove'
import React from 'react'

export interface ShoppingListItemProps {
	id: number
	title: string
	price: number
	onRemove: (id: number) => void
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
	id,
	title,
	price,
	onRemove
}) => {
	return (
		<Grid
			container
			direction="row"
			alignItems="center"
			justify="space-evenly"
		>
			<Grid item>
				<Typography>{title}</Typography>
			</Grid>
			<Grid item>
				<IconButton onClick={() => onRemove(id)}>
					<RemoveIcon />
				</IconButton>
			</Grid>
			<Grid item>
				<Typography>{price}€</Typography>
			</Grid>
		</Grid>
	)
}

export default ShoppingListItem
