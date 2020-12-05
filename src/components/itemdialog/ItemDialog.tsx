import {
	Button,
	ButtonGroup,
	createStyles,
	Dialog,
	DialogActions,
	DialogContent,
	IconButton,
	Theme,
	Typography,
	withStyles,
	WithStyles
} from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import React, { useState } from 'react'
import { MenuItems } from '../../datamodel/menuitem/CardData'
import { useStyles } from './styles'
import SwipeableText from '../swipepage/SwipebleImages'
import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch } from 'react-redux'
import { ListItem } from '../../reducer/ShopingListReducer'
import { addItem } from '../../actions/ItemActions'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import RemoveIcon from '@material-ui/icons/Remove'

const ItemDialog: React.FC<{ id: number; open: boolean; setOpen: any }> = ({
	id,
	open,
	setOpen
}) => {
	const { title, price, description, images } = MenuItems[id]
	const classes = useStyles()

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
			<DialogTitle id="customized-dialog-title" onClose={handleClose}>
				<Typography className={classes.title} variant={'h5'}>
					{title}
				</Typography>
			</DialogTitle>
			<SwipeableText images={images} />
			<DialogContent>
				<Typography gutterBottom>{description}</Typography>
			</DialogContent>
			<DialogActions></DialogActions>
			<ButtonGroup variant={'text'} color={'primary'} fullWidth>
				<Button onClick={() => setValue(value + 1)}>
					<AddIcon />
				</Button>
				<Button
					onClick={() => (value !== 1 ? setValue(value - 1) : null)}
				>
					<RemoveIcon />
				</Button>
				<Button onClick={handleBuy}>
					{/* <AddShoppingCartIcon /> */}
					<Typography variant={'h5'}>+{value * price}€</Typography>
				</Button>
			</ButtonGroup>
		</Dialog>
	)
}

const styles = (theme: Theme) =>
	createStyles({
		root: {
			margin: 0,
			padding: theme.spacing(2)
		},
		closeButton: {
			position: 'absolute',
			right: theme.spacing(1),
			top: theme.spacing(1),
			color: theme.palette.grey[500]
		}
	})

export interface DialogTitleProps extends WithStyles<typeof styles> {
	id: string
	children: React.ReactNode
	onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
	const { children, classes, onClose, ...other } = props
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	)
})

export default ItemDialog
