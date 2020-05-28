import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import axios from 'axios'
import { useParams, useHistory } from "react-router-dom";

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
  button: { 
    margin: theme.spacing(6),
  }
  
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();  

  const [post, setpost] = useState(null)
  const [comments, setcomments] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(resp => {
      setpost(resp.data)
    })
    axios.get(' https://jsonplaceholder.typicode.com/posts/' + id + '/comments').then(resp => {
      setcomments(resp.data)
    })

  }, [id, setpost])

  function handleClick(e) {
    history.push('/posts');
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {
            post ? <Paper className={classes.paper}>
              <Typography variant="h5" display="block" >
                {post.title}
              </Typography>
              <Typography variant="body1" display="block" >
                {post.body}
              </Typography>
            </Paper> : null
          }

          <Paper className={classes.paper} >
            <Typography variant="h4" display="block" >
              comments
                  </Typography>
            {
              comments.map((item) => (
                <div key={item.id}  >
                  <Typography variant="h5" display="block" >
                    {item.title}
                  </Typography>
                  <Typography variant="body1" display="block" >
                    {item.body}
                  </Typography>
                </div>
              ))
            }
          </Paper>
          <Button  className={classes.button} variant="contained" color="Primary" onClick = {(e)=> handleClick(e)}>
          Dashboard
        </Button>
        </Grid>
      </Grid>
    </div>
  );
}