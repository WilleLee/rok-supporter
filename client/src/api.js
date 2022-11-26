import fetcher from "./middlewares/fetcher";

const $BASE_URL = "http://localhost:8080/api";

class API {
  //api for kings message

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

  static async deleteEvent() {
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
