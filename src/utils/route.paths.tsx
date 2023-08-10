import LoadingPage from "@src/pages/LoadingPage";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import wait from "./Wait";
const Login = lazy(() => wait(3000).then(() => import("@src/pages/Login")));
const SuccessPage = lazy(() =>
  wait(1000).then(() => import("@src/pages/SuccessPage"))
);
const CreateAccount = lazy(() =>
  wait(1000).then(() => import("@src/pages/CreateAccount"))
);
const ErrorPage = lazy(() =>
  wait(1000).then(() => import("@src/pages/ErrorPage"))
);
const Dashboard = lazy(() =>
  wait(1000).then(() => import("@src/pages/Dashboard"))
);
const Buy = lazy(() => wait(1000).then(() => import("@src/pages/BuyHLT")));
const Rewards = lazy(() => wait(1000).then(() => import("@src/pages/Rewards")));
const Referral = lazy(() =>
  wait(1000).then(() => import("@src/pages/Referral"))
);
const Token = lazy(() => wait(1000).then(() => import("@src/pages/Token")));
const Stack = lazy(() => wait(1000).then(() => import("@src/pages/Stack")));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Login />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/createaccount",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <CreateAccount />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Dashboard />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/buy",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Buy />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/rewards",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Rewards />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/referral",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Referral />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/token",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Token />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/stack",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Stack />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/success",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <SuccessPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/success/:userId",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <SuccessPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);
export default router;
