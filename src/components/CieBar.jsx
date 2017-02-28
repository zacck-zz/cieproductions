import React,{Component} from 'react'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';



const styles = {
  logo: {
    borderRadius: '50%',
    height: '3rem',
    width: '3rem',
    verticalAlign: 'middle'
  },
  menu: {
    color: '#000000',
  }
}



export class CieBar extends Component {
  render() {
    return(
      <AppBar
        iconElementLeft={<img style={styles.logo} src={require('../assets/bar_logo.png')}/>}
        iconElementRight = {<IconMenu
                      iconButtonElement= {
                          <IconButton style={styles.menu}><MoreVertIcon style={styles.menu}/></IconButton>
                      }
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                    <MenuItem primaryText="CIEPROD" />
                    <MenuItem primaryText="WE ARE" />
                    <MenuItem primaryText="SOCIAL CHANGE" />
                    <MenuItem primaryText="AWEH" />
                  </IconMenu>}

      />
    )
  }
};

export default CieBar;
