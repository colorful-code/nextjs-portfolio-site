const Nav = () => {
    return (
        <nav id="nav" className="py-5 pr-5 sticky top-0 flex justify-end">
            <ul className="flex gap-5">
                <li>
                    <a className="border border-black text-black px-4 py-2 rounded-md" href="#blob">Home</a>
                </li>
                <li>
                    <a className="border border-black text-black px-4 py-2 rounded-md" href="#about">About</a>
                </li>
                <li>
                <a className="border  border-black text-black px-4 py-2 rounded-md" href="#projects">Projects</a>
                </li>
                <li>
                <a className="border  border-black text-black px-4 py-2 rounded-md" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav