import styled from '@emotion/styled';

import ChatList from '../components/ChatList';
import ChatRoom from '../components/ChatRoom';

const Messages = () => {
  return (
    <ChatContainer>
      <ChatList />
      <ChatRoom />
    </ChatContainer>
  );
};

export default Messages;

const ChatContainer = styled.div`
  display: flex;
  justify-content: row;
  width: 100%;
  height: 100vh;
`;
