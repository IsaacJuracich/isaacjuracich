import { withIronSession } from "next-iron-session";

async function handler(req, res) {
  const user = req.session.get("user");

  if (user) {
    res.json({
      isLoggedIn: true,
      ...user,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
}

export default withIronSession(handler, {
  password: process.env.COOKIE_PASSWORD,
  cookieName: process.env.COOKIE_NAME,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
