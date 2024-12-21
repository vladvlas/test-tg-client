import { RouteProps } from "react-router-dom";
import { ProfilePage } from "pages/ProfilePage";
import { AuthorizationPage } from "pages/AuthorizationPage";
import { PublicationsPage } from "pages/PublicationsPage";

export enum AppRoutes {
    PROFILE = "profile",
    AUTHORIZATION = "authorization",
    PUBLICATIONS = "publications",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.AUTHORIZATION]: "/authorization",
    [AppRoutes.PUBLICATIONS]: "/publications",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.AUTHORIZATION]: {
        path: RoutePath.authorization,
        element: <AuthorizationPage />,
    },
    [AppRoutes.PUBLICATIONS]: {
        path: RoutePath.publications,
        element: <PublicationsPage />,
    },
};
