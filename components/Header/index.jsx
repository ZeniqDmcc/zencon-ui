import Logo from "../logo/Logo"

function Header() {
    return <header className="py-0">
        <div className="container mx-auto">
            <div className="flex columns-2 justify-between items-center">
                <Logo />
            </div>
        </div>
    </header>
}

export default Header