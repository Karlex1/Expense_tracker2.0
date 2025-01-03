import React from 'react';
import { Button, Grid } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ReportIcon from '@mui/icons-material/Report';

const QuickAccessButtons = () => {
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item>
                <Button variant="contained" startIcon={<AddCircleOutlineIcon />} color="primary">
                    New Expense
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" startIcon={<ReceiptIcon />} color="secondary">
                    Add Receipt
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" startIcon={<ReportIcon />} color="success">
                    Create Report
                </Button>
            </Grid>
        </Grid>
    );
};

export default QuickAccessButtons;
