import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useUser from "../../hooks/useUser/useUser";
import LoginFormStyles from "./LoginFormStyles";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleUsername = (text: string) => {
    setUsername(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    const loggUser = {
      username,
      password,
    };
    await loginUser(loggUser);
    setPassword("");
    setUsername("");
  };

  return (
    <SafeAreaView style={LoginFormStyles.container}>
      <Text style={LoginFormStyles.title}>Login</Text>
      <View>
        <Text style={LoginFormStyles.label}>Username</Text>
        <TextInput
          style={LoginFormStyles.input}
          onChangeText={handleUsername}
          value={username}
        />
        <Text style={LoginFormStyles.label}>Password</Text>
        <TextInput
          style={LoginFormStyles.input}
          onChangeText={handlePassword}
          secureTextEntry
          value={password}
        />
        <TouchableOpacity style={LoginFormStyles.button} onPress={handleSubmit}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;
