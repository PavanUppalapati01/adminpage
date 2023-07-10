import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const OrderCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

 

  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        backgroundColor: colors.primary[400],
        border: "1px solid black",
        borderRadius: "20px",
        display: "flex", // Updated: Display as flex container
        flexDirection: "column", // Updated: Vertically aligned
        justifyContent: "space-between", // Updated: Space between top and bottom content
        gap: "2vh",
      }}
      
    >
      
      <Box
        display="flex"
        alignItems="center"
        margin='20px'
        justifyContent="space-between"
        gridColumn="span 1"
      >
        <Typography variant="h3" color={colors.grey[100]}>
          Order Id
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>
          &#8377; price
        </Typography>
      </Box>
  
       
     
      <div color={colors.greenAccent[400]}>data</div>
      <Box
        display="flex"
        paddingBottom="5vh"
        justifyContent="flex-end" 
        alignItems="left"
        gap="2px"
         // Updated: Add onClick event
        style={{ cursor: "pointer" }} // Updated: Add pointer cursor
      
      >
       <Link to={'/Invoice'}>
        <Typography variant="h5" color={colors.redAccent[300]}>
          view more
        </Typography></Link>
        <ArrowForwardIcon />
        
      </Box>
    </Box>
  );
};

export default OrderCard;
