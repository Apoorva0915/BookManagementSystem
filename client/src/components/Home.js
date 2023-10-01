import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const externalImage ="https://c1.wallpaperflare.com/preview/608/164/965/library-books-education-knowledge.jpg"
  return (
    <div
     style={{
        backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: "100vh",
         }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 30 }}
          variant="contained"
        >
          <Typography variant="h3">View All BOOKS</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
