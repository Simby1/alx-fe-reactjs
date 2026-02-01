import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUser(null);

        try {
            const data = await fetchUserData(username);
            setUser(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Search GitHub username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Search
                </button>
            </form>

            {/* Step 3: Conditional Rendering */}
            <div className="mt-6">
                {loading && <p>Loading...</p>}
                {error && <p>Looks like we cant find the user</p>}
                {user && (
                    <div className="text-center border p-4 rounded shadow-sm">
                        <img src={user.avatar_url} alt={user.name} className="w-24 h-24 rounded-full mx-auto" />
                        <h2 className="text-xl font-bold mt-2">{user.name || user.login}</h2>
                        <p className="text-gray-600">{user.bio}</p>
                        <a 
                            href={user.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 hover:underline mt-2 block"
                        >
                            View GitHub Profile
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;