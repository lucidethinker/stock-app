import TopBar from '../../components/TopBar';
import StockListItem from './components/StockListItem';

const Market = () => {
	return (
		<div>
			<TopBar />
			<div>
				{
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					[...Array(10)].map((_, key) => {
						return <StockListItem key={key} />;
					})
				}
			</div>
		</div>
	);
};

export default Market;
