import { IconButton, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import React from 'react'
import { ListItem } from '../../reducer/ShopingListReducer'

export interface ShoppingListItemComponentProps {
	item: ShoppingListItemProps
	onRemove: (id: number) => void
	onDecreas: (id: number) => void
	onIncreas: (id: number) => void
}

export interface ShoppingListItemProps extends ListItem {
	title: string
}

const ShoppingListItem: React.FC<ShoppingListItemComponentProps> = ({
	item,
	onRemove,
	onDecreas,
	onIncreas
}) => {
	const { id, title, price, count } = item

	return (
		<React.Fragment>
			<Typography>{title}</Typography>
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
					{count === 1 ? (
						<Button onClick={() => onRemove(id)}>
							<DeleteOutlineOutlinedIcon />
						</Button>
					) : (
						<Button onClick={() => onDecreas(id)}>-</Button>
					)}
				</Grid>
				<Grid item>
					<Typography>{count}</Typography>
				</Grid>
				<Grid item>
					<Button onClick={() => onIncreas(id)}>+</Button>
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
