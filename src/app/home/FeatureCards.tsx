import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Container, Box } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CampaignIcon from '@mui/icons-material/Campaign';
import FavoriteIcon from '@mui/icons-material/Favorite';

const features = [
    {
        icon: <VolunteerActivismIcon fontSize="large" className="text-rys-purple-600" />,
        title: 'Become Volunteer',
        description: 'Become A Volunteer If You Are A Devoted & Ready To Support People And The Community.',
    },
    {
        icon: <CampaignIcon fontSize="large" className="text-rys-green-400" />,
        title: 'Quick Fundraise',
        description: 'The Simplest And Quickest Way To Make A Donation, So You Can Support People In Need.',
    },
    {
        icon: <FavoriteIcon fontSize="large" className="text-rys-pink" />,
        title: 'Start Donating',
        description: 'Start Donating For Our Campaigns To Support Poor People And Our Children To School.',
    },
];

const FeatureCards = () => {
    return (
        <Container maxWidth="lg" className="py-12">
        <Typography variant="body2" className="text-center text-rys-purple-600 font-bold">
            OUR FEATURES
        </Typography>
        <Typography variant="h4" className="text-center mb-4  font-bold">
            We Believe that We can Save<br />More Lives with you
        </Typography>
        <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card className="h-full flex flex-col items-center text-center p-6 shadow-none">
                <CardContent>
                    <Box className="mb-4 text-4xl">{feature.icon}</Box>
                    <Typography variant="h6" className="mb-2 font-bold">
                    {feature.title}
                    </Typography>
                    <Typography variant="body2" className="mb-4">
                    {feature.description}
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
        <div className="text-center mt-2">
            <Button
            variant="contained"
            className="bg-rys-pink hover:bg-rys-pink-600 text-white"
            >
            Donate now
            </Button>
        </div>
        </Container>
    );
};

export default FeatureCards;