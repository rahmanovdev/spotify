"use client";
import scss from "./MyMediatek.module.scss";
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useGetPlayListQuery } from "@/redux/api/playlist";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FiList } from "react-icons/fi";
import { useRouter } from "next/navigation";
const MyMediatek = () => {
  const { data } = useGetPlayListQuery();
  const router = useRouter();

  return (
    <div className={scss.MyMediatek}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.media_header}>
            <div className={scss.media_head}>
              <div className={scss.head_left}>
                <VscLibrary />
                <h2>Моя медиатека</h2>
              </div>
              <div className={scss.head_right}>
                <button>
                  <FaPlus />
                </button>
                <button>
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className={scss.media_body}>
              <button>Плейлисты</button>
              <button>Испольнители</button>
            </div>
          </div>

          <div className={scss.playlist_track}>
            <div className={scss.search_media}>
              <CiSearch />
              <div className={scss.media_sort}>
                <h2>Недавно добавленные</h2>
                <FiList />
              </div>
            </div>

            <div className={scss.myPlayList}>
              {data?.items.map((item) => (
                <div
                  key={item.id}
                  className={scss.playlist}
                  onClick={() => router.push(`/playlist/${item.id}`)}
                >
                  <Image
                    src={item?.images[0].url}
                    alt="img"
                    width={700}
                    height={700}
                    priority
                    quality={70}
                  />
                  <div className={scss.playlist_info}>
                    <h3>{item.name}</h3>
                    <p>Плейлист: {item.owner.display_name}</p>
                  </div>
                </div>
              )) || <p>Загрузка...</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMediatek;
