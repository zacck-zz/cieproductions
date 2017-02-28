import React,{Component} from 'react'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';





export class CieBar extends Component {
  render() {
    return(
      <AppBar
        showMenuIconButton={false}
        iconElementRight = {<IconMenu
                      iconButtonElement= {
                          <IconButton><Menu/></IconButton>
                      }
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                    <MenuItem primaryText="Home" />
                    <MenuItem primaryText="Add Hour" />
                    <MenuItem primaryText="Map" />
                    <MenuItem primaryText="About HapiHours" />
                  </IconMenu>}

      />
    )
  }
};

export default CieBar;
