import React from 'react';
import brockbuster from '../components/BrockBuster2.png'


export default function Home(props) {
    return (
        <div className='panel panel-default homepage'>
            <div>WELCOME TO</div>
            <div><img src={brockbuster} /></div>
        </div>
    )
}
