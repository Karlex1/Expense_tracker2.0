import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './Sidebar.css';

const Sidebar = () => {
    const menuItems = [
        { text: 'Home', icon: <HomeIcon /> },
        { text: 'Expenses', icon: <ReceiptIcon /> },
        { text: 'Settings', icon: <SettingsIcon /> },
        { text: 'Support', icon: <SupportAgentIcon /> },
    ];

    return (
        <div className="sidebar">
            <h2>$xpense</h2>
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Sidebar;
