import { rest } from "msw";
import { REACT_APP_URL } from "@env";

const mockToken = "12365487pgta%jawqzxplkgcxddsf";

const handlers = [
  rest.post(`${REACT_APP_URL}/user/login`, async (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        mockToken,
      })
    )
  ),
];

export default handlers;
