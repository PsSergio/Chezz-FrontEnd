import Image from '../assets/logo.svg';

function Logo({ _width }){
    return <img width={_width} src={Image} className='mb-6 logo-img'/>
}

export default Logo;