import React from "react";
import decodeToken from "jwt-decode";
import { renderHook } from "@testing-library/react";
import { setupStore, store } from "../../store/store";
import useUser from "./useUser";
import { type UserCredentials, type CustomTokenPayload } from "../../types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import Wrapper from "../../mocks/Wrapper";
import { type ModalStructure } from "../../store/features/ui/types";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
}));

jest.mock("jwt-decode", () => jest.fn());

const spyDispatch = jest.spyOn(store, "dispatch");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the useUser hook", () => {
  describe("When it loginUser action recieves username 'jose' and a password 'larraldejose78' ", () => {
    test("Then it should call the dispatch method with the loginuserActionCreator", async () => {
      const mockUserCredentials: UserCredentials = {
        password: "kñnchytd/*6&!",
        username: "jose",
      };

      const tokenPayload: CustomTokenPayload = {
        username: "jose",
        id: "20269874633185966",
      };

      const loginMockUser = loginUserActionCreator({
        ...tokenPayload,
        token: "12365487pgta%jawqzxplkgcxddsf",
      });

      const mockStore = setupStore();
      const dispatchSpy = jest.spyOn(store, "dispatch");
      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        tokenPayload
      );
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      await loginUser(mockUserCredentials);
      expect(dispatchSpy).toHaveBeenCalledWith(loginMockUser);
    });
  });

  describe("When loginUser recieves tehe username 'jose' and an incorrect password", () => {
    test("Then it should call the dispatch method with showModalActionCreator with an error message", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      const user: UserCredentials = {
        username: "jose",
        password: "tgadxhy6749ijk",
      };

      const mockModal: ModalStructure = {
        isError: true,
        modalMessage: "Something went wrong",
        showModal: true,
      };

      await loginUser(user);
    });
  });
});
