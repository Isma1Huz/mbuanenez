import CardGroup from 'react-bootstrap/CardGroup';
import zack from "../../Assets/zack.png"
import joseph from "../../Assets/joseph.png" 
import catherine from "../../Assets/catherine.png"
function Cards() {
  return (
    <CardGroup  className='team' id="team">
      <div class="flip-card member" lg={3} md={4} sm={8}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <img src={zack} alt="Zack" styles="width:300px;height:300px;"/>
          <h3>Zack Syengo</h3> 
          <p>Founder and Patron</p> 
          </div>
          <div class="flip-card-back">
            <small className='member-descr'>Zak Syengo has vast experience in marketing and communication, strategy and business 
                development having worked in the microfinance industry in the last 14 years. 
                He holds a Bachelor of Science degree (First class honors) in Biomedical Sciences 
                from Maseno University, MBA from Strathmore Business School and Pan African EMBA from 
                IESE Business School, Barcelona, Spain. 
            </small>
          </div>
        </div>
      </div>
      <div class="flip-card member" lg={3} md={4} sm={8}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <img src={joseph} alt="joseph" styles="width:300px;height:300px;"/>
          <h3>Josephat Katee</h3> 
          <p>Board Chairman</p>
          </div>
          <div class="flip-card-back">   
          <small className='member-descr'>Mr. Katee has a BA, Building Economics, University of Nairobi. 
              He has worked as a building construction cost consultant and Facilities and 
              Property Management Expert in the last 24 years. He is passionate about water and 
              sanitation project implementation.
            </small>
          </div>
        </div>
      </div>
      <div class="flip-card member" lg={3} md={4} sm={8}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={catherine} alt="Catherine" styles="width:300px;height:300px;"/>
            <h3>Catherine Nekesa</h3> 
            <p>Member</p>
          </div>
          <div class="flip-card-back">
            <small className='member-descr'>Ms. Nekesa is a high school teacher since 2007 under Teachers Service Commission. 
               She is a greater grassroots mobilizer and financial trainer.
               She has been involved in education and clean energy programs in Kitui County.
            </small>
          </div>
        </div>
      </div>
    </CardGroup>
  );
}

export default Cards;



