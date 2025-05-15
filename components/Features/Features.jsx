import React from 'react'

const Features = () => {
 return (
  <>
   <section className="features">
    <div className="container">
     <div className="row">
      <div className="col-lg-12">
       <div className="feature-block d-lg-flex">
        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-0">
          <i className="icofont icofont-surgeon-alt"></i>
         </div>
         <h4 className="mb-3">Γιατί να Επιλέξετε το Ιατρείο μας;</h4>
         <p className="mb-4">Ο Ζήσης Βάνης, Χειρουργός Οφθαλμίατρος και Στρατιωτικός Ιατρός, διαθέτει πολυετή εμπειρία στη διάγνωση, θεραπεία και χειρουργική αντιμετώπιση οφθαλμικών παθήσεων. Από τις απλές διαθλαστικές διαταραχές έως τις εξειδικευμένες επεμβάσεις, εγγυόμαστε την καλύτερη δυνατή φροντίδα.</p>
         {/*<a href="appoinment.html" className="btn btn-main btn-round-full">ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ</a>*/}
        </div>

        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-0">
          <i className="icofont icofont-ui-clock"></i>
         </div>
         <h4 className="mb-3">Ώρες Λειτουργίας Ιατρείου</h4>
         <ul className="w-hours list-unstyled">
          <li className="d-flex justify-content-between align-items-center">Δευ - Παρ : <span>16:00 - 21:00</span></li>
          <li className="d-flex justify-content-between align-items-center">Σαβ : <span>Κατόπιν ραντεβού</span></li>
          <li className="d-flex justify-content-between align-items-center">Κυρ : <span>Κλειστά</span></li>
         </ul>
        </div>

        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-0">
          <i className="icofont icofont-support"></i>
         </div>
         <span>CTA(Call-to-Action)</span>
         <h4 className="mb-3">+30 2721 407234</h4>
         <p>Κλείστε τώρα το ραντεβού σας και δείτε τη διαφορά στην όρασή σας!</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Features
