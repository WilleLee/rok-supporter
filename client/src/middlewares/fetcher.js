/**
 * receives url and fetch options and tries fetching
 * @param {string} url
 * @param {object} opt
 * @returns {object, object}
 */
const fetcher = async (url, opt) => {
  if (!url) return;
  if (typeof url !== "string") return;
  const res = await fetch(url, opt);
  const json = await res.json();
  return { res, json };
};

export default fetcher;
