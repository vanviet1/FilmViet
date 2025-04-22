import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from '../components/client/layouts/LayoutDefault';
import LayoutAdmin from '../components/client/layouts/LayoutAdmin';
import HomePage from '../components/client/pages/HomePage'
import StoreMovie from '../components/client/pages/StoreMovie';
import Login from '../components/client/components/form/Login';
import Register from '../components/client/components/form/Register';
import MovieDetail from '../components/client/pages/MovieDetail';
import ListMovie from '../components/client/pages/ListMovie';
import SeriesMovie from '../components/client/pages/SeriesMovie';
import PlayFlim from '../components/client/pages/PlayFlim';
import TrailerFlim from '../components/client/pages/TrailerFlim';
import PayPackage from '../components/client/pages/PayPackage';
import RentedMovies from '../components/client/pages/RentedMovies';
import BuyPackage from '../components/client/pages/BuyPackage';
import Promotion from '../components/client/pages/Promotion';
import BlogPage from '../components/client/pages/BlogPage';
import Account from '../components/client/pages/account/Account';
import Warehouse from '../components/client/pages/Warehouse';


import Dashboard from '../components/admin/dashboard/Dashboard';
import Categories from '../components/admin/categories/Categories';
import Comment from '../components/admin/engagement_pages/Comment';
import Like from '../components/admin/engagement_pages/Like';
import Watchlist from '../components/admin/engagement_pages/Watchlist';
import Episode from '../components/admin/media_management/episodes/Episode';
import Movie from '../components/admin/media_management/movie/Movie';
import Trailer from '../components/admin/media_management/trailer/Trailer';
import Profile from '../components/admin/profile/Profile';
import UserPages from '../components/admin/uses_pages/UserPages';
import Feature from '../components/admin/vip/Feature/Feature';
import Package from '../components/admin/vip/Package/Package';
import Plans from '../components/admin/vip/Plans';
import Actor from '../components/admin/cast_crew/Actor/Actor';
import Author from '../components/admin/cast_crew/Author';

import Character from '../components/admin/cast_crew/character/Character';
import { PATH_ROUTERS_CLIENT, PATH_ROUTERS_ADMIN } from '../config/path';
const routers = [
  {
    path: '/',
    children: [
      {
        path: PATH_ROUTERS_CLIENT.HOMEPAGE,
        element: (
          <HomePage />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.STOREMOVIE,
        element: (
          <StoreMovie />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.SERIES,
        element: (
          <SeriesMovie />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.RENTED,
        element: (
          <RentedMovies />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.BUYPACKAGE,
        element: (
          <BuyPackage />
        )
      },

      {
        path: PATH_ROUTERS_CLIENT.LOGIN,
        element: (
          <Login />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.REGISTER,
        element: (
          <Register />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.MOVIES,
        element: (
          <MovieDetail />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.LISTMOVIES,
        element: (
          <ListMovie />
        )
      },

      {
        path: PATH_ROUTERS_CLIENT.PLAYFLIM,
        element: (
          <PlayFlim />
        )
      },

      {
        path: PATH_ROUTERS_CLIENT.TRAILERFLIM,
        element: (
          <TrailerFlim />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.PAYPACKAGE,
        element: (
          <PayPackage />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.PROMOTION,
        element: (
          <Promotion />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.BLOGPAGE,
        element: (
          <BlogPage />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.ACCOUNT,
        element: (
          <Account />
        )
      },
      {
        path: PATH_ROUTERS_CLIENT.WAREHOUSE,
        element: (
          <Warehouse />
        )
      },



    ]
  },
  {
    path: '/', // router của admin
    element: (
      <LayoutAdmin />
    ),
    children: [
      {
        path: PATH_ROUTERS_ADMIN.DASHBOARD,
        element: (
          <Dashboard />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.CATEGORIES,
        element: (
          <Categories />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.COMMENT,
        element: (
          <Comment />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.LIKE,
        element: (
          <Like />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.WATCHLIST,
        element: (
          <Watchlist />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.EPISODE,
        element: (
          <Episode />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.MOVIE,
        element: (
          <Movie />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.TRAILER,
        element: (
          <Trailer />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.PROFILE,
        element: (
          <Profile />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.USER_PAGES,
        element: (
          <UserPages />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.VIP_FEATURE,
        element: (
          <Feature />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.VIP_PACKAGE,
        element: (
          <Package />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.VIP_PLANS,
        element: (
          <Plans />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.ACTOR,
        element: (
          <Actor />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.AUTHOR,
        element: (
          <Author />
        )
      },
      {
        path: PATH_ROUTERS_ADMIN.CHARACTER,
        element: (
          <Character />
        )
      },
    ]
  }
];
// Recursive function to render both top-level and nested routes
function renderRoutes(routeArray) {
  return routeArray.map((route, index) => (
    <Route key={index} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
}

function ClientRouters() {
  return (
    <Routes>
      {renderRoutes(routers)}
    </Routes>
  );
}
export default ClientRouters;