import { styled } from '@mui/material/styles';
import { Icon, IconButton, Typography, Box, Menu } from '@mui/material';
import LocalParkingIcon from "@mui/icons-material/LocalParking";

export const StyledIconButton = styled(IconButton)(({theme})=> ({
    display: "none", 

    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}));


export const StyledTypography = styled(Typography)(({theme}) => ({
    flexGrow: 1, 
    display: "none", 
    
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
})); 


export const StyledBox = styled(Box)(({theme}) => ({
    display: "none", 
    
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
})); 


export const StyledSamllScreenBox = styled(Box)(({theme}) => ({
    display: "flex", 
    
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
})); 

export const StyledSamllScreenMenu = styled(Menu)(({theme}) => ({
    display: "flex", 
    
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
})); 

export const StyledSamllScreenParkingIcon = styled(LocalParkingIcon)(({theme}) => ({
    display: "flex", 
    
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
})); 


