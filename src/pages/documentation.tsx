import HeadX from "@/components/HeadX";
import Layout from "@/components/layout/Layout";

export default function Documentation() {
    return (<Layout Name={"Documentation"} Route={"/documentation"}>
            <HeadX/>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <div className="text-3xl">
                        <h1 className="text-white text-center">Documentation</h1>
                    </div>
                    <h3 className="text-white text-2xl text-center">Find support for:</h3>
                    <div className="card-body">
                        <ul className="grid grid-cols-2">
                            <li className="text-white text-xl m-2 text-center">Moderation Commands</li>
                            <li className="text-white text-xl m-2 text-center">Fun Commands</li>
                            <li className="text-white text-xl m-2 text-center">Music Commands</li>
                            <li className="text-white text-xl m-2 text-center">Utility Commands</li>
                            <li className="text-white text-xl m-2 text-center">Economy Commands</li>
                            <li className="text-white text-xl m-2 text-center">Image Commands</li>
                            <li className="text-white text-xl m-2 text-center">Leveling Commands</li>
                            <li className="text-white text-xl m-2 text-center">Giveaway Commands</li>
                            <li className="text-white text-xl m-2 text-center">Ticket Commands</li>
                        </ul>

                    </div>
                </div>
            </div>
        </Layout>

    )
}