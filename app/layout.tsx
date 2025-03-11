"use client";
import { Box, CssBaseline } from "@mui/material";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
};

export default Layout;  
