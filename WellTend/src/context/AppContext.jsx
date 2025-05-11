import { createContext, useState } from "react";

export const JournalProvider = ({ children }) => {
    const [journalEntries, setJournalEntries] = useState([
        {
            sleep: 7,
            nutrition: "Moderate",
            movement: "Walking",
            screenTime: 3,
            mood: "Content",
            content: "# A decent day overall\n- Sleep: 7 hours\n- Nutrition: Moderate\n- Movement: Walking\n- Screen Time: 3 hours\n- Mood: Content",
        },
        {
            sleep: 8,
            nutrition: "Good",
            movement: "Jogging",
            screenTime: 2,
            mood: "Happy",
            content: "### Felt productive and energetic today\n- Sleep: 8 hours\n- Nutrition: Good\n- Movement: Jogging\n- Screen Time: 2 hours\n- Mood: Happy"
        }
    ]);

    const addEntry = (entry) => {
        setJournalEntries((prevEntries) => [...prevEntries, entry]);
    };

    const removeEntry = (id) => {
        setJournalEntries((prevEntries) =>
            prevEntries.filter((entry) => entry.id !== id)
        );
    };

    return (
        <JournalContext.Provider value={{ journalEntries, addEntry, removeEntry }}>
            {children}
        </JournalContext.Provider>
    );
};

const JournalContext = createContext();

export default JournalContext;