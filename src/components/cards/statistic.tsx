import {JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal} from "react";

// Create a component for a statistic card
export default function StatisticCard(x: {
    title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
    value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
}) {
    return (<div className="card bg-gray-700 rounded p-4">
        <div className="card-header">
            <h1 className="text-white text-2xl font-bold text-center mb-4">{x.title}</h1>
            <hr className="border-t-2 border-gray-500"/>
        </div>
        <div className="card-body">
            <h2 className="text-white text-xl text-center">{x.value}</h2>
        </div>
    </div>);
}
