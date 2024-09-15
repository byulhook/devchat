import { Link } from 'react-router-dom';

import { PATH } from '@/routes/path';

// NotFoundPage
const NotFoundPage = () => (
  <>
    <div>페이지를 찾을수 없습니다.</div>
    <Link to={PATH.HOME}>
      <h5>홈으로 이동</h5>
    </Link>
  </>
);

export default NotFoundPage;
