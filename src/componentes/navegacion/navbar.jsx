const Navbar = ({titulo}) => {
    return (
        <div className="bg-gray-300 flex justify-between items-center px-12 border-b border-gray-400 h-1/6">

            <h2 className="text-7xl" >{titulo}</h2>

            <div className="w-full h-[80%] flex justify-end items-center">
            <div className="w-[350px] h-[100px] bg-gray-300 border border-gray-500">
                a
            </div>

                {/* <img src="https://via.placeholder.com/100x200.png" 
                     alt="imagen aleatoria"
                     className="max-w-full max-h-full object-contain"  
                /> */}
            </div>
        </div>
    )
}

export default Navbar;