import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import QuickAccessButtons from './QuickAccessButtons';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper className="dashboard-panel">
                        <Typography variant="h6">Pending Tasks</Typography>
                        <ul>
                            <li>Pending Approvals: 5</li>
                            <li>New Trips Registered: 1</li>
                            <li>Unreported Expenses: 4</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className="dashboard-panel">
                        <Typography variant="h6">Recent Expenses</Typography>
                        <ul>
                            <li>Office Supplies - $150.00</li>
                            <li>Business Lunch - $75.50</li>
                            <li>Travel Expenses - $450.25</li>
                        </ul>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <QuickAccessButtons />
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
