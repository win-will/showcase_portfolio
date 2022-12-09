import React from 'react';

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('Resume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Resume.pdf';
          alink.click();
      })
  })
}

const styles = {
  bodyHeight: {
    height: '475px'
  },
};

export default function Resume() {
  return (
    <div class="container d-flex justify-content-center" style={styles.bodyHeight}>
      {/* <h1>Resume</h1> */}
      <br></br>
      
      <div class="container w-50 m-3">
        <p>
        <span class="h3"><u>Front-end Proficiencies</u></span>
          <ul>
            <li class="lead">JavaScript</li>
            <li class="lead">CSS</li>
            <li class="lead">Bootstrap</li>
            <li class="lead">NodeJS</li>
          </ul>
          <br></br>
          <span class="h3"><u>Back-end Proficiencies</u></span>
          <ul>
            <li class="lead">APIs</li>
            <li class="lead">MySQL</li>
            <li class="lead">MongoDB</li>
            <li class="lead">Kubernetes</li>
          </ul>
        </p>
        <button onClick={onButtonClick}>Download Resume</button>
      </div>
    </div>
  );
}
