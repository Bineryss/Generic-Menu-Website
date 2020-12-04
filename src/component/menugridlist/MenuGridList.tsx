import {GridList, GridListTile, GridListTileBar} from "@material-ui/core"
import React, {Fragment, useState} from "react"
import {MenuItems} from "../../datamodel/menuitem/CardData"
import ItemDialog from "../itemdialog/ItemDialog"
import {useStyles} from "./styles"


const MenuGridList: React.FC = () => {
    const cardData = MenuItems
    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState(0)

    const handleClick = (id: number) => {
        console.log("#Test", id)
        setOpen(true)
        setCurrent(id)
    }
    return (
        <Fragment>
            <div className={classes.root}>
                <GridList>
                    {cardData.map(el => (
                        <GridListTile key={el.id}>
                            <img src={el.images[0]} alt={""} onClick={() => handleClick(el.id)} />
                            <GridListTileBar
                                title={el.title}
                                titlePosition="top"
                                className={classes.titleBar} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <ItemDialog id={current} open={open} />
        </Fragment>
    )
}

export default MenuGridList