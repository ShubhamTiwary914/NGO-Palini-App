"use client";
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
  '& label': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
});

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Box className="flex justify-center items-center bg-rys-blue-300 pb-12">
      <Box className="bg-rys-purple-600 rounded-3xl p-12 w-full max-w-4xl flex items-center justify-between overflow-hidden relative">
        <Box className="z-10 w-full">
          <Typography variant="body2" className="text-white font-bold mb-2">
            JOIN US ON OUR NEXT DRIVE!
          </Typography>
          <Typography variant="h4" className="text-white font-bold mb-6">
            Become A Volunteer for Palini Foundation
          </Typography>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <CustomTextField
              name="fullName"
              label="Full Name"
              variant="outlined"
              value={formData.fullName}
              onChange={handleInputChange}
              className="bg-rys-purple-400 rounded-md"
              fullWidth
            />
            <CustomTextField
              name="emailAddress"
              label="Email Address"
              variant="outlined"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="bg-rys-purple-600 rounded-md"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              className="bg-rys-pink hover:bg-rys-pink-600 text-white py-3 px-9 whitespace-nowrap"
            >
              Register
            </Button>
          </form>
        </Box>
        <Box className="absolute right-0 top-0 w-32 h-32">
          <svg viewBox="0 0 100 100" className="text-rys-pink opacity-80">
            <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0,70 Q25,45 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default VolunteerForm;