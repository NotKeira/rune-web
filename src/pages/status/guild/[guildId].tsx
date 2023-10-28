import Layout from "@/components/layout/Layout";
import HeadX from "@/components/HeadX";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Guild() {
    const router = useRouter();
    let guild_id = router.query.guildId;

    useEffect(() => {
        if (guild_id == undefined) {
            console.log(`Guild ID is undefined!`)
        } else {
            console.log(`Guild ID is ${guild_id}`)
        }
    }, [guild_id]);

    return (<Layout Name={`Server ${guild_id}'s Status`} Route={`/status/guild/${guild_id}`}>
        <HeadX/>
        <h1 className="text-white text-4xl font-bold text-center mb-5">Server ID: {guild_id}</h1>
        <div
            className="flex-col p-2">
            <div className="bg-gray-800 rounded-lg shadow-lg p-3">
                <div className="flex flex-row">
                    <div className="flex flex-col m-auto">
                        <p className="text-white text-xl font-bold">Status</p>
                        <p className="text-white text-md font-light">Online</p>
                    </div>
                    <div className="flex flex-col m-auto">
                        <p className="text-white text-xl font-bold">Members</p>
                        <p className="text-white text-md font-light">6000</p>
                    </div>
                    <div className={"flex flex-col m-auto"}>
                        <p className="text-white text-xl font-bold">Ping</p>
                        <p className="text-white text-md font-light">20ms</p>
                    </div>
                </div>
                <div className="flex flex-row m-10 items-center">
                    <div className={"flex flex-col m-auto"}>
                        <p className="text-white text-xl font-bold">Uptime</p>
                        <p className="text-white text-md font-light">100%</p>
                    </div>
                    <div className={"flex flex-col m-auto"}>
                        <p className="text-white text-xl font-bold">Moderators Online</p>
                        <p className="text-white text-md font-light">10</p>
                    </div>
                    <div className={"flex flex-col m-auto"}>
                        <p className="text-white text-xl font-bold">Bots Online</p>
                        <p className="text-white text-md font-light">3</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>)
}