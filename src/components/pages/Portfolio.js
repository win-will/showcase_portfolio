import React from 'react';
//import passSave from '../../images/passSave.png';
import weatherDash from '../../images/weatherDashboard.png'
import pwdGenerator from '../../images/passwordGenerator.png'
import simpleCalendar from '../../images/simpleCalendar.png'
import jsQuiz from '../../images/jsQuiz.png';

const styles = {
  imageSize: {
    height: '300px',
    width: '500px',
  }
};

function changeBackgroundBlack(e) {
  e.target.style.background = 'black';
}
function changeBackgroundWhite(e) {
  e.target.style.background = 'white';
}

export default function Portfolio() {
  return (

    <div class="container">
      <h1>Portfolio</h1>
      <br></br>
    <div class="row row-cols-2 gx-1">
      
      <div class="col h-50 p-1">
        <a href="https://win-will.github.io/js-quiz/" onMouseOver={changeBackgroundBlack} onMouseLeave={changeBackgroundWhite}>
          <img src={jsQuiz} class="img-thumbnail hoverable" style={styles.imageSize} alt="JavaScript main page"></img>
        </a>
      </div>
      <div class="col h-50 p-1">
        <a href="https://win-will.github.io/weather-dash/" onMouseOver={changeBackgroundBlack} onMouseLeave={changeBackgroundWhite}>
          <img src={weatherDash} class="img-thumbnail" style={styles.imageSize} alt="Weather Dashboard main page"></img>  
        </a>
      </div>
      <div class="col p-1">
        <a href="https://win-will.github.io/password-generator/" onMouseOver={changeBackgroundBlack} onMouseLeave={changeBackgroundWhite}>
            <img src={pwdGenerator} class="img-thumbnail" style={styles.imageSize} alt="Password Generator main page"></img>  
        </a>
      </div>
      <div class="col p-1">
        <a href="https://win-will.github.io/simple-calendar/" onMouseOver={changeBackgroundBlack} onMouseLeave={changeBackgroundWhite}>
          <img src={simpleCalendar} class="img-thumbnail" style={styles.imageSize} alt="Simple Calendar main page"></img>  
        </a>
        </div>
      <br></br>
    </div>
  </div>
  );
}
