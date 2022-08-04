import { useState } from "react";
import { SearchBox } from "../molecules/SearchBox";

const NavBar: React.FC = () => {
    const onSearch = (v: string) => {
    }

    return (
        <div className="navbar">
            <div className="logo"></div>
            <SearchBox onSearch={onSearch} placeholder={'search'} />
        </div>
    )
}

export default NavBar;