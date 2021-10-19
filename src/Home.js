import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  Container,
  Card,
  Breadcrumb
    } from 'react-bootstrap';
import './App.css'



const Home = () => {
	return (
		<Container className="mt-5">
			<Breadcrumb>
        <Breadcrumb.Item>> Home</Breadcrumb.Item>
      </Breadcrumb>
			<Card body className="bg-blue-1">
				<h1 className="text-dark">
					Selamat datang di Aplikasi <br />
					Pendataan Bantuan Sosial
				</h1>
			</Card>
			<Card className="bg-green-1 mt-5">
				<h3 className="text-gray pl">
					Komplek Panghegar <br />
					Kelurahan Cipadung Kulon <br />
					Kecamatan Panyileukan
				</h3>
			</Card>
		</Container>
	)
}

export default Home