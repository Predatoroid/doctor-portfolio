import React from 'react'

const Footer = () => {
 return (
  <>

   <footer className="footer py-3">
    <div className="container">
     <div className="">
      <div className="row align-items-center ">
       <div className="col-lg-6">
        <div className="copyright">
         &copy; Copyright Reserved by <span><a href="https://www.ubilus.com/" target="_blank" rel="noopener noreferrer">Ubilus</a></span>
        </div>
       </div>
       <div className="col-lg-6">
        <div className="widget float-right mb-5 mb-lg-0">
         <ul className="list-inline footer-socials mt-4">
          <li className="list-inline-item"><a href="https://www.facebook.com/profile.php?id=61570175457116" target="_blank" rel="noopener noreferrer"><i className="icofont icofont-facebook"></i></a></li>
          <li className="list-inline-item"><a href="https://www.instagram.com/ofthalmiatros_vanis_zisis" target="_blank" rel="noopener noreferrer"><i className="icofont icofont-instagram"></i></a></li>
          <li className="list-inline-item"><a href="https://www.linkedin.com/in/zisis-vanis-bbb784151" target="_blank" rel="noopener noreferrer"><i className="icofont icofont-linkedin"></i></a></li>
         </ul>
        </div>
       </div>
      </div>

      <div className="row">
       <div className="col-lg-4">
        <a className="backtop" href="#top">
         <i className="icofont icofont-long-arrow-up"></i>
        </a>
       </div>
      </div>
     </div>
    </div>
   </footer>
  </>
 )
}

export default Footer
