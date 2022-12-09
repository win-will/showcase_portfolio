import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const styles = {
  bodyHeight: {
    height: '475px'
  },
};

export default function About() {
  return (
    <div class="container" style={styles.bodyHeight}>
      
      {/* <h2>About Me</h2> */}
      <br></br>
      <div class="display-3"><FontAwesomeIcon icon={faUserCircle} /> </div>
      <br></br>
      <blockquote class="blockquote">
        <p>I am analytical, purposeful, and curious.</p>
        <p>I serve in the Michigan Air National Guard in Equal Opportunity, and I work at Synchrony Bank in Application Security.  One of my main interests is learning about the impact of technology on culture and vice versa.</p>
      </blockquote>
      <blockquote class="blockquote">
        <p>“Design is really an act of communication, which means having a deep understanding of the person with whom the designer is communicating.”</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        Donald A. Norman <cite title="Source Title">The Design of Everyday Things</cite>
      </figcaption>
  
    </div>
  );
}
