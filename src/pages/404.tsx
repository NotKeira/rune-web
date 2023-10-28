import Layout from "@/components/layout/Layout";
import HeadX from "@/components/HeadX";

export default function Error404() {
    return (
        <Layout Name={"Error"} Route={"/"}>
            <HeadX/>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <div className="text-3xl">
                        <h1 className="text-white text-center">Error 404</h1>
                    </div>
                    <div className="card-body">
                        <h1 className="text-white text-2xl text-center">The page you are looking for does not
                            exist.</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}