import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Supabase } from '../Supabase';

import "./MessageDetail.css";

const MessageDetail = () => {

    const {id} = useParams()
const [data, setData] = useState("");

useEffect(()=>{
  async function CallRow() {
    const res = await Supabase.from("Contact Messages").select("*").eq("id",id);
    setData(res.data[0]);
    
  //  if (error) {
  //     console.error("Supabase error:", error);
  //   } else {
  //     console.log("Supabase data:", data);
  //     setData(data);
  //   }
  }

  if (id) CallRow();

},[id])


    return ( <>

    <div className='mesg'>
        {/* <div className='col_info'> */}
            <div className='row_info'>
            <h1 className='tit'>Name</h1>
            <p className='text'>{data.sender_name}</p>
        </div>

         <div className='row_info'>
            <h1 className='tit'>Email</h1>
            <p className='text'>{data.sender_email}</p>
        </div>

         <div className='row_info'>
            <h1 className='tit'>Date</h1>
            <p className='text'>{data.date}</p>
        </div>
        {/* </div> */}

        <link to="/ContactMessage">
        <button className='but'>Back</button>
        </link>
    </div>
    
    
    
    </> );
}
 
export default MessageDetail;