import { StyleSheet } from 'react-native';
import {textColorStyle} from "../../shared/styles";

export const style = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: '13%',
    ...textColorStyle.primary
  },
  errorText: {
    color: '#934a4a',
    marginLeft: '5%'
  },
  field: {
    margin: '5%',
    backgroundColor: 'transparent',
    borderColor: '#668cc5',
    borderWidth: 2,
    borderStyle: 'solid',
    color: '#668cc5'
  },
  button: {
    backgroundColor: '#4a6793',
    margin: '3%',
    borderColor: 'transparent'
  },
  buttonText: {
    color: 'snow'
  },
  registerButton: {
    backgroundColor: '#74934a'
  }
});
