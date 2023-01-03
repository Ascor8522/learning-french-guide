import "./home.scss";

import Index from "@content/home/index.mdx";
import Rules from "@content/home/rules.mdx";
import WhoAmI from "@content/home/who-am-i.mdx";
import Intended from "@content/home/who-this-guide-is-intended-for.mdx";

export const Home = () => {

	return (
		<>
			<Index />
			<WhoAmI />
			<Intended />
			<Rules />
		</>
	);
};

export interface HomeProps {

}
