import { type UserState } from "../../../types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given the loginUserActionCreator", () => {
  describe("When it recieves an initial state with an email 'vida@240719'", () => {
    test("Then it should return a new state with the property isLogged with the value true", () => {
      const mockUser: UserState = {
        email: "vida@240719",
        id: "",
        token: "",
        isLogged: false,
      };

      const expectedUserResult: UserState = {
        ...mockUser,
        isLogged: true,
      };

      const newState = userReducer(mockUser, loginUserActionCreator(mockUser));

      expect(newState).toStrictEqual(expectedUserResult);
    });
  });
});
