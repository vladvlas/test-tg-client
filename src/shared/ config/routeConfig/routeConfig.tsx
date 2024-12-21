import { RouteProps } from "react-router-dom";
import { ProfilePage } from "pages/ProfilePage";
import { AuthorizationPage } from "pages/AuthorizationPage";
import { EnrollmentGraduationPage } from "pages/EnrollmentGraduationPage";
import { AdviserPage } from "pages/AdviserPage";
import { EntrancetestResultsPage } from "pages/EntrancetestResultsPage";
import { CertificationPage } from "pages/CertificationPage";
import { PublicationsPage } from "pages/PublicationsPage";
import { ConferencesPage } from "pages/ConferencesPage";
import { CompetitionsPage } from "pages/CompetitionsPage";
import { PatentsPage } from "pages/PatentsPage";
import { CertificatesPage } from "pages/CertificatesPage";
import { TuitionPaymentPage } from "pages/TuitionPaymentPage";
import { GrantsPage } from "pages/GrantsPage";
import { DefenseDissertationPage } from "pages/DefenseDissertationPage";
import { EmployeeProfilePage } from "pages/Employee/EmployeeProfilePage/EmployeeProfilePage";
import { SearchPage } from "pages/Employee/SearchPage";
import { AspirantsBasePage } from "pages/Employee/AspirantsBasePage";
import { DoctorantsBasePage } from "pages/Employee/DoctorantsBasePage";
import { ApplicantsBasePage } from "pages/Employee/ApplicantsBasePage";
import { MagazineCertificatesPage } from "pages/Employee/MagazineCertificatesPage";
import { ReportsPage } from "pages/Employee/ReportsPage";
import { AdvisersBasePage } from "pages/Employee/AdvisersBasePage";

export enum AppRoutes {
    PROFILE = "profile",
    AUTHORIZATION = "authorization",
    ADVISER = "adviser",
    ENTRANCETESRESULTS = "entrancetestresults",
    CERTIFICATION = "certification",
    PUBLICATIONS = "publications",
    CONFERENCES = "conferences",
    COMPETITIONS = "competitions",
    PATENTS = "patents",
    GRANTS = "grants",
    DEFENSEDISSERTATION = "defensedissertation",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.AUTHORIZATION]: "/authorization",
    [AppRoutes.ADVISER]: "/adviser",
    [AppRoutes.ENTRANCETESRESULTS]: "/entrancetestresults",
    [AppRoutes.CERTIFICATION]: "/certification",
    [AppRoutes.PUBLICATIONS]: "/publications",
    [AppRoutes.CONFERENCES]: "/conferences",
    [AppRoutes.COMPETITIONS]: "/competitions",
    [AppRoutes.PATENTS]: "/patents",
    [AppRoutes.GRANTS]: "/grants",
    [AppRoutes.DEFENSEDISSERTATION]: "/defensedissertation",
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
    [AppRoutes.ADVISER]: {
        path: RoutePath.adviser,
        element: <AdviserPage />,
    },
    [AppRoutes.ENTRANCETESRESULTS]: {
        path: RoutePath.entrancetestresults,
        element: <EntrancetestResultsPage />,
    },
    [AppRoutes.CERTIFICATION]: {
        path: RoutePath.certification,
        element: <CertificationPage />,
    },
    [AppRoutes.PUBLICATIONS]: {
        path: RoutePath.publications,
        element: <PublicationsPage />,
    },
    [AppRoutes.CONFERENCES]: {
        path: RoutePath.conferences,
        element: <ConferencesPage />,
    },
    [AppRoutes.COMPETITIONS]: {
        path: RoutePath.competitions,
        element: <CompetitionsPage />,
    },
    [AppRoutes.PATENTS]: {
        path: RoutePath.patents,
        element: <PatentsPage />,
    },
    [AppRoutes.GRANTS]: {
        path: RoutePath.grants,
        element: <GrantsPage />,
    },
    [AppRoutes.DEFENSEDISSERTATION]: {
        path: RoutePath.defensedissertation,
        element: <DefenseDissertationPage />,
    },
};

// Роуты для сотрудника аспирантуры
export enum EmployeeRoutes {
    EMPLOYEEPROFILE = "employee-profile",
    AUTHORIZATION = "authorization",
    // SEARCH = "search",
    ASPIRANTS = "aspirants",
    DOCTORANTS = "doctorants",
    APPLICANTS = "applicants",
    ADVISERS = "advisers",
    MAGAZINECERTIFICATES = "magazine-certificates",
    REPORTS = "reports",
}

export const EmployeeRoutePath: Record<EmployeeRoutes, string> = {
    [EmployeeRoutes.EMPLOYEEPROFILE]: "/employee-profile",
    [EmployeeRoutes.AUTHORIZATION]: "/authorization",
    // [EmployeeRoutes.SEARCH]: "/search",
    [EmployeeRoutes.ASPIRANTS]: "/aspirants",
    [EmployeeRoutes.DOCTORANTS]: "/doctorants",
    [EmployeeRoutes.APPLICANTS]: "/applicants",
    [EmployeeRoutes.ADVISERS]: "/advisers",
    [EmployeeRoutes.MAGAZINECERTIFICATES]: "/magazine-certificates",
    [EmployeeRoutes.REPORTS]: "/reports",
};

export const employeeRouteConfig: Record<EmployeeRoutes, RouteProps> = {
    [EmployeeRoutes.EMPLOYEEPROFILE]: {
        path: EmployeeRoutePath["employee-profile"],
        element: <EmployeeProfilePage />,
    },
    // [EmployeeRoutes.SEARCH]: {
    //     path: EmployeeRoutePath.search,
    //     element: <SearchPage />,
    // },
    [EmployeeRoutes.AUTHORIZATION]: {
        path: EmployeeRoutePath.authorization,
        element: <AuthorizationPage />,
    },
    [EmployeeRoutes.ASPIRANTS]: {
        path: EmployeeRoutePath.aspirants,
        element: <AspirantsBasePage />,
    },
    [EmployeeRoutes.DOCTORANTS]: {
        path: EmployeeRoutePath.doctorants,
        element: <DoctorantsBasePage />,
    },
    [EmployeeRoutes.APPLICANTS]: {
        path: EmployeeRoutePath.applicants,
        element: <ApplicantsBasePage />,
    },
    [EmployeeRoutes.ADVISERS]: {
        path: EmployeeRoutePath.advisers,
        element: <AdvisersBasePage />,
    },
    [EmployeeRoutes.MAGAZINECERTIFICATES]: {
        path: EmployeeRoutePath["magazine-certificates"],
        element: <MagazineCertificatesPage />,
    },
    [EmployeeRoutes.REPORTS]: {
        path: EmployeeRoutePath.reports,
        element: <ReportsPage />,
    },
};
