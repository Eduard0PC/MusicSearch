export default async function handler(req, res) {
  const { q } = req.query || {};

  if (!q) {
    res.status(400).json({ error: 'Missing query parameter "q"' });
    return;
  }

  const url = `https://api.deezer.com/search?q=${encodeURIComponent(q)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      res.status(response.status).json({
        error: 'Error fetching data from Deezer',
        status: response.status,
        statusText: response.statusText,
      });
      return;
    }

    const data = await response.json();
    
    if (req.method === 'OPTIONS') {
      res.status(204).end();
      return;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
