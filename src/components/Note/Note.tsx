import classnames from "classnames";
import type { JSX } from "preact";

import style from "./style.module.scss";

/**
 * A note with a visual indicator
 */
export const Note = ({ ...props }: NoteProps) => {
	return <span {...props} class={classnames(style.note)} />;
};

export interface NoteProps extends JSX.HTMLAttributes<HTMLSpanElement> {
}
