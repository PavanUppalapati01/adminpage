import {ColorModeContext,useMode} from "./theme";
import {Routes,Route}from "react-router-dom";
import {CssBaseline,ThemeProvider} from '@mui/material';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Dashboard from "./scenes/dashboard";
import Orders from "./scenes/Orders/Orders";
import Invoice from "./components/Invoice";
import Menu from "./scenes/menu/menu";
import "./App.css"
// import ads from "./scenes/ads/ads";
function App() {
  const [theme,colorMode]=useMode();

  return( 
  <ColorModeContext.Provider value={colorMode}>
   <ThemeProvider theme={theme}>
  <CssBaseline />
  <div className="app">
    <Sidebar  />
    <main className="content" float="right">
    <Topbar   />
      <Routes>
        <Route path="/" element={<Dashboard />}/> 
         <Route path="/team" element={<Team />}/> 
         <Route path="/Orders" element={<Orders/>}/>
         <Route path="/Menu" element={<Menu/>}/>
         <Route path="/Invoice" element={<Invoice/>}/>
         {/* <Route path="/ads" element={<ads/>}/> */}
        </Routes>
    </main>
    </div>
    
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;

