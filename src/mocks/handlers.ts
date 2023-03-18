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
  rest.get(`${REACT_APP_URL}/events`, async (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        events: [
          {
            id: "240719vida",
            name: "Summer Music Festival",
            location: "Costa Brava Beach",
            image: "summer_music_festival.jpg",
            date: "2023-07-15",
            time: "18:00:00",
            organizer: "ABC Productions",
            category: ["music", "festival"],
          },
        ],
      })
    )
  ),
  rest.delete(`${REACT_APP_URL}/events/240719vida`, async (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        message: "Event succefully deleted",
      })
    )
  ),
];

export const errorHandlers = [
  rest.post(`${REACT_APP_URL}/users/login`, async (req, res, ctx) =>
    res(ctx.status(400))
  ),
];

export default handlers;
