import { GoogleSignin } from '@react-native-google-signin/google-signin';

export function configureGoogleSignin() {
  GoogleSignin.configure({
    webClientId:
      '163485259394-2v5u9827ohut24rtfo4vgpo8o9h82a5i.apps.googleusercontent.com',
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
