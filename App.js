import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Typography from "./components/common/Typography";
import { LinearGradient } from "expo-linear-gradient";
import Button from "./components/common/button";
import Input from "./components/common/input";

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      // Background Linear Gradient
      colors={["#89f7fe", "#66a6ff"]}
    >
      <Typography variant="title">Roll Dice</Typography>
      <Input onChage={() => {}} placeholder="text something" defValue="" />
      <Button variant="planeButton" onPressFunction={() => {}}>
        <Typography variant="button">Roll</Typography>
      </Button>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

// background-color: #DCD9D4;
//  background-image: linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%);
//  background-blend-mode: soft-light,screen;
