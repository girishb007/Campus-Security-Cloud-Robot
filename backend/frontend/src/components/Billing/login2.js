import React, { Component } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import Logo from "./logo.png"


function Login2() {
  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="">
          <div className="d-flex flex-column ms-5">

          <div className="login-content">
                <h2 style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>WELCOME TO </h2>
                <img  height="200"
                width="240"
                 src={Logo}/>
                 <br></br>
                 <br></br>
                 <h2 style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>Developed by Group 17 </h2>
</div>


            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger'>
                Danger
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='12' className=" center10">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>


      </MDBRow>

    </MDBContainer>
  );
}

export default Login2;