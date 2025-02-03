"use client";

import { useMovies } from "@/hooks/useMovies";
import { CircularProgress, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const Movies = () => {
    const { data: movies, isLoading, error } = useMovies();

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
                                <Typography>Release Year: {movie.year}</Typography>
                                <Typography>Genre: {movie.genre}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Movies;
