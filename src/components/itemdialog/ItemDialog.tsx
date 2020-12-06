import {
	Button,
	ButtonGroup,
	Dialog,
	DialogActions,
	DialogContent,
	Typography
} from '@material-ui/core'
import React, { useState } from 'react'
import { MenuItems } from '../../database/CardData'
import { useStyles } from './styles'
import SwipeableImages from '../swipepage/SwipebleImages'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch } from 'react-redux'
import { ListItem } from '../../reducer/ShopingListReducer'
import { addItem } from '../../actions/ItemActions'
import RemoveIcon from '@material-ui/icons/Remove'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid'

const ItemDialog: React.FC<{ id: number; open: boolean; setOpen: any }> = ({
	id,
	open,
	setOpen
}) => {
	const classes = useStyles()
	const { title, price, description, images } = MenuItems[id]

	const [value, setValue] = useState(1)

	const handleClose = () => {
		setOpen(false)
		setValue(1)
	}

	const handleBuy = () => {
		onAddItem({
			id: id,
			count: value,
			price: price * value
		})
		handleClose()
	}

	const dispatch = useDispatch()

	const onAddItem = (item: ListItem) => {
		dispatch(addItem(item))
	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			className={classes.root}
		>
			<IconButton
				aria-label="close"
				className={classes.closeButton}
				onClick={handleClose}
			>
				<CloseIcon />
			</IconButton>
			<SwipeableImages images={images} />
			<DialogContent>
				<Typography variant={'h6'} className={classes.title}>
					{title}
				</Typography>
				<Typography gutterBottom>{description}</Typography>
			</DialogContent>
			<ButtonGroup disableElevation  variant={'text'} color={'primary'} fullWidth>
				<Button
					onClick={() => (value !== 1 ? setValue(value - 1) : null)}
				>
					<RemoveIcon />
				</Button>
				<Button>
					<Typography variant={'h5'}>
						{value}
					</Typography>
				</Button>
				<Button onClick={() => setValue(value + 1)}>
					<AddIcon />
				</Button>
				<Button
					variant="contained"
					onClick={handleBuy}
					style={{ borderRadius: '0px' }}
				>
					<Typography variant={'h5'} className={classes.addText}>
						{value * price}€
					</Typography>
					{/* <AddShoppingCartIcon /> */}
				</Button>
			</ButtonGroup>
		</Dialog>
	)
}

export default ItemDialog
