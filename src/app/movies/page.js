"use client"; // Ensure this runs on the client

import { useEffect, useState } from "react";
import { useMovies } from "@/hooks/useMovies";
import { CircularProgress, Container, Typography, Grid, Card, CardContent, Chip } from "@mui/material";

const Movies = () => {
    const [isClient, setIsClient] = useState(false); // State to check if it's running on the client side
    const { data: movies, isLoading, error } = useMovies();

    useEffect(() => {
        setIsClient(true); // Set the state to true once client-side rendering occurs
    }, []);

    // If it's not the client-side, avoid rendering the data
    if (!isClient) {
        return <div>Loading...</div>; // Or return null to avoid rendering during SSR
    }

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Error loading movies</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Movies
            </Typography>
            <Grid container spacing={3}>
                {movies.map((movie) => (
                    <Grid item xs={12} sm={6} md={4} key={movie.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{movie.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Release Date: {new Date(movie.releaseDate).toLocaleDateString()}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Description: {movie.description}
                                </Typography>

                                <div style={{ marginTop: "1rem" }}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Ratings:
                                    </Typography>
                                    {movie.ratings.map((rating) => (
                                        <div key={rating.id}>
                                            <Chip label={`Score: ${rating.score}`} color="primary" size="small" style={{ marginRight: "0.5rem" }} />
                                            <Typography variant="body2">{rating.comment}</Typography>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: "1rem" }}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Actors:
                                    </Typography>
                                    {movie.actors.map((actor) => (
                                        <Chip key={actor.id} label={actor.name} style={{ marginRight: "0.5rem" }} />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Movies;
