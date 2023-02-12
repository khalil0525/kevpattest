// import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// import { context } from "../context/context";

const Header = () => {
	// const navContext = useContext(context);
	// const { nav, changeNav } = navContext;

	// const activeNav = (value) => (value == nav ? "active" : "");
	const router = useRouter();
	return (
		<div className="edrea_tm_header">
			<div className="header_inner">
				<div className="logo">
					<h3
						// className="hermtac-font"
					>
						<Link href="/"></Link>
						<span className="hermtac-orange">
							H<span className="hermtac-blue">ERM</span>T
							<span className="hermtac-blue">AC</span>
						</span>
					</h3>
				</div>
				<div className="menu">
					<ul className="transition_link">
						<li className={router.asPath == "/" ? "active" : ""}>
						
							<Link href="/">
								Home
							</Link>
						</li>
						<li className={router.asPath == "/about" ? "active" : ""}>
					
							<Link href="/about">
								About
							</Link>
						</li>
						<li className={router.asPath == "/portfolio" ? "active" : ""}>
					
							<Link href="/portfolio">
								Portfolio
							</Link>
						</li>
						<li className={router.asPath == "/new" ? "active" : ""}>
					
							<Link href="/news">
								News
							</Link>
						</li>
						<li className={router.asPath == "/contact" ? "active" : ""}>
					
							<Link href="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Header;
