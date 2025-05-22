<script>
  import { fade } from "svelte/transition";
  async function np() {
    const md = await fetch("/api/lfm", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const r = await md.json();
    const res = [r.album_art, r.artist, r.track_name, r.album];
    return res;
  }
</script>

{#await np() then res}
  <div class="wrapper" in:fade>
    <div class="sultry">luc was last listening to...</div>
    <div class="song_container">
      <img id="album_art" src={res[0]} width="50px" alt="cover art" />
      <song>
        <div id="artist" class="scroll">
          <div class="scrollc">{res[1]}</div>
        </div>
        <div id="track_name" class="scroll">
          <div class="scrollc">"{res[2]}"</div>
        </div>
        <div id="album" class="scroll">
          <div class="scrollc"><i>{res[3]}</i></div>
        </div>
      </song>
    </div>
  </div>
{/await}

<style>
  div {
    text-align: center;
    font-size: 0.9em;
  }

  .sultry {
    text-align: left;
    font-style: italic;
    font-size: 0.8rem;
    color: #7a6060;
  }

  .song_container {
    align-items: center;
    /* border: 1px solid gold; */
    border: 1px dashed white;
    display: flex;
    flex-direction: row;
  }

  song {
    padding: 2px;
    /* border: 1px solid green; */
    max-height: 100%;
    max-width: 100%;
    min-width: 50%;
    min-height: 50%;
  }

  .scroll {
    white-space: nowrap;
    overflow: hidden;
  }

  .scrollc {
    width: fit-content;
    direction: rtl;
  }

  @-webkit-keyframes scroll {
    0% {
      margin-right: 0%;
    }

    100% {
      margin-right: 100%;
    }
  }
</style>