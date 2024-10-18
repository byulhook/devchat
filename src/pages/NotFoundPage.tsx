import { Link } from 'react-router-dom';

import { PATH } from '@/routes/path';

const NotFoundPage = () => (
  <>
    <h1>에러 페이지 404</h1>
    <div>페이지를 찾을수 없습니다.</div>
    <Link to={PATH.HOME}>
      <h5>홈으로 이동</h5>
    </Link>
    <Link to={PATH.SIGN_IN}>
      <h5>로그인 페이지로 이동</h5>
    </Link>
  </>
);

export default NotFoundPage;
