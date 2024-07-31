"use client"
import React, { useState, useEffect, Suspense } from 'react';
import { Box, Typography, Card, CardContent, Button, LinearProgress, Grid, Skeleton } from '@mui/material';
import Image from 'next/image';
import Donations from './../../store/controllers/donations.store'
import Link from 'next/link';



const DonationCard = ({ card }) => {
  const queryParams = new URLSearchParams({
    id: card.id,
    title: card.title,
    description: card.description,
    images: JSON.stringify(card.images),
    goal: card.goal.toString(),
    current: card.current.toString(),
    donationId: card.donationId,
    deadline: card.deadline.seconds.toString(),
  }).toString();
  const randomNum = Math.floor(Math.random() * (700 - 300 + 1)) + 300;
  const img = `https://picsum.photos/${randomNum}`


  return (
      <Card className="h-full rounded-lg shadow-none">
      <CardContent className="p-4 flex flex-col h-full">
        <Box className="relative w-full h-40 mb-4">
          <Image
            src={img}
            alt={card.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </Box>
        <Typography variant="h6" className="font-bold mb-2">
          {card.title}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mb-4 flex-grow">
          {card.description}
        </Typography>
        <Box className="mb-2 flex justify-between">
          <Typography variant="body2" className="font-bold">
            Goal: ${card.goal.toLocaleString()}
          </Typography>
          <Typography variant="body2" className="text-rys-green-400">
            Raised: ${card.current.toLocaleString()}
          </Typography>
        </Box>
        <Box className="relative mb-4">
          <LinearProgress 
            variant="determinate" 
            value={Math.min((card.current / card.goal) * 100, 100)}
            className="bg-gray-200"
            sx={{
              height: 6,
              borderRadius: 3,
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#433c7f',
              },
            }}
          />
        </Box>
          <Box className="flex justify-between">
          <Link href={`/donations/info?${queryParams}`} passHref>
            <Button variant="contained" className="bg-rys-pink hover:bg-rys-purple-600 w-full mt-4">
              Donate Now
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  )
}

const SkeletonCard = () => (
  <Card className="h-full rounded-lg shadow-none">
    <CardContent className="p-4 flex flex-col h-full">
      <Skeleton variant="rectangular" width="100%" height={160} className="mb-4" />
      <Skeleton variant="text" width="80%" height={24} className="mb-2" />
      <Skeleton variant="text" width="100%" height={80} className="mb-4" />
      <Skeleton variant="text" width="60%" height={20} className="mb-2" />
      <Skeleton variant="rectangular" width="100%" height={6} className="mb-4" />
      <Box className="flex justify-between">
        <Skeleton variant="text" width="30%" height={36} />
        <Skeleton variant="rectangular" width="30%" height={36} />
      </Box>
    </CardContent>
  </Card>
);

const Campaigns = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const fetchedDonations = await Donations.fetchDonations()
        setDonations(fetchedDonations);
      } catch (error) {
        console.error("Error fetching donations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);


  
  return (
    <Box className="bg-rys-blue-300 p-8 my-12">
      <Typography variant="h4" className="text-rys-purple-600 font-bold mb-6">
        Donation Campaigns
      </Typography>
      <Grid container spacing={4}>
        <Suspense fallback={[...Array(8)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <SkeletonCard />
          </Grid>
        ))}>
          {loading ? (
            [...Array(8)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <SkeletonCard />
              </Grid>
            ))
          ) : (
            donations.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <DonationCard card={card} />
              </Grid>
            ))
          )}
        </Suspense>
      </Grid>
    </Box>
  );
};

export default Campaigns;