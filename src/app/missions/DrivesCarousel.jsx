import React from 'react';
import Image from 'next/image';
import { Typography, Box, Card, CardContent, Button, LinearProgress } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';




const DriveCard = ({ drive, driveType }) => {
    const milliseconds = drive.deadline.seconds * 1000 + Math.floor(drive.deadline.nanoseconds / 1000000);
    const endDate = new Date(milliseconds);
    const today = new Date();
    const daysToGo = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
    const progress = Math.min((drive.current / drive.goal) * 100, 100);
    const isCompleted = driveType === 'completed' || daysToGo <= 0;

    return (
        <Card className="flex-shrink-0 w-80 rounded-lg shadow-none">
        <CardContent className="p-4">
            <Box className="relative w-full h-40">
            <Image
                src={drive.images[0].url}
                alt={drive.title}
                layout="fill"
                objectFit="cover"
                className='rounded-lg'
            />
            </Box>
            <Box className="p-4">
            <Typography variant="h6" className="font-bold mb-2">
                {drive.title}
            </Typography>
            <Typography variant="body2" className="text-gray-600 mb-4">
                {drive.description}
            </Typography>
            <Box className="mb-2 flex justify-between">
                <Typography variant="body2" className="font-bold">
                Goal: {drive.goal} {drive.goal > 1 ? 'participants' : 'participant'}
                </Typography>
                <Typography variant="body2" className="text-rys-green-400">
                {isCompleted ? 'Completed' : `${daysToGo} days to go`}
                </Typography>
            </Box>
            <Box className="relative mb-4">
                <LinearProgress 
                variant="determinate" 
                value={progress}
                className="bg-gray-200"
                sx={{
                    height: 6,
                    borderRadius: 3,
                    '& .MuiLinearProgress-bar': {
                    backgroundColor: 'rgb(67, 60, 127)', // rys-purple-600
                    },
                }}
                />
            </Box>
            <Button className="text-bg-rys-green-400 hover:bg-rys-pink-600 w-1/3 mt-4 mx-4">
                More
                <ArrowOutwardIcon sx={{ fontSize: 16, ml: 1 }}/>
            </Button>
            <Button 
                variant="contained" 
                className="bg-rys-pink hover:bg-rys-pink-600 w-1/3 mt-4"
                disabled={isCompleted}
            >
                Join
            </Button>
            </Box>
        </CardContent>
        </Card>
    );
};


const driveModesText = {
    "ongoing": "Know About Our Current Drives and Donate or Join Us!",
    "completed": "Learn About Our Past Drives!"
}

const DrivesCarousel = async ({ driveType, drives }) => {
    const carouselBoxStyle = (driveType === 'ongoing') ? "bg-rys-blue-300 p-12 mt-12 lg:pl-28" : "p-12 mt-12 lg:pl-28"


    return (
        <Box className={carouselBoxStyle}>
        <Box className="flex justify-between items-center mb-8">
            <Box>
            <Typography variant="h4" className="font-bold mb-2">
                <span className='text-rys-purple-600'>
                {driveType === 'ongoing' ? 'Upcoming' : 'Completed'} Drives
                </span>
            </Typography>
            <Typography variant="body1" className="text-gray-600">
                { driveModesText[driveType] }
            </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Button className="min-w-0 p-2 mr-2 bg-rys-purple-600 text-white hover:text-rys-purple-600">
                    <ArrowBackIosNewIcon />
                </Button>
                <Button className="min-w-0 p-2 bg-rys-purple-600 text-white hover:text-rys-purple-600">
                    <ArrowForwardIosIcon />
                </Button>
            </Box>
        </Box>
        
        <Box className="flex space-x-6 overflow-x-hidden pb-4">
            {drives.map((drive, index) => (
            <DriveCard key={index} drive={drive} driveType={driveType} />
            ))}
        </Box>
        </Box>
    );
};

export default DrivesCarousel;