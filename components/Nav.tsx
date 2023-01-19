const Nav = () => {
    return (
        <nav id="nav" className="z-50 py-10 pr-16 absolute top-0 right-0 overflow-hidden hidden sm:inline">
            <ul className="flex gap-5">
                <li className="animate-fadeInRight animate-slower">
                    <a className="border border-black text-black px-4 py-2 rounded-md" href="#home">Home</a>
                </li>
                <li className="animate-fadeInRight animate-slow">
                    <a className="border border-black text-black px-4 py-2 rounded-md" href="#about">About</a>
                </li>
                <li className="animate-fadeInRight animate-fast">
                <a className="border  border-black text-black px-4 py-2 rounded-md" href="#projects">Projects</a>
                </li>
                <li className="animate-fadeInRight animate-faster">
                <a className="border  border-black text-black px-4 py-2 rounded-md" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav