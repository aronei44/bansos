import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  Container,
  Breadcrumb,
  Form,
  Card,
  Col,
  Row,
  Button
    } from 'react-bootstrap';
import './App.css'

import { useHistory } from "react-router-dom";

const Data = () => {
	const [nama, setNama] = useState('')
	const [nik, setNik] = useState('')
	const [noKK, setNoKK] = useState('')
	const [fKtp, setFktp] = useState('')
	const [FKK, setFKK] = useState('')
	const [umur, setUmur] = useState('')
	const [jenisKelamin, setJenisKelamin] = useState('')
	const [alamat, setAlamat] = useState('')
	const [rt, setRt] = useState('')
	const [rw, setRw] = useState('')
	const [pSebelumPandemi, setPSebelumpandemi] = useState('')
	const [pSetelahPandemi, setPSetelahpandemi] = useState('')
	const [alasan, setAlasan] = useState('')
	const [setuju, setSetuju] = useState(false)

	let history = useHistory()

	const kirimData = () =>{
		if(setuju && !nama == '' && !nik == ''&& !noKK == ''&& !fKtp == ''&& !FKK == ''&& !umur == '' && !jenisKelamin == ''&& !alamat == ''&& !nik == '' && !rt == '' && !rw == '' && !pSebelumPandemi == ''&& !pSetelahPandemi == ''&& !alasan == ''){
			const data = {
				Nama : nama,
				NIK : nik,
				No_KK : noKK,
				Foto_KTP :fKtp,
				Foto_KK : FKK,
				Umur : umur,
				Jenis_Kelamin : jenisKelamin,
				Alamat : alamat,
				RT : rt,
				RW : rw,
				Penghasilan_Sebelum_Pandemi : pSebelumPandemi,
				Penghasilan_Setelah_Pandemi : pSetelahPandemi,
				Alasan : alasan
			}
			let time = Math.random()*1600
			if(time>1500){
				history.push('/error')
			}else{
				history.push('/success')
				console.log(data)
			}		
		}
	}

	return (
		<Container className="mt-5">
			<Breadcrumb>
		    <Breadcrumb.Item>> Tambah Data</Breadcrumb.Item>
		  </Breadcrumb>
			<Card body className="bg-blue-1">
				<Form>
				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      Nama
				    </Form.Label>
				    <Col sm="4">
				      <Form.Control 
				      type="text" 
				      placeholder="Masukan Nama" 
				      onChange={(e)=>setNama(e.target.value)}
				      required
				      />
				    </Col>
				  </Form.Group>

				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      NIK
				    </Form.Label>
				    <Col sm="4">
				      <Form.Control 
				      type="number" 
				      placeholder="NIK" 
				      onChange={(e)=>setNik(e.target.value)}
				      required/>
				    </Col>
				  </Form.Group>

					<Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      No KK
				    </Form.Label>
				    <Col sm="4">
				      <Form.Control 
				      type="number" 
				      placeholder="No KK" 
				      onChange={(e)=>setNoKK(e.target.value)}
				      required />
				    </Col>
				  </Form.Group>
					<Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      Foto KTP
				    </Form.Label>
				    <Col sm="4">
				      <Form.Control 
				      type="file" 
				      placeholder="Foto Ktp" 
				      onChange={(e)=>setFktp(e.target.files[0])}
				      required />
				    </Col>
				  </Form.Group>
				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      Foto KK
				    </Form.Label>
				    <Col sm="4">
				      <Form.Control 
				      type="file" 
				      placeholder="Foto KK" 
				      onChange={(e)=>setFKK(e.target.files[0])}
				      required />
				    </Col>
				  </Form.Group>
				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      Umur
				    </Form.Label>
				    <Col sm="4">
				      <Form.Control 
				      type="number" 
				      placeholder="Umur" 
				      min="25"
				      onChange={(e)=>setUmur(e.target.value)}
				      required />
				    </Col>
				  </Form.Group>
				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      Jenis Kelamin
				    </Form.Label>
				    <Col sm="4">
				      <Form.Select onChange={(e)=>setJenisKelamin(e.target.value)}>
							  <option>Pilih Jenis kelamin</option>
							  <option>Laki Laki</option>
							  <option>Perempuan</option>
							</Form.Select>
				    </Col>
				  </Form.Group>
				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      Alamat
				    </Form.Label>
				    <Col sm="4">
				      <Form.Control 
				      as="textarea" 
				      rows={3}
				      size={20}
				      onChange={(e)=>setAlamat(e.target.value)}
				      required />
				    </Col>
				  </Form.Group>
				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      RT
				    </Form.Label>
				    <Col sm="4">
				      <Form.Control 
				      type="number" 
				      placeholder="RT" 
				      onChange={(e)=>setRt(e.target.value)}
				      required />
				    </Col>
				  </Form.Group>
				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      RW
				    </Form.Label>
				    <Col sm="4">
				      <Form.Control 
				      type="number" 
				      placeholder="RW" 
				      onChange={(e)=>setRw(e.target.value)}
				      required />
				    </Col>
				  </Form.Group>
				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      Penghasilan Sebelum pandemi
				    </Form.Label>
				    <Col sm="4">
				      <Form.Select onChange={(e)=>setPSebelumpandemi(e.target.value)}>
							  <option>Pilih Penghasilan</option>
							  <option>kurang dari RP 500.000</option>
							  <option>Rp 500.000 - Rp 1.000.000</option>
							  <option>Rp 1.000.000 - Rp 2.000.000</option>
							  <option>Rp 2.000.000 - Rp 3.000.000</option>
							  <option>lebih dari Rp 3.000.000</option>
							</Form.Select>
				    </Col>
				  </Form.Group>
				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      Penghasilan Setelah Pandemi
				    </Form.Label>
				    <Col sm="4">
				      <Form.Select onChange={(e)=>setPSetelahpandemi(e.target.value)}>
							  <option>Pilih Penghasilan</option>
							  <option>kurang dari RP 500.000</option>
							  <option>Rp 500.000 - Rp 1.000.000</option>
							  <option>Rp 1.000.000 - Rp 2.000.000</option>
							  <option>Rp 2.000.000 - Rp 3.000.000</option>
							  <option>lebih dari Rp 3.000.000</option>
							</Form.Select>
				    </Col>
				  </Form.Group>
				  <Form.Group as={Row} className="mb-3">
				    <Form.Label column sm="2">
				      Alasan Membutuhkan Bantuan
				    </Form.Label>
				    <Col sm="4">
				      <Form.Select onChange={(e)=>setAlasan(e.target.value)}>
							  <option>Pilih Alasan</option>
							  <option>Kehilangan pekerjaan</option>
							  <option>Kepala keluarga terdampak atau korban Covid</option>
							  <option>Tergolong fakir/miskin semenjak sebelum Covid</option>
							</Form.Select>
				    </Col>
				  </Form.Group>
				  <Form.Check
		        type="checkbox"
		        id="customControlAutosizing"
		        label="Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut."
		      	required
		      	onChange={(e)=>setSetuju(e.target.value)}
		      />
				  <Button variant="primary" type="submit" onClick={kirimData}>Kirim</Button>
				</Form>
			</Card>
		</Container>
	)
}

export default Data