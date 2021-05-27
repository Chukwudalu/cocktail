import React from 'react';
import Cocktails from '../components/cocktails';
import Hero from '../components/hero';


const Home = () => {
   
    return (
        <div className='home'>
            <Hero />
            <Cocktails/>
        </div>
    )
}

export default Home