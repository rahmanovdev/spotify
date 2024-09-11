import Image from "next/image";
import scss from "./Recommends.module.scss";
const Recommends = () => {
  return (
    <section className={scss.Recommends}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1>Все остальное</h1>
          <div className={scss.cards_recommeds}>
            <div className={scss.card}>
              <div className={scss.in_card}>
                <h2>Музыка</h2>
                <Image
                  src="/assets/muz3.jpg"
                  alt="img"
                  width={700}
                  height={500}
                  quality={70}
                  priority
                />
              </div>
            </div>
            <div className={scss.card}>
              <div className={scss.in_card}>
                <h2>Музыка</h2>
                <Image
                  src="/assets/muz3.jpg"
                  alt="img"
                  width={700}
                  height={500}
                  quality={70}
                  priority
                />
              </div>
            </div>
            <div className={scss.card}>
              <div className={scss.in_card}>
                <h2>Музыка</h2>
                <Image
                  src="/assets/muz3.jpg"
                  alt="img"
                  width={700}
                  height={500}
                  quality={70}
                  priority
                />
              </div>
            </div>
            <div className={scss.card}>
              <div className={scss.in_card}>
                <h2>Музыка</h2>
                <Image
                  src="/assets/muz3.jpg"
                  alt="img"
                  width={700}
                  height={500}
                  quality={70}
                  priority
                />
              </div>
            </div>
            <div className={scss.card}>
              <div className={scss.in_card}>
                <h2>Музыка</h2>
                <Image
                  src="/assets/muz3.jpg"
                  alt="img"
                  width={700}
                  height={500}
                  quality={70}
                  priority
                />
              </div>
            </div>
            <div className={scss.card}>
              <div className={scss.in_card}>
                <h2>Музыка</h2>
                <Image
                  src="/assets/muz3.jpg"
                  alt="img"
                  width={700}
                  height={500}
                  quality={70}
                  priority
                />
              </div>
            </div>
            <div className={scss.card}>
              <div className={scss.in_card}>
                <h2>Музыка</h2>
                <Image
                  src="/assets/muz3.jpg"
                  alt="img"
                  width={700}
                  height={500}
                  quality={70}
                  priority
                />
              </div>
            </div>
            <div className={scss.card}>
              <div className={scss.in_card}>
                <h2>Музыка</h2>
                <Image
                  src="/assets/muz3.jpg"
                  alt="img"
                  width={700}
                  height={500}
                  quality={70}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;
