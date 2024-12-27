import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";

const UsuariosPage = () => {
    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar />
                <div className='w-full'>
                    <Navbar titulo={'Usuarios'} />
                </div>
            </div>
        </>
    );
};

export default UsuariosPage;