import {
    Button, ButtonGroup, createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton, SvgIcon,
    TextField, Theme,
    Typography,
    withStyles,
    WithStyles
} from "@material-ui/core"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import React, {useState} from "react"
import {MenuItems} from "../../datamodel/menuitem/CardData"
import {useStyles} from "./styles"
import SwipeableText from "../swipepage/SwipebleImages";
import CloseIcon from '@material-ui/icons/Close';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Grid from "@material-ui/core/Grid";


const ItemDialog: React.FC<{ id: number, open: boolean, setOpen: any }> = ({
                                                                               id,
                                                                               open,
                                                                               setOpen
                                                                           }) => {
    const {title, price, description, images} = MenuItems[id]
    const classes = useStyles()

    const [value, setValue] = useState(1)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(event.target.value))
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleBuy = () => {
        alert(`Es wurden ${value} von ${title} für ${price * value}€ gekauft`)
        handleClose()
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="customized-dialog-title"
                className={classes.root}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography className={classes.title} variant={"h5"}>
                    {title}
                </Typography>
            </DialogTitle>
            <SwipeableText images={images}/>
            <DialogContent>
                <Typography gutterBottom>
                    {description}
                </Typography>
            </DialogContent>
            <DialogActions>
                {/*<TextField*/}
                {/*    label={"Anzahl"}*/}
                {/*    type={"number"}*/}
                {/*    value={value}*/}
                {/*    onChange={handleChange}*/}
                {/*/>*/}
            </DialogActions>
            <ButtonGroup variant={"text"} color={"primary"}
                         fullWidth>
                <Button onClick={() => setValue(value + 1)}>
                    <AddIcon/>
                </Button>
                <Button onClick={() => value !== 1 ? setValue(value - 1) : null}>
                    <DeleteOutlinedIcon/>
                </Button>
                <Button onClick={handleBuy}>
                    <Typography>+{value * price}€</Typography>
                    <SvgIcon style={{marginLeft: "10px"}}>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </SvgIcon>
                </Button>
            </ButtonGroup>
        </Dialog>
    )
}

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default ItemDialog