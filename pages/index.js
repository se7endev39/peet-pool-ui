import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Container, Box, Link, Typography, Avatar, Button } from '@material-ui/core';
import CardForm from '../components/CardForm';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1.25rem',
    maxWidth: '1080px',
  },
  title: {
    fontSize: '1.5rem',
    color: '#fdfdfd',
    fontWeight: 300,
    fontFamily: 'Open Sans',
    marginBottom: '1rem'
  },
  gridstyle: {
    marginTop: '1.5rem',
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Staking Pool
        </Typography>
        <Grid className={classes.gridstyle} container spacing={1}>
          <Grid item xs>
            <CardForm imgsrc="/images/logo.png" headerName="PEET, Staking Pool" Profit="0.5" Min="1,000" Max="No Limit" />
          </Grid>
          <Grid item xs>
            <CardForm imgsrc="/images/logo1.png" headerName="NIA, Staking Pool" Profit="0.1% - 0.75" Min="10" Max="100,000" />
          </Grid>
          <Grid item xs>
            <CardForm imgsrc="/images/logo2.png" headerName="ENV, Staking Pool" Profit="0.2" Min="500" Max="10,000" />
          </Grid>
        </Grid>
        <Grid className={classes.gridstyle} container spacing={1}>
          <Grid item xs>
            <CardForm imgsrc="/images/logo3.png" headerName="CBT, Staking Pool" Profit="1.3" Min="1,00" Max="1000,000" />
          </Grid>
          <Grid item xs>
            <CardForm imgsrc="/images/logo4.png" headerName="MVH, Staking Pool" Profit="0.1% - 3.5" Min="10" Max="35,000" />
          </Grid>
          <Grid item xs>
            <CardForm imgsrc="/images/logo5.png" headerName="GNT, Staking Pool" Profit="0.2" Min="50,000" Max="100,000,000" />
          </Grid>
        </Grid>
        <Grid className={classes.gridstyle} container spacing={1}>
          <Grid item xs>
            <CardForm imgsrc="/images/logo6.png" headerName="JCC, Staking Pool" Profit="0.5" Min="1,000" Max="No Limit" />
          </Grid>
          <Grid item xs>
            <CardForm imgsrc="/images/logo7.png" headerName="ORT, Staking Pool" Profit="0.1% - 0.75" Min="10" Max="100,000" />
          </Grid>
          <Grid item xs>
            <CardForm imgsrc="/images/logo8.png" headerName="HTS, Staking Pool" Profit="0.1% - 0.75" Min="10" Max="100,000" />
          </Grid>
        </Grid>
        
      </Container>
    </React.Fragment>
  );
}
