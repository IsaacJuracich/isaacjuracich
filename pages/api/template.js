// Template for mongoose & iron-session

import { withIronSession } from "next-iron-session";
import mongoose from "../../middleware/mongodb";

async function handler(req, res) {
  if (req.headers.api_key !== process.env.API_KEY)
    return res.status(401).json({ error: "Unauthorized" });
  // - req.session [set, get, destroy, unset]
}

export default withIronSession(handler, {
  password: process.env.COOKIE_PASSWORD,
  cookieName: process.env.COOKIE_NAME,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
