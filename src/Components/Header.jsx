import { BiGlobe } from 'react-icons/bi'
import { FaUserPlus } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='bg-brand-color'>
      <div className='container mx-auto h-11 flex justify-between'>
        <a className='text-yellow-400 text-3xl font-semibold flex items-center bg-primary-brand-color rounded-md py-3 px-5' href="">
          <img src="src/assets/img/getiricon.svg" alt="" />
        </a>
        <nav className='flex items-center text-sm font-semibold'>
          <li className='list-none flex gap-x-8'>
            <a className='text-white flex items-center pr-2 transition-all text-opacity-80 hover:text-opacity-100' href="">
              <BiGlobe className='mr-3' />
              Türkçe (TR)
            </a>
            <a className='text-white flex items-center transition-all text-opacity-80 hover:text-opacity-100'href="">
              <FaUser className='mr-3' />
              Giriş Yap
            </a>
            <a className='text-white flex items-center transition-all text-opacity-80 hover:text-opacity-100' href="">
              <FaUserPlus className='mr-3' />
              Kayıt Ol
            </a>
          </li>
        </nav>
      </div>
    </header>
  )
}

export default Header