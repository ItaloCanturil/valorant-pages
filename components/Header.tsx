import RiotLogo from "./RiotLogo";
import ValorantLogo from "./ValorantLogo";
const Header = () => {
  return (
    <header className="bg-black flex items-center p-3">
      <RiotLogo />
      <span className="text-white mx-4">|</span>
      <ValorantLogo />
      <nav className="mx-8">
        <ul className="text-white flex text-xs">
          <li className="mx-2">
            <a href="#">GAME</a>
          </li>
          <li className="mx-2">
            <a href="#">CHAMPIONS</a>
          </li>
          <li className="mx-2">
            <a href="#">NEWS</a>
          </li>
          <li className="mx-2">
            <a href="#">PATCH NOTES</a>
          </li>
          <li className="mx-2">
            <a href="#">DISCOVER</a>
          </li>
          <li className="mx-2">
            <a href="#">ESPORTS</a>
          </li>
          <li className="mx-2">
            <a href="#">UNIVERSE</a>
          </li>
          <li className="mx-2">
            <a href="#">SHOP</a>
          </li>
          <li className="mx-2">
            <a href="#">SUPPORT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
