import { useRouteError } from "react-router-dom";
import Background from "./Background";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Background>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center text-light">
          <h1 className="display-1 fw-bold">{error.status}</h1>
          <p className="fs-3"> {error.statusText} </p>
          <MDBBtn color='light' outline href='/' className="mt-5">
            <div className='hero-btn'>
              <MDBIcon size='lg' fas icon='house' /> &nbsp;
              Home
            </div>
          </MDBBtn>
        </div>
      </div>
    </Background>
  );
}