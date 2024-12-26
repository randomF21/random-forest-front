import SideBar from '../componentes/navegacion/sidebar';

const DashboardPage = () => {
    return (
        <div>
            
            <div className='flex'>
                <SideBar />
                <div className='content'>
                    <h1>Dashboard Page</h1>
                </div>
                
            </div>
            
        </div>
    );
};

export default DashboardPage;