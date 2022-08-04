import { Outlet } from "react-router-dom";
import NavBar from "../components/organisms/Navbar";

const HomeLayout: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="page-wrapper">
                <Outlet />
            </div>
        </>
    )
}

export default HomeLayout;