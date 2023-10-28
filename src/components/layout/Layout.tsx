import React, {useEffect, useState} from 'react';
import {faAreaChart, faCog, faHome, faQuestionCircle, faServer, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import LoginButton from "@/components/login";
import SidebarSection from "@/components/SidebarTitle";
import Link from "next/link";
import {useSession} from "next-auth/react";
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";

export default function Layout(props: { Name: string, Route: string, children: React.ReactNode }) {
    let route = props.Route;
    let name = props.Name;
    if (!route) {
        route = "/";
    }
    if (!name) {
        name = "Home";
    }

    const {data: session} = useSession();

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768); // You can adjust the breakpoint as needed
        }

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isSidebarHovered, setSidebarHovered] = useState(false);

    const handleSidebarHover = () => {
        setSidebarHovered(true);
    };

    const handleSidebarLeave = () => {
        setSidebarHovered(false);
    };


    function Mobile(user: {
        name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined;
    } | null | undefined) {
        if (user === null) {
            return (<div className="flex flex-col h-screen bg-gray-900">
                <div className="bg-gray-800 p-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-white text-2xl focus:outline-none ml-2"
                    >
                        {isSidebarOpen ? '←' : '☰'}
                    </button>
                    <div className="flex items-center space-x-2 text-white mt-4">
                        <div className="font-semibold text-xl">
                            <a href="/">Rune</a> / <a href={route}>{name}</a>
                        </div>
                    </div>
                </div>

                {isSidebarOpen && (<div className="bg-gray-800 p-4">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/">
                                <div
                                    className="flex items-center text-gray-300 hover:text-white focus:outline-none">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        className="text-gray-300 hover:text-white focus:outline-none w-9 h-9"
                                    />
                                    <div className="ml-3 text-center">Home</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <button className="flex items-center text-gray-300 hover:text-white focus:outline-none">
                                <FontAwesomeIcon icon={faUser}
                                                 className="text-gray-300 hover:text-white focus:outline-none w-9 h-9"/>
                                <div className="ml-3 text-center">Profile</div>
                            </button>
                        </li>

                        <li>
                            <Link href="/guilds/list">
                                <div
                                    className="flex items-center text-gray-300 hover:text-white focus:outline-none">
                                    <FontAwesomeIcon
                                        icon={faServer}
                                        className="text-gray-300 hover:text-white focus:outline-none w-9 h-9"
                                    />
                                    <div className="ml-3 text-center">Servers</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/documentation">
                                <div
                                    className="flex items-center text-gray-300 hover:text-white focus:outline-none">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        className="text-gray-300 hover:text-white focus:outline-none w-9 h-9"
                                    />
                                    <div className="ml-3 text-center">Docs</div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>)}

                <div className="flex-1 p-4">
                    <div className="bg-gray-800 p-4">
                        <div className="mt-auto p-1 text-gray-400 text-sm text-right">
                            &copy; {new Date().getFullYear()} Rune
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg mt-4">{props.children}</div>
                    </div>
                </div>
            </div>);
        } else if (user && user?.image !== null) {
            return (<div className="flex flex-col h-screen bg-gray-900">
                <div className="bg-gray-800 p-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-white text-2xl focus:outline-none ml-2"
                    >
                        {isSidebarOpen ? '←' : '☰'}
                    </button>
                    <div className="flex items-center space-x-2 text-white mt-4">
                        <div className="font-semibold text-xl">
                            <a href="/">Rune</a> / <a href={route}>{name}</a>
                        </div>
                    </div>
                </div>

                {isSidebarOpen && (<div className="bg-gray-800 p-4">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/">
                                <div
                                    className="flex items-center text-gray-300 hover:text-white focus:outline-none">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        className="text-gray-300 hover:text-white focus:outline-none w-9 h-9"
                                    />
                                    <div className="ml-3 text-center">Home</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center text-gray-300 hover:text-white focus:outline-none"
                                  href="/profile">
                                <img src={user?.image} alt="User Image" className="w-9 h-9 rounded-full"/>
                                <div className="ml-3 text-center">Profile</div>
                            </Link>
                        </li>

                        <li>
                            <Link href="/guilds/list">
                                <div
                                    className="flex items-center text-gray-300 hover:text-white focus:outline-none">
                                    <FontAwesomeIcon
                                        icon={faServer}
                                        className="text-gray-300 hover:text-white focus:outline-none w-9 h-9"
                                    />
                                    <div className="ml-3 text-center">Servers</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/documentation">
                                <div
                                    className="flex items-center text-gray-300 hover:text-white focus:outline-none">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        className="text-gray-300 hover:text-white focus:outline-none w-9 h-9"
                                    />
                                    <div className="ml-3 text-center">Docs</div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>)}

                <div className="flex-1 p-4">
                    <div className="bg-gray-800 p-4">
                        <div className="mt-auto p-1 text-gray-400 text-sm text-right">
                            &copy; {new Date().getFullYear()} Rune
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg mt-4">{props.children}</div>
                    </div>
                </div>
            </div>);
        }

    }

    function Desktop(user: {
        name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined;
    } | null | undefined) {
        const element = <div
            className={`bg-gray-800 relative ${isSidebarHovered ? 'w-40' : 'w-16'}`}
            onMouseEnter={handleSidebarHover}
            onMouseLeave={handleSidebarLeave}>
            <img src="/cdn/images/server/logo.png" alt="Logo"
                 className={`bg-gray-900 ${isSidebarHovered ? 'mt-5 w-24 h-24 ml-7 rounded-full' : 'w-16 h-16'}`}/>
            <div className={`absolute text-lg bottom-0 my-5 ${isSidebarHovered ? 'w-32' : 'w-16'}`}>
                <hr className={`border-t-2 mb-2 border-gray-500 ${isSidebarHovered ? 'w-40' : 'w-16'}`}/>
                <Tippy content="Open Website Settings">
                    <Link href="/settings">
                        <div
                            className={`flex items-center ml-3 w-16 top-0 text-gray-300 hover:text-white focus:outline-none  ${isSidebarHovered ? 'w-32' : 'w-16'}`}>
                            <FontAwesomeIcon icon={faCog}
                                             className={`text-gray-300 hover:text-white focus:outline-none ${isSidebarHovered ? 'w-8 h-8' : 'w-9 h-9'} `}
                            />
                            {isSidebarHovered && <div className="ml-3 bottom-0 text-xl text-center">Settings</div>}
                        </div>
                    </Link>
                </Tippy>
            </div>
            <ul
                className={`space-y-4 mt-5 ${isSidebarHovered ? 'w-32' : 'w-16'}`}
            >
                <SidebarSection title={"General"} show={isSidebarHovered}>
                    <li className="pb-1">
                        <Tippy content="Open the Home Page">
                            <Link href="/">
                                <div
                                    className={`flex items-center w-16 top-0 text-gray-300 hover:text-white focus:outline-none ${isSidebarHovered ? 'w-32 ml-5 ' : 'w-16 ml-3'}`}>
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        className={`text-gray-300 hover:text-white focus:outline-none ${isSidebarHovered ? 'w-8 h-8' : 'w-9 h-9'} `}
                                    />
                                    {isSidebarHovered && <div className="ml-3 text-xl text-center">Home</div>}
                                </div>
                            </Link>
                        </Tippy>
                    </li>
                    <li>
                        <Tippy content="Open the Shards Page">
                            <Link href="/status/shards">
                                <div
                                    className={`flex items-center w-16 top-0 text-gray-300 hover:text-white focus:outline-none ${isSidebarHovered ? 'w-32 ml-5 ' : 'w-16 ml-3'}`}>
                                    <FontAwesomeIcon
                                        icon={faAreaChart}
                                        className={`text-gray-300 hover:text-white focus:outline-none ${isSidebarHovered ? 'w-8 h-8' : 'w-9 h-9'} `}
                                    />
                                    {isSidebarHovered && <div className="ml-3 text-xl text-center">Shards</div>}
                                </div>
                            </Link>
                        </Tippy>
                    </li>
                </SidebarSection>
                <hr className={`border-t-2 border-gray-500 ${isSidebarHovered ? 'w-40' : 'w-16'}`}/>
                <SidebarSection title={"Management"} show={isSidebarHovered}>
                    <li>
                        <Tippy content="Open your server list">
                            <Link href="/guilds/list">
                                <div
                                    className={`flex items-center w-16 top-0 text-gray-300 hover:text-white focus:outline-none ${isSidebarHovered ? 'w-32 ml-5 ' : 'w-16 ml-3'}`}>
                                    <FontAwesomeIcon
                                        icon={faServer}
                                        className={`text-gray-300 hover:text-white focus:outline-none ${isSidebarHovered ? 'w-8 h-8' : 'w-9 h-9'} `}
                                    />
                                    {isSidebarHovered && <div className="ml-3 text-xl text-center">Servers</div>}
                                </div>
                            </Link>
                        </Tippy>
                    </li>
                </SidebarSection>
                <hr className={`border-t-2 border-gray-500 ${isSidebarHovered ? 'w-40' : 'w-16'}`}/>
                <SidebarSection title={"Information"} show={isSidebarHovered}>
                    <li>
                        <Tippy content="Open the Documentation for the bot">
                            <Link href="/documentation">
                                <div
                                    className={`flex items-center w-16 top-0 text-gray-300 hover:text-white focus:outline-none ${isSidebarHovered ? 'w-32 ml-5 ' : 'w-16 ml-3'}`}>
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        className={`text-gray-300 hover:text-white focus:outline-none ${isSidebarHovered ? 'w-8 h-8' : 'w-9 h-9'} `}
                                    />
                                    {isSidebarHovered && <div className="ml-3 text-xl text-center">Docs</div>}
                                </div>
                            </Link>
                        </Tippy>
                    </li>
                </SidebarSection>
            </ul>
        </div>
        if (user === null) {
            return (<div className="flex h-screen bg-gray-900">
                {element}

                {/* Main Content */}
                <div className="flex-1 p-4">
                    {/* Top Bar */}
                    <div className="bg-gray-800 p-2">
                        <div className="flex justify-center items-center">
                            <div className="flex items-center space-x-2 text-white">
                                <div className="font-semibold text-xl">
                                    <a href={"/"}>Rune</a> / <a href={route}>{name}</a>
                                </div>
                            </div>
                            <div className="space-x-2">
                                <Tippy content="Open the Shard Status Page"
                                       followCursor={"horizontal"}
                                       placement={"bottom"}
                                >
                                    <Link
                                        href="/status"
                                        className="px-4 py-2 bg-gray-600 rounded-lg text-white hover:bg-gray-700 focus:outline-none"
                                    >
                                        Status
                                    </Link>
                                </Tippy>
                                <Tippy content="Join the Official Discord Server"
                                       followCursor={"horizontal"}
                                       placement={"bottom"}>
                                    <Link
                                        href="https://discord.gg/yWkyf4Tbnc"
                                        className="px-4 py-2 bg-gray-600 rounded-lg text-white hover.bg-gray-700 focus:outline.none"
                                    >
                                        Support
                                    </Link>
                                </Tippy>
                                <LoginButton/>
                            </div>
                        </div>
                    </div>
                    {/* Copyright Notice */}
                    <div className="mt-auto p-1 text-gray-400 text-sm text-right">
                        &copy; {new Date().getFullYear()} Rune
                    </div>

                    {/* Page Content */}
                    <div className="bg-gray-800 p-4 rounded-lg mt-4">{props.children}</div>
                </div>
            </div>)
        } else {
            return (<div className="flex h-screen bg-gray-900">
                {element}


                {/* Main Content */}
                <div className="flex flex-col p-4">
                    {/* Top Bar */}
                    <div className="bg-gray-800 p-2 mt-1">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2 text-white">
                                <div className="font-semibold text-xl">
                                    <a href={"/"}>Rune</a> / <a href={route}>{name}</a>
                                </div>
                            </div>
                            <div className="space-x-2 py-1 items-center flex">
                                <Tippy content="Open the Shard Status Page"
                                       followCursor={"horizontal"}
                                       placement={"bottom"}
                                >
                                    <Link
                                        href="/status"
                                        className="px-4 py-2 bg-gray-600 rounded-lg text-white hover:bg-gray-700 focus:outline-none"
                                    >
                                        Status
                                    </Link>
                                </Tippy>
                                <Tippy content="Join the Official Discord Server"
                                       followCursor={"horizontal"}
                                       placement={"bottom"}>
                                    <Link
                                        href="https://discord.gg/yWkyf4Tbnc"
                                        className="px-4 py-2 bg-gray-600 rounded-lg text-white hover.bg-gray-700 focus:outline.none"
                                    >
                                        Support
                                    </Link>
                                </Tippy>
                                <LoginButton/>

                            </div>
                        </div>
                    </div>
                    {/* Copyright Notice */}
                    <div className="mt-auto p-1 text-gray-400 text-sm text-right">
                        &copy; {new Date().getFullYear()} Rune
                    </div>

                    {/* Page Content */}
                    <div className="bg-gray-800 p-4 flex-1 flex-grow rounded-lg ">{props.children}</div>
                </div>
            </div>)
        }

    }

    if (session) {
        const {user} = session;
        return (isMobile ? Mobile(user) : Desktop(user));
    } else {
        return (isMobile ? Mobile(null) : Desktop(null));
    }
}
