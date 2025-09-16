import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_OAUTH_CLIENT_ID } from '@env';

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
      return userInfo;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('[google] signIn failed:', error);
  }
}
