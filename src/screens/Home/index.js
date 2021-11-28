import { Typography } from "@mui/material";
import { Box } from "@mui/system";


export const Home = () => (
    <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        ><Typography component="h1" variant="h5">
            Welcome
        </Typography>
        </Box>    
);