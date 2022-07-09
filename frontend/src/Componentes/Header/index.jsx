import "./style.css";
import ImgLogoHome from "../../Assets/img-logo-home.svg"

function Header(){
    return (
       <header>
        <img src={ImgLogoHome} />
       </header>
    );
}

export default Header;