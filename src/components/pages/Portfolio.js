import React from 'react';
//import passSave from '../../images/passSave.png';
import weatherDash from '../../images/weatherDashboard.png'
import pwdGenerator from '../../images/passwordGenerator.png'
import simpleCalendar from '../../images/simpleCalendar.png'
import jsQuiz from '../../images/jsQuiz.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const styles = {
  imageSize: {
    height: '300px',
    width: '500px',
  },
  bgImage: {
   maxWidth: '22rem',
   backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  bgMask: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
 
  },
  bgOverlay: {
    backgroundColor: 'rgba(251, 251, 251, 0.2)',
 
   },
   overlayText1: {
    marginTop:'-50px',
    // marginRight: '100px',
    textDecoration: 'none',
    fontSize: '20px',
    color: 'black',
    fontWeight: 'bold',
 
   },
   overlayText2: {
    marginTop:'-100px',
    // marginRight: '-100px',
    textDecoration: 'none',
    fontSize: '32px',
    color: 'black',
 
   },
   link: {
    textDecoration: 'none',
   },
};

function changeBackgroundBlack(e) {
  e.target.style.background = 'black';
}
function changeBackgroundWhite(e) {
  e.target.style.background = 'white';
}

function changeColorBlue(e) {
  e.target.style.color = 'black';
  // e.target.style.fontSize = '18px';
  e.target.style.textShadow = '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff';
}
function changeColorSizeBlackLarge(e) {
  e.target.style.color = 'white';
  // e.target.style.fontSize = '19px';
  e.target.style.textShadow = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
}

function changeIconColorBlue(e) {
  e.target.style.color = 'black';
  // e.target.style.fontSize = '42px';
  e.target.style.textShadow = '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff';
}
function changeIconColorSizeBlackLarge(e) {
  e.target.style.color = 'grey';
  // e.target.style.fontSize = '43px';
  e.target.style.textShadow = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
}

export default function Portfolio() {
  return (

  <div class="container">
      {/* <h2>Portfolio</h2> */}
      <br></br>
    <div class="row row-cols-2 gx-1">
      
      <div class="col h-50 p-1">
        <img src={jsQuiz} class="img-thumbnail hoverable" style={styles.imageSize} alt="JavaScript main page" onMouseOver={changeBackgroundBlack} onMouseLeave={changeBackgroundWhite}></img>
          
        <a href="https://win-will.github.io/js-quiz/" style={styles.link} onMouseOver={changeColorSizeBlackLarge} onMouseLeave={changeColorBlue}>
        <div class="d-flex justify-content-center align-items-center">
          <p class="mb-0" style={styles.overlayText1} >JavaScript Quiz</p>
        </div>
        </a>

        <a href="https://github.com/win-will/js-quiz/" style={styles.link} >
          <div class="d-flex justify-content-center align-items-center">
            <div class="mb-0" style={styles.overlayText2}><FontAwesomeIcon icon={faGithub} onMouseOver={changeIconColorSizeBlackLarge} onMouseLeave={changeIconColorBlue}/></div>
          </div>
        </a>
      </div>

      <div class="col h-50 p-1">
        <img src={weatherDash} class="img-thumbnail hoverable" style={styles.imageSize} alt="JavaScript main page" onMouseOver={changeBackgroundBlack} onMouseLeave={changeBackgroundWhite}></img>
          
        <a href="https://win-will.github.io/weather-dash/" style={styles.link} onMouseOver={changeColorSizeBlackLarge} onMouseLeave={changeColorBlue}>
        <div class="d-flex justify-content-center align-items-center">
          <p class="mb-0" style={styles.overlayText1} >Weather Dashboard</p>
        </div>
        </a>

        <a href="https://github.com/win-will/weather-dash/" style={styles.link} onMouseOver={changeIconColorSizeBlackLarge} onMouseLeave={changeIconColorBlue}>
          <div class="d-flex justify-content-center align-items-center">
            <div class="mb-0" style={styles.overlayText2}><FontAwesomeIcon icon={faGithub} /></div>
          </div>
        </a>
      </div>

      <div class="col h-50 p-1">
      
        <img src={simpleCalendar} class="img-thumbnail hoverable" style={styles.imageSize} alt="JavaScript main page" onMouseOver={changeBackgroundBlack} onMouseLeave={changeBackgroundWhite}></img>
          
        <a href="https://win-will.github.io/simple-calendar/" style={styles.link} onMouseOver={changeColorSizeBlackLarge} onMouseLeave={changeColorBlue}>
        <div class="d-flex justify-content-center align-items-center">
          <p class="mb-0" style={styles.overlayText1} >Simple Calendar</p>
        </div>
        </a>

        <a href="https://github.com/win-will/simple-calendar/" style={styles.link} onMouseOver={changeIconColorSizeBlackLarge} onMouseLeave={changeIconColorBlue}>
          <div class="d-flex justify-content-center align-items-center">
            <div class="mb-0" style={styles.overlayText2}><FontAwesomeIcon icon={faGithub} /></div>
          </div>
        </a>
      </div>

      <div class="col h-50 p-1">
      
        <img src={pwdGenerator} class="img-thumbnail hoverable" style={styles.imageSize} alt="JavaScript main page" onMouseOver={changeBackgroundBlack} onMouseLeave={changeBackgroundWhite}></img>
          
        <a href="https://win-will.github.io/password-generator/" style={styles.link} onMouseOver={changeColorSizeBlackLarge} onMouseLeave={changeColorBlue}>
        <div class="d-flex justify-content-center align-items-center">
          <p class="mb-0" style={styles.overlayText1} >Password Generator</p>
        </div>
        </a>

        <a href="https://github.com/win-will/password-generator/" style={styles.link} onMouseOver={changeIconColorSizeBlackLarge} onMouseLeave={changeIconColorBlue}>
          <div class="d-flex justify-content-center align-items-center">
            <div class="mb-0" style={styles.overlayText2}><FontAwesomeIcon icon={faGithub} /></div>
          </div>
        </a>
      </div>

    </div>
  </div>
  );
}
