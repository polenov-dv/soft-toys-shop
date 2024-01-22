import ContentLoader from "react-content-loader"

export const SceletonItem = (props: any) => (
	<ContentLoader
		speed={2}
		width={265}
		height={474}
		viewBox="0 0 265 474"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="0" rx="10" ry="10" width="263" height="250" />
		<rect x="184" y="310" rx="0" ry="0" width="1" height="0" />
		<rect x="10" y="260" rx="5" ry="5" width="100" height="16" />
		<rect x="190" y="260" rx="5" ry="5" width="60" height="16" />
		<rect x="42" y="286" rx="5" ry="5" width="180" height="58" />
		<rect x="97" y="364" rx="5" ry="5" width="70" height="19" />
		<rect x="0" y="393" rx="5" ry="5" width="263" height="24" />
		<rect x="10" y="437" rx="10" ry="10" width="99" height="33" />
		<rect x="155" y="437" rx="10" ry="10" width="99" height="33" />
	</ContentLoader>
)
