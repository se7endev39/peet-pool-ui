import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { Container, Box, Link, Typography, Avatar, Button, Chip, IconButton, SvgIcon, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const useStyles = makeStyles((theme) => ({
  container: {
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
    width: '100%',
    borderRadius: '4px',
  },
  boxLink: {
    color: '#f5a623',
    "&:hover": {
      textDecoration: 'none'
    },
  },
  boxContent: {
  },
  boxHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '2.75rem',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    background: '-webkit-linear-gradient(top, rgba(218,75,253,1) 0%,#5d19db 100%)',
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
    fontSize: '.875rem',
    color: '#fdfdfd',
  },
  boxHeaderStatus: {
    background: '#4aa657',
    color: '#ffffff',
    height: '1.25rem',
    borderRadius: '1px',
    fontSize: '.625rem',
    fontWeight: 700
  },
  boxBody: {
    display: 'flex',
  },
  boxBodyLeft: {
    padding: '0.5rem 4rem',
    display: 'flex',
    width: '60%',
    flexDirection: 'column',
    background: '#5d19db',
    boxSizing: 'border-box',
    borderRight: '.1rem groove rgba(172, 174, 183, 0.5)',
  },
  boxBodyLeftHeader: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    textAlign: 'center',
  },
  boxBodyLeftHeaderTitle: {
    color: '#f5a623',
  },
  txt_36: {
    fontSize: '2.25rem',
    fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontWeight: 700,
  },
  txt_20: {
    fontSize: '1.25rem',
    fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontWeight: 700,
  },
  boxBodyLeftHeaderCaption: {
    color: '#fdfdfd',
    fontSize: '.875rem',
  },
  icons: {
    color: '#f5a623',
  },
  boxBodyLeftBody: {
    display: 'flex',
  },
  boxBodyRight: {
    background: '#5d19db',
    width: '40%',
  },
  boxBodyRightContent: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fdfdfd',
    fontFamily: 'Open Sans',
  },
  boxBodyLabel: {
    color: '#fdfdfd',
    fontSize: '.875rem',
    lineHeight: '1.5rem',
    fontFamily: 'Open Sans'
  },
  boxBodyLabel1: {
    fontSize: '.625rem',
    color: '#fdfdfd',
  },
  boxBodyValue1: {
    fontSize: '1.25rem',
    color: '#fdfdfd',
    fontWeight: 700,
    fontFamily: 'Open Sans',
  },
  boxBodyValue: {
    color: '#f5a623',
    fontSize: '.875rem',
    fontWeight: 700,
    marginLeft: '.5rem',
    lineHeight: 1.5,
    fontFamily: 'Open Sans'
  },
  boxBodyLeftBodyMin: {
    // width: '20%'
    marginRight: '1.25rem',
  },
  boxBodyLabel2: {
    fontSize: '1.25rem',
    color: '#fdfdfd',
    fontFamily: 'Open Sans',
  },
  boxBodyWithdrawal: {
    paddingTop: '1.5rem',
    paddingBottom: '2.5rem',
    textAlign: 'center',
  },
  outlinedBtn: {
    border: '1px solid rgba(172, 174, 183, 0.5)',
    color: 'rgba(172, 174, 183, 0.5)',
    fontSize: '.75rem',
    lineHeight: '1rem',
    fontFamily: 'Open Sans',
    letterSpacing: '1px',
    fontWeight: 700,
    minWidth: '6rem',
    "&:hover": {
      background: 'rgba(172, 174, 183, 0.5)',
      color: '#ffffff'
    },
  },
  root: {
    flexGrow: 1,
  },
  padding: {
    marginTop: '-.1rem',
    backgroundColor: '#5d19db',
  },
  tabs: {
    marginTop: '1rem',
    background: '#5d19db',
    minHeight: '333px',
  },
  demo2: {
    background: '-webkit-linear-gradient(top, rgba(218,75,253,1) 0%,#5d19db 10%)',
  },
  focusedTab: {
    color: '#f5a623',
  },
  tableSpan: {
    color: '#91949f',
    fontSize: '.875rem',
  },
  tableCell: {
    paddingTop: '0.1rem',
    borderTop: 'none',
    borderBottom: 'none',
  }
}));

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 120,
      width: '100%',
      backgroundColor: '#f5a623',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '.75rem',
    // marginRight: theme.spacing(1),
    '&:focus': {
      // opacity: 1,
      color: '#f5a623',
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#5d19db',
    color: '#91949f',
    fontSize: '.625rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    width: '33%',
    borderTop: '.1rem groove rgba(172, 174, 183, 0.5)',
    borderBottom: '.1rem groove rgba(172, 174, 183, 0.1)',
  },
  body: {
    fontSize: '.625rem',
  },
}))(TableCell);

