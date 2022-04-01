import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const LoginScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);

  const loginHandler = () => {
    if (email.length === 0) {
      Alert.alert("Та имэйл хаягаа бичнэ үү");
      return;
    }

    if (password.length === 0) {
      Alert.alert("Та нууц үгээ бичнэ үү");
      return;
    }

    axios
      .post(`http://10.0.0.109:8000/api/v1/users/login`, {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        AsyncStorage.setItem("user_token", result.data.token)
          .then((result) => {
            console.log("Амжилттай нэвтэрлээ. Токенийг хадгаллаа");
            navigation.navigate("Home");
          })
          .catch((err) => {
            console.log("Токен хадгалж чадаагүй. Шалтгаан:  " + err.message);
            setError("Токен хадгалж чадаагүй. Шалтгаан:  " + err.message);
          });
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        setError(err.response.data.error.message);
      });
  };

  AsyncStorage.getItem("user_token")
    .then((result) => setToken(result))
    .catch((err) => console.log(err.message));

  return (
    <View>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={require("../../assets/Images/shop.jpg")}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginTop: 10,
          color: "gray",
        }}
      >
        Нэвтрэх
      </Text>

      <Text
        style={{
          textAlign: "center",
          fontSize: 10,
          marginTop: 10,
          color: "gray",
        }}
      >
        Токен {token}
      </Text>

      {error && (
        <Text style={{ color: "red", fontSize: 16, textAlign: "center" }}>
          {error}
        </Text>
      )}

      <MyInput
        value={email}
        keyboardType="email-address"
        placeholder="та имэйл хаягаа оруулна уу"
        onChangeText={setEmail}
      />

      <MyInput
        value={password}
        secureTextEntry={true}
        placeholder="та нууц үгээ оруулна уу"
        onChangeText={setPassword}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <MyButton title="Буцах" onPress={() => navigation.goBack()} />
        <MyButton title="Нэвтрэх" onPress={loginHandler} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
