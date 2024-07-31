import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
    return (
        <Box className="mt-12 py-8">
        <Container maxWidth="lg">
            <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className="font-bold mb-4">
                Palini Foundation
                </Typography>
                <Typography variant="body2" className="mb-4">
                We provide trusted donation channel for people of worldwide to support people and organizers.
                </Typography>
                <Box className="flex space-x-4">
                <Link href="#" color="inherit">
                    <FacebookIcon />
                </Link>
                <Link href="#" color="inherit">
                    <TwitterIcon />
                </Link>
                <Link href="#" color="inherit">
                    <GoogleIcon />
                </Link>
                <Link href="#" color="inherit">
                    <YouTubeIcon />
                </Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className="font-bold mb-4">
                About Us
                </Typography>
                <ul className="space-y-2">
                {['Donate', 'Features', 'Causes', 'Events', 'Site Map'].map((item) => (
                    <li key={item}>
                    <Link href="#" className="hover:text-rys-pink" sx={{ textDecoration: 'none' }}>
                        {item}
                    </Link>
                    </li>
                ))}
                </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className="font-bold mb-4">
                Explore
                </Typography>
                <ul className="space-y-2">
                {['Donate', 'Contact', 'Privacy Policy', 'Blog Posts', 'Site Map'].map((item) => (
                    <li key={item}>
                    <Link href="#" className="hover:text-rys-pink" sx={{ textDecoration: 'none' }}>
                        {item}
                    </Link>
                    </li>
                ))}
                </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className="font-bold mb-4">
                Contact
                </Typography>
                <ul className="space-y-2">
                <li>660 Broklyn Street, 88 New York</li>
                <li>needhelp@palini.com</li>
                <li>(+91) 90232-84532</li>
                </ul>
            </Grid>
            </Grid>
        </Container>
        <Typography variant="body2" className="text-center mt-12">
            © Copyright 2024 by Palini Founfation
        </Typography>
        </Box>
    );
};

export default Footer;