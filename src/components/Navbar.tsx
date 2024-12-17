"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const navLinks = [
        { name: "How it works" },
        { name: "About" },
        { name: "Blog" },
        { name: "Contact us" },
    ];
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="bg-black text-white max-w-full">
            <div className="parent-container max-w-[90%] mx-auto flex justify-between items-center py-4">
                <div className="w-1/2">
                    <Image src="/assets/white-sync.png" width={100} height={50} alt="Sync Logo" />
                </div>
                <div className="hidden md:flex w-1/2 justify-start">
                    <div className="w-fit py-3 px-4 border-2 border-white rounded-full">
                        <ul className="flex gap-8">
                            {navLinks.map((navLink, index) => (
                                <li
                                    key={index}
                                    className="hover:text-gray-400 cursor-pointer text-lg"
                                >
                                    {navLink.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button
                    onClick={toggleSidebar}
                    className="block md:hidden px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all"
                >
                    <GiHamburgerMenu size={24} />
                </button>
            </div>
            <div
                className={`fixed top-0 right-0 h-full w-[250px] bg-black text-white shadow-lg z-50 transition-transform transform ${isSidebarVisible ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200"
                >
                    <FaTimes size={24} />
                </button>
                <div className="mt-16 flex flex-col items-center gap-8">
                    {navLinks.map((navLink, index) => (
                        <a
                            key={index}
                            href={`#${navLink.name.replace(/\s+/g, "").toLowerCase()}`}
                            className="hover:text-gray-400 cursor-pointer flex items-center gap-3 text-lg"
                            onClick={toggleSidebar} // Close sidebar on link click
                        >
                            {navLink.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
