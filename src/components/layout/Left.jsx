import React, { useState, useEffect } from "react";
import { fetchSources } from "../../hooks/useFetch";
import Trending from "../../images/trending-up.svg";
const Left = ({ expand, setHomePage, setSource }) => {
  const [sources, setSources] = useState([]);
  const handleClick = (e, id, name) => {
    setHomePage(false);
    const items = document.querySelectorAll(".sources-list-item");
    items.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.getAttribute("data-ide")) {
      e.target.parentElement.classList.add("active");
    }
    setHomePage(true);
    setSource({ id: id, name: name });
  };
  const handleTopNewsClick = (e) => {
    const items = document.querySelectorAll(".sources-list-item");
    items.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.getAttribute("data-ide")) {
      e.target.parentElement.classList.add("active");
    }
    setHomePage(false);
  };
  useEffect(() => {
    const init = async () => {
      const fetchedSources = await fetchSources();
      setSources(fetchedSources);
    };
    init();
  }, []);
  return (
    <div className={`left-col ${!expand ? "expand" : ""}`}>
      <div className="logo">
        <p className="m-0">
          {expand ? (
            <>
              N<span>News IO</span>
            </>
          ) : (
            "N"
          )}
        </p>
      </div>
      <div className="sources-list">
        <ul className="list-unstyled">
          <li
            className={`sources-top-item sources-list-item active ${
              !expand ? "text-center" : ""
            }`}
            onClick={(e) => handleTopNewsClick(e)}
          >
            <img src={Trending} className="img-fluid" width={20} alt="icon" />
            {expand ? <span data-ide="span">Top News</span> : ""}
          </li>
          {sources.length > 1
            ? sources.map((source) => (
                <li
                  className={`sources-list-item sources-list-item-fix ${
                    !expand ? "text-center" : ""
                  }`}
                  key={source.id}
                  onClick={(e) => handleClick(e, source.id, source.name)}
                >
                  {expand ? (
                    <>
                      {source.name.charAt(0)}
                      <span data-ide="span">{source.name}</span>
                    </>
                  ) : (
                    source.name.charAt(0)
                  )}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};
export default Left;
