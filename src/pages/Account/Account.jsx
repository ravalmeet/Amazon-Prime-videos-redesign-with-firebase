import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './account.css';
import Footer from "../../components/Footer/Footer.jsx";

function Account() {
  return (
    <div >
      <Navbar />
      <div className="account-details">
        <div className="account-details1">
        <div className="account-details-header">
          <p>Account Details</p>
        </div>
        <hr />
        <br />
        <div className="account-main">
          <div className="account-main-head">
            <p className="account-main-head1">Your Details</p>
            <div className="account-main-foot-2">
            <button  >Name : meetraval@9827 </button>
             <button  >Email : meetravalpvt@gmail.com</button>
             <button  >Password : meetraval@9827 </button>
             
             <button  >Date : meetraval@9827 </button>
        
          </div>
          </div>
          <hr />
        <br />
          <div className="account-main-foot">
            <p className="account-main-head1">Prime membership</p>
            <div className="account-main-foot-1">
             <button>Recharge Date : 12th march 2022</button>
             <button>Duriation : 1 Year</button>
             <button>End Date : 12th march 2023</button>
             <button>Paid : 500 </button>
        
          </div>
          </div>

        </div>
      </div></div>
      <Footer/>
    </div>

  );
}

export default Account;
