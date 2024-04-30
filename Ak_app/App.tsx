import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationApp } from './src/navigation';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UseDispatch } from 'react-redux';
import { setuserInfo } from './src/redux/redusers/userReducer';
const toastConfig = {
  success: (props: {}) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green', borderLeftWidth: 8, borderRightColor: 'green', borderRightWidth: 8, width: "100%" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),
  error: (props: {}) => (
    <ErrorToast
      style={{ borderLeftColor: 'red', borderLeftWidth: 8, borderRightColor: 'red', borderRightWidth: 8, width: "100%" }}
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),
};

const App = () => {
  const [firstTime, setFirstTime] = React.useState(true);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      setFirstTime(false)
    }, 2000)
    _retrievUsereData();
  }, [])

  const _retrievUsereData = async () => {
    try {
      const value = await AsyncStorage.getItem('userInfo');
      if (value !== null) {
        const userInfo = JSON.parse(value);
        console.log(userInfo);
        dispatch(setuserInfo(userInfo));
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <NavigationApp />
      <Toast config={toastConfig} />
    </>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};