import { useState } from "react"

type TeamsFormProps = {
    teams: string[],
    setTeams: React.Dispatch<React.SetStateAction<string[]>>
}

export function TeamsForm({ teams, setTeams }: TeamsFormProps ) {
    const [inputTeam, setInputTeam] = useState<string>('')

    function formHandle(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setTeams([...teams, inputTeam])
        setInputTeam('')
    }

    return (
        <form className="flex" onSubmit={formHandle}>
            <input
                type="text"
                placeholder="Add a team..."
                className="bg-gray-300 py-4 px-4 grow rounded-l-md outline-none"
                value={inputTeam}
                onChange={e => setInputTeam(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white py-2 px-5 cursor-pointer rounded-r-md"
            >
                Add
            </button>
        </form>
    )
}