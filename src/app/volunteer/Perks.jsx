
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import missionImg from '@/assets/images/home/missionImg.png'


const Perks = () => {
    return (
        <Box className="bg-rys-blue-300 p-8">
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                <Box className="relative w-full h-[400px]">
                    <Image
                        src={missionImg}
                        alt="Charity work"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant="overline" className="text-rys-green-400 font-bold">
                    BE A PART OF PALINI!
                </Typography>
                <Typography variant="h4" className="font-bold">
                    We are the Powerful, Free Fundraising Platform
                </Typography>
                <Typography variant="body1" className="text-gray-600 mb-6">
                    Proven, multi-purpose crowdfunding technology for effective organizational individual fundraising.
                </Typography>
                {['Join Our Drives', 'Share With Family And Friends', 'Manage Donations'].map((text, index) => (
                    <Box key={index} className="flex items-center mb-3">
                    <CheckCircleOutlineIcon className="text-rys-green-400 mr-2" />
                    <Typography variant="body1">{text}</Typography>
                    </Box>
                ))}
                <Button 
                    variant="contained" 
                    endIcon={<ArrowForwardIcon />}
                    className="mt-6 bg-rys-pink hover:bg-opacity-90 text-white"
                >
                    Learn More
                </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Perks;