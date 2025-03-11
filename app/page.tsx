"use client";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProductCard from "./components/ProductCard";
import RightPanel from "./components/RightPanel";

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <CssBaseline />
      
      <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        
        <Box
          sx={{
            width: isMobile ? "100%" : "83%",
            position: "fixed",
            top: 0,
            left: isMobile ? 0 : 280,
            zIndex: 1000,
            fontSize:isMobile ? "0.2rem":"0.75rem",
            background: "#fff",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        </Box>

        <Box sx={{ display: "flex", flexGrow: 1, mt: 2 }}>
          
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              p: 4,
              overflowY: "auto",
              height: "calc(100vh - 64px)",
              background: "#f0f0f0",
            }}
          >
            <Box sx={{ maxWidth: 500, width: "100%" }}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Box>
          </Box>

           {!isMobile && (
            <Box
              sx={{
                width: 330,
                flexShrink: 0,
                borderLeft: "1px solid #ddd",
                overflowY: "auto",
                height: "calc(100vh - 64px)",
              }}
            >
              <RightPanel />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;