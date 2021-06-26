import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Container, Box, Link, Typography, Avatar, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#302e49',
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
  boxContainer: {
    width: '252px',
    borderRadius: '4px',    
  },
  boxLink: {
    borderRadius: '4px',
    "&:hover": {
      textDecoration: 'none'
    },
  },
  boxContent: {
    border: '.1rem solid rgba(172, 174, 183, 0.5)',
  },
  boxHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '2.75rem',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    background: '#373456',
  },
  boxHeader_section: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '1.75rem',    
    height: '1.75rem',
  },
  boxHeaderTitle: {
    marginLeft: '1rem',
    fontSize: '.75rem',
    color: '#fdfdfd',
  },
  boxBody: {
    padding: '1.3125rem 1.25rem 1.625rem 1.9375rem',
    display: 'grid',
    gap: '.75rem .625rem',
    background: '#413f63',
    boxSizing: 'border-box',
    width: '250px',
    borderBottom: '.1rem solid rgba(172, 174, 183, 0.5)',
  },
  boxBodyLabel: {
    color: '#fdfdfd',
    fontSize: '.75rem',
    lineHeight: '1.5rem',
    fontFamily: 'Open Sans'
  },
  boxBodyValue: {
    color: '#f5a623',
    fontSize: '.875rem',
    fontWeight: 700,
    marginLeft: '.5rem',
    lineHeight: 1.5,
    fontFamily: 'Open Sans'
  },
  boxFooter: {
    background: '#413f63',
    padding: '1rem 1.25rem',
    width: '210px',
    gridTemplateColumns: '1fr 1fr',
    display: 'grid',
    gap: '.625rem',
  },
  containedBtn: {
    background: '#f5a623',
    color: '#ffffff',
    fontSize: '.75rem',
    lineHeight: '1rem',
    fontFamily: 'Open Sans',
    letterSpacing: '1px',
    fontWeight: 700,
    "&:hover": {
      background: '#f7ba54'
    },
  },
  outlinedBtn: {
    border: '1px solid rgba(172, 174, 183, 0.5)',
    color: 'rgba(172, 174, 183, 0.5)',
    fontSize: '.75rem',
    lineHeight: '1rem',
    fontFamily: 'Open Sans',
    letterSpacing: '1px',
    fontWeight: 700,
    "&:hover": {
      background: 'rgba(172, 174, 183, 0.5)',
      color: '#ffffff'
    },
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Staking Pool
        </Typography>
        <Box className={classes.boxContainer}>
          <Link href="/plan" className={classes.boxLink}>
            <Box className={classes.boxContent}>
              <Box className={classes.boxHeader}>
                <Box className={classes.boxHeader_section}>
                  <Avatar alt="Remy Sharp" src="/images/1.png" className={classes.avatar} />
                  <Box>
                    <Typography className={classes.boxHeaderTitle} variant="caption" gutterBottom>FISH, Staking Pool</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.boxBody}>
                <Box>
                  <Typography className={classes.boxBodyLabel} variant="caption" gutterBottom>Profit</Typography>
                  <Typography className={classes.boxBodyValue} variant="caption" gutterBottom>0.5%</Typography>
                </Box>
                <Box>
                  <Typography className={classes.boxBodyLabel} variant="caption" gutterBottom>Min</Typography>
                  <Typography className={classes.boxBodyValue} variant="caption" gutterBottom>1,000</Typography>
                </Box>
                <Box>
                  <Typography className={classes.boxBodyLabel} variant="caption" gutterBottom>Max</Typography>
                  <Typography className={classes.boxBodyValue} variant="caption" gutterBottom>No Limit</Typography>
                </Box>
              </Box>
              <Box className={classes.boxFooter}>               
                <Button variant="contained" className={classes.containedBtn}>STAKING</Button>
                <Button variant="outlined" className={classes.outlinedBtn}>BUY</Button>
              </Box>
            </Box>
          </Link>
        </Box>
      </Container>
    </React.Fragment>
  );
}
