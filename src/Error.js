import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  Container,
  Breadcrumb
    } from 'react-bootstrap';
import './App.css'



const Error = () => {
	return (
		<Container className="mt-5">
			<Breadcrumb>
        <Breadcrumb.Item>> Internal Server Error</Breadcrumb.Item>
      </Breadcrumb>
			<h1>
				500 - Internal Server Error
			</h1>
		</Container>
	)
}

export default Error