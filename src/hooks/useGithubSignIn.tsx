import { useNavigate } from 'react-router-dom';

import { signInWithGithub } from '@/api/firebaseAuth';

export const useGithubSignIn = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithGithub();
      navigate('/');
    } catch (error) {
      console.error('깃허브 아이디를 이용해 로그인하는데 실패했습니다.', error);
    }
  };

  return { signIn };
};
