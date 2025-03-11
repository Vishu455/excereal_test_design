"use client";
import { AppBar, Toolbar, Typography, IconButton, InputBase, Divider, Button, Box } from "@mui/material";
import { Search, Notifications, FilterList, Menu as MenuIcon } from "@mui/icons-material";
import { styled, useMediaQuery } from "@mui/system";


const SearchBar = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f1f1f1",
  padding: "5px 10px",
  borderRadius: "20px",
  width: "180px",
});

const NotificationIcon = styled(Box)({
  position: "relative",
  display: "inline-block",
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
    
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            
            <IconButton onClick={onMenuClick} sx={{ display: { md: "none" } }}>
              <MenuIcon />
            </IconButton>
            
            <Box>
              <Typography variant="body1">Park Centre ▼</Typography>
              <Typography variant="caption" color="text.secondary">
                Park Centre, Technopark Campus...
              </Typography>
            </Box>
          </Box>

          
          <SearchBar>
            <Search color="action" />
            <InputBase placeholder="Search…" sx={{ marginLeft: 1, width: "100%" }} />
          </SearchBar>

          
          <NotificationIcon>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <NotificationDot />
          </NotificationIcon>
        </Toolbar>
      </AppBar>

       <Divider />

      <Box sx={{ padding: "6px 8px", display: "flex", gap: 1.5, flexWrap: "wrap" }}>
        <Button startIcon={<FilterList />} variant="outlined" sx={{ borderRadius: "15px", px: 2, fontSize: "0.75rem", textTransform: "none" }}>
          Filter
        </Button>
        <Button variant="contained" sx={{ borderRadius: "15px", px: 2, fontSize: "0.75rem", textTransform: "none" }}>
          Category
        </Button>
        <Button variant="outlined" sx={{ borderRadius: "15px", px: 2, fontSize: "0.75rem", textTransform: "none" }}>
          CATEGORY
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