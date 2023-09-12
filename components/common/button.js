import { Pressable, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const Button = ({ children, variant, onPressFunction }) => {
  return (
    <Pressable
      onPress={onPressFunction}
      style={({ pressed }) => [
        styles[variant],
        {
          backgroundColor: pressed
            ? "#a8a5a5"
            : colors[variant]?.backgroundColor,
        },
      ]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dice: {},
  navigation: {},
  planeButton: {
    width: 100,
    display: "flex",
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.buttonBackground,
  },
});

export default Button;
