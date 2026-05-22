import { useState } from "react"

import { TeamsForm } from "./TeamsForm"
import { TeamsList } from "./TeamsList"

type Team = {
    id: string,
    name: string
}

export function Main() {
    const [teams, setTeams] = useState<Team[]>([])
    const [inputTeam, setInputTeam] = useState<string>('')

    return (
        <main className="my-10">
            <TeamsForm
                teams={teams}
                setTeams={setTeams}
                inputTeam={inputTeam}
                setInputTeam={setInputTeam}
            />
            <TeamsList
                teams={teams}
                setTeams={setTeams}
            />
        </main>
    )
}