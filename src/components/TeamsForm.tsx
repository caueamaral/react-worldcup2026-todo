export function TeamsForm() {
    return (
        <form className="flex">
            <input
                type="text"
                placeholder="Add a team..."
                className="bg-gray-300 py-4 px-4 grow rounded-l-md outline-none"
            />
            <button
                className="bg-blue-500 text-white py-2 px-5 cursor-pointer rounded-r-md"
            >
                Add
            </button>
        </form>
    )
}