import { useEffect, useState } from "react";

const homeData = {
	tech: ["Health", "Frontier", "Hard"],
};
const AnimatedTextTech = () => {
	const [text, setText] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setText(text < homeData.tech.length - 1 ? text + 1 : 0);
			console.log(homeData.tech.length - 1, text);
		}, 5000);
		return () => clearInterval(interval);
	});
	return (
		<h3 className="name cd-headline push hermtac-font ">
			<span className="hermtac-orange cd-words-wrapper">
				{homeData.tech.map((tech, i) => (
					<b key={i} className={text === i ? "is-visible" : "is-hidden"}>
						{tech}
					</b>
				))}
			</span>

			<span className="blc hermtac-purple"> Tech</span>
		</h3>
	);
};
export default AnimatedTextTech;
