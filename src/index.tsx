import { MDXProvider } from "@mdx-js/preact";
import { render } from "preact";

import { BackToTop, Top } from "./components/BackToTop/BackToTop";
import { LinkableTitle, LinkableTitleProps } from "./components/LinkableTitle/LinkableTitle";
import { Note } from "./components/Note/Note";
import { Home } from "./pages/home/home";

const components = {
	h1: ({ ...props }: LinkableTitleProps) => <LinkableTitle {...props} element="h1" />,
	h2: ({ ...props }: LinkableTitleProps) => <LinkableTitle {...props} element="h2" />,
	h3: ({ ...props }: LinkableTitleProps) => <LinkableTitle {...props} element="h3" />,
	h4: ({ ...props }: LinkableTitleProps) => <LinkableTitle {...props} element="h4" />,
	h5: ({ ...props }: LinkableTitleProps) => <LinkableTitle {...props} element="h5" />,
	h6: ({ ...props }: LinkableTitleProps) => <LinkableTitle {...props} element="h6" />,
	"Note": Note,
};

render(<>
	<MDXProvider components={components}>
		<Top />
		<Home />
		<BackToTop />
	</MDXProvider>
</>, document.getElementById("app") as HTMLElement);
