import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

export default function Navbar () {
    const {cartCount} = useCart();
 
    return (
        <>
        <header className="sticky z-50 top-0">
        <nav className="navbar  bg-sky-950 lg:px-[4.6rem]">
           <div className="container-fluid">
            <Link to={'/'}>
            <h3 className="navbar-brand font-bold  text-2xl bg-gradient-to-r
            from-indigo-500 from-10% via-sky-500 via-30%
            to-emerald-500 to-90% bg-clip-text text-transparent
            hover:text-transparent sm:text-4xl">Nexus Market</h3>
            </Link>
            <div className='flex gap-3'>
            <Link to={"/cart"}>
           <form className="d-flex" role="search">
               <i className=" px-2 py-1 border-2 border-orange-400 rounded-md text-orange-400 bg-orange-400/50 hover:bg-orange-500 ml-4 hover:text-white">
               <ShoppingCartCheckoutIcon/>
               <span className=' flex justify-center items-center absolute top-2 right-[4.6rem] lg:right-[5rem] h-[1rem] w-[1rem] rounded-full bg-red-600 p-[0.55rem] text-white font-bold'>{cartCount}</span>
               </i>
           </form>
           </Link>
           
           <div className='lg:hidden'>
           <button class="bg-white h-9 w-12 navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-white text-sm"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">LuxeMarket</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Electronics</a></li>
              <li><a class="dropdown-item" href="#">Digital Accessories</a></li>
              <li><a class="dropdown-item" href="#">Computer Accessories</a></li>
              <li><a class="dropdown-item" href="#">Storage</a></li>
              <li><a class="dropdown-item" href="#">Laptop</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </div>
    </div>
        </nav>
        </header>
      
        </>
    )
};
