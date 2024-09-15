import styled from '@emotion/styled';

const time = 55;
let timeago = '';

if (time < 60) {
  timeago = 'Now';
} else if (time < 3600) {
  timeago = '1min';
} else if (time < 86400) {
  timeago = '1hour';
} else {
  timeago = '1year';
}

const TimeAgo = () => {
  return <TimeAgoContainer>{timeago}</TimeAgoContainer>;
};

export default TimeAgo;

const TimeAgoContainer = styled.div`
  color: #adadad;
  font-size: 10px;
  font-weight: 500;
  justify-content: flex-end;
`;
