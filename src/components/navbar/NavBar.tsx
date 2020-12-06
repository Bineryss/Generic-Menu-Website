import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { ListState } from '../../reducer/ShopingListReducer'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined'
import Button from '@material-ui/core/Button'
import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const NavBar: React.FC = () => {
	//				type for state|		   |return type
	const price = useSelector<ListState, number>(state => state.price)

	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},
		menuButton: {
			marginRight: theme.spacing(2)
		},
		title: {
			flexGrow: 1
		}
	}))

	const classes = useStyles()

	return (
		<AppBar position={'sticky'}>
			<Toolbar>
				{/* <IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton> */}
				<Typography variant="h6" className={classes.title}>
					Menu Card
				</Typography>
				{/* <Button variant={'outlined'}>
					<Typography variant={'h6'} style={{ marginRight: '20px' }}>
						{price}€
					</Typography>
					<ShoppingCartIcon />
				</Button> */}
			</Toolbar>
		</AppBar>
	)
}

export default NavBar
