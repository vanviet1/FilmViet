import { FaImages, FaStar, FaUserFriends, FaComments } from 'react-icons/fa';
export const menu = [
    {
        id: 1,
        title: "Media Management",
        icon: <FaImages className=" text-gray-500" />,
        items: [
            { id: 1, title: "Movie", path: "/media_management/movie" },
            { id: 2, title: "Episode", path: "/media_management/episode" },
            { id: 3, title: "Trailer", path: "/media_management/trailer" }
        ]
    },
    {
        id: 2,
        title: "Vip",
        icon: <FaStar className=" text-gray-500" />,
        items: [
            { id: 1, title: "Package", path: "/vip/package" },
            { id: 2, title: "Feature", path: "/vip/feature" },
            { id: 3, title: "Plans", path: "/vip/plans" }
        ]
    },
    {
        id: 3,
        title: "Cast & Crew",
        icon: <FaUserFriends className=" text-gray-500" />,
        items: [
            { id: 1, title: "Author", path: "/cast_crew/author" },
            { id: 2, title: "Character", path: "/cast_crew/character" },
            { id: 3, title: "Actor", path: "/cast_crew/actor" }
        ]
    },
    {
        id: 4,
        title: "Engagement Pages",
        icon: <FaComments className=" text-gray-500" />,
        items: [
            { id: 1, title: "Like", path: "/engagement_pages/like" },
            { id: 2, title: "Watchlist", path: "/engagement_pages/watchlist" },
            { id: 3, title: "Comment", path: "/engagement_pages/comment" }
        ]
    }
];

const ROLERS = {
    user : "user",
    admin : "admin",
    employe : "employe"
}

export const logo = "https://png.pngtree.com/template/20200107/ourmid/pngtree-movie-logo-design-image_345319.jpg";
export const logoUsers = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
export const  cloudName = "dfx94pb8r";

export const listMenu = [
    {
        id: 1,
        title: "Trang chủ",
        path: "/"
    },
    {
        id: 2,
        title: "Kho phim",
        path: "/ListMovie"
    },
    {
        id: 3,
        title: "Phim bộ",
        path: "/series"

    },
    {
        id: 4,
        title: "Phim thuê",
        path: "/rentedMovies"
    },
    {
        id: 4,
        title: "Khuyễn mãi",
        path: "/Promotion"
    },
    {
        id: 5,
        title: "Blog",
        path: "/blog"
    },
    
    

]

export const listInformation = [
    {
        id: 1,
        title: "Tài khoản",
        path: "/account"
    },
    {
        id: 2,
        title: "Quản lý kho phim",
        path: "/Warehouse"
    },
    {
        id: 3,
        title: "Lịch sử xem",
        path: "/history"
    },
]
export const moviesImg = [
    {
        id: 1,
        title: "anh1",
        imgUrl: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/r/dragon_1908.png"
    },

    {
        id: 2,
        title: "anh1",
        imgUrl: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/r/dragon_1908.png"
    },
    {
        id: 3,
        title: "anh1",
        imgUrl: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/r/dragon_1908.png"
    },
    {
        id: 4,
        title: "anh1",
        imgUrl: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/r/dragon_1908.png"
    },
    {
        id: 5,
        title: "anh1",
        imgUrl: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/r/dragon_1908.png"
    },
    {
        id: 6,
        title: "anh1",
        imgUrl: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/r/dragon_1908.png"
    },
    
]

export const partnerImg = [
    {
        id: 1,
        title: "sony",
        imgUrl: "https://assets.glxplay.io/web/responsive/w200/sony2.png"
    },
    {
        id: 2,
        title: "universal",
        imgUrl: "https://assets.glxplay.io/web/responsive/w200/universal.png"
    },
    {
        id: 3,
        title: "disney",
        imgUrl: "https://assets.glxplay.io/web/responsive/w200/disney.png"
    },

    {
        id: 4,
        title: "MGM",
        imgUrl: "https://assets.glxplay.io/web/responsive/w200/MGM.png"
    },
    {
        id: 5,
        title: "studio-dragon",
        imgUrl: "https://assets.glxplay.io/web/responsive/w200/studio-dragon-1.png"
    },
    {
        id: 6,
        title: "entertainmen",
        imgUrl: "https://assets.glxplay.io/web/responsive/w200/hk-entertainment.png"
    },

]
export const partner = [
    {
        id: 1,
        title: "Samsung",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_Samsung.png"
    },
    {
        id: 2,
        title: "Sony",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_Sony.png"
    },
    {
        id: 3,
        title: "TCL",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_TCL.png"
    },
    {
        id: 4,
        title: "Asanzo",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_Asanzo.png"
    },
    {
        id: 5,
        title: "Casper",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_Casper.png"
    },
    {
        id: 6,
        title: "Skyworth",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_Skyworth.png"
    },
    {
        id: 7,
        title: "LG",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_LG.png"
    },
    {
        id: 8,
        title: "FPT",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_FPT.png"
    },
    {
        id: 9,
        title: "MyTV",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_MyTV.png"
    },
    {
        id: 10,
        title: "Mobifone",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_Mobifone.png"
    },
    {
        id: 11,
        title: "GooglePlay",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_GooglePlay.png"
    },
    {
        id: 12,
        title: "AppStore",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_AppStore.png"
    },
    {
        id: 13,
        title: "Dolby",
        imgUrl: "https://assets.glxplay.io/web/responsive/plain/_Dolby.png"
    },

];

export const initialOptions = {
    "client-id": "ARp-Z-WdCge_k8Pfs8gUDid1xQArszlRkxEA2HzLjYJS-jB-lZBas7mNb7D3LPdrXg2fmciFsFibUtxp",
    currency: "USD",
    intent: "capture"
  };
export const SECRET_KEY = "vitopkopk1302";