import { Navigate, Outlet } from 'react-router-dom';

function AuthLayout() {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section>
            <Outlet />
          </section>
          <img src="/public/assets/images/side-img.svg" alt="OnBoardingImage" />
        </>
      )}
    </>
  );
}

export default AuthLayout;
