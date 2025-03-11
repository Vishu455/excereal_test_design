"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 500, borderRadius: 2, boxShadow: 3, mb: 2 }}>
      <Box display="flex" alignItems="center" p={2}>
        <CardMedia
          component="img"
          image="data:image/jpeg;base64,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"
          alt="Lifestyle Logo"
          sx={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <Box ml={1} flexGrow={1}>
          <Typography variant="subtitle2" fontWeight="bold">
            Lifestyle Trivandrum, 1.2 KM
          </Typography>
          <Typography variant="body2" color="text.secondary">
            away - Open now
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Fashion Retail
          </Typography>
        </Box>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>

      <CardMedia
        component="img"
        height="280"
        image="https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/lifestyle/1000008434819-Blue-BLUE-1000008434819_04-2100.jpg"
        alt="Product Image"
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          MELANGE Women Printed A-line Dress
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Designed with a printed pattern, this A-line dress is detailed with a
          round neck, 2-pockets, and an elegant look.
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">₹1,319</Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body2" color="text.secondary">
              24 (Amazing)
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={1}
        >
          <Box>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <BookmarkBorderIcon />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            sx={{ textTransform: "none", borderRadius: "20px", px: 4 }}
          >
            Add
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
