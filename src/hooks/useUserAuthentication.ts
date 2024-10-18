import { useState, useEffect } from 'react';

import { onAuthStateChanged, User } from 'firebase/auth';

import { auth } from '@/api/firebaseApp';

const useUserAuthentication = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user: currentUser, loading };
};

export default useUserAuthentication;
