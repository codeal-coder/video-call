// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// import CssBaseline from '@mui/material/CssBaseline';


// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';

// import TextField from '@mui/material/TextField';

// import Stack from '@mui/material/Stack';
// import MuiCard from '@mui/material/Card';
// import { styled } from '@mui/material/styles';
// import { AuthContext } from '../context/AuthContext';
// import Snackbar from '@mui/material/Snackbar';





// const Card = styled(MuiCard)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignSelf: 'center',
//   width: '100%',
//   padding: theme.spacing(4),
//   gap: theme.spacing(2),
//   margin: 'auto',
//   [theme.breakpoints.up('sm')]: {
//     maxWidth: '450px',
//   },
//   boxShadow:
//     'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
//   ...theme.applyStyles('dark', {
//     boxShadow:
//       'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
//   }),
// }));

// const SignInContainer = styled(Stack)(({ theme }) => ({
//   height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
//   minHeight: '100%',
//   padding: theme.spacing(2),
//   [theme.breakpoints.up('sm')]: {
//     padding: theme.spacing(4),
//   },
//   '&::before': {
//     content: '""',
//     display: 'block',
//     position: 'absolute',
//     zIndex: -1,
//     inset: 0,
//     backgroundImage:
//       'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
//     backgroundRepeat: 'no-repeat',
//     ...theme.applyStyles('dark', {
//       backgroundImage:
//         'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
//     }),
//   },
// }));

// export default function Authentication() {
//   const [username,setUserName] = React.useState();
//   const[name,setName] = React.useState();
//   const[password,setPassword] = React.useState();
//   const [error,setError] = React.useState();
//   const[message,setMessage] = React.useState();

//   const [formState,setFormState] = React.useState(1);

//   const [open, setOpen] = React.useState(false);

//   const{handleRegister,handleLogin} = React.useContext(AuthContext)


 
//   let handleAuth = async ()=>{
//     try {
//         // if (formState === 0) {
            
//         // }
//         if (formState === 1) {
//             let result = await handleRegister(name,username,password);
//             console.log(result);
//             //setMessage(result)
//             //setOpen(true);
            
//         }
//     } catch (error) {
//         console.log(error);
        
//         let message = (error.response.data.message);
//         setError(message);
        
//     }
//   }



//   return (
//     <>
//       <CssBaseline enableColorScheme />
//       <SignInContainer direction="column" justifyContent="space-between">
        
//         <Card variant="outlined">
          
//           <div className='text-center'>
//             <Button variant={formState === 0 ? "contained" : ""} onClick={() => {setFormState(0)}}>
//                 Login
//             </Button>
//             <Button variant={formState === 1 ? "contained" : ""} onClick={() => {setFormState(1)}}>
//                 Register
//             </Button>
//           </div>
//           <Box
//             component="form"
            
//             noValidate
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               width: '100%',
//               gap: 2,
//             }}
//           >
//             {formState === 1 ? 
//                 <FormControl>
//               <FormLabel htmlFor="fullname">Full Name</FormLabel>
//               <TextField
                
//                 id="fullname"
//                 type="fullname"
//                 name="fullname"
//                 placeholder="Full Name"
//                 autoFocus
//                 required
//                 fullWidth
//                 variant="outlined"
//                 onChange={(e) => setName(e.target.value)}
                
//               />
//             </FormControl>
//             :<></>
//             }
            
//             <FormControl>
//               <FormLabel htmlFor="username">Username</FormLabel>
//               <TextField
                
//                 id="username"
//                 type="username"
//                 name="username"
//                 placeholder="Username"
//                 autoFocus
//                 required
//                 fullWidth
//                 variant="outlined"
//                 onChange={(e) => setUserName(e.target.value)}
                
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel htmlFor="password">Password</FormLabel>
//               <TextField
                
//                 name="password"
//                 placeholder="••••••"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 autoFocus
//                 required
//                 fullWidth
//                 variant="outlined"
//                 onChange={(e) => setPassword(e.target.value)}
                
//               />
//             </FormControl>
//             <p style={{color:"red"}}>{error}</p>
            
            
//             <Button
//               type=""
//               fullWidth
//               variant="contained"
//               onClick={handleAuth}
//             >
//               {formState===0 ? "Login" : "Register" }
//             </Button>
            
//           </Box>
          
        
          
//         </Card>
//         <Snackbar

//                 open={open}
//                 autoHideDuration={4000}
//                 message={message}
//         />
        
//       </SignInContainer>
//     </>
//   );
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../context/AuthContext';
import { Snackbar } from '@mui/material';
import bg from "../assets/bg.jpg"



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Authentication() {

    

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                let result = await handleLogin(username, password)


            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }


    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='flex justify-center p-3  items-center'>
        <ThemeProvider theme={defaultTheme} >
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>


                        <div>
                            <Button variant={formState === 0 ? "contained" : ""} onClick={() => { setFormState(0) }}>
                                Login
                            </Button>
                            <Button variant={formState === 1 ? "contained" : ""} onClick={() => { setFormState(1) }}>
                                Register
                            </Button>
                        </div>

                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            {formState === 1 ? <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Full Name"
                                name="username"
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                            /> : <></>}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}

                                id="password"
                            />

                            <p style={{ color: "red" }}>{error}</p>

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Login " : "Register"}
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar

                open={open}
                autoHideDuration={4000}
                message={message}
            />

        </ThemeProvider>
        </div>
    );
}