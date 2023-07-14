//  icons

import Detail from "./screens/markets/Detail";
import Market from "./screens/markets/maket";
import News from "./screens/news/News";
import Portfolio from "./screens/portfolio/Portfolio";
// import { PiNewspaper ,} from 'react-icons/pi'
// import {TbMobiledata} from 'react-icons/tb';
// import {BiPieChartAlt} from 'react-icons/bi';
// import {IconBaseProps,  IconType } from 'react-icons';



export interface Iroutes {
	path: string;
	// name: string;
	exact: boolean;
	title: string;
	Component: () => JSX.Element;
}

export const AppRoutes: Iroutes[] = [
	{
		path: '/market/*',
		exact: false,
		title: 'Market',
		Component: Market,
	},
	{
		path: '/market-detail/*',
		exact: false,
		title: 'Market-Detail',
		Component: Detail,
	},
	{
		path: '/news/*',
		exact: false,
		title: 'News',
		Component: News,
	},
	{
		path: '/portfolio/*',
		exact: false,
		title: 'Portfolio',
		Component: Portfolio,
	},
	
];
