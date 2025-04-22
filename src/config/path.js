const PATH_ROUTERS_CLIENT = {
    HOMEPAGE:"/",
    LISTMOVIES:"/Listmovie",
    STOREMOVIE:"/Storemovie",
    SERIES:"/series",
    RENTED:"/rentedMovies",
    BUYPACKAGE:"/buyPackage", 
    LOGIN:"/form/Login",
    REGISTER:"/form/register",
    MOVIES:'/movies/:id',
    PLAYFLIM:'/play/:id',
    TRAILERFLIM:'/trailer/:id',
    PAYPACKAGE:'/payPackage/:id',
    PROMOTION:'/promotion',
    BLOGPAGE:'/blog',
    ACCOUNT:"/account",
    WAREHOUSE:"/warehouse"
    
}
const PATH_ROUTERS_ADMIN = {
    DASHBOARD:'/admin',
    CATEGORIES: "/categories/Categories",
    COMMENT: "/engagement_pages/Comment",
    LIKE: "/engagement_pages/Like",
    WATCHLIST: "/engagement_pages/Watchlist",
    EPISODE: "/media_management/Episode",
    MOVIE: "/media_management/Movie",
    TRAILER: "/media_management/Trailer",
    PROFILE: "/profile/Profile",
    USER_PAGES: "/uses_pages/UserPages",
    VIP_FEATURE: "/vip/Feature",
    VIP_PACKAGE: "/vip/Package",
    VIP_PLANS: "/vip/Plans",
    ACTOR: "/cast_crew/Actor",
    AUTHOR: "/cast_crew/Author",
    CHARACTER: "/cast_crew/Character",
    
}
export{
    PATH_ROUTERS_CLIENT,
    PATH_ROUTERS_ADMIN
};