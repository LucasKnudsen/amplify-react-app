import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import CardMedia from '@material-ui/core/CardMedia';
import TranslateIcon from '@material-ui/icons/Translate';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MapIcon from '@material-ui/icons/Map';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PublicIcon from '@material-ui/icons/Public';
import LanguageIcon from '@material-ui/icons/Language';
import PowerIcon from '@material-ui/icons/Power';
import EuroIcon from '@material-ui/icons/Euro';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Avatar from '@material-ui/core/Avatar';
import LogoPic from '../static/images/avatar/circleiconlogo.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* <CardMedia
            className={classes.media}
            image="./static/images/avatar/logo_rion.png"
            title="Logo"
          /> */}
          <Avatar alt="Remy Sharp" src={LogoPic} style={{ marginRight: '0.8rem' }} />
          <Typography variant="h6" noWrap>
            OrionZolution ver 0.1
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Typography variant="h6" align='center' gutterBottom>
              Investment Categories
              </Typography>
            <Link to="/us" style={styles.itemLink}>
              <ListItem button key="US Equities">
                <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                <ListItemText primary="US Equities" />
              </ListItem>
            </Link>

            <Link to="/technology" style={styles.itemLink}>
              <ListItem button key="Technology">
                <ListItemIcon><LaptopMacIcon /></ListItemIcon>
                <ListItemText primary="Technology" />
              </ListItem>
            </Link>

            <Link to="/middle-east" style={styles.itemLink}>
              <ListItem button key="Middle East">
                <ListItemIcon><MapIcon /></ListItemIcon>
                <ListItemText primary="Middle East" />
              </ListItem>
            </Link>

            <Link to="/healthcare" style={styles.itemLink}>
              <ListItem button key="Healthcare">
                <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
                <ListItemText primary="Healthcare" />
              </ListItem>
            </Link>

            <Link to="/global" style={styles.itemLink}>
              <ListItem button key="Global">
                <ListItemIcon><PublicIcon /></ListItemIcon>
                <ListItemText primary="Global" />
              </ListItem>
            </Link>

            <Link to="/emerging-markets" style={styles.itemLink}>
              <ListItem button key="Emerging Markets">
                <ListItemIcon><LanguageIcon /></ListItemIcon>
                <ListItemText primary="Emerging Markets" />
              </ListItem>
            </Link>

            <Link to="/china" style={styles.itemLink}>
              <ListItem button key="China">
                <ListItemIcon><TranslateIcon /></ListItemIcon>
                <ListItemText primary="China" />
              </ListItem>
            </Link>

            <Link to="/energy" style={styles.itemLink}>
              <ListItem button key="Energy">
                <ListItemIcon><PowerIcon /></ListItemIcon>
                <ListItemText primary="Energy" />
              </ListItem>
            </Link>

            <Link to="/europe" style={styles.itemLink}>
              <ListItem button key="Europe">
                <ListItemIcon><EuroIcon /></ListItemIcon>
                <ListItemText primary="Europe" />
              </ListItem>
            </Link>

          </List>
          <Divider />
          <List>
            <ListItem button key="Orion29">
              <ListItemIcon><StarIcon /></ListItemIcon>
              <ListItemText primary="Orion29" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="Disflation">
              <ListItemIcon><TrendingFlatIcon /></ListItemIcon>
              <ListItemText primary="Disflation" />
            </ListItem>

            <ListItem button key="Deflation">
              <ListItemIcon><TrendingDownIcon /></ListItemIcon>
              <ListItemText primary="Deflation" />
            </ListItem>

            <ListItem button key="Inflation">
              <ListItemIcon><TrendingUpIcon /></ListItemIcon>
              <ListItemText primary="Inflation" />
            </ListItem>

            <ListItem button key="Stagflation">
              <ListItemIcon><MultilineChartIcon /></ListItemIcon>
              <ListItemText primary="Stagflation" />
            </ListItem>
          </List>
          <AmplifySignOut />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

      </main>
    </div >
  );
}

const styles = {
  itemLink: {
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    color: '#333'
  }
}