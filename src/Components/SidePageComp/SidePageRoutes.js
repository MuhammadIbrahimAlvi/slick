import HomeComp from "../HomeComponent/HomeComp"
import ManageBanners from "../ManageBanners/ManageBanners"

export const pageRoutes = [
    {
        path:'/',
        exact:true,
        component: HomeComp
    },
    {
        path: '/management',
        component: ManageBanners
    }
]