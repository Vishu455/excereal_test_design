"use client";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Collapse,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

const Sidebar = ({ open, onClose }: {open: any, onClose: any}) => {
  const [openBusiness, setOpenBusiness] = useState(true);
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={onClose}
      sx={{
        width: isMobile ? "100%" : 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isMobile ? "50%" : 280,
          boxSizing: "border-box",
          p: 2,
        },
      }}
    >
      {isMobile && (
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
      )}

      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsf5ntBOvAZJrFfrh4QvqWI3r7lAB6B1Gq6E3nKOO6DVxbCBhhNVzpXXPEn2KVHN4hHI&usqp=CAU" alt="Logo" width={30} />
        <Typography variant="h6" fontWeight="bold">
          BuyWalkin
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" mb={2}>
        <Typography fontWeight="bold">John Doe</Typography>
        <Typography variant="body2" color="text.secondary">
          Trivandrum
        </Typography>
      </Box>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" secondary="Product and service feeds" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBagIcon />
            </ListItemIcon>
            <ListItemText primary="My Orders" secondary="View your order history" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Saved Address" secondary="Edit & Add new address" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" secondary="Manage your account" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => setOpenBusiness(!openBusiness)}>
          <ListItemButton>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="My Business" />
            {openBusiness ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>

        <Collapse in={openBusiness} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Business Icon"
                    width={24}
                    height={24}
                    style={{ borderRadius: "50%" }}
                  />
                </ListItemIcon>
                <ListItemText primary="Coffee Cafe" secondary="Trivandrum" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        <Box display="flex" justifyContent="center" my={2}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ textTransform: "none", borderRadius: "20px", px: 3 }}
          >
            Create
          </Button>
        </Box>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Business Settings" secondary="Edit and Update business info" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;