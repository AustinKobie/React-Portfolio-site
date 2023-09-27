import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './Footer.css';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © Austin Kobie '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="footer" >
        <div className="footer">
          <div className="sb__footer section__padding">
            <div className="footer-columns">
              {/* Column 1 */}
              <div className="footer-column">
                <h4>Social</h4>
                <a href="https://www.linkedin.com/in/austin-kobie/">
                  <p>LinkedIn</p>
                </a>
                <a href="https://github.com/AustinKobie">
                  <p>GitHub</p>
                </a>
                <a href="https://www.instagram.com/austinkobie/">
                    <p>Instagram</p>
                </a>
                <a href="https://twitter.com/AustinKobie">
                    <p>Twitter</p>
                </a>
              </div>

              {/* Column 2 */}
              <div className="footer-column">
                <h4>Other</h4>
                <p>n/a</p>
                <p>n/a</p>
                <p>n/a</p>
              </div>

              {/* Column 3 */}
              <div className="footer-column">
                <h4>Contact</h4>
                <p>Austinkobie1@gmail.com</p>
                <p>Cape Coral, Fl</p>
                <p>239-860-0898</p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="copyright">
          <Copyright />
        </div>
      </Container>
    </ThemeProvider>
  );
}
