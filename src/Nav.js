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
import PieChartIcon from '@material-ui/icons/PieChart';
import StarIcon from '@material-ui/icons/Star';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import { Link } from 'react-router-dom';

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
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
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
            
              <ListItem button key="USequities">
                <Link to="/MyHome" className="nav-links">
                <ListItemIcon><InsertChartIcon /></ListItemIcon>
                <ListItemText primary="USequities" />
                </Link>
              </ListItem>
              <ListItem button key="Technology">
                <ListItemIcon><InsertChartIcon /></ListItemIcon>
                <ListItemText primary="Technology" />
              </ListItem>     
              <ListItem button key="MIddleeast">
                <ListItemIcon><InsertChartIcon /></ListItemIcon>
                <ListItemText primary="MIddleeast" />
              </ListItem>  
              <ListItem button key="Healthcare">
                <ListItemIcon><InsertChartIcon /></ListItemIcon>
                <ListItemText primary="Healthcare" />
              </ListItem>  
              <ListItem button key="Global">
                <ListItemIcon><InsertChartIcon /></ListItemIcon>
                <ListItemText primary="Global" />
              </ListItem>  
              <ListItem button key="Emerging Markets">
                <ListItemIcon><InsertChartIcon /></ListItemIcon>
                <ListItemText primary="Emerging Markets" />
              </ListItem>  
              <ListItem button key="China">
                <ListItemIcon><InsertChartIcon /></ListItemIcon>
                <ListItemText primary="China" />
              </ListItem>  
              <ListItem button key="Energy">
                <ListItemIcon><InsertChartIcon /></ListItemIcon>
                <ListItemText primary="Energy" />
              </ListItem>                                                                        
              <ListItem button key="Europe">
                <ListItemIcon><InsertChartIcon /></ListItemIcon>
                <ListItemText primary="Europe" />
              </ListItem>    
            
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
                <ListItemIcon><PieChartIcon /></ListItemIcon>
                <ListItemText primary="Disflation" />
                </ListItem>    

                <ListItem button key="Deflation">
                <ListItemIcon><PieChartIcon /></ListItemIcon>
                <ListItemText primary="Deflation" />
                </ListItem>    

                <ListItem button key="Inflation">
                <ListItemIcon><PieChartIcon /></ListItemIcon>
                <ListItemText primary="Inflation" />
                </ListItem>    

                <ListItem button key="Stagflation">
                <ListItemIcon><PieChartIcon /></ListItemIcon>
                <ListItemText primary="Stagflation" />
                </ListItem>    
          </List>                                        
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

      </main>
    </div>
  );
}
