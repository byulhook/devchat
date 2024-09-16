import styled from '@emotion/styled';

import Badge from './Badge';
import ProfileImage from './ProfileImage';
import TimeAgo from './TimeAgo';

const ChatPreview = () => {
  return (
    <Container>
      <ProfileImage />
      <ChatPreviewContainer>
        <ChatPreviewHeader>
          <h1>DONGYEONG KIM</h1>
          <TimeAgo />
        </ChatPreviewHeader>
        <ChatPreviewMessage>
          <Message>And thanks for telling me forehead that you gonna delete the server</Message>
          <Badge />
        </ChatPreviewMessage>
      </ChatPreviewContainer>
    </Container>
  );
};

export default ChatPreview;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  width: 100%;
  min-width: 300px;
  margin: 10px 0;
  justify-content: row;
  cursor: pointer;
`;

const ChatPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  height: 100%;
  margin-left: 14px;
`;

const ChatPreviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h1 {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
  }
`;

const Message = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: #adadad;
  width: 200px;
`;

const ChatPreviewMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px 0;
`;
