import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../context/AuthContext';


function HomeComponent() {
    console.log("in home components");
    

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        // console.log("in meeting");
        // console.log(meetingCode);
        
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <div className='w-full h-[100vh]  '>

            <div className="font-bold flex justify-between items-center text-center gap-2">

                <div style={{ display: "flex", alignItems: "center" }}>

                    <h2 className='text-3xl ml-2 '>Video Call</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center",gap:"1rem" }}>
                    
                    <IconButton onClick={
                        () => {
                            navigate("/history")
                        }
                    }>
                        <RestoreIcon /><p className='text-lg text-black '>History</p>
                    </IconButton>
                    

                    <Button  onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }} >
                        <p className='text-black lowercase font-semibold text-lg text-center'>Logout</p>
                        </Button>
                        
                    
                </div>


            </div>


            <div className=" h-[80%] w-full flex   text-center m-auto">
                <div className="  w-[100%] flex justify-center items-center  ">
                    <div className=' flex flex-col gap-3'>
                        <h2 className='text-2xl font-semibold'>Providing Quality Video Call </h2>

                        <div style={{ display: 'flex', gap: "10px",  }} className=" m-auto">

                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default withAuth(HomeComponent)