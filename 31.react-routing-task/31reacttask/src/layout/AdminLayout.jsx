import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <aside>Admin Sidebar</aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
