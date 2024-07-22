import Header from '../Header';
import Footer from '../Footer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getMainSettings } from '@/app/store/actions';
import useSWR from 'swr';

const Layout = ({children}) => {
    // useSWR(dispatch, getMainSettings);
    return (
        <React.Fragment>
            <Header />
                {children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
