// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";
import config from "../../../config";

type Data = {
  status: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, value } = req.query;

  let options: any = {
    path: "/",
    req,
    res,
    maxAge: 60 * 60 * 24 * 7,
  };

  if (process.env.NODE_ENV === "production") {
    options = {
      httpOnly: true,
      secure: true,
    };
  }

  if (config.app.cookie_domain) {
    options = {
      domain: config.app.cookie_domain,
    };
  }

  let cookieName = config.app.cookie_name_prefix + "_" + name;

  setCookie(cookieName, value, { req, res, ...options });

  res.status(200).json({ status: true });
}
