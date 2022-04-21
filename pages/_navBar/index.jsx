import Link from "next/link";

function NavBar() {
    return (
        <div className="navContainer flex">
        <div className="navBar flex">
          <div className="logo">Crear logo con nombre</div>
          <nav>
            <ul className="flex">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  projects
                </Link>
              </li>
              <li>
              <Link href="/projects">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}

export default NavBar;