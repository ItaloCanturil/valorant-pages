import RiotLogo from './RiotLogo'
import ValorantLogo from './ValorantLogo'
const Header = () => {
  return (
    <header className='bg-black flex items-center p-3'>
      <RiotLogo/>
      <span className='text-white mx-4'>|</span>
      <ValorantLogo/>
    </header>
  )
}

export default Header