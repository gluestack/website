// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getCookie, hasCookie } from "cookies-next";
import config from "../../../config";

type Data = {
  status: boolean;
  data: {
    value: string;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query;

  const cookieName = config.app.cookie_name_prefix + "_" + name;

  const c = getCookie(cookieName, { req, res });

  res.status(200).json({
    status: true,
    data: {
      value: c?.toString() ?? "",
    },
  });
}
