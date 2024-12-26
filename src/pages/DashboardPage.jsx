import SideBar from '../componentes/navegacion/sidebar';
import Navbar from '../componentes/navegacion/navbar';

const DashboardPage = () => {
    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar />
                <div className='w-full'>
                    <Navbar titulo={'Bienvenid@'} />
                    <div className="content">
                        <h1>Dashboard Page</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;