import { TextInput, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const Input = ({ onChage, defValue, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      defaultValue={defValue}
      onChageText={onChage}
      placeholder={placeholder}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 100,
    height: 60,
  },
});

export default Input;
