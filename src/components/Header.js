import Logo from '../assets/logo.png';

import { HeaderStyles, HeadingStyles } from '../styles';

const Header = () => {
  return (
    <div className={HeaderStyles}>
      <img src={Logo} alt='logo' />
      <h1 className={HeadingStyles}>The Beagle Todo List</h1>
    </div>
  );
};

export default Header;
