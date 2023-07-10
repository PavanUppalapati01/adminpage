import {  Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "./Header";
const Invoice=()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
  
    return(
        <Box
        sx={{
          width: "80%",
          height: "70vh",
          margin:"10vh",
          backgroundColor: colors.primary[400],
          border: "1px solid black",
          borderRadius: "20px",
          display: "flex", // Updated: Display as flex container
          flexDirection: "column", // Updated: Vertically aligned
          justifyContent: "space-between", // Updated: Space between top and bottom content
          gap: "2vh",
        }}
        
      >
        
        </Box>
    )
}
export default Invoice;