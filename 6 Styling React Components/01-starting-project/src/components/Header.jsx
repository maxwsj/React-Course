import logo from '../assets/logo.png';
import classes from './Header.module.css';

export default function Header() {
   return (
      <header className={classes.paragraph}>
         <img src={logo} alt="A canvas" />
         <h1>ReactArt</h1>
         <p>A community of artists and art-lovers.</p>
      </header>
   );
}
