import fetcher from "./middlewares/fetcher";

const $BASE_URL = process.env.BASE_API_URL || "http://localhost:8080/api";

class API {
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

  //apis for events
  static async readEvents() {
    const $API_PATH = "/events";
    const $API_URL = $BASE_URL + $API_PATH;
    try {
      const { json } = await fetcher($API_URL);
      const { events } = json;
      if (events) return { success: true, events };
      else return { success: false };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  }

  static async readEvent(id) {
    const $API_PATH = `/events/${id}`;
    const $API_URL = $BASE_URL + $API_PATH;
    try {
      const { json } = await fetcher($API_URL);
      const { event } = json;
      if (event) return { success: true, event };
      else return { success: false };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  }

  static async createEvent(body) {
    const $API_PATH = `/events/create`;
    const $API_URL = $BASE_URL + $API_PATH;
    const fetchOpt = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    };
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

  static async updateEvent(id, body) {
    const $API_PATH = `/events/${id}/update`;
    const $API_URL = $BASE_URL + $API_PATH;
    const fetchOpt = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    };
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

  static async deleteEvent(id) {
    const $API_PATH = `/events/${id}/delete`;
    const $API_URL = $BASE_URL + $API_PATH;
    const fetchOpt = {
      method: "DELETE",
    };
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
}

export default API;
