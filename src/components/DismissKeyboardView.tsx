import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
// 키보드가 사용자의 화면을 가리지 않도록 해주는 라이브러리

// {children}이 존재할경우 React.FC로 타입지정해서 사용하는게 좋다
const DismissKeyboardView: React.FC<{style?: StyleProp<ViewStyle>}> = ({
  children,
  ...props
}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView
      {...props}
      style={props.style}
      behavior={Platform.OS === 'android' ? 'position' : 'padding'}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
