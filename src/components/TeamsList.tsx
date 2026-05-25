import { useEffect, useState, useRef } from 'react'

type Team = {
    id: string,
    name: string
}

type TeamsProps = {
    teams: Team[],
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>
}

export function TeamsList({ teams, setTeams }: TeamsProps) {
    const [editingTeamId, setEditingTeamId] = useState<string | null>(null)
    const [editingName, setEditingName] = useState('')
    const [deletingTeamId, setDeletingTeamId] = useState<string | null>(null)
    const editInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (editingTeamId !== null) {
            editInputRef.current?.focus()
        }
    }, [editingTeamId])
    
    function editHandle(id: string, name: string) {
        setEditingTeamId(id)
        setEditingName(name)
    }

    function saveEditHandle() {
        if (editingTeamId === null) return
        if (editingName.trim() === '') return

        setTeams(currentTeams =>
            currentTeams.map(team =>
                team.id === editingTeamId
                    ? { ...team, name: editingName.trim() }
                    : team
            )
        )

        setEditingTeamId(null)
        setEditingName('')
    }

    function deleteHandle(id: string) {
        setDeletingTeamId(id)

        setTimeout(() => {
            setTeams(curr => curr.filter(team => team.id !== id))
            setDeletingTeamId(null)
        }, 300)
    }

    return (
        <ul className="flex flex-col mt-20 gap-5">
            {
                teams.map((team, index) => {
                    const isDeleting = deletingTeamId === team.id

                    return (
                        <li
                            key={team.id}
                            style={{ animationDelay: `${index * 100}ms` }}
                            className={`
                                bg-gray-200 flex justify-between p-3 rounded-md relative
                                ${isDeleting
                                    ? 'animate-[slide-out-left_250ms_ease-in_forwards]'
                                    : 'animate-[slide-in-left_300ms_ease-out_backwards]'
                                }
                            `}
                        >
                            {editingTeamId === team.id ? (
                                <input
                                    ref={editInputRef}
                                    type="text"
                                    value={editingName}
                                    className="border border-blue-500 py-1 px-2 rounded w-60"
                                    onChange={event => setEditingName(event.target.value)}
                                    onKeyDown={event => {
                                        if (event.key === 'Enter') {
                                            saveEditHandle()
                                        }
                                    }}
                                />
                            ) : (
                                <span className="border border-transparent py-1 px-2">
                                    {team.name}
                                </span>
                            )}

                            <span className="flex gap-3">
                                {editingTeamId === team.id &&
                                    editingName.trim() != team.name &&
                                    editingName.trim() != '' && (
                                        <button
                                            type="button"
                                            aria-label={`Save changes to ${team.name}`}
                                            className="cursor-pointer text-green-700"
                                            onClick={saveEditHandle}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </button>
                                )}
                                <button
                                    type="button"
                                    className="text-blue-600 cursor-pointer"  
                                    aria-label={`Edit ${team.name}`}
                                    onClick={() => editHandle(team.id, team.name)}
                                >
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    aria-label={`Delete ${team.name}`}
                                    className="text-red-600 cursor-pointer"
                                    onClick={() => deleteHandle(team.id)}
                                >
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    )
}