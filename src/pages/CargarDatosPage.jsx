import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";

const CargarDatosPage = () => {
    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar />
                <div className='w-full'>
                    <Navbar titulo={'Cargar datos'} />
                </div>
            </div>
        </>
    );
};

export default CargarDatosPage;