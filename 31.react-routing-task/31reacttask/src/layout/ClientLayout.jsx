import { Outlet } from "react-router-dom";

function ClientLayout() {
  return (
    <>
      <header>Client Navbar</header>
      <main>
        <Outlet />
      </main>
      <footer>Client Footer</footer>
    </>
  );
}

export default ClientLayout;
