"use client";
import { useParams } from "next/navigation";
import scss from "./SearchResults.module.scss";
import { useSearchTracksQuery } from "@/redux/api/search";
import Image from "next/image";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { BsThreeDots } from "react-icons/bs";
import { GoArrowBoth, GoPlusCircle } from "react-icons/go";
import Link from "next/link";

const SearchResults = () => {
  const params = useParams();
  const decodeText = decodeURIComponent(String(params.searchQuery));
  const { data, isLoading, error } = useSearchTracksQuery(decodeText);
  const { setTrackUris, setTrackIndex } = usePlayerStore();

  const playMusic = (index: number) => {
    const getTrackUris = data?.tracks.items.map((item) => item.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
  };

  return (
    <section className={scss.SearchResults}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.navigation_components}>
            <Link href={""}>Все</Link>
            <Link href={`/search/${decodeText}/artists`}>Исполнители</Link>
            <Link href={`/search/${decodeText}/tracks`}>Треки</Link>
            <Link href={`/search/${decodeText}/albums`}>Альбомы</Link>
            <Link href={`/search/${decodeText}/playlists`}>Плейлисты</Link>
            <Link href={`/search/${decodeText}/users`}>Профили</Link>
          </div>

          <div className={scss.play_music}>
            <div className={scss.result}>
              <h2>Лучший результат</h2>
              <div className={scss.singer}>
                {data?.tracks.items.slice(0, 1).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => playMusic(index)}
                    className={scss.result_card}
                  >
                    <Image
                      src={item.album.images[0].url}
                      alt={item.album.name}
                      width={100}
                      height={100}
                    />
                    <div className={scss.result_card_text}>
                      <h1>{item.artists.map((el) => el.name)}</h1>
                      <p>Исполнитель</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={scss.tracks}>
              <div className={scss.tracks_all}>
                <h2>Треки</h2>
                {data?.tracks.items.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => playMusic(index)}
                    className={scss.result_track}
                  >
                    <div className={scss.result_start}>
                      <Image
                        src={item.album.images[0].url}
                        alt={item.album.name}
                        width={700}
                        height={500}
                        quality={70}
                        priority
                      />
                      <div className={scss.tracks_text}>
                        <h1>{item.name}</h1>
                        <p>{item.artists.map((el) => el.name)}</p>
                      </div>
                    </div>

                    <div className={scss.tracks_end}>
                      <a className={scss.plus}>
                        <GoPlusCircle />
                      </a>
                      <p>
                        {Math.floor(item.duration_ms / 1000 / 60)}:
                        {Math.floor(item.duration_ms / 1000 - 120)}
                      </p>
                      <span className={scss.dots}>
                        <BsThreeDots />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
