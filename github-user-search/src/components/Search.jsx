import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [results, setResults] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setResults([]);

        try {
            const data = await fetchUserData(username, location, minRepos);
            setResults(data.items || []);
            if (data.items.length === 0) setError(true);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md flex flex-wrap gap-4 items-end justify-center">
                <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">Username</label>
                    <input
                        type="text"
                        placeholder="e.g. octocat"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border p-2 rounded w-48"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">Location</label>
                    <input
                        type="text"
                        placeholder="e.g. Lagos"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="border p-2 rounded w-40"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">Min Repos</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="border p-2 rounded w-24"
                    />
                </div>
                <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                    Search
                </button>
            </form>

            <div className="mt-8">
                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center text-red-500">Looks like we cant find the user</p>}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((user) => (
                        <div key={user.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
                            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
    <h2 className="text-xl font-bold mt-2">{user.login}</h2>
    
    <p className="text-sm text-gray-600">Location: {user.location || 'Not specified'}</p>
    <p className="text-sm text-gray-600">Public Repos: {user.public_repos || 'N/A'}</p>
    
    <a 
        href={user.html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 mt-2 block"
    >
        View Profile
    </a>
</div>
))}
                </div>
            </div>
        </div>
    );
};

export default Search;