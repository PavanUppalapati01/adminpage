import {Box,IconButton,useTheme}from "@mui/material";
import {useContext}from "react";
import {ColorModeContext} from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


const Topbar=()=>{
    const theme =useTheme();
    const colorMode=useContext(ColorModeContext);
    return (
     
      <Box display="flex" width="auto"justifyContent="right" p={2}>
    
       {/* <Box float="right"width="fit-content" float="right"> */}
        <IconButton onClick={colorMode.toggleColorMode} float="right">
          {
            theme.palette.mode === "dark" ? (<DarkModeOutlinedIcon/>): (<LightModeOutlinedIcon/>)
          }
          </IconButton>
          <IconButton float="right">
            <NotificationsOutlinedIcon/>
            </IconButton>
            
            <IconButton  float="right">
              <PersonOutlinedIcon/>
            </IconButton>
            
      </Box>
  
    );
}
export default Topbar;