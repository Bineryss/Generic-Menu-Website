import React from 'react'
import {
	Container,
	createStyles,
	Fab,
	Hidden,
	makeStyles,
	Theme
} from '@material-ui/core'
import MenuGridList from '../components/menugridlist/MenuGridList'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import BasicTable from '../tmp'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'
import { ListState } from '../reducer/ShopingListReducer'
import { useState } from 'react'
import ShoppingListDialog from '../components/shoppinglist/ShoppingListDialog'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		fab: {
			bottom: 20,
			position: 'fixed',
			zIndex: 1
		}
	})
)

const MainPage: React.FC = () => {
	const price = useSelector<ListState, number>(state => state.price)

	const classes = useStyles()

	const [open, setOpen] = useState(false)

	return (
		<React.Fragment>
			<Hidden smUp>
				<Grid container justify={'center'}>
					<Fab
						className={classes.fab}
						onClick={() => setOpen(true)}
						variant={'extended'}
						color={'secondary'}
					>
						Bestellung von {price}€
					</Fab>
				</Grid>
				<Container>
					<MenuGridList />
					<ShoppingListDialog open={open} setOpen={setOpen} />
				</Container>
			</Hidden>
			<Hidden xsDown>
				<Grid container>
					<Grid item xs={6}>
						<MenuGridList />
					</Grid>
					<Grid item xs={6}>
						<Paper elevation={3} square style={{ padding: '10px' }}>
							<Typography>
								Hier kommt dan die einkaufsliste hin
							</Typography>
							<BasicTable />
							<Button variant={'outlined'}>Bestellen</Button>
						</Paper>
					</Grid>
				</Grid>
			</Hidden>
		</React.Fragment>
	)
}

export default MainPage
