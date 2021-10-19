import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  Container,
  Breadcrumb
    } from 'react-bootstrap';
import './App.css'



const NotFound = () => {
	return (
		<Container className="mt-5">
			<Breadcrumb>
        <Breadcrumb.Item>> 404 - Page Not Found</Breadcrumb.Item>
      </Breadcrumb>
			<h1>
				404 - Page Not Found
			</h1>
		</Container>
	)
}

export default NotFound