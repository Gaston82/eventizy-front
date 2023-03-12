import axios from "axios";
import { useNavigation } from "@react-navigation/native";
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
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";

const useUser = () => {
  const dispatch = useAppDispatch();

  const loginUser = async (userInfo: UserCredentials) => {
    dispatch(setIsLoadingActionCreator);
    const response = await axios.post(`${REACT_APP_URL}/users/login`, userInfo);

    const { token } = (await response.data) as LoginResponse;

    const { id, username }: CustomTokenPayload = await decodeToken(token);
    const userLogged: User = {
      id,
      token,
      username,
    };
    dispatch(loginUserActionCreator(userLogged));

    dispatch(unsetIsLoadingActionCreator);
    await AsyncStorage.setItem("token", token);
  };

  return {
    loginUser,
  };
};

export default useUser;
