import React from 'react';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav>
			<menu>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
			</menu>
		</nav>
	);
};

export default NavBar;
