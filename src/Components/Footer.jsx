import React from 'react'
import CompanyLogo from '../assets/Logo/horoluxiaLogo.png'

function Footer() {
  return (
    <>
        <footer className="footer p-10 bg-white-200 text-base-content">
                <aside  id='Fonts'>
                  <img src={CompanyLogo} className="logo" />
                  <p>Horoluxia<br/>Providing reliable watch since 1992</p>
                </aside> 
                <nav>
                  <header className="footer-title"  id='Fonts'>Services</header> 
                  <a className="link link-hover"  id='Fonts'>Branding</a> 
                  <a className="link link-hover"  id='Fonts'>Design</a> 
                  <a className="link link-hover"  id='Fonts'>Marketing</a> 
                  <a className="link link-hover"  id='Fonts'>Advertisement</a>
                </nav> 
                <nav>
                  <header className="footer-title"  id='Fonts'>Company</header> 
                  <a className="link link-hover"  id='Fonts'>About us</a> 
                  <a className="link link-hover"  id='Fonts'>Contact</a> 
                  <a className="link link-hover"  id='Fonts'>Jobs</a> 
                  <a className="link link-hover"  id='Fonts'>Press kit</a>
                </nav> 
                <nav>
                  <header className="footer-title"  id='Fonts'>Legal</header> 
                  <a className="link link-hover"  id='Fonts'>Terms of use</a> 
                  <a className="link link-hover"  id='Fonts'>Privacy policy</a> 
                  <a className="link link-hover"  id='Fonts'>Cookie policy</a>
                </nav>
              </footer>
    </>
  )
}

export default Footer