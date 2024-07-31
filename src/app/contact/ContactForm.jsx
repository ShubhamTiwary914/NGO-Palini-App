import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactForm = () => {
    return (
        <Box className="bg-white p-8 relative" sx={{ my: 20 }}>
        {/* Yellow accent squares */}  
        <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
            <Typography variant="h4" className="text-black font-bold mb-4">
                Contact Us
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-6">
                Feel free to contact us any time. We will get back to you as soon as we can!
            </Typography>
            <form>
                <TextField
                fullWidth
                label="Name"
                variant="outlined"
                className="mb-4"
                />
                <TextField
                fullWidth
                label="Email"
                variant="outlined"
                className="mb-4"
                />
                <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    className="mb-4"
                />
                <Button
                    variant="contained"
                    className="bg-rys-purple-600 hover:bg-gray-800 text-white py-3"
                    >
                    SEND
                </Button>
            </form>
            </Grid>
            <Grid item xs={12} md={5}>
            <Box className="bg-rys-purple-600 text-white p-6 h-full rounded-lg">
                <Typography variant="h6" className="mb-6">
                    Info
                </Typography>
                <Box className="flex items-center mb-4">
                    <EmailIcon className="mr-2" />
                    <Typography variant="body2">info@getintouch.we</Typography>
                </Box>
                <Box className="flex items-center mb-4">
                    <PhoneIcon className="mr-2" />
                    <Typography variant="body2">+25 56 89 145</Typography>
                </Box>
                    <Box className="flex items-center mb-4">
                    <LocationOnIcon className="mr-2" />
                <Typography variant="body2">15 Greenwood St.</Typography>
                </Box>
                    <Box className="flex items-center">
                    <AccessTimeIcon className="mr-2" />
                    <Typography variant="body2">09:00 - 18:00</Typography>
                </Box>
            </Box>
            </Grid>
        </Grid>
        
        </Box>
    );
};

export default ContactForm;