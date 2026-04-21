import { useState, useEffect } from 'react';

export function useGitHubStats(username) {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=stars&per_page=6&type=public`
          ),
        ]);

        if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API error');

        const [profileData, reposData] = await Promise.all([
          profileRes.json(),
          reposRes.json(),
        ]);

        setProfile(profileData);
        setRepos(reposData.slice(0, 6));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username]);

  return { repos, profile, loading, error };
}
