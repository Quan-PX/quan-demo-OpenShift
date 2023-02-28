import { RouteObject, useRoutes } from "react-router-dom";

const DummyBackOfficeHome = () => <div>Back Office Home</div>;

const routes: RouteObject[] = [
    {path: '/', element: <DummyBackOfficeHome />}
]

const RouteRender = () => useRoutes(routes);

export { RouteRender, routes };

