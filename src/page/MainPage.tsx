import React from "react"
import {Container, Hidden} from "@material-ui/core";
import MenuGridList from "../component/menugridlist/MenuGridList";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BasicTable from "../tmp";
import Button from "@material-ui/core/Button";

const MainPage: React.FC = () => {

    return (
        <React.Fragment>
            <Hidden smUp>
                <Container>
                    <MenuGridList/>
                </Container>
            </Hidden>
            <Hidden xsDown>
                <Grid container>
                    <Grid item xs={6}>
                        <MenuGridList/>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={3} square style={{padding: "10px"}}>
                            <Typography>Hier kommt dan die einkaufsliste hin</Typography>
                            <BasicTable/>
                            <Button variant={"outlined"}>Bestellen</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Hidden>
        </React.Fragment>
    )
}

export default MainPage