import { GridList, GridListTile, GridListTileBar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography/Typography'
import React, { Fragment, useState } from 'react'
import { MenuItems } from '../../database/CardData'
import ItemDialog from '../itemdialog/ItemDialog'
import { useStyles } from './styles'

const MenuGridList: React.FC = () => {
	const cardData = MenuItems
	const classes = useStyles()

	const [open, setOpen] = useState(false)
	const [current, setCurrent] = useState(0)

	const handleClick = (id: number) => {
		setOpen(true)
		setCurrent(id)
	}

	return (
		<Fragment>
			<div className={classes.root}>
				<GridList>
					{cardData.map(item => (
						<GridListTile key={item.id}>
							<img
								src={item.images[0]}
								alt={''}
								onClick={() => handleClick(item.id)}
							/>
							<GridListTileBar
								title={item.title}
								titlePosition="top"
								className={classes.titleBar}
							/>
						</GridListTile>
					))}
				</GridList>
			</div>
			<ItemDialog id={current} open={open} setOpen={setOpen} />
		</Fragment>
	)
}

export default MenuGridList
