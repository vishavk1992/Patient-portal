import logo from '/static/img/main-logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className='bg-white w-100'>
                <nav className='navbar navbar-expland-lg h-100'>
                    <Link to="/" className='mx-auto'>

                        <img src={logo} alt='logo' />
                    </Link>
                </nav>
            
            </header>

        </div>
    )
}

export default Header;