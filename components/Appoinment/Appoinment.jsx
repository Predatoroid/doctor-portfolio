import React from 'react'

const Appoinment = () => {
 return (
  <>
   <section className="section appoinment" id='appoinment'>
    <div className="container">
     <div className="row align-items-center">
      <div className="col-lg-6 ">
       <div className="appoinment-content">
        <img src="/images/about/DSC_0607_fixed.jpg" alt="" className="img-fluid" />
        {/*<div className="emergency">*/}
        {/* <h2 className="text-lg"><i className="icofont icofont-phone-circle text-lg"></i>+ 30 2721 407234</h2>*/}
        {/*</div>*/}
       </div>
      </div>
      <div className="col-lg-6 col-md-10 ">
       <div className="appoinment-wrap mt-5 mt-lg-0">
        <h2 className="mb-2 title-color">Στοιχεία Επικοινωνίας</h2>
        <div className="contact-info">
         <p><strong>Διεύθυνση:</strong> Πλατεία Βασιλέως Γεωργίου 24, Καλαμάτα</p>
         <p><strong>Τηλέφωνο:</strong> +30 2721 407234</p>
         <p><strong>Email:</strong> vaniseye@gmail.com</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Appoinment