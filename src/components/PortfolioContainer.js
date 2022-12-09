import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const styles = {
    footerHeight: {
      height: '300px'
    },
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <div class="bg-light">
      <div class="navbar-brand bg-light">
            <div class="text-center bg-light">
               <span class="display-4 text-center">Will Winston</span>{/*<span class="display-3">Portfolio</span> */}
              </div>
      </div>
      <br class="text-center bg-light"></br>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <footer class="footer bg-light" style={styles.footerHeight}>
        <div class="text-center">
          <div class="h3">
            <a href="https://www.linkedin.com/in/william-w-b0030786/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            &nbsp;&nbsp;
            <a href="https://github.com/win-will/">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            &nbsp;&nbsp;
            <a href="https://twitter.com/williamwinston">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
           </div>  
        </div>
      </footer>
    </div>
  );
}
