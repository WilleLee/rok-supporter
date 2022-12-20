import fetcher from "./middlewares/fetcher";

const $BASE_URL =
  process.env.REACT_APP_BASE_API_URL || "http://localhost:8080/api";

class API {
  static async postNews(fetchOpt) {
    const $API_PATH = "/postNews";
    const $API_URL = $BASE_URL + $API_PATH;
    try {
      const { res } = await fetcher($API_URL, fetchOpt);
      if (res.status !== 200) return { success: false };
      return { success: true };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  }
  //api for commanders
  static async readCommander(fetchOpt) {
    const $API_PATH = "/readCommander";
    const $API_URL = $BASE_URL + $API_PATH;
    try {
      const { res, json } = await fetcher($API_URL, fetchOpt);
      if (res.status !== 200 || !json) return { success: false };
      return { json, success: true };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  }

  static async readAllCommanders() {
    const $API_PATH = "/readAllCommanders";
    const $API_URL = $BASE_URL + $API_PATH;
    try {
      const { res, json } = await fetcher($API_URL);
      if (res.status !== 200) return { success: false };
      return { json, success: true };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  }

  //api for kings message
  static async createKingsMessage(fetchOpt) {
    const $API_PATH = "/kingsMessage";
    const $API_URL = $BASE_URL + $API_PATH;
    try {
      const {
        res: { status },
      } = await fetcher($API_URL, fetchOpt);
      if (status === 200) return { success: true };
      else return { success: false };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  }

  static async readKingsMessage() {
    const $API_PATH = "/readKingsMessage";
    const $API_URL = $BASE_URL + $API_PATH;
    try {
      const {
        json: { kingsMessage },
      } = await fetcher($API_URL);
      if (kingsMessage && typeof kingsMessage === "string")
        return { success: true, kingsMessage };
      else return { success: false };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  }

  //apis for news
}

export default API;
