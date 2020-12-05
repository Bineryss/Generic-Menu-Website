import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'

const NavBar: React.FC = () => {
	return (
		<AppBar position={'sticky'}>
			<Toolbar></Toolbar>
		</AppBar>
	)
}

export default NavBar
