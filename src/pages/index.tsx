import Layout from "@/components/layout/Layout";
import HeadX from "@/components/HeadX";


export default function HomePage() {
    return (
        <Layout Name={"Home"} Route={"/"}>
            <HeadX/>
            <h1 className="text-white text-4xl font-bold text-center mb-4">Rune!</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            </div>
        </Layout>
    );
}
