import React from 'react';
import Footer from '@/app/components/Footer';
import Block1 from '../MainPage/components/Block1';
import Block2 from '../MainPage/components/Block2';
import Block3 from '../MainPage/components/Block3';
import Header from '@/app/components/Header';

const Home = () => (
    <React.Fragment>
        <Header />
        <Block1 />
        <Block2 />
        <Block3 />
        <Footer/>
    </React.Fragment>
);

export default Home;
