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

export default function TitleCard(props) {

  const { title, subtitle } = props

  return (
    <>
      <MDBContainer breakpoint="md">
        <MDBCard className='bg-white m-3 p-2'>
          <MDBCardBody>
            <MDBCardTitle tag='h3' className='fw-bold'>{title}</MDBCardTitle>
            <MDBCardText> {subtitle}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  )
}
