import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../Colors";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

const TodoList = ({ list }) => {
  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;

  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>

      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{completedCount}</Text>
          <Text style={styles.subtitle}>Remaining</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{remainingCount}</Text>
          <Text style={styles.subtitle}>Completed</Text>
        </View>
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  listTitle: {
    fontSize: 30,
    fontFamily: "Poppins_400Regular",
    color: colors.white,
    marginBottom: -5,
  },
  count: {
    fontFamily: "Poppins_200ExtraLight",
    fontSize: 48,
    marginBottom: -10,
    color: colors.white,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "400",
    color: colors.white,
  },
});
