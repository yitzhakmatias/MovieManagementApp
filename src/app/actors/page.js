"use client";

import { useQuery } from "@tanstack/react-query";
import { getActors } from "@/services/movieService";
import { CircularProgress, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const Actors = () => {
    const { data: actors, isLoading, error } = useQuery({ queryKey: ["actors"], queryFn: getActors });

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Error loading actors</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Actors
            </Typography>
            <Grid container spacing={3}>
                {actors.map((actor) => (
                    <Grid item xs={12} sm={6} md={4} key={actor.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{actor.name}</Typography>
                                <Typography>Age: {actor.age}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Actors;
