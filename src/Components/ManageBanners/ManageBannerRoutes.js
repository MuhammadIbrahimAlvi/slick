import ManageBottom from '../ManageBottom/ManageBottom';
import ManageProduct from '../ManageProducts/ManageProduct';

export const productRoutes = [
    {
        path:'/management/bottom',
        exact:true,
        component: ManageBottom
    },
    {
        exact:true,
        path: '/management/products',
        component: ManageProduct
    }
]