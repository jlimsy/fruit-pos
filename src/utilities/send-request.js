import { getToken } from "./users-service";

import debug from "debug";
const log = debug("utilities:send-request");

export default async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };

  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();

  log("token %o", token);
  if (token) {
    // Need to add an Authorization header
    // Use the Logical OR Assignment operator
    options.headers ||= {};
    // Older approach
    // options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
    console.log("options.headers %o", options.headers);
  }

  return await fetch(url, options);
}
