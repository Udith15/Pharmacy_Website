import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import './Labtest.css'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Labtest() {
    const navi=useNavigate()
    return (
        <div className='labtest'>
        <Navbar />
        <div className='lt2'>
            <div className='lt2-1'>
            <button onClick={()=>{navi('/homepage')}}>Go back</button>
            <h2>Lab test</h2>
            </div>
            <div className='lt2-2'>
            <Card title="Covid 19" price="99.99$" imgpath="lt1.jpeg"/>
                    <Card title="CBC Test" price="27.99$" imgpath="lt2.jpeg"/>
                    <Card title="Clear Blue" price="31.99$" imgpath="lt3.jpeg"/>
                    <Card title="Body check" price="64.99$" imgpath="lt4.jpg"/>
                    <Card title="Accu-Check" price="19.99$" imgpath="lt5.jpeg"/>
                    <Card title="Flowflex Plus" price="39.99$" imgpath="lt6.jpeg"/>
                    <Card title="Blood test" price="109.99$" imgpath="lt7.jpeg"/>
                    <Card title="Clear blue" price="24.99$" imgpath="lt8.jpeg"/>
                    <Card title="Zeelab" price="42.99$" imgpath="lt9.jpeg"/>
            </div>
        </div>
        <Footer />
        </div>
    )
}
export default Labtest