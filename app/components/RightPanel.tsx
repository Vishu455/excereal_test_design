"use client";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const businesses = [
  { name: "McDonald's", location: "Trivandrum", favorites: "16524" },
  { name: "McDonald's", location: "Trivandrum", favorites: "16524" },
  { name: "McDonald's", location: "Trivandrum", favorites: "16524" },
  { name: "McDonald's", location: "Trivandrum", favorites: "16524" },
  { name: "McDonald's", location: "Trivandrum", favorites: "16524" },
];

const RightPanel = () => {
  return (
    <Box sx={{ width: 280, p: 2 }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Business you might like
      </Typography>

      <List>
        {businesses.map((business, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <ListItemIcon>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Business Icon"
                  width={32}
                  height={32}
                  style={{ borderRadius: "50%" }}
                />
              </ListItemIcon>
            
                <ListItemText
                  primary={business.name}
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {business.location} <br /> {business.favorites} favorites
                    </Typography>
                  }
                />
              
              <Box sx={{ ml: "auto" }}>
                <FavoriteBorderIcon sx={{ color: "#666" }} />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

<Divider sx={{ my:3 }} /> 
      <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
        Privacy Policy
      </Typography>
      <Typography variant="body2" sx={{ cursor: "pointer" }}>
        Terms of Service
      </Typography>
    </Box>
  );
};

export default RightPanel;
