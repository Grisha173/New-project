import './Header.css';

import logo from '../../media/logo.png';
import Image from 'next/image'
import Navigation from '../Navigation';
import Link from 'next/link';

function Header() {
    return (
        <header className='header'>
            <div className="header__container">
                <Link href="/" className="logo"></Link>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;