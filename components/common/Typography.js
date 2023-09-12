import react from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const Typography = ({ variant, children }) => {
  return (
    <View>
      <Text styles={styles[variant]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 16,
    fontWeight: 900,
    color: colors.buttonText,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: colors.titleText,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.planeText,
  },
});

export default Typography;
