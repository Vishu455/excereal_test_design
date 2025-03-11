"use client";
import { AppBar, Toolbar, Typography, IconButton, InputBase, Divider, Button, Box, useMediaQuery } from "@mui/material";
import { Search, Notifications, FilterList, Menu as MenuIcon } from "@mui/icons-material";
import { styled } from "@mui/system";

const SearchBar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e0e0e0",
  padding: "8px 15px",
  borderRadius: "25px",
  width: "260px", 
  maxWidth: "100%",
  flexGrow: 1, 
}));

const NotificationIcon = styled(Box)({
  position: "relative",
  display: "inline-block",
  color:"#e0e0e0"
});

const NotificationDot = styled(Box)({
  position: "absolute",
  top: 5,
  right: 5,
  width: 10,
  height: 10,
  backgroundColor: "red",
  borderRadius: "50%",
});

const Topbar = ({ onMenuClick }: { onMenuClick: any }) => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "#ffffff", boxShadow: "none", px: 2 }}>
        <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 70 }}>
          
          
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton onClick={onMenuClick} sx={{ display: { md: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Box>
              <Typography variant="body1" fontWeight="bold"sx={{color:"black"}}>Park Centre ▼</Typography>
              <Typography variant="caption" color="text.secondary">
                Park Centre, Technopark Campus...
              </Typography>
            </Box>
          </Box>

         
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", minWidth: 200 }}>
            <SearchBar sx={{ maxWidth: isMobile ? "200px" : "300px" }}> 
              <Search color="action" />
              <InputBase placeholder="Search…" sx={{ marginLeft: 1, flex: 1 }} />
            </SearchBar>
          </Box>
 
          <NotificationIcon>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <NotificationDot />
          </NotificationIcon>
        </Toolbar>
      </AppBar>

      <Divider />

      <Box sx={{ padding: "8px 12px", display: "flex", gap: 1.5, flexWrap: "wrap" }}>
        <Button startIcon={<FilterList />} variant="outlined" sx={{ borderRadius: "15px", px: 2, fontSize: "0.75rem", textTransform: "none" }}>
          Filter
        </Button>
        <Button variant="contained" sx={{ borderRadius: "15px", px: 2, fontSize: "0.75rem", textTransform: "none" }}>
          Category
        </Button>
        <Button variant="outlined" sx={{ borderRadius: "15px", px: 2, fontSize: "0.75rem", textTransform: "none" }}>
        Category
        </Button>
        <Button variant="outlined" sx={{ borderRadius: "15px", px: 2, fontSize: "0.75rem", textTransform: "none" }}>
          Category
        </Button>
        <Button variant="outlined" sx={{ borderRadius: "15px", px: 2, fontSize: "0.75rem", textTransform: "none" }}>
          Category
        </Button>
        <Button variant="outlined" sx={{ borderRadius: "15px", px: 2, fontSize: "0.75rem", textTransform: "none" }}>
          More...
        </Button>
      </Box>

      <Divider />
    </Box>
  );
};

export default Topbar;
