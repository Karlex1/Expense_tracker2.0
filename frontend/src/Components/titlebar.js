import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const TitleBar = ({ onLogout }) => {
    return (
        <AppBar
            position="static"
            sx={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                color: 'white',
                padding: '0 20px',
            }}
        >
            <Toolbar>
                {/* Logo Section */}
                {/* <Box
                    component="img"
                    src="../../public/calc logo.jpg" // Adjust path to match the file in the public folder
                    alt="ExpenseWeb Logo"
                    sx={{ height: '40px', width: 'auto', marginRight: 2 }}
                /> */}

                {/* Title Section */}
                <Box
                    component="span"
                    sx={{
                        flexGrow: 1,
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'white',
                    }}
                >
                    ExpenseWeb
                </Box>

                {/* Logout Button */}
                <Button
                    variant="contained"
                    color="rgba(238, 134, 134, 0.2)"
                    onClick={onLogout}
                    sx={{
                        textTransform: 'none',
                        boxShadow: 'none',
                    }}
                >
                    Log Out
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default TitleBar;
