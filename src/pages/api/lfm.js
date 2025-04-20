export const prerender = false;

export const GET = async () => {
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

        return new Response(JSON.stringify(np), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({error: e.message}), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}