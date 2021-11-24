import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import SignUp from "../../components/Singup";

export const Home = () => (
    <>
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
    <SignUp/>
    </>
);