import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

export default function Header() {
    const showHide = () => {
        let closeMenu = document.querySelector(".close");
        let openMenu = document.querySelector(".open");
        let menu = document.querySelector(".pop");
        openMenu.classList.toggle("hidden");
        closeMenu.classList.toggle("hidden");
        menu.classList.toggle("hidden");
    }
    return(
        <>
        <header className="relative">
            <div className="flex justify-between items-center max-w-7xl p-4 mx-auto">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul className="hidden md:flex gap-4 items-center">
                    <li className="link">PRODUCT</li>
                    <li className="link">FEATURES</li>
                    <li className="link">PRICING</li>
                    <li className="w-2 h-2 rounded-full bg-gblue"></li>
                    <li className="link">LOGIN</li>
                </ul>
                <div className="">
                    <img className="open cursor-pointer md:hidden" onClick={showHide} src={menu} alt="menu" />
                    <img className="close hidden cursor-pointer" onClick={showHide} src={close} alt="close" />
                </div>
            </nav>
            </div>
        </header>
        <div
            className="absolute w-2/4 h-2/3 bg-lgblue -top-2 right-0 rounded-2xl -z-10"
        >
        </div>
        <div
            className="pop hidden absolute max-w-full left-4 right-4 rounded-md shadow-xl bg-white z-10 p-4 text-center"
        >
            <ul className="flex flex-col gap-4">
                <li className="link">PRODUCT</li>
                <li className="link">FEATURES</li>
                <li className="link">PRICING</li>
                <li className="w-full h-px bg-gblue"></li>
                <li className="link">LOGIN</li>
            </ul>
        </div>
        </>
    );
}