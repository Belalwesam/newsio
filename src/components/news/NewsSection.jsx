import News from "./News";
const NewsSection = () => {
  return (
    <>
      <News category={"top-headlines"} pageSize={15} query={"country=us"} topHeading = {'Top News'}/>
      <News category={"everything"} pageSize={12} query={"q=trending us"} topHeading = {'Trending in USA'}/>
      <News category={"everything"} pageSize={12} query={"q=trending tech"} topHeading = {'Tech Trends'}/>
    </>
  );
};
export default NewsSection;