export default function Plan() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Box className={classes.boxContainer}>
          <Box className={classes.boxContent}>
            <Box className={classes.boxHeader}>
              <Box className={classes.boxHeader_section}>
                <Avatar alt="Remy Sharp" src="/images/logo.png" className={classes.avatar} />
                <Box>
                  <Typography className={classes.boxHeaderTitle} variant="caption" gutterBottom>PEET, Staking Pool</Typography>
                </Box>
              </Box>
              <Chip className={classes.boxHeaderStatus} label="ACTIVE" />
            </Box>
            <Box className={classes.boxBody}>
              <Box className={classes.boxBodyLeft}>
                <Box className={classes.boxBodyLeftHeader}>
                  <Box className={classes.boxBodyLeftHeaderTitle}>
                    <Typography className={classes.txt_36} variant="caption" gutterBottom> 0.500 </Typography>
                    <Typography className={classes.txt_20} variant="caption" gutterBottom> % </Typography>
                  </Box>
                  <Box>
                    <IconButton className={classes.icons}>
                      <SvgIcon>
                        <path d="M4.742 20.652h8.074c.399 0 .668-.27.668-.656V18.25c0-2.684 3.903-4.395 3.903-9.223C17.387 3.93 13.94.52 8.785.52 3.63.52.172 3.93.172 9.027c0 4.829 3.914 6.54 3.914 9.223v1.746c0 .387.258.656.656.656zm.375 3.012h7.324c.575 0 1.043-.469 1.043-1.055s-.468-1.054-1.043-1.054H5.117c-.574 0-1.043.468-1.043 1.054 0 .586.469 1.055 1.043 1.055zm3.668 2.719c1.559 0 2.66-.727 2.777-1.817H6.008c.094 1.09 1.195 1.817 2.777 1.817z"></path>
                      </SvgIcon>
                    </IconButton>
                    <Typography className={classes.boxBodyLabel} variant="caption" gutterBottom>Hold PEET without sale- Withdraw blocked monthly</Typography>
                  </Box>
                </Box>
                <Box className={classes.boxBodyLeftBody}>
                  <Box className={classes.boxBodyLeftBodyMin}>
                    <Typography className={classes.boxBodyLabel1} variant="body1" gutterBottom>Min Stating</Typography>
                    <Typography className={classes.boxBodyValue1} variant="body1" gutterBottom>1,000</Typography>
                  </Box>
                  <Box className={classes.boxBodyLeftBodyMin}>
                    <Typography className={classes.boxBodyLabel1} variant="body1" gutterBottom>Max Staking</Typography>
                    <Typography className={classes.boxBodyValue1} variant="body1" gutterBottom>No Limit</Typography>
                  </Box>
                  <Box className={classes.boxBodyLeftBodyMin}>
                    <Typography className={classes.boxBodyLabel1} variant="body1" gutterBottom>Period</Typography>
                    <Typography className={classes.boxBodyValue1} variant="body1" gutterBottom>MONTH</Typography>
                  </Box>
                  <Box className={classes.boxBodyLeftBodyMin}>
                    <Typography className={classes.boxBodyLabel1} variant="body1" gutterBottom>Start Date</Typography>
                    <Typography className={classes.boxBodyValue1} variant="body1" gutterBottom>Dec 7, 2020</Typography>
                  </Box>
                  <Box>
                    <Button variant="outlined" className={classes.outlinedBtn}>BUY</Button>
                  </Box>
                </Box>
                <Box className={classes.boxBodyWithdrawal}>
                  <Typography className={classes.boxBodyLabel2} variant="caption">Withdrawal </Typography>
                  <LockOpenOutlinedIcon className={classes.icons} />
                </Box>
              </Box>
              <Box className={classes.boxBodyRight}>
                <Box className={classes.boxBodyRightContent}>
                  <Link className={classes.boxLink} href="#"> Login </Link>
                  &nbsp; or &nbsp;
                  <Link className={classes.boxLink} href="#"> Sign Up </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={classes.tabs}>
          <div className={classes.root}>
            <div className={classes.demo2}>
              <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                <StyledTab label="Distribution" />
                <StyledTab label="History Staking" />
              </StyledTabs>
              <TabPanel value={value} index={0} className={classes.padding}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Date</StyledTableCell>
                      <StyledTableCell>Amount</StyledTableCell>
                      <StyledTableCell>Staked Amount</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" colSpan="3" align="center" className={classes.tableCell}>
                      <Typography variant="body1" className={classes.tableSpan}>No invest history yet</Typography>
                      <img src="/images/2.png" width="110" height="89" />
                    </TableCell>
                  </TableRow>
                  </TableBody>
                </Table>
              </TabPanel>
              <TabPanel value={value} index={1} className={classes.padding}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Date</StyledTableCell>
                      <StyledTableCell>Amount</StyledTableCell>
                      <StyledTableCell>Type</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" colSpan="3" align="center" className={classes.tableCell}>
                      <Typography variant="body1" className={classes.tableSpan}>No invest history yet</Typography>
                      <img src="/images/2.png" width="110" height="89" />
                    </TableCell>
                  </TableRow>
                  </TableBody>
                </Table>
              </TabPanel>
            </div>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
