import "../Sass/Button.scss";
const Button = ({ title, color, background, height, style }) => {
	return (
		<button
			type="submit"
			style={{
				color,
				background,
				height,
				...style
			}}
		>
			{title}
		</button>
	);
};

export default Button;