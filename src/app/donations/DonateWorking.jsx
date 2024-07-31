import React from 'react';
import { Typography, Grid, Box, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import missionImg from '@/assets/images/home/missionImg.png'


const features = [
    { number: '01', title: 'Goal For Our Campaigns', description: 'We have a target goal for each of our Donation Campigns' },
    { number: '02', title: 'Charity With Drive', description: 'After Donation Campaigns, our Members visit for Donation' },
    { number: '03', title: 'Updates on Drives', description: 'Once Our Drives is completed, updates are present in our blog' },
];


const DonationWorking = () => {
    return (
        <Box sx={{ mt: 8 }} >
            <Grid container spacing={4} alignItems="center" justifyContent='center' className='p-4'>
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

                <Grid item xs={12} md={6}>
                    <Typography variant="overline" className="text-rys-purple-600 font-semibold">
                    HOW IT WORKS
                    </Typography>
                    <Typography variant="h4" className="font-bold mb-4">
                    Donation Campaigns
                    </Typography>
                    <Typography variant="body1" className="mb-6 text-gray-600">
                    We provide a trusted donation channel for peoples of <br /> worldwide to support people and organizers.
                    </Typography>
                    
                    {features.map((feature, index) => (
                    <Card key={index} className="mb-2 bg-white shadow-none">
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

            </Grid>
        </Box>
    );
};

export default DonationWorking;