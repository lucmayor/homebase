export default async function handler(request, response) {
    try {
        const api_key = import.meta.env.LASTFM_API_KEY;
        const username = 'luc';
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${api_key}&format=json`,
            {
                method: "GET",
            }
        );

        const data = await response.json();
        const recent = data.recenttracks.track[0];
        const np = {
            artist: recent.artist['#text'],
            track_name: recent.name,
            album: recent.album['#text'],
            album_art: recent.image[1]['#text'],
        };
        // response.status(200).json(np);

        return {
            status_code: 200,
            body: np
        }
    } catch (e) {
        console.error(e);
        response.status(500).json({error: e.message});
    }
}