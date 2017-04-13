import React,{Component} from 'react'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {hashHistory} from 'react-router'
import Home from 'material-ui/svg-icons/action/home'



const styles = {
  logo: {
    borderRadius: '50%',
    height: '3rem',
    width: '3rem',
    verticalAlign: 'middle'
  },
  menu: {
    color: '#000000',
  },
  item : {
    color: '#f9d57e',
    fontWeight: '900',
    cursor: 'pointer'
  }

}



export class CieBar extends Component {
  render() {
    return(
      <AppBar
        iconElementLeft={<img style={styles.logo} src={require('../assets/bar_logo_color.png')}/>}
      >
      <MenuItem
        primaryText="HOME"
        style={styles.item}
        onTouchTap={() => {
          hashHistory.push('/')
        }}/>
      <MenuItem
        primaryText="WE ARE"
        style={styles.item}
        onTouchTap={() => {
          hashHistory.push('/about')
        }}/>
      <MenuItem
        primaryText="SOCIAL CHANGE"
        style={styles.item}
        onTouchTap={() => {
          hashHistory.push('/change')
        }}/>
      <MenuItem
        primaryText="AWEH"
        style={styles.item}
        onTouchTap={() => {
          hashHistory.push('/contact')
        }}
        />
      </AppBar>
    )
  }
};

export default CieBar;
