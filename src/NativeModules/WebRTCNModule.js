import { NativeModules } from 'react-native';
const { WebRTCNModule } = NativeModules;

export const fetchOffer = () => {
  return new Promise((resolve, reject) => {
    WebRTCNModule.FetchOffer()
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};
