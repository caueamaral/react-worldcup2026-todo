type TeamsProps = {
    teams: string[]
}

export function TeamsList({ teams }: TeamsProps) {
    return (
        <ul className="flex flex-col mt-20 gap-5">
            {
                teams.map((team, index) => (
                    <li
                        key={index}
                        className="bg-gray-200 p-3 rounded-md"
                    >
                        {team}
                    </li>
                ))
            }
        </ul>
    )
}