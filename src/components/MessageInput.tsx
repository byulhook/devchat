import { useState } from 'react';

import styled from '@emotion/styled';
import { Mic, PlusCircle, Smile, SquareSlash } from 'lucide-react';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // 메시지 전송 로직
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <InputContainer>
      <StyledInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
      />
      <IconContainer>
        <StyledIcon as={PlusCircle} />
        <StyledIcon as={Smile} />
        <StyledIcon as={SquareSlash} />
        <StyledIcon as={Mic} />
      </IconContainer>
    </InputContainer>
  );
};

export default MessageInput;

const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 10px;
  border-radius: 16px;
  border: 1px solid #3d3d3d;
  background-color: #1d1b1b;
  color: #696969;
`;

const StyledInput = styled.input`
  flex: 1;
  height: 70px;
  padding: 10px;
  border: none;
  background-color: transparent;
  color: #696969;
  margin: 8px;
  font-size: 16px;
`;

const IconContainer = styled.div`
  display: flex;
  margin: 0 10px;
  margin-bottom: 10px;
`;

const StyledIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: #696969;
  cursor: pointer;
  stroke-width: 2;
  &:hover {
    color: #ffffff;
  }
  margin: 0 6px;
`;
