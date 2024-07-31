import React from 'react';
import { Typography, Grid, Box, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import missionImg from '@/assets/images/home/missionImg.png'


const features = [
  { number: '01', title: 'Easy To Use', description: 'We provide a trusted donation channel for people' },
  { number: '02', title: 'Reach Everywhere', description: 'We provide a trusted donation channel for people' },
  { number: '03', title: 'Accessible To Everyone', description: 'We provide a trusted donation channel for people' },
];


const MissionGoals = () => {
    return (
      <Box sx={{ mt: 8 }}>
        <Grid container spacing={4} alignItems="center" justifyContent='center' className='p-4'>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" className="text-rys-purple-600 font-bold">
              What We Strive For
            </Typography>
            <Typography variant="h4" className="font-bold mb-4">
              Mission and goals of Palini Foundation
            </Typography>
            <Typography variant="body1" className="mb-6 text-gray-600">
              We provide a trusted donation channel for peoples of <br /> worldwide to support people and organizers.
            </Typography>
            
            {features.map((feature, index) => (
              <Card key={index} className="mb-2 bg-white shadow-sm">
                <CardContent className="flex items-start">
                  <Typography variant="h6" className={`mr-4 font-bold ${
                    index === 0 ? 'text-rys-green-400' :
                    index === 1 ? 'text-rys-pink' :
                    'text-rys-purple-600'
                  }`}>
                    {feature.number}
                  </Typography>
                  <div>
                    <Typography variant="h6" className="font-bold mb-1">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600">
                      {feature.description}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
          
          <Grid item xs={12} md={6} lg={4}>
            <Box className="relative shadow-non">
              <Image 
                src={missionImg}
                alt="Donation volunteer" 
                className="w-full"
              />
              <Box 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rys-purple-600 rounded-full p-2 cursor-pointer"
              >
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default MissionGoals;