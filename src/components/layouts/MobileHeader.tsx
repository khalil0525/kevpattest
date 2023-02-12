import { Fragment, useContext, useState } from "react";
// import { context } from "../context/context";
import Link from "next/link";
import { useRouter } from "next/router";
const MobileHeader = () => {
	const [toggle, setToggle] = useState(false);
	// const navContext = useContext(context);
	// const { nav, changeNav } = navContext;

	// const activeNav = (value) => (value == nav ? "active" : "");
	// const onClick = (value) => {
	// 	setToggle(false);
	// 	changeNav(value);
	// };

	const router = useRouter();
	return (
		<>
			<div className="edrea_tm_topbar">
				<div className="topbar_inner">
					<div className="logo">
						<h3 className="hermtac-font" >
                            <Link href="/"></Link>
							<span className="hermtac-orange">
								H<span className="hermtac-blue">ERM</span>T
								<span className="hermtac-blue">AC</span>
							</span>
						</h3>
					</div>
					<div className="trigger">
						<div
							className={`hamburger hamburger--slider ${
								toggle ? "is-active" : ""
							}`}
						>
							<div className="hamburger-box" onClick={() => setToggle(!toggle)}>
								<div className="hamburger-inner" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`edrea_tm_mobile_menu ${toggle ? "opened" : ""}`}>
				<div className="inner">
					<div className="menu_list">
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
		</>
	);
};
export default MobileHeader;
