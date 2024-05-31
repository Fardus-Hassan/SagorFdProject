import { Outlet } from 'react-router-dom';
import NavBar from '../Sheared/NavBar';
import Footer from '../Sheared/Footer';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='w-[95%] mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;