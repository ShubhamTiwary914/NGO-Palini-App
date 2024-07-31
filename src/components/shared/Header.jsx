"use client";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const donationLink = {text: 'Donations', href: '/donations/' }

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Home', href: '/' },
        { text: 'Missions', href: '/missions/' },
        donationLink,
        { text: 'Volunteer', href: '/volunteer/' },
        { text: 'Contact Us', href: '/contact/' },
    ];

    const drawerContent = (
        <div className="w-64" role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.text} component={Link} href={item.href}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <AppBar position="fixed" sx={{ px: { xs: 2, md: 8 } }} className="bg-rys-blue-300 shadow-none animate__animated animate__fadeInDown">
            <Toolbar className="justify-between">
                <Typography variant="h6" className="text-black font-bold">
                    Palini Foundation
                </Typography>
                <div className="hidden md:flex space-x-6 text-black">
                    {menuItems.map((item) => (
                        <Link key={item.text} href={item.href}>{item.text}</Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon sx={{ color: 'black', fontSize: '3xl' }}/>
                    </IconButton>
                </div>
                <Typography sx={{ textDecoration: 'none' }} className="hidden md:block"> 

                    <Link key={donationLink.text} href={donationLink.href}>
                        <button className="bg-rys-purple-600 p-2 px-5 rounded-md text-white">
                            Donate Now
                        </button>
                    </Link>

                </Typography>
            </Toolbar>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
                <Link key={donationLink.text} href={donationLink.href}>
                    <div className="p-4">
                        <button className="bg-rys-purple-600 p-2 px-5 rounded-md text-white w-full">
                            Donate Now
                        </button>
                    </div>
                </Link>
            </Drawer>
        </AppBar>
    );
}