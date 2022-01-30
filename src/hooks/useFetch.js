import axios from "axios";
const apiKey = "4222e06f88744b42a78c2a529f2a99a7";
const url = "https://newsapi.org/v2";
export const fetchSources = async () => {
  const requestSource = "sources?apiKey=";
  try {
    const {
      data: { sources },
    } = await axios.get(`${url}/top-headlines/${requestSource}${apiKey}`);
    return sources.map((source) => source);
  } catch (error) {
    console.log(error);
  }
};
export const fetchNews = async (request) => {
  try {
    const {
      data: { articles },
    } = await axios.get(
      `${url}/${request.category}?${request.query}&pageSize=${request.pageSize}&apiKey=${apiKey}`
    );
    return articles.map((article) => article);
  } catch (error) {
    console.log(error);
  }
};
