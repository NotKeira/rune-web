import HeadX from "@/components/HeadX";
import Layout from "@/components/layout/Layout";

export default function Profile() {
    return (
        <Layout Name={"Profile"} Route={"/profile"}>
            <HeadX title="Profile"/>
            <h1 className="text-center text-white text-5xl">Profile.</h1>
        </Layout>
    )

}