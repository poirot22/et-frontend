import React,{useState} from "react";
import axios from "axios";
import "./info.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import event1 from '../../../assets/event1.jpg';
import './events.css';
export default function Events() {

    const [events,setEvents]=useState([]);

    // React.useState(()=>{
    //     axios.get("http://localhost:9000/getAllEvents")
    //     .then((res)=>{
    //         setEvents(res.data.events);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // },[])

    return (
        <>
        <div class="events">
        <div class="mt-8 mr-3 p-2">
            <div class="mt-5 ml-2">
                <h1 class=" pl-4 text-3xl font-semibold heading-top">Events</h1>
            </div>
            <div>
                {/*<table>
                    {events.map((event)=>{  
                        return (
                            <>
                            <tr class="border-b-2 p-2">
                               <td class="border-r-2 p-2"><a class="font-bold text-blue-600 underline" href={event.link}>{event.name}</a></td> 
                               <td class="p-2">Date</td>
                            </tr>
                            </>
                        )
                    })}
                </table>*/}

            </div>
            <div class="flex flex-wrap  justify-around mt-3 events mb-0" >
            <div class="mt-8 ml-4 border-none">
                    <Card sx={{ maxWidth: 345 }} className="cells">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={event1}
                        />
                        <CardContent class="content p-5 pb-1">
                            <Typography gutterBottom variant="h5" component="div">
                            <h5 className="font-semibold">Neural Networks and Deep Learning Models</h5>
                            </Typography>
                            <Typography variant="body2">
                            <p className="body2">Conducting 2 day workshop on 2nd Feb and 3rd Feb. Refer to the links below for more details</p>
                            </Typography>
                        </CardContent> 
                        <CardActions class="content pl-3 pb-3">
                            <Button size="small">Register</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div class="mt-8 ml-4 border-none">
                    <Card sx={{ maxWidth: 345 }} className="cells">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={event1}
                        />
                        <CardContent class="content p-5 pb-1">
                            <Typography gutterBottom variant="h5" component="div">
                            <h5 className="font-semibold">Big Data Analytics Workshop</h5>
                            </Typography>
                            <Typography variant="body2">
                            <p className="body2">Conducting 2 day workshop on 2nd Feb and 3rd Feb. Refer to the links below for more details</p>
                            </Typography>
                        </CardContent> 
                        <CardActions class="content pl-3 pb-3">
                            <Button size="small" >Register</Button>
                            <Button size="small" >Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div class="mt-8 ml-4 border-none">
                    <Card sx={{ maxWidth: 345 }} className="cells">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={event1}
                        />
                        <CardContent class="content p-5 pb-1">
                            <Typography gutterBottom variant="h5" component="div">
                            <h5 className="font-semibold">Cyber Security and Ethical  Hacking Workshop</h5>
                            </Typography>
                            <Typography variant="body2">
                            <p className="body2">Conducting 2 day workshop on 2nd Feb and 3rd Feb. Refer to the links below for more details</p>
                            </Typography>
                        </CardContent> 
                        <CardActions class="content pl-3 pb-3">
                            <Button size="small">Register</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            </div>
            
        </div>
        </>
    )
}