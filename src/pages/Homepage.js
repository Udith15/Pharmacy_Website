import React from 'react'
// import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import './Homepage.css'
import Footer from '../components/Footer';

function Homepage(){

    // const navi=useNavigate()
    
    return (
        <div className='homepage'>
            <Navbar/>
            <div className='hp1'>
                <h1>Home page</h1>
            </div>
            <div className='hp2'>
                <div className='hp2-1'>
                <h4>Medicine</h4>
                <button>View more</button>
                </div>
                <div className='hp2-2'>
                    <Card title="Dolo650" price="6.99$" imgpath="medi1.jpeg"/>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    <Card title="Ginkoba" price="9.99$" imgpath="medi3.jpg"/>
                    <Card title="Ambro" price="11.99$" imgpath="medi4.jpg"/>
                    <Card title="Brain Touch 500" price="21.99$" imgpath="medi5.jpg"/>
                    {/* <Card/>
                    <Card/>
                    <Card/>  */}
                </div>
            </div>
            <div className='hp2'>
                <div className='hp2-1'>
                <h4>Health Care</h4>
                <button>View more</button>
                </div>
                <div className='hp2-2'>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    {/* <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> */}
                </div>
            </div>
            <div className='hp2'>
                <div className='hp2-1'>
                <h4>Lab tests</h4>
                <button>View more</button>
                </div>
                <div className='hp2-2'>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg"/>
                    {/* <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Homepage;