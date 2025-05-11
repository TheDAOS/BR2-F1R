import { useContext } from "react"
import JournalContext from "../context/AppContext"
import Card from "./Card";

function Journal() {
    let { journalEntries } = useContext(JournalContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Journal Archive</h1>

            <div className="flex flex-col gap-1">
            {journalEntries.map((entry, index) => (
                <Card key={index} journal={entry} />
            ))}
            </div>
        </div>
    )
}


export default Journal