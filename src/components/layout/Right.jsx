import Icon from "../../images/menu.svg";
import NewsSection from "../news/NewsSection";
import News from "../news/News";
const Right = ({ expand, setExpand, homePage, source }) => {
  return (
    <div className={`right-col ${!expand ? "expand" : ""}`}>
      <div className="sider-btn-container">
        <button onClick={() => setExpand(!expand)}>
          <img src={Icon} alt="" width={25} />
        </button>
      </div>
      <div className="container-fluid">
        <div className="news-container bg-white">
          {!homePage ? (
            <NewsSection />
          ) : (
            <News
              category={"top-headlines"}
              pageSize={20}
              query={`sources=${source.id}`}
              topHeading={source.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Right;
