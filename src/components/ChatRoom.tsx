import { useState } from 'react';

import styled from '@emotion/styled';
import { MessageSquare } from 'lucide-react';

import MessageInput from './MessageInput';

const ChatRoom = () => {
  const [messageStatus] = useState(true);

  return (
    <ChatRoomContainer>
      {!messageStatus ? (
        <IconWrapper>
          <MessageSquare size={20} />
          <p>
            Pick a person from left menu, <br />
            and start your conversation.
          </p>
        </IconWrapper>
      ) : (
        <ChatContent>
          <MessageInput />
        </ChatContent>
      )}
    </ChatRoomContainer>
  );
};

export default ChatRoom;

const ChatRoomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 720px;
  background-color: #171515;
  border: 1px solid #3d3d3d;
  height: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #696969;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
