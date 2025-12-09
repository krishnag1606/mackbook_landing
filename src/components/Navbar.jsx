import { navLinks } from "../constants"

const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-between mt-2'>
            <img src='/logo.svg' alt='Apple logo'/>
            <ul className='flex text-white'>
                {navLinks.map((label) => (
                    <li key={label} id={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>
            <div className='flex-center gap-3'>
                <button>
                    <img src='./search.svg' alt="Search"/>
                </button>
                <button>
                    <img src='./cart.svg' alt="Cart"/> 
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar