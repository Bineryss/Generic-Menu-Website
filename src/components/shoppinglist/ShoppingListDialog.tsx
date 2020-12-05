import { Dialog, DialogContent, Typography } from '@material-ui/core'
import { useStyles } from '../itemdialog/styles'
import DialogTitle from '../itemdialog/DialogTitle'
import ShoppingList from './ShoppingList'

const ShoppingListDialog: React.FC<{ open: boolean; setOpen: any }> = ({
	open,
	setOpen
}) => {
	const classes = useStyles()

	const handleClose = () => {
		setOpen(false)
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
					Auswahl
				</Typography>
			</DialogTitle>
			<DialogContent>
				<ShoppingList />
			</DialogContent>
		</Dialog>
	)
}

export default ShoppingListDialog
