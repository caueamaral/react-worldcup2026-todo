import { useState } from "react"

import { TeamsForm } from "./TeamsForm"
import { TeamsList } from "./TeamsList"

export function Main() {
    const [teams, setTeams] = useState<string[]>([])

    return (
        <main className="my-10">
            <TeamsForm
                teams={teams}
                setTeams={setTeams}
            />
            <TeamsList
                teams={teams}
            />
        </main>
    )
}