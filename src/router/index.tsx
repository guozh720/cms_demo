import React, { lazy, Suspense } from "react";

import App from "App";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//定义数组每一项的接口
interface IRoute {
    path:string,
    component:React.FC,
    children?:IRoute[],
}

const routeArr:IRoute[] = [
    {
        path: "/", component: App, children: [
            { path: "information", component: lazy(() => import("pages/Information")) },
            { path: "edit", component: lazy(() => import("pages/Edit")) },
            { path: "list", component: lazy(() => import("pages/List")) },
        ],
    },
    { path: "/login", component: lazy(() => import("Login")) },
    { path: "/register", component: lazy(() => import("Register")) },

];

const MyRouter = () => (
    <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                {
                    routeArr.map((item, index) => (
                        // <Route path={item.path} element={<item.component />}></Route>
                        item.children ?
                            //有子路由
                            <Route key={index} path={item.path} element={<item.component />}>
                                {
                                    item.children.map((e, i) => (
                                        <Route key={i} path={e.path} element={<e.component />}></Route>
                                    ))
                                }
                            </Route>

                            :
                            //没子路由
                            <Route key={index} path={item.path} element={<item.component />}></Route>
                    ))
                }

            </Routes>
        </Suspense>
    </BrowserRouter>
)


export default MyRouter
