import Layout from "@/components/layout/Layout";
import HeadX from "@/components/HeadX";
import {useEffect, useState} from "react";
import {Client} from "discord.js";

export default function GuildsPage() {

    let [botGuilds, setBotGuilds] = useState([]);
    let [userGuilds, setUserGuilds] = useState([]);

    return (<Layout Name={"Servers"} Route={"/guilds/list"}>
            <HeadX/>
            <h1 className="text-white text-xl text-center">Servers we're both in!</h1>
            <div className="flex flex-wrap items-center justify-center">
                {botGuilds
                    .filter((guild) => userGuilds.some((userGuild) => userGuild.id === guild.id))
                    .map((guild) => (<div key={guild.id} className="card bg-gray-700 rounded-full p-4 m-2">
                            <div className="card-header">
                                <img src={guild.iconURL()} alt="Server Logo" className="w-16 h-16 rounded-full"/>
                                <h1 className="text-white text-l text-center">{guild.name}</h1>
                            </div>
                        </div>))}
            </div>
            <br/>
            <h1 className="text-white text-xl text-center">Servers you're in but I'm not!</h1>
            <div className="flex flex-wrap items-center justify-center">
                {userGuilds
                    .filter((userGuild) => !botGuilds.some((guild) => userGuild.id === guild.id))
                    .map((userGuild) => (<div key={userGuild.id} className="card bg-gray-700 rounded-full p-4 m-2">
                            <div className="card-header">
                                <h1 className="text-white text-xl text-center">{userGuild.name}</h1>
                            </div>
                        </div>))}
            </div>
        </Layout>);
}
