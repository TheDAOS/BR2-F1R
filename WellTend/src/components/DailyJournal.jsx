import React, { useContext } from "react";
import useFormInput from "../hooks/useFormInput";
import JournalContext from "../context/AppContext";

function DailyJournal() {
    const sleep = useFormInput(0);
    const nutrition = useFormInput(0);
    const movement = useFormInput(0);
    const screenTime = useFormInput(0);
    const mood = useFormInput(0);
    const content = useFormInput('');
    const { addEntry } = useContext(JournalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(sleep.value);
        // console.log(nutrition.value);
        // console.log(movement.value);
        // console.log(screenTime.value);
        // console.log(mood.value);
        // console.log(content.value);

        addEntry({
            sleep: sleep.value,
            nutrition: nutrition.value,
            movement: movement.value,
            screenTime: screenTime.value,
            mood: mood.value,
            content: content.value,
        })
    }

    return (
        <div className="p-4 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Daily Journal</h1>
            <div className="flex flex-col gap-2">
                <div className='grid grid-cols-2 gap-2 w-fit'>
                    <label>Sleep (hours): </label>
                    <input
                        type='number'
                        className="border rounded p-1 w-20"
                        {...sleep}
                    />

                    <label>Nutrition (1-5): </label>
                    <input
                        type="number"
                        className="border rounded p-1 w-20"
                        {...nutrition}
                    />

                    <label>Movement (mins): </label>
                    <input
                        type="number"
                        className="border rounded p-1 w-20"
                        {...movement}
                    />

                    <label>Screen Time (hrs): </label>
                    <input
                        type="number"
                        className="border rounded p-1 w-20"
                        {...screenTime}
                    />

                    <label>Mood (1-5): </label>
                    <input
                        type="number"
                        className="border rounded p-1 w-20"
                        {...mood}
                    />
                </div>

                <textarea
                    placeholder="Write your reflection..."
                    className="border rounded p-2 h-24"
                    {...content}
                />

                <button
                    className='w-fit bg-wing-400 rounded-full p-2 px-3 font-semibold shadow hover:bg-wing-100 hover:text-wing-300'
                    onClick={handleSubmit}
                >Save Entry</button>
            </div>
        </div>
    )
}

export default DailyJournal;