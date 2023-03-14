import axios from "axios";
import decodeToken from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_URL } from "@env";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import {
  type LoginResponse,
  type UserCredentials,
  type CustomTokenPayload,
  type User,
} from "../../types";
import {
  setIsLoadingActionCreator,
  showModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";

const useUser = () => {
  const dispatch = useAppDispatch();

  const loginUser = async (userInfo: UserCredentials) => {
    dispatch(setIsLoadingActionCreator());

    try {
      const response = await axios.post(
        `${REACT_APP_URL}/users/login`,
        userInfo
      );

      const { token } = (await response.data) as LoginResponse;

      const { id, username }: CustomTokenPayload = await decodeToken(token);
      const userLogged: User = {
        id,
        token,
        username,
      };
      dispatch(loginUserActionCreator(userLogged));
      await AsyncStorage.setItem("token", token);
      dispatch(unsetIsLoadingActionCreator());
    } catch {
      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          modalMessage: "Something went wrong",
          showModal: true,
        })
      );
    }
  };

  return {
    loginUser,
  };
};

export default useUser;
