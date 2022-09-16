import {Home} from './../pages/Home';
import {About} from './../pages/About';
import {Books} from './../pages/Books';
import {Layout} from './../layouts/Layout';
import {Book} from './../pages/Book';
import {Categories} from './../pages/Categories';
import {Category} from './../pages/Category';
import {NotFound} from './../pages/NotFound';

export const routeData = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },{
                path: 'about',
                element: <About />,
            },{
                path : 'books/',
                children: [
                    {
                        index: true,
                        element: <Books />,
                    },{
                        path: ':bookId',
                        element: <Book />,
                    },
                ],
            },{
                path : 'categories/',
                children: [
                    {
                        index: true,
                        element: <Categories />,
                    },{
                        path: 'bookList',
                        element: <Category />,
                    },
                ],
            },{
                path: '*',
                element: <NotFound />,
            },
        ],
    }
];
