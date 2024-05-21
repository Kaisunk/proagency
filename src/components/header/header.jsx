import style from "../header/header.module.css";
import LogoMenu from "../../assets/img/";
import style from "../header/header.module.css";
import style from "../header/header.module.css";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const links = [
      { name: "inicio", link: "/" },
      { name: "Carros", link: "/" },
      { name: "Manuntenção", link: "/" },
      { name: "Novos", link: "/" },
    ];

    const toggleMenu = () => {
        setMenuActive(!menuActive);
      };
    
      return (
            <header className={`${style.Header} ${menuActive ? style.active : ""}`}>
              <div className={style.headerWrapper}>
                <div>
                  <a className={style.logoA} href="/">
                    <img src={LogoMenu} alt="Logo Aston Martin" />
                  </a>
                </div>
                <button id={style.buttonMobile} onClick={toggleMenu}>
                  <img src={menuActive ? IconClose : IconBars} id={style.menuIcons} alt="Icon Menu" />
                </button>
                <nav className={style.navMenu}>
                  <ul className={style.ulWrapper}>
                    {links.map((link, index) => (
                      <li className={style.navLi} key={link.name}>
                        <a href={link.link} className={style.linksMenuLi} key={index}>
                          {link.name}
                        </a>
                      </li>
                    ))}
                    <li className={style.navLi}>
                      <a className={style.buyButton} href="">
                        Comprar
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
      );
    };
    
    export default Header;
    
