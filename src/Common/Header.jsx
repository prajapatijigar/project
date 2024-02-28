import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function App() {
  const [openNavColorThird, setOpenNavColorThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorThird(!openNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <Link className='nav-link' to="/">Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                 <Link to="/about" className='nav-link'>About</Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                  <Link to="/menu" className='nav-link'>Menu</Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                  <Link to="/product" className='nav-link'>Product</Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                  <Link to="/services" className='nav-link'>Services</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}