import classnames from "classnames";
import type { JSX } from "preact";

import style from "./style.module.scss";

/**
 * Creates a title element that can be linked to with a hash
 */
export const LinkableTitle = ({ element: Element, children, ...props }: LinkableTitleProps) => {
	const id = children
		.toString()
		.toLowerCase()
		.replace(/[^\w-]/g, "-") // only allow alphanumeric, hyphen and underscore
		.replaceAll(/-{2,}/g, "-") // replace multiple hyphens with one
		.replace(/^-+|-+$/g, ""); // remove leading and trailing hyphens
	return (
		<Element {...props} id={id}>
			<a class={classnames(style.a)} href={`#${id}`}>§</a>{children}
		</Element>
	);
};

export interface LinkableTitleProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
	/**
	 * The text of the title
	 */
	children: string;
	/**
	 * The kind of title element to use
	 */
	element: OnlyHeadings;
}

/**
 * A type that represents only the heading elements, going from h1 to h6
 */
type OnlyHeadings<T = JSX.IntrinsicElements> = keyof {
	[K in keyof T as K extends `h${number}` ? K : never]: T[K];
}
