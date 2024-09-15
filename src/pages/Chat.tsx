import styled from '@emotion/styled';

import ChatList from '../components/ChatList';
import ChatRoom from '../components/ChatRoom';

const Chat = () => {
  return (
    <ChatContainer>
      <ChatList />
      <ChatRoom />
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  display: flex;
  justify-content: row;
  width: 100%;
  height: 100vh;
`;
