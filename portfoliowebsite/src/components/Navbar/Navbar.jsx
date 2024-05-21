import React from 'react';

const Navbar = () => {
  return (
    <nav>
        <header className="sticky left-0 right-0 top-0 z-50">
            Rimmi Goyal
            <div className='flex w-full items-center justify-between bg-white px-20 py-8 shadow-md'>
                <div>
                <p className='text-2xl font-bold'>
                    Logic ki talaash jari hai 
                </p>

                </div>
                <div className='flex items-center gap-5'>
                    <div className='cursor-pointer text-lg font-bold text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600'>
                        Home
                    </div>

                    <div className='cursor-pointer text-lg font-bold text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600'>
                        About 
                    </div>

                    <div className='cursor-pointer text-lg font-bold text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600'>
                        Home
                    </div>

                    <div className='cursor-pointer text-lg font-bold text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600'>
                        Home
                    </div>

                </div>
            </div>
        </header>
    </nav>
  );
}

export default Navbar;
