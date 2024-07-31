"use client";

import React, { useRef, Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import { Typography, Box, Card, CardContent, Button, LinearProgress, Skeleton, CardMedia } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import donations from './../../store/controllers/donations.store'
import Link from 'next/link';


const DonationCard = ({ card }) => {
    const randomNum = Math.floor(Math.random() * (700 - 300 + 1)) + 300;
    const img = `https://picsum.photos/${randomNum}`
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


  return (
    <Card className="flex-shrink-0 w-80 rounded-lg shadow-none">
    <CardContent className="p-4">
      <Box className="relative w-full h-40">
        <Image
          src={img}
          alt={card.title}
          layout="fill"
          objectFit="cover"
          className='rounded-lg'
        />
      </Box>
      <Box className="p-4">
        <Typography variant="h6" className="font-bold mb-2">
          {card.title}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mb-4">
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
                backgroundColor: 'rgb(67, 60, 127)', // rys-purple-600
              },
            }}
          />
        </Box>

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


const DonationCardSkeleton = () => (
  <Card className="flex-shrink-0 w-80 rounded-lg shadow-none">
    <CardContent className="p-4">
      <Skeleton variant="rectangular" width="100%" height={160} />
      <Box className="p-4">
        <Skeleton variant="text" width="80%" height={32} />
        <Skeleton variant="text" width="100%" height={60} />
        <Box className="mb-2 flex justify-between">
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="40%" />
        </Box>
        <Skeleton variant="rectangular" width="100%" height={6} className="mb-4" />
        <Box className="flex justify-between">
          <Skeleton variant="rectangular" width="30%" height={36} />
          <Skeleton variant="rectangular" width="30%" height={36} />
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const DonationCardsContainer = ({ donationCards }) => {
  return (
    <>
      {donationCards.map((card, index) => (
        <DonationCard key={index} card={card} />
      ))}
    </>
  );
};

const DonationCarousel = () => {
  const scrollRef = useRef(null);
  const defaultOffset = 500;
  const [donationCards, setDonationCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonationCards = async () => {
      try {
        const cards = await donations.fetchDonations(8);
        setDonationCards(cards);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching donation cards:", error);
        setLoading(false);
      }
    };

    fetchDonationCards();
  }, []);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Box className="bg-rys-blue-300 p-12 mt-12 lg:pl-28">
      <Box className="flex justify-between items-center mb-8">
        <Box>
          <Typography variant="h4" className="font-bold mb-2">
            You can help lots of people from<br />
            <span className='text-rys-purple-600'>
              Our Donation Campaigns
            </span>
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            We provide a trusted donation channel for peoples of worldwide to support people and organizers.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button className="min-w-0 p-2 mr-2 bg-rys-purple-600 text-white hover:text-rys-purple-600" onClick={() => scroll(-defaultOffset)}>
            <ArrowBackIosNewIcon />
          </Button>
          <Button className="min-w-0 p-2 bg-rys-purple-600 text-white hover:text-rys-purple-600"  onClick={() => scroll(defaultOffset)}>
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Box>
      
      <Box ref={scrollRef} className="flex space-x-6 overflow-x-hidden pb-4">
        {loading ? (
          [...Array(4)].map((_, index) => <DonationCardSkeleton key={index} />)
        ) : (
          <DonationCardsContainer donationCards={donationCards} />
        )}
      </Box>
    </Box>
  );
};

export default DonationCarousel;