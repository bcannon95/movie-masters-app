import React, { useState, useEffect } from 'react';
import brockbuster from '../components/BrockBuster2.png'

class AboutUs extends React.Component {
  state = {
    movie: '',
  }

  render() {
    return  (
      <div>
          <h2 className="h2-about-us">About Us</h2>
         <div>
            <p className="p1-about-us">How many times have you found yourself scrolling through streaming services not knowing what to watch?
             Countless hours just wasting a way as sheer indecisiveness takes over. Well worry no more!!
             Brockbuster is the place for you. Founded on the back of a lifetime love for film Brockbuster will meet all your needs! </p>
            <p className="p1-about-us">Brockbuster uniqueness comes from our patented RANDOMISER. This feature allows users at a click of a button to select what movie they'll watch.
            People come for the RANDOMISER and stay for our community experience. Our movie list, search functionality and ability to add movies allows all users to connect with those who have similar interests.
            We encourage everyone that visits this website to add their favourite film to the list and grow our community. </p>
            <img className="bbuster" src={brockbuster} />
         </div>
      </div>
    );
  }
}

export default AboutUs;
