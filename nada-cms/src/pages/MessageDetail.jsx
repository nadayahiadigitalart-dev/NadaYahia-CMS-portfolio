import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Supabase } from '../Supabase';

import "./MessageDetail.css";
import Menu from '../components/Menu';
import Header from '../components/Header';

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

//   if (id) 
    CallRow();

},[id])


    return ( <>

     <div className="bg">
        <section className="row_bigg">
          <div className="leftt">
            <Menu />
          </div>

          <div className="rightt">
            <Header />

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
            <p className='text'>{data.created_at}</p>
        </div>

        <div className='mesg'>
            <p className='tit'>Message</p>
            <p className='text2'>{data.message}</p>
        </div>
        {/* </div> */}

        <Link to="/ContactMessages" style={{ textDecoration: "none", color: "inherit" } }>
        <button className='but'>Back</button>
        </Link>

        <div className='margin'></div>
    </div>



    </div>
    </section>
    </div>
    
    
    
    </> );
}
 
export default MessageDetail;