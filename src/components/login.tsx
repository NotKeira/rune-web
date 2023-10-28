import {signIn, signOut, useSession} from "next-auth/react";
import React from "react";
import Tippy from "@tippyjs/react";

export default function LoginButton() {
    const {data: session} = useSession()
    if (session) {
        const user = session.user
        return (
            <Tippy content="Open Profile"
                   followCursor={"horizontal"}
                   placement={"bottom"}>

                <button
                    className={`text-center text-xl text-gray-300 hover:text-white focus:outline-none w-16 relative`}
                    onClick={() => signOut()}>
                    <img src={user?.image} alt="User Image"
                         className={`text-gray-300 hover:text-white focus:outline-none rounded-full w-14 h-14 mx-auto`}
                    />
                </button>
            </Tippy>)
    }

    return (<Tippy content="Login to Rune"
                   followCursor={"horizontal"}
                   placement={"bottom"}
    >
        <button
            className="px-4 py-2 bg-gray-600 rounded-lg text-white hover:bg-gray-700 focus:outline-none"
            onClick={() => signIn()}
        >
            Login
        </button>
    </Tippy>)
}