import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import axios from 'axios'
import { useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(8),
        margin: theme.spacing(6),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

export default function Posts() {
    const classes = useStyles();
    const history = useHistory();  
    const [posts, setposts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {
            setposts(resp.data);
        })
    }, [])

    function handleClick(item) {
      
        history.push('/post/' + item);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {
                        posts.map((item) => (
                            <Paper key={item.id} className={classes.paper} onClick={ (e)=> handleClick(item.id) } >
                                <Typography variant="h5" display="block" >
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" display="block" >
                                    {item.body }
                                 </Typography>
                            </Paper>
                        ))
                    }
                </Grid>
            </Grid>
        </div>
    );
}