import React from 'react';
import { Typography, Box } from '@mui/material';

// Dummy data (to be replaced with actual data fetching later)
const getDummyStats = () => [
    { value: '21', label: 'Drives Hosted' },
    { value: '200+', label: 'Donation Acts' },
    { value: '19k', label: 'Raised in Campaigns' },
];


//@ts-ignore
const StatItem = ({ value, label }) => (
    <Box className="text-center">
        <Typography variant="h2" component="div" className="font-bold text-4xl md:text-5xl lg:text-6xl">
            {value}
        </Typography>
        <Typography variant="overline" className="text-gray-700 mt-2 semibold">
            {label}
        </Typography>
    </Box>
);

const Stats = async () => {
    // In the future, replace this with an actual API call
    const stats = getDummyStats();

    return (
        <Box className="w-full py-12 bg-white">
            <Box className="container mx-auto p-5">
                <Box className="flex justify-center items-center text-rys-purple-600">
                    <Typography variant="overline" className="text-rys-purple-600 font-semibold">
                        OUR ACHIEVEMENTS
                    </Typography>
                </Box>
            </Box>
            <Box className="container mx-auto px-4">
                <Box className="flex justify-center items-center space-x-8 md:space-x-16 lg:space-x-24">
                {stats.map((stat, index) => (
                    <StatItem key={index} value={stat.value} label={stat.label} />
                ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Stats;