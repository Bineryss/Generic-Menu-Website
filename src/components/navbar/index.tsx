import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { ListState } from '../../reducer/ShopingListReducer'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';import Button from '@material-ui/core/Button'

const NavBar: React.FC = () => {
	//				type for state|		   |return type
	const price = useSelector<ListState, number>(state => state.price)

	return (
		<AppBar position={'sticky'}>
			<Toolbar>
				<Typography>{price} €</Typography>
				<Button>
					<ShoppingCartIcon />
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar
