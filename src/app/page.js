"use client";

import { Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
      <Container sx={{ textAlign: "center", p: 5 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Movie Management
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" sx={{ m: 1 }} component={Link} href="/movies">
            View Movies
          </Button>
        </Box>
      </Container>
  );
}
