import { signInWithPopup, GithubAuthProvider } from 'firebase/auth';

import { auth } from '@/api/firebaseApp';

export const signInWithGithub = async () => {
  const provider = new GithubAuthProvider();
  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = credential.accessToken;
        console.log('token:', token);
        // ...
      }

      //TODO: 로그인한 사용자 정보를 몽고디비에 저장하는 코드를 작성해야함
      //TODO: 로그인한 사용자 토큰을 서버에 저장하는 코드를 작성해야함
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...

      console.log(`user:`, user);
    })
    .catch((error) => {
      // TODO: 로그인 실패시 에러 처리 로직을 작성해야함
      throw new Error(error);
    });
};

export const signOutWithGithub = async () => {
  await auth
    .signOut()
    .then(() => {
      console.log('로그아웃 성공');
    })
    .catch((error) => {
      // TODO: 로그아웃 실패시 에러 처리 로직을 작성해야함
      console.error('로그아웃 실패', error);
    });
};
