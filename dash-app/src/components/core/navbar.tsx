import Link from 'next/link';
import * as React from 'react';

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    return (
        <nav className="bg-red-300">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 ">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-extrabold">
                    <span>DashAPP</span>
                    </Link>
                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                </div>
                <Link href="/about">
                <span>About</span>
                </Link>
                <Link href="/contact">
                <span>Contact</span>
                </Link>
                </div>
                {/* Navigate Auth */}
                <div className="flex items-center gap-4">
                    <Link href="/signin">
                    <button>Sign In</button>
                    </Link>
                    <Link href="signup">
                    <button>Sign Up</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;