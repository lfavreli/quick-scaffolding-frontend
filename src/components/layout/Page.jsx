import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainContainer from "./MainContainer/MainContainer";
import { Outlet } from "@tanstack/react-router"

const Page = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
}

export default Page;
