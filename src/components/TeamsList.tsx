export function TeamsList() {
    return (
        <ul className="flex flex-col mt-20 gap-5">
            {
                [1, 2, 3].map((team, index) => (
                    <li key={index} className="bg-gray-200 p-3 rounded-md">
                        Team {team}
                    </li>
                ))
            }
        </ul>
    )
}