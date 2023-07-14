import { Fragment } from 'react';
import { AppRoutes } from './AppRoutes';
import PageNotFound from './components/PageNotFound';
import { Route, Routes, Navigate } from 'react-router-dom';

const AppRouter = () => {
	return (
		<Fragment>
            
			<Routes>
				{AppRoutes.map((item, key) => {
					const { path, Component } = item;
					return <Route key={key} path={path} element={<Component />} />;
				})}
				<Route path='/*' element={<Navigate to={'/market'} replace />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</Fragment>
	);
};

export default AppRouter;
