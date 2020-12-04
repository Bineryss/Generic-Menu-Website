import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@material-ui/core"
import React, {useState} from "react"
import {MenuItems} from "../../datamodel/menuitem/CardData"
import {useStyles} from "./styles"
import SwipeableText from "../swipepage/SwipebleImages";


const ItemDialog: React.FC<{ id: number, open: boolean }> = ({
                                                                 id,
                                                                 open
                                                             }) => {
    const {title, price, description, images} = MenuItems[id]
    const classes = useStyles()

    const [value, setValue] = useState(1)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(event.target.value))
    }

    return (
        <Dialog open={open}>
            <DialogTitle>{title}</DialogTitle>
            <SwipeableText images={images}/>
            <DialogContent>
                <Typography gutterBottom>
                    {description}
                </Typography>
            </DialogContent>
            <DialogActions>
                <TextField
                    label={"Anzahl"}
                    type={"number"}
                    value={value}
                    onChange={handleChange}
                />
                <Button>
                    Add +{value * price}€
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ItemDialog