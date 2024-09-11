"use client";
import { useParams } from "next/navigation";
import scss from "./PlayList.module.scss";
import { useGetDetPlayListQuery } from "@/redux/api/playlist";
import Image from "next/image";

const Playlist = () => {
  const { playlistId } = useParams();
  const { data } = useGetDetPlayListQuery(String(playlistId));
  console.log(data, "data");

  return (
    <div className={scss.PlayList}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.myPlayListDet}>
            {data && (
              <div className={scss.playlist_head}>
                <Image
                  src={data.images[0].url}
                  alt="img"
                  width={700}
                  height={500}
                  quality={70}
                  priority
                />
                <div className={scss.playlist_text}>
                  <h1>{data.name}</h1>
                  <h5>
                    Создатель: {data.owner.display_name} : {data.tracks.total}
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
