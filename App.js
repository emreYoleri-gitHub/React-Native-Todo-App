import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import tempData from "./tempData";
import TodoList from "./components/TodoList";
import AppLoading from "expo-app-loading";
import AddListModal from "./components/AddListModal";
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

const App = () => {
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

  const [addTodoVisiable, setAddTodoVisiable] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={addTodoVisiable}
        onRequestClose={() => setAddTodoVisiable(!addTodoVisiable)}
      >
        <AddListModal  closeModal={()=> setAddTodoVisiable(!addTodoVisiable)}/>
      </Modal>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          <Text style={{ fontFamily: "Poppins_800ExtraBold" }}>Todo </Text>
          <Text
            style={{
              color: colors.blue,
              fontFamily: "Poppins_300Light",
            }}
          >
            Lists
          </Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity
          style={styles.addList}
          onPress={() => setAddTodoVisiable(!addTodoVisiable)}
        >
          <AntDesign name="plus" size={16} color={colors.blue} />
        </TouchableOpacity>
        <Text style={styles.add}>Add Lists</Text>
      </View>
      <View style={{ height: 275, paddingLeft: 32 }}>
        <FlatList
          data={tempData}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <TodoList list={item} />}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    color: colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    fontFamily: "Poppins_300Light",
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: colors.blue,
    fontSize: 14,
    marginTop: 8,
  },
});
