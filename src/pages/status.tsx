import Layout from "@/components/layout/Layout";
import HeadX from "@/components/HeadX";
export default function StatusPage() {
    return (<Layout Name={"Status"} Route={"/status"}>
            <HeadX/>
            <h1 className="text-white text-xl text-center">Status Page</h1>
        </Layout>);
}