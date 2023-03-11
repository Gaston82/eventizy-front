import server from "./mocks/server";

beforeAll(() => {
  global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
