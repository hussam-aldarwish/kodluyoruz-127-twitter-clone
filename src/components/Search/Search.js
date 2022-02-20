import React from 'react';
import "./Search.scss";
import { FiSearch } from "react-icons/fi";

export default function Search() {
    return (
        <>
        <div className="Search">
            <div className="SearchInput">
                <div className="SearchIcone">
                    <FiSearch />
                </div>
                <input type="text" placeholder="Search" />
            </div>
        </div>
        </>
    )
}
