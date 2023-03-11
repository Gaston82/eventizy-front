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
  };

  return (
    <SafeAreaView style={LoginFormStyles.container}>
      <Text style={LoginFormStyles.title} testID={"Login"}>
        Login
      </Text>
      <View>
        <Text style={LoginFormStyles.label}>Username</Text>
        <TextInput
          style={LoginFormStyles.input}
          onChangeText={handleUsername}
          value={username}
          placeholder="Enter username"
          placeholderTextColor="#948C8C"
          testID="username"
        />
      </View>
      <View>
        <Text style={LoginFormStyles.label}>Password</Text>
        <TextInput
          style={LoginFormStyles.input}
          onChangeText={handlePassword}
          secureTextEntry
          value={password}
          placeholder="Enter password"
          placeholderTextColor="#948C8C"
          testID="password"
        />
        <TouchableOpacity style={LoginFormStyles.button} onPress={handleSubmit}>
          <Text style={LoginFormStyles.textButton}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;
