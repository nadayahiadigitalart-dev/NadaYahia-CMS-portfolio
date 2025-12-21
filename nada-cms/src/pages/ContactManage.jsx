import React, { useState } from "react";

import "./ContactManage.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ContactCard from "../components/ContactCard";
import contImg from "../assets/Img.png";

const ContactManage = () => {
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
            alt="sender_email"
            name="Ahmed Aly"
            email="ahmedy98@gmail.com"
            date="23 Nov 2025 – 15:45"
            status="Unread"
            sub="Inquiry About Your..."
            />
            

          <ContactCard 
            img={contImg}
            alt="sender_email"
            name="Ahmed Aly"
            email="ahmedy98@gmail.com"
            date="23 Nov 2025 – 15:45"
            status="Unread"
            sub="Inquiry About Your..."
            />

           <ContactCard 
            img={contImg}
            alt="sender_email"
            name="Ahmed Aly"
            email="ahmedy98@gmail.com"
            date="23 Nov 2025 – 15:45"
            status="Unread"
            sub="Inquiry About Your..."
            />

            <ContactCard 
            img={contImg}
            alt="sender_email"
            name="Ahmed Aly"
            email="ahmedy98@gmail.com"
            date="23 Nov 2025 – 15:45"
            status="Unread"
            sub="Inquiry About Your..."
            />

            <ContactCard 
            img={contImg}
            alt="sender_email"
            name="Ahmed Aly"
            email="ahmedy98@gmail.com"
            date="23 Nov 2025 – 15:45"
            status="Unread"
            sub="Inquiry About Your..."
            />
            </div>


          </div>
        </section>
        
      </div>
    </>
  );
};

export default ContactManage;
