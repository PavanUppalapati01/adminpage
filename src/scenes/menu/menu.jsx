import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const OrderCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

 

  return (
    <>
    <Box
       
       display="grid"
       gridTemplateColumns="repeat(3, 1fr)"
       width="80%"
       gap="4vh"
       height="90%"
       margin="10px"
       
     >
       
    </Box>
    </>
  );
};

export default OrderCard;
