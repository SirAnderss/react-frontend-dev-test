import app from 'firebase-app/client';
import {
  getAuth,
  OAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';

export const auth = getAuth(app);

export const mapUserFromFirebaseAuthToUser = (user: User) => {
  if (user) {
    const { displayName, email, photoURL, uid } = user;

    return {
      uid,
      avatar: photoURL,
      username: displayName,
      email,
    };
  }
};

export const authWithSocialProvider = async (provider: string) => {
  const authProvider = new OAuthProvider(`${provider}.com`);

  const authUser = await signInWithPopup(auth, authProvider)
    .then(result => {
      const user = result.user;

      const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;

      return normalizedUser;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error({ errorCode, errorMessage });

      return null;
    });

  return authUser;
};

export const logout = () => {
  const status = signOut(auth)
    .then(() => {
      return 'ok';
    })
    .catch(e => {
      console.error(e);
    });

  return status;
};
