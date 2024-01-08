import React,{useState} from "react";
import axios from "axios";

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
        <div class="border-2 m-6">
            <div class="border-b-2 p-2 text-center font-bold">
                Current Events
            </div>
            <div>
                <table>
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
                </table>
            </div>
        </div>
        </>
    )
}