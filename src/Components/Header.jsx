import { BiGlobe } from 'react-icons/bi'

const Header = () => {
  return (
    <header className='bg-brand-color'>
      <div className='container mx-auto h-11 flex justify-between'>
        <a className='text-yellow-400 text-3xl font-semibold' href="">
          getir
        </a>
        <nav className='flex items-center text-sm font-semibold'>
          <li className='list-none flex gap-x-8'>
            <a className='text-white flex items-center pr-2 transition-all text-opacity-80 hover:text-opacity-100' href="">
              <BiGlobe />
              Türkçe (TR)
            </a>
            <a className='text-white transition-all text-opacity-80 hover:text-opacity-100'href="">
              Giriş Yap
            </a>
            <a className='text-white transition-all text-opacity-80 hover:text-opacity-100' href="">
              Kayıt Ol
            </a>
          </li>
        </nav>
      </div>
    </header>
  )
}

export default Header