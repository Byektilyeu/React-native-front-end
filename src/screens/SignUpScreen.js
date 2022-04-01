import { StyleSheet, Text, ScrollView, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const signupHandler = () => {
    setError(null);
    if (password1 !== password2) {
      Alert.alert("Нууц үгнүүд хоорондоо таарахгүй байна");
      return;
    }

    if (name.length === 0) {
      Alert.alert("Та нэрээ бичнэ үү");
      return;
    }

    axios
      .post(`http://10.0.0.109:8000/api/v1/users/register`, {
        name: name,
        email: email,
        password: password1,
        role: "admin",
      })
      .then((result) => {
        console.log(result.data);
        AsyncStorage.setItem("user_token", result.data.token)
          .then((result) => {
            console.log("Токенийг амжилттай хадгаллаа");
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

  return (
    <View>
      <Image
        style={{ width: "100%", height: "30%" }}
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
        Шинээр бүртгүүлэх
      </Text>

      {error && (
        <Text style={{ color: "red", fontSize: 16, textAlign: "center" }}>
          {error}
        </Text>
      )}

      <MyInput
        value={name}
        placeholder="та нэрээ оруулна уу"
        onChangeText={setName}
      />

      <MyInput
        value={email}
        keyboardType="email-address"
        placeholder="та имэйл хаягаа оруулна уу"
        onChangeText={setEmail}
      />
      <MyInput
        value={password2}
        secureTextEntry={true}
        placeholder="та нууц үгээ давтан оруулна уу"
        onChangeText={setPassword2}
      />
      <MyInput
        value={password1}
        secureTextEntry={true}
        placeholder="та нууц үгээ оруулна уу"
        onChangeText={setPassword1}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <MyButton title="Буцах" onPress={() => navigation.goBack()} />
        <MyButton title="Бүртгүүлэх" onPress={signupHandler} />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
