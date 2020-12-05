import {makeStyles, Theme, createStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backdropFilter: "blur(8px)"
        },
        title: {
            fontFamily: "Rubik",
        },
        image: {
            maxWidth: "100%"
        }
    }))