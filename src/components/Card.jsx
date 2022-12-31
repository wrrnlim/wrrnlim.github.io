import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit'

import React, { useEffect, useState } from 'react'


export default function Card(props) {

  const { title, text, badge, codeURL, guideURL } = props;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [flexDirection, setflexDirection] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      setflexDirection('flex-row');
    } else {
      setflexDirection('flex-column');
    }
  }, [screenWidth]);
  
  return (
    <>
      <MDBContainer breakpoint="md">
      <MDBCard className='bg-white mt-5 p-2'>
        <MDBRow className='g-0'>
          <MDBCol md='9'>
            <MDBCardBody>
              <MDBCardTitle tag='h3'>{title}</MDBCardTitle>
              <MDBCardText> {text}</MDBCardText>
              <MDBCardText>
                <small className='text-muted'>
                  <img alt="GitHub last commit" src={badge}></img>
                </small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md='3' className={'d-flex align-items-end justify-content-center ' + flexDirection}>
            <MDBBtn className='my-1 me-3 ms-3' outline color='dark' style={{width: '150px'}} href={codeURL} disabled={codeURL == undefined} target='_blank'>
              <MDBIcon fas icon='code' className='me-2'/>
                Code
            </MDBBtn>
            <MDBBtn className='my-1 me-3' outline color='dark' style={{width: '150px'}} href={guideURL} disabled={guideURL == undefined} target='_blank'>
              <MDBIcon fas icon='file-alt' className='me-2'/>
                Guide
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      </MDBContainer>
    </>
  )
}
