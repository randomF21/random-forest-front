import logo from '../../assets/imagenes/logo.webp';
const Navbar = ({ titulo }) => {
    return (
        <div className="fixed w-full flex justify-between items-center px-12 h-32 border-b bg-white z-10">

            <h2 className="text-7xl ml-60" >{titulo}</h2>

            <div className="flex justify-end items-center">
                <img src={logo} alt="logo" className="w-64" />
                {/* <div className="w-[350px] h-[100px] bg-gray-300 border border-gray-500">
                    a
                </div> */}

                {/* <img src="https://via.placeholder.com/100x200.png" 
                     alt="imagen aleatoria"
                     className="max-w-full max-h-full object-contain"  
                /> */}
            </div>
        </div>
    )
}

export default Navbar;