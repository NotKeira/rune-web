import Layout from "@/components/layout/Layout";
import HeadX from "@/components/HeadX";
import Setting from "@/components/cards/setting";
import DropDown from "@/components/cards/Dropdown";

export default function Settings() {
    let choices: any = {
        "theme": "Dark", "currency": "GBP", "colourScheme": "Blue",
    }

    function Change(x: { selected: string, choice: string }) {
        choices[x.selected] = x.choice
    }

    function SubmitChanges() {
        alert(`Changes saved! \nChanges:\n${choices['theme']}\n${choices['currency']}\n${choices['colourScheme']}`)
    }

    return (<Layout Name={"Settings"} Route={"/cards"}>
        <HeadX/>
        <h1 className="text-white text-4xl font-bold text-center mb-5">Settings</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <Setting title={"Theme"} value={choices['theme']}>
                <div className="mt-5 mx-auto my-auto">
                    <DropDown>
                        <button
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => Change({selected: "theme", choice: "Dark"})}>Dark
                        </button>
                        <button
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => Change({selected: "theme", choice: "Light"})}>Light
                        </button>
                    </DropDown>
                </div>
            </Setting>
            <Setting title={"Currency"} value={"GBP"}>
                <div className="mt-5 mx-auto my-auto">
                    <DropDown>
                        <button
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => Change({selected: "currency", choice: "GBP"})}>GBP
                        </button>
                        <button
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => Change({selected: "currency", choice: "EUR"})}>EUR
                        </button>
                        <button
                            className={"text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"}
                            role={"menuitem"}
                            onClick={() => Change({selected: "currency", choice: "USD"})}>USD
                        </button>
                    </DropDown>
                </div>
            </Setting>
            <Setting title={"Colour Scheme"} value={"Blue"}>
                <div className="mt-5 mx-auto my-auto">
                    <DropDown>
                        <button
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => Change({selected: "colourScheme", choice: "Red"})}>Red
                        </button>
                        <button
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => Change({selected: "colourScheme", choice: "Blue"})}>Blue
                        </button>
                        <button
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => Change({selected: "colourScheme", choice: "Green"})}>Green
                        </button>
                    </DropDown>
                </div>
            </Setting>
        </div>
        <hr className="border-t-2 my-4 border-gray-500"/>
        <button
            className="text-black bg-white w-auto rounded text-left my-2 relative px-4 py-2 text-sm hover:bg-gray-300"
            onClick={() => SubmitChanges()}>Save
            Changes
        </button>
    </Layout>)
}