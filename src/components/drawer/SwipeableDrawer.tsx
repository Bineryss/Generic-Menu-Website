import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawerMui from '@material-ui/core/SwipeableDrawer'
import React, { useState } from 'react'

//TODO: add filter functionality!

const SwipeableDrawer = () => {
	const [open, setOpen] = useState(false)

	const toggleDrawer = (open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent
	) => {
		if (
			event &&
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return
		}

		setOpen(open)
	}

	const classes = useStyles()

	return (
		<SwipeableDrawerMui
			anchor="left"
			open={open}
			onClose={toggleDrawer(false)}
			onOpen={toggleDrawer(true)}
		>
			<div className={classes.list}>
				<List>
					{['Sushi', 'Brot', 'Salat', 'Suppen'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{['Wein', 'Bier', 'Nicht Alkoholisch'].map(
						(text, index) => (
							<ListItem button key={text}>
								<ListItemText primary={text} />
							</ListItem>
						)
					)}
				</List>
			</div>
		</SwipeableDrawerMui>
	)
}

const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
	}
})

export default SwipeableDrawer
