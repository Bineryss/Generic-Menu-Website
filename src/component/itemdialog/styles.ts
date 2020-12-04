import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // backgroundImage: "url(https://www.gourmetfleisch.de/shop/images/products/main/detail/13944.jpg)"
        },
        image: {
            maxWidth: "100%"
        }
    }))