import classnames from "classnames";

import style from "./style.module.scss";

const defaultTopId = "top";

/**
 * A link to go back to the top of the page
 */
export const BackToTop = ({ topId = defaultTopId }: BackToTopProps) => {
	return (
		<div class={classnames(style.backToTop)}>
			<a href={`#${topId}`}>Back to top</a>
		</div>
	);
};

export interface BackToTopProps {
	/**
	 * The id of the top element
	 */
	topId?: string;
}

/**
 * Marks the top of the page
 */
export const Top = ({ topId = defaultTopId }: TopProps) => {
	return <span id={topId} class={classnames(style.top)} />;
};

export interface TopProps {
	/**
	 * The id of the top element
	 */
	topId?: string;
}
