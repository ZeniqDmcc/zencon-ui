import HeadingH1 from "../Atoms/Headings/HeadingH1"
import Logo from "../logo/Logo"

function Header() {
    return <header className="pt-[20px]">
        <div className="container mx-auto">
            <div className="flex items-center justify-between columns-2">
                <Logo />
            </div>
        </div>
    </header>
}

export default Header