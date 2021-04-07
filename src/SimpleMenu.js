import React from "react";
import Typography from "@material-ui/core/Typography";
import {useHistory} from 'react-router-dom';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SimpleMenu({ title, ListofItem }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const history=useHistory()
  const pushURL=(endpoint)=>history.push(`/${endpoint}`)

  return (
    <div>
      <Typography
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {title}
      </Typography>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {" "}
        {ListofItem.map((el) => (
          <MenuItem onClick={()=>{pushURL(el.split(' ').join(''));handleClose()}}>{el}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
