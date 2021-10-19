import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  Container,
  Breadcrumb
    } from 'react-bootstrap';
import './App.css'



const Success = () => {
	return (
		<Container className="mt-5">
			<Breadcrumb>
        <Breadcrumb.Item>> Success</Breadcrumb.Item>
      </Breadcrumb>
			<h1>
				Data Berhasil Dikirim
			</h1>
		</Container>
	)
}

export default Success