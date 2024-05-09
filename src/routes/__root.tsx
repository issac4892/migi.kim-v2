import { createRootRoute, Outlet } from '@tanstack/react-router';
import TopBar from '../components/topbar';

export const Route = createRootRoute({
  component: () => (
    <>
      <TopBar />
      <Outlet />
    </>
  )
});
