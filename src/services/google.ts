import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { GOOGLE_OAUTH_CLIENT_ID, BASE_API_URL } from '@env';

export function configureGoogleSignin() {
  GoogleSignin.configure({
    webClientId: GOOGLE_OAUTH_CLIENT_ID,
  });
}

export async function signInWithGoogle() {
  try {
    configureGoogleSignin();
    const hasPlayServices = await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    if (hasPlayServices) {
      const userInfo = await GoogleSignin.signIn();
      if (userInfo?.data?.idToken) {
        try {
          await axios.post(`${BASE_API_URL}/v1/auth/google/login`, {
            token: userInfo.data.idToken,
          });
        } catch (apiError) {
          if (axios.isAxiosError(apiError)) {
            // eslint-disable-next-line no-console
            console.error(
              'Backend auth failed:',
              apiError.response?.status,
              apiError.response?.data,
            );
          } else {
            // eslint-disable-next-line no-console
            console.error('Error calling backend API:', apiError);
          }
        }
      }
      return userInfo;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.warn('[google] signIn failed:', error.message);
    } else {
      // eslint-disable-next-line no-console
      console.warn('[google] signIn failed with unknown error');
    }
    return null;
  }
}
