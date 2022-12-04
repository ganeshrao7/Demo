import './AboutUsStyle.css'
import './PrivacyStyle.css'

  const AboutUs = () => {
    return (
<div className="body">
  <h2 >Created by: </h2>
  <div className="row">
    {/* <div className="column">
      <div className="card">
        <div className="container">
          <h2>Shivam Ganguly </h2>
         
         <div className='mail'> 
          <p>shivamganguly4@gmail.com</p>
          </div>
        </div>
      </div>
    </div> */}
    <div class="column">
      <div class="card">
        <div >
          <h2>P Ganesh Rao</h2>
          <h3>Junior Devoloper</h3>
          <div className='mail'>
          <h4>pganeshrao7@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="column">
      <div class="card">
        <div class="container">
          <h2>Pravin Kumbhar</h2>
          <p class="title">Team Member-2</p>
          <p>Certification:NIIT StackRoute PGP in Full Stack Software Engineering </p>
          <p>pravinkumbhar412@gmail.com</p>
        </div>
      </div>
    </div> */}
  </div>
</div>


      );
}
 
export default AboutUs;