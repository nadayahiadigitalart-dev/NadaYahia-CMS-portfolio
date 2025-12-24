import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";




import "./ContactManage.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ContactCard from "../components/ContactCard";
import contImg from "../assets/Img.png";
import { Supabase } from "../Supabase";

import i3 from '../assets/delete-bin-line.png';


const ContactManage = () => {

  // const {id} = useParams()
  
   const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);

  // const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchMessages() {
    setLoading(true);
    try {
      const { data: messages, error } = await Supabase
        .from("Contact Messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error:", error);
      }

      console.log("Fetched messages:", messages); // <-- important
      setData(Array.isArray(messages) ? messages : []);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
    setLoading(false);
  }

  fetchMessages();


 


  //   async function deleteRow(id) {
  //   const { data: deletedData, error } = await Supabase
  //     .from('"Contact Messages"')
  //     .delete()
  //     .eq("id", id);

  //   if (error) {
  //     console.error("Delete failed:", error);
  //   } else {
  //     console.log("Deleted:", deletedData);
  //     // Update state to remove deleted message
  //     setData(prev => prev.filter(item => item.id !== id));
  //   }
  // }





}, []);



async function deleteRow(id) {
  try {
    const { data: deletedData, error } = await Supabase
      .from("Contact Messages") // table name exactly as in Supabase
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Delete failed:", error);
    } else {
      console.log("Deleted:", deletedData);
      setData(prev => prev.filter(item => item.id !== id)); // remove from state
    }
  } catch (err) {
    console.error("Delete error:", err);
  }
}

if (loading) return <p>Loading...</p>

//  async function deleteRow(id) {

//     const res = await Supabase.from("Contact Messages").delete.eq("id",id);
    
//   }




    
 
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

       


   <div className="messages_list">
            {data.map((item) => (
              <div className="gap_col" key={item.id}>
                {/* <Link to={path} >{item.id}</Link> */}
              <Link
        to={`/ContactMessages/${item.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
                  <ContactCard
                    img={contImg}
                    alt={item.sender_email}
                    name={item.sender_name}
                    email={item.sender_email}
                    date={item.created_at}
                    status={item.status || "Unread"}
                    sub={item.subject}
                    onDelete={() => deleteRow(item.id)} 
                    
                  />
                </Link>
              </div>
            ))}

            {data.length === 0 && <p>No messages found.</p>}
          </div>
        
            

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
        </section>
            <br></br>
    <br></br>
    <br></br>
      </div>

  
    </>
  );
};

export default ContactManage;
