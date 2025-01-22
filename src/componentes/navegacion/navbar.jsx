import logo from '../../assets/imagenes/logo.webp';
const Navbar = ({ titulo, size }) => {
    return (
        <>
        {/*<div className="fixed w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-12 h-auto md:h-32 border-b bg-white z-10">
            
            <h2 
                className="text-3xl md:text-5xl lg:text-7xl font-semibold text-center md:text-left break-words leading-tight md:leading-normal"
                style={{ wordBreak: "break-word" }}
            >
                {titulo}
            </h2>

            
            <div className="mt-4 md:mt-0 flex justify-center md:justify-end items-center">
                <img 
                    src={logo} 
                    alt="logo" 
                    className="w-40 md:w-64 max-w-full h-auto object-contain" 
                />
            </div>
        </div> */}



         <div className="fixed w-full flex justify-between items-center pl-2 lg:px-12 h-32 border-b bg-white z-10">

            <h2 className={`${size} sm:text-4xl md:text-5xl lg:text-7xl mt-6 lg:ml-60 font-semibold`} >{titulo}</h2>

            <div className="mt-4 md:mt-0 flex justify-center lg:justify-end items-center">
                <img src={logo} alt="logo" className="w-40 md:w-64 max-w-full h-auto object-contain" />
            </div>
        </div>  </>
    )
}

export default Navbar;