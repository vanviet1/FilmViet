import React from "react";
import Dashboard from "../components/admin/dashboard/Dashboard";
import Categories from "../components/admin/categories/Categories";
import Comment from "../components/admin/engagement_pages/Comment";
import Like from "../components/admin/engagement_pages/Like";
import Watchlist from "../components/admin/engagement_pages/Watchlist";
import Episode from "../components/admin/media_management/episodes/Episode";
import Movie from "../components/admin/media_management/movie/Movie";
import Trailer from "../components/admin/media_management/trailer/Trailer";
import Profile from "../components/admin/profile/Profile";
import UserPages from "../components/admin/uses_pages/UserPages";
import Feature from "../components/admin/vip/Feature/Feature";
import Package from "../components/admin/vip/Package/Package";
import Plans from "../components/admin/vip/Plans";
import Actor from "../components/admin/cast_crew/Actor/Actor";
import Author from "../components/admin/cast_crew/Author";
import Character from "../components/admin/cast_crew/character/Character";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../context/AuthRoute";

function AdminRouters(props) {
  const routes = [
    { path: "/admin", element: <Dashboard /> },
    { path: "/categories/Categories", element: <Categories /> },
    { path: "/engagement_pages/Comment", element: <Comment /> },
    { path: "/engagement_pages/Like", element: <Like /> },
    { path: "/engagement_pages/Watchlist", element: <Watchlist /> },
    { path: "/media_management/Episode", element: <Episode /> },
    { path: "/media_management/Movie", element: <Movie /> },
    { path: "/media_management/Trailer", element: <Trailer /> },
    { path: "/profile/Profile", element: <Profile /> },
    { path: "/uses_pages/UserPages", element: <UserPages /> },
    { path: "/vip/Feature", element: <Feature /> },
    { path: "/vip/Package", element: <Package /> },
    { path: "/vip/Plans", element: <Plans /> },
    { path: "/cast_crew/Actor", element: <Actor /> },
    { path: "/cast_crew/Author", element: <Author /> },
    { path: "/cast_crew/Character", element: <Character /> },
  ];
  return (
    <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
    </Routes>
  );
}

export default AdminRouters;
