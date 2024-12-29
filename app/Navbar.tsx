import Link from 'next/link'
import DemoButton from './component/NavButton'

const Navbar = () => {
  return (
    <div>
          {/* <!-- Navbar --> */}
      <nav className="bg-black text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* <!-- Store Name --> */}
            <Link href={'/'}><div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-custom text-white">
              Filmfy
            </div></Link>


            {/*<!-- Search Bar --> */}
          <div className="hidden md:flex flex-1 justify-center">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-1/2 px-4 py-2 text-gray-800 border  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
            <DemoButton/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar