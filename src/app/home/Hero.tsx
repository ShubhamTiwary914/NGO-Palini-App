import React from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';

import Image from 'next/image';
import heroImage from '@/assets/images/home/heroImg.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Hero = () => {
    return (
    <Box className="flex flex-col">
        <Box className="flex flex-1 bg-rys-blue-300" sx={{ pt: 3, pb: 3 }}>
            <div className="flex flex-col justify-center px-8 md:px-16 lg:pl-20 w-auto lg:w-1/2 animate__animated animate__fadeInLeft">
                <Typography variant="body2" className="text-rys-purple-600 font-bold">
                    WELCOME TO PALINI FOUNDATION
                </Typography>
                <Typography variant="h2" className="text-4xl md:text-5xl font-bold mb-4">
                    Do Something Great<br />to make a Change
                </Typography>
                <Typography variant="body1" className="mb-8 font-satoshi" >
                    We Aim to Provide Our Support headfirst for the needy. <br/>
                    Be a Part by Contributing to Our Charities
                </Typography>
                <div className="flex space-x-5">
                    {/* <TextField
                        variant="outlined"
                        className="bg-white"
                        sx={{ width: '40%', height: '10%' }}
                        label="Donation Amount (Rs)"
                    /> */}
                    <Typography sx={{ textDecoration: 'none' }}>   
                        <Button variant="contained" className="bg-rys-pink lg:px-8 lg:py-4" sx={{ borderRadius: 2 }}>
                            Donate
                        </Button>
                    </Typography>

                    <Typography sx={{ textDecoration: 'none', }}>   
                        <Button sx={{  borderRadius: 2,  color: 'black'}} className='lg:mt-4'>
                            <ArrowRightIcon/>
                            About Our Drives
                        </Button>
                    </Typography>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-center w-1/2">
                <Image src={heroImage} alt="Donation" className="max-w-fit h-auto animate__animated animate__fadeIn" />
            </div>
        </Box>
    </Box>
    );
};

export default Hero;