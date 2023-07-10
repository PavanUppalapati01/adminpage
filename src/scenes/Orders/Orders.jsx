import {  Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import OrderCard from "./Card";

const Orders = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
  <Box display="flex" justifyContent="left" alignItems="left">
        <Header title="Order History"  />
    </Box>
     
    <Box
       
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        width="80%"
        gap="4vh"
        overflow="scroll"
        height="80vh"
        
      >
        <OrderCard height="5vh" />
        <OrderCard height="5vh" />
        <OrderCard height="5vh" />
        <OrderCard height="5vh" />
        <OrderCard height="5vh" />
        <OrderCard height="5vh" />
        <OrderCard height="5vh" />
        <OrderCard height="5vh" />
        <OrderCard height="5vh" />
        <OrderCard height="5vh" />
        <OrderCard height="5vh" />
      







    </Box>
    </Box>
)}
export default Orders;