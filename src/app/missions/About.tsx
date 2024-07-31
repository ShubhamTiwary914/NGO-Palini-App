import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

import missionImg from '@/assets/images/home/missionImg.png';

const AboutSection = () => {
    return (
        <div className="bg-rys-blue-300 py-16">
        <div className="container mx-auto px-4">
            <Grid container spacing={4} alignItems="stretch">
                <Grid item xs={12} md={6} className="flex flex-col items-center">
                    <div className="w-full h-full relative rounded-lg overflow-hidden mb-4">
                        <Image 
                            src={missionImg}
                            alt="About Us" 
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="h-full flex flex-col justify-center">
                    <Typography variant="overline" className="text-rys-purple-600 font-semibold">
                        ABOUT US
                    </Typography>
                    <Typography variant="h4" className="text-black font-bold mt-2 mb-4">
                        Helping People In Need
                    </Typography>
                    <Typography variant="body2" className="text-gray-600 mb-6">
                        What We Focus on here at Palini Foundation
                    </Typography>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <BloodtypeIcon className="text-rys-pink mr-3 mt-1" />
                            <div>
                                <Typography variant="h6" className=" font-semibold">
                                Donations
                                </Typography>
                                <Typography variant="body2" className="text-gray-600">
                                Providing assistance in the form of money and clothing to help others.
                                </Typography>
                            </div>
                            </div>
                            <div className="flex items-start">
                                <VolunteerActivismIcon className="text-rys-green-400 mr-3 mt-1" />
                            <div>
                                <Typography variant="h6" className="font-semibold">
                                Volunteering Drives
                                </Typography>
                                <Typography variant="body2" className="text-gray-600">
                                Providing assistance in the form of time, skills and knowledge to help others.
                                </Typography>
                            </div>
                        </div>
                        <Button 
                            variant="outlined" 
                            endIcon={<ArrowForwardIcon />}
                            className="text-rys-purple-600 border-rys-purple-600 hover:bg-transparent no mt-4"
                            sx={{ 
                                textTransform: 'none',
                                '&:hover': { 
                                    backgroundColor: 'transparent',
                                '& .MuiButton-endIcon': {
                                    transform: 'translateX(4px)',
                                    transition: 'transform 0.2s'
                                }
                                }
                            }}  
                        >
                            Check Out Our Drives
                        </Button>
                        </div>
                    </div>
                </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AboutSection;