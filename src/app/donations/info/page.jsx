"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Typography, Container, Paper, LinearProgress, TextField, Button, IconButton, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function DonationPage({ searchParams }) {
  const donationData = {
    id: searchParams.id,
    title: searchParams.title,
    description: searchParams.description,
    images: JSON.parse(searchParams.images),
    goal: parseFloat(searchParams.goal),
    current: parseFloat(searchParams.current),
    donationId: searchParams.donationId,
    deadline: new Date(parseInt(searchParams.deadline) * 1000),
    baseUnit: 100,
  };

  const [amount, setAmount] = useState(donationData.baseUnit);

  const handleAmountChange = (change) => {
    setAmount((prevAmount) => {
      const newAmount = prevAmount + change;
      return newAmount >= donationData.baseUnit ? newAmount : donationData.baseUnit;
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt:12 }}>
      <Paper elevation={3} className="p-6">
        <div className="mb-6 flex justify-center">
          <Carousel 
            showThumbs={false} 
            infiniteLoop 
            autoPlay
            swipeable={true}
            statusFormatter={(current, total) => (
              <span style={{
                color: 'white',
                textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
                fontSize: '16px',
                fontWeight: 'bold'
              }}>
                {`${current} of ${total}`}
              </span>
            )}
            className='lg:w-1/2 w-full'
          >
            
              {donationData.images.map((image, index) => (
                <div key={index} className="h-96 w-full relative">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
          </Carousel>
        </div>

        <Typography variant="h4" gutterBottom>
          {donationData.title}
        </Typography>

        <Typography variant="h6" paragraph>
          {donationData.description}
        </Typography>

        <Box className="flex justify-between" sx={{ mt:6 }}> 
        <Typography variant="h6" className="text-rys-purple-600">
            Raised: ${donationData.current.toLocaleString()}
          </Typography>

          <Typography variant="h6">
            Goal: ${donationData.goal.toLocaleString()}
          </Typography>
        </Box>

        <Box className='relative'>
          <LinearProgress
            variant="determinate"
            value={(donationData.current / donationData.goal) * 100}
            className="h-2 rounded-full bg-gray-200"
            sx={{
              height: 6,
              borderRadius: 3,
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'rgb(67, 60, 127)', // rys-purple-600
              },
            }}
          />
        </Box>

        <Box className="p-2" sx={{ mt:8 }}>
          <Typography variant="h5" gutterBottom>
            Donate for {donationData.title}
          </Typography>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <TextField label="Your name *" variant="outlined" fullWidth />
            <TextField label="Your email" variant="outlined" fullWidth />
          </div>
          
          <TextField label="Contact No." variant="outlined" fullWidth className="mb-4" />
          
          <TextField
            label="Add a Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            className="mb-4"
          />
          
          <div className="flex items-center mb-4">
            <Typography variant="h6" className="mr-4">
              Total Amount
            </Typography>
            <TextField
              value={amount}
              onChange={(e) => setAmount(Math.max(donationData.baseUnit, parseInt(e.target.value) || 0))}
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: donationData.baseUnit } }}
            />
            <IconButton onClick={() => handleAmountChange(-donationData.baseUnit)} color="primary">
              <Remove />
            </IconButton>
            <IconButton onClick={() => handleAmountChange(donationData.baseUnit)} color="primary">
              <Add />
            </IconButton>
          </div>
          
         <Box className='flex justify-center' sx={{mt: 5}}>
          <Button
              variant="contained"
              className="bg-rys-pink hover:bg-rys-purple-600 text-white w-1/2"
            >
              Donate Now
            </Button>
         </Box>
        </Box>
      </Paper>
    </Container>
  );
}