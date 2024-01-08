import React,{useState} from "react";
import axios from "axios";
import "./info.css"
export default function Events() {

    const [events,setEvents]=useState([]);

    React.useState(()=>{
        axios.get("http://localhost:9000/getAllEvents")
        .then((res)=>{
            setEvents(res.data.events);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <>
        <div class="events">
        <div class="mt-8 mr-7 ml-7 pt-6">
        <div class="">
            <h1 class="pl-4 text-3xl font-semibold heading-top">Events</h1>
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
        </div>
        </div>
        </>
    )
}