import React from 'react'
import Image from "next/image";

const Services = () => {
 return (
  <>
   <section className="section service gray-bg" id='services'>
    <div className="container">
     <div className="row justify-content-center">
      <div className="col-lg-7 text-center">
       <div className="section-title">
        <h2>Υπηρεσίες</h2>
        <div className="divider mx-auto my-4"></div>
        <p>Ανακαλύψτε τις υπηρεσίες του Οφθαλμολογικού Ιατρείου του Χειρουργού Οφθαλμίατρου Ζήση Βάνη στην Καλαμάτα</p>
       </div>
      </div>
     </div>

     <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-eye text-lg"></i>
         <h4 className="mt-3 mb-3">Βασικός Οφθαλμολογικός Έλεγχος</h4>
        </div>

        <div className="content">
         <li>Διαθλαστικός έλεγχος (μυωπία, υπερμετρωπία, αστιγματισμός, πρεσβυωπία)</li>
         <li>Παιδοφθαλμολογικός έλεγχος</li>
         <li>Προσχολικός έλεγχος</li>
         <li>Εξέταση για δίπλωμα οδήγησης</li>
         <li>Θεραπεία ξηροφθαλμίας</li>
         <li>Εφαρμογή φακών επαφής</li>
        </div>
       </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-hospital text-lg"></i>
         <h4 className="mt-3 mb-3">Εξειδικευμένες Οφθαλμολογικές Εξετάσεις</h4>
        </div>

        <div className="content">
         <li>Βυθοσκόπηση (διάγνωση και παρακολούθηση παθήσεων όπως διαβητική αμφιβληστροειδοπάθεια)</li>
         <li>Μέτρηση ενδοφθάλμιας πίεσης</li>
         <li>Έλεγχος καταρράκτη και προεγχειρητική εκτίμηση</li>
         <li>Διάγνωση παθήσεων ωχράς κηλίδας (AMD, μεμβράνες)</li>
         <li>Παρακολούθηση παθήσεων αμφιβληστροειδούς (κληρονομικές/εκφυλιστικές)</li>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-stethoscope-alt text-lg"></i>
         <h4 className="mt-3 mb-3">Γενικός Διαγνωστικός Έλεγχος</h4>
        </div>

        <div className="content">
         <Image
             src='/images/gallery/DSC_0477_fixed.jpg'
             alt={`General Check-up`}
             width={300}
             height={200}
             className="img-fluid rounded shadow-sm cursor-pointer"
         />
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-kid text-lg"></i>
         <h4 className="mt-3 mb-3">Παιδοφθαλμολογικός Έλεγχος</h4>
        </div>
        <div className="content">
         <li>Προσχολικός έλεγχος</li>
         <li>Βυθοσκόπηση</li>
         <li>Συνταγογράφηση γυαλιών οράσεως</li>
         <li>Έλεγχος χρωματικής αντίληψης</li>
         <li>Έλεγχος στραβισμού</li>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-microscope-alt text-lg"></i>
         <h4 className="mt-3 mb-3">Χειρουργικές Επεμβάσεις</h4>
        </div>

        <div className="content">
         <li>Χειρουργική καταρράκτη με premium ενδοφακούς</li>
         <li>Λέιζερ μυωπίας - αστιγματισμού - υπερμετρωπίας</li>
         <li>Αφαίρεση πτερυγίου - χαλαζίου</li>
         <li>Ενδοϋαλοειδικές ενέσεις</li>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-doctor-alt text-lg"></i>
         <h4 className="mt-3 mb-3">Επείγοντα Περιστατικά</h4>
        </div>
        <div className="content">
        </div>
       </div>
      </div>

     </div>
    </div>
   </section>
  </>
 )
}

export default Services