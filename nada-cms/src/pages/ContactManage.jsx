import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";


import "./ContactManage.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ContactCard from "../components/ContactCard";
import contImg from "../assets/Img.png";
import { Supabase } from "../Supabase";



const ContactManage = () => {
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


  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg">
        <section className="row_bigg">
          <div className="leftt">
            <Menu />
          </div>

          <div className="rightt">
            <Header />

            {/* CONTACT MENU */}
            <div className="contact_menu">
              <div className="dropdown">
                <button
                  className="dropdown-btn"
                  onClick={() => setOpen(!open)}
                >
                  {filter} ⌄
                </button>

                {open && (
                  <div className="dropdown-menu">
                    {["All", "Read", "Unread"].map((item) => (
                      <div
                        key={item}
                        className="dropdown-item"
                        onClick={() => {
                          setFilter(item);
                          setOpen(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="menu_t1">Name</p>
              <p className="menu_t2">Date</p>
              <p className="menu_t3">Status</p>
              <p className="menu_t4">Subject</p>
              

            </div>

            {/* later: messages list goes here */}

            <div className="gap_col">

            <ContactCard 
            img={contImg}
    alt={data.sender_email}
    name={data.sender_name}
    email={data.sender_email}
    date={data.created_at}
    status={data.status || "Unread"}
    sub={data.subject}
            />
            

          {/* <ContactCard 
            img={contImg}
            alt="sender_email"
            name="Ahmed Aly"
            email="ahmedy98@gmail.com"
            date="23 Nov 2025 – 15:45"
            status="Unread"
            sub="Inquiry About Your..."
            /> */}

           

</div>
          </div>
        </section>
            <br></br>
    <br></br>
    <br></br>
      </div>

  
    </>
  );
};

export default ContactManage;
