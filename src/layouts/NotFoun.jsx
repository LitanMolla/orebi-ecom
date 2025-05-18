import { FaSearch } from "react-icons/fa";
import Container from '../components/Container'
import Btn from "../components/Btn";
import { Link } from "react-router-dom";

const NotFoun = () => {
  return (
    <>
        <Container>
          <div className="w-1/2 mt-21 mb-35 space-y-12">
            <h2 className='font-bold text-[200px]'>404</h2>
          <p className='text-base text-[#767676]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
            <div className="relative">
              <input type="text" placeholder='Type to search' className='p-5 border border-[#767676]/50 w-full rounded-md outline-0' />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2  "/>
            </div>
          <Link to={'/'}><Btn text={'Back to Home'} /></Link>
          </div>
        </Container>
    </>
  )
}

export default NotFoun