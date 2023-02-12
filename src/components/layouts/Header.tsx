// import { useContext } from "react";
import Link from "next/link";

// import { context } from "../context/context";

const Header = () => {
	// const navContext = useContext(context);
	// const { nav, changeNav } = navContext;

	// const activeNav = (value) => (value == nav ? "active" : "");

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
						{/* <li className={activeNav("home")}> */}
						<li>
							<Link href="/">
								Home
							</Link>
						</li>
						{/* <li className={activeNav("about")}> */}
						<li>
							<Link href="/about">
								About
							</Link>
						</li>
						{/* <li className={activeNav("portfolio")}> */}
						<li>
							<Link href="/portfolio">
								Portfolio
							</Link>
						</li>
						{/* <li className={activeNav("news")}> */}
						<li>
							<Link href="/news">
								News
							</Link>
						</li>
						{/* <li className={activeNav("contact")}> */}
						<li>
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
