import React,{Component} from 'react'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';


const styles = {
  logo: {
    borderRadius: '50%',
    height: '3rem',
    width: '3rem',
  }
}



export class CieBar extends Component {
  render() {
    return(
      <AppBar
        showMenuIconButton={false}
        iconElementLeft={<img style={styles.logo}/>}
        iconElementRight = {<IconMenu
                      iconButtonElement= {
                          <IconButton><Menu/></IconButton>
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
