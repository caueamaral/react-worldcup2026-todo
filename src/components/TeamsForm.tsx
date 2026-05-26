import { useEffect, useRef } from "react"

type Team = {
    id: string,
    name: string
}

type TeamsFormProps = {
    teams: Team[],
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>
    inputTeam: string,
    setInputTeam: React.Dispatch<React.SetStateAction<string>>
}

export function TeamsForm({ teams, setTeams, inputTeam, setInputTeam }: TeamsFormProps ) {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    function formHandle(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newTeamName = inputTeam.trim()
        if (newTeamName === '') return

        const teamAlreadyExist = teams.some(team => team.name === newTeamName)
        if (teamAlreadyExist) return alert(`${newTeamName} already exist.`)

        setTeams(currTeams => [
            ...currTeams,
            {
                id: crypto.randomUUID(),
                name: newTeamName
            }
        ])
        
        setInputTeam('')
    }

    return (
        <form className="flex" onSubmit={formHandle}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Add a team..."
                className="bg-gray-300 py-4 px-4 grow rounded-l-md outline-none"
                value={inputTeam}
                onChange={e => setInputTeam(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white py-2 px-5 cursor-pointer rounded-r-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={inputTeam.trim() === ""}
            >
                Add
            </button>
        </form>
    )
}