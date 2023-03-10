import React from "react";
import './Dropdown.css'

function Dropdown() {
    return(
        <div>
        <div className="flex-container">
        <div className="flex1"><img src="./img/Astunet.jpg" width='80px' height='60px'/></div>  
        <div className="flex2"><h5>Astunet</h5><br/><p>Busness Enterprasess Plc </p></div>  
        <div className="flex3">
        <ul>
   
   <li><a>Home</a></li>
   <li><a>About Us</a></li>
   <li><a>Product&Services</a></li>
   <li><a>Gallery</a></li>
   <li><a>News</a></li>
   <li><a>contact</a></li>
   <a><img src="./img/facebook-f.png" width='18px' height='18px' style={{marginRight:'0px'}}/></a>
   <a><img src="./img/linkedin-2.png" width='20px' height='20px'/></a>
</ul>

            </div>  
           

        </div>
         <div>
         <img src="./img/istockphoto.jpg" width='100%' height='600px'/>
         <h3>Astunet Business Enterprise</h3>
         <h3>A Sustainable Agriculture does not deplete soils or people.</h3>
         <p>Providing the agricultural and horticultural sector with solutions ranging from irrigation solutions, steady cold chain management systems and cutting edge
           <br/> <span> physical water treatment</span> to increase the overall yield and the profitability of our customers.</p>
     <h3>About Us</h3>
     <p>Since its establishment in 2000 GC , Astunet Business Enterprises Plc has and continues to be a forerunner in the agricultural and horticultural sectors of Ethiopia</p>
     <div> <img src="./img/MUSUxns.webp" width='100%' height='400px' className="img-all"/>
       <div className="img-multi"> <img src="./img/Deliver.webp" width='350px' height='220px'/>
        
        <img src="./img/Aqua.jpg" width='350px' height='220px'/>
        <img src="./img/sprinkler-min.jpg" width='350px' height='220px'/>
        <br/>
        <div className="headings">
        <h4>Cold Truck</h4><br/>
        <h5>Aqua 4D Water Solutions</h5><br/>
        <h6 > Irrigation</h6>
        </div>
        </div> 
        </div>
   
     </div>
     <div className="partners">
     <h2>
      OUR PARTNERS
     </h2><br/>
     <div className="our-partners">
     <a href="#"><img src="./img/Aster-square-Carrier-300x300.jpg" width='160px' height='130px'/></a>
     <a href="#"><img src="./img/Aster-square-Aqua-4D-300x300.jpg" width='160px' height='130px'/></a>
     <a href="#"><img src="./img/Aster-square-Geerlof--300x300.jpg" width='160px' height='130px'/></a>
     <a href="#"><img src="./img/Pasquini-e-bini-logo-300x300.png" width='160px' height='130px'/></a>
     </div>
     </div>
     <footer><div>
      <h2>CONTACT</h2><br/>
      <p>Address: Behind 2000 Habesha <br/>Restaurant, Around Atlas Hotel<br/>

Office Tel. +251-116-627-967<br/>
+251-116-184-968<br/>
Fax: +251-116-625171<br/>
Mobile: +251-912-205510 / +251-908-393939<br/>
Email:<span><a href="#">info@astunet.com / astunet01@gmail.com</a></span> <br/>

Addis Ababa, Ethiopia.</p>
</div>
<div className="img-footer">
  <h2>THE LATEST</h2><br/>
  
  <h5>TEST PAGE</h5><br/>
  <h5>Meet with us at the Hortiflora<br/> Expo March 13 – 15, 2019</h5><br/>
  <h5>10 ways Aqua-4D is a winner<br/> for your business and the<br/> planet</h5>
</div>
     </footer>
     </div>
    )
    
}
export default Dropdown