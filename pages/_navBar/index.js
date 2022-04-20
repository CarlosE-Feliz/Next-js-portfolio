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
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>projects</a>
                </Link>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}

export default NavBar;