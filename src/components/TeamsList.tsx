export function TeamsList() {
    return (
        <ul className="flex flex-col mt-10 gap-5">
            {
                [1, 2, 3].map(team => (
                    <li className="bg-gray-200 p-3 rounded-md">
                        Team {team}
                    </li>
                ))
            }
        </ul>
    )
}