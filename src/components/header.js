import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { navigate } from 'gatsby';

// This implementation follows the design for the "Persistent Drawer" at https://material-ui.com/demos/drawers/
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class Header extends Component {

  constructor( props ) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleDrawerOpen = () => {
    this.setState((state) => { 
      return {open: state.open = true} }
    );
  };

  handleDrawerClose = () => {
    this.setState((state) => { 
      return {open: state.open = false} }
    );
  };

  render() {

    const { classes, theme } = this.props;
    const { open } = this.state;

    return(
      <div 
        className={classes.root}
        style={{
          background: this.props.backgroundColor,
          marginBottom: '1.45rem',
        }}
      >
        <CssBaseline />

        {/* App Bar */}
        <AppBar 
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <Toolbar disableGutters={!open}>
            <IconButton 
              color="inherit" 
              aria-label="Menu" 
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}>
              <Icon 
                color="inherit"
                aria-label="Open drawer">
                  menu
              </Icon>
            </IconButton>
            <Typography variant="h6" color="inherit">
              {this.props.siteTitle}
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <Icon > chevron_left </Icon>
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => navigate('/')}>
              <ListItemIcon> <Icon > home </Icon> </ListItemIcon>
              <ListItemText> Home Page </ListItemText>
            </ListItem>
            <ListItem button onClick={() => navigate('/blog/')}>
              <ListItemIcon> <Icon> computer </Icon> </ListItemIcon>
              <ListItemText> Blog </ListItemText>
            </ListItem>
            <ListItem button onClick={() => navigate('/app-library/')}>
              <ListItemIcon> <Icon> smartphone </Icon> </ListItemIcon>
              <ListItemText> App Library </ListItemText>
            </ListItem>
            <ListItem button onClick={() => navigate('/tips/')}>
              <ListItemIcon> <Icon> sentiment_very_satisfied </Icon> </ListItemIcon>
              <ListItemText> Buy Me Coffee </ListItemText>
            </ListItem>
            <ListItem button component="a" href='https://github.com/ax-vasquez/mando-blog'>
              <ListItemIcon> <Icon> keyboard_arrow_right </Icon> </ListItemIcon>
              <ListItemText> Github </ListItemText>
            </ListItem>
            <ListItem button component="a" href="https://www.linkedin.com/in/axvasquez/" >
              <ListItemIcon> <Icon> keyboard_arrow_right </Icon> </ListItemIcon>
              <ListItemText> LinkedIn </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
    
  }
  
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
