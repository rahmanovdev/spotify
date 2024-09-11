import scss from "./PlayListSections.module.scss";
const PlayListSections = () => {
  return (
    <div className={scss.PlayListSections}>
      <div className="container">
        <div className={scss.content}>
          <h1>Плейлисты</h1>
        </div>
      </div>
    </div>
  );
};

export default PlayListSections;
