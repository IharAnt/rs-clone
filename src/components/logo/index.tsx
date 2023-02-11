import logo from './../../assets/img/logoImg.png'
import { Link } from 'react-router-dom';
import { IpropsLogo } from './types/ILogo';

const Logo = (props: IpropsLogo) => {
    return <Link
        className={`header-logo block cursor-pointer hover:scale-105 duration-300 ${props.heigthLogo}`}
        to='/'
    >
        <img className='h-full' src={logo} alt="logo" />
    </Link>
};

export default Logo;
