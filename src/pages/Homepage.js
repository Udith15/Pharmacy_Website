import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import './Homepage.css'
import Footer from '../components/Footer';

function Homepage(){

    const navi=useNavigate()
    
    return (
        <div className='homepage'>
            <Navbar/>
            <div className='hp1'>
                <h1>Products</h1>
            </div>
            <div className='hp2'>
                <div className='hp2-1'>
                <h4>Medicine</h4>
                <button onClick={()=>navi('/medicinepage')}>View more</button>
                </div>
                <div className='hp2-2'>
                    <Card title="Dolo650" price="6.99$" imgpath="medi1.jpeg"/>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    <Card title="Ginkoba" price="9.99$" imgpath="medi3.jpg"/>
                    <Card title="Ambro" price="11.99$" imgpath="medi4.jpg"/>
                    <Card title="Brain Touch 500" price="21.99$" imgpath="medi5.jpg"/>
                </div>
            </div>
            <div className='hp2'>
                <div className='hp2-1'>
                <h4>Health Care</h4>
                <button onClick={()=>navi('/healthcarepage')}>View more</button>
                </div>
                <div className='hp2-2'>
                    <Card title="VLCC" price="25.99$" imgpath="hc1.jpeg"/>
                    <Card title="Ethi Sun" price="29.99$" imgpath="hc2.jpeg"/>
                    <Card title="Minimalist SS" price="35.99$" imgpath="hc3.jpeg"/>
                    <Card title="Foxtale" price="55.99$" imgpath="hc4.jpeg"/>
                    <Card title="LA Shield" price="15.99$" imgpath="hc5.jpeg"/>
                </div>
            </div>
            <div className='hp2'>
                <div className='hp2-1'>
                <h4>Lab tests</h4>
                <button onClick={()=>navi('/labtestpage')}>View more</button>
                </div>
                <div className='hp2-2'>
                    <Card title="Covid 19" price="99.99$" imgpath="lt1.jpeg"/>
                    <Card title="CBC Test" price="27.99$" imgpath="lt2.jpeg"/>
                    <Card title="Clear Blue" price="31.99$" imgpath="lt3.jpeg"/>
                    <Card title="Body check" price="64.99$" imgpath="lt4.jpg"/>
                    <Card title="Accu-Check" price="19.99$" imgpath="lt5.jpeg"/>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Homepage;