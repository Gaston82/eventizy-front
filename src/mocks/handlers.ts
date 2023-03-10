import { rest } from "msw";
import { REACT_APP_URL } from "@env";

const token = "12365487pgta%jawqzxplkgcxddsf";

const handlers = [
  rest.post(`${REACT_APP_URL}/users/login`, async (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        token,
      })
    )
  ),
];

export default handlers;
