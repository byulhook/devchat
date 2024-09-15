import styled from '@emotion/styled';

import ChatPreview from './ChatPreview';

const ChatList = () => {
  return (
    <ChatListContainer>
      <ChatListHeader>
        <h1>Messages</h1>
      </ChatListHeader>
      <SearchInput type="text" placeholder="Search" />
      <ChatPreview />
      <ChatPreview />
      <ChatPreview />
    </ChatListContainer>
  );
};

export default ChatList;

const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
  height: 100%;
  background-color: #1d1b1b;
  color: #fff;
  border: 1px solid #282626;
  padding: 0 30px;
`;

const ChatListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 24px;
  padding: 0;
  h1 {
    font-size: 24px;
    font-weight: 700;
    padding: 0;
  }
`;

const SearchInput = styled.input`
  width: 300px;
  height: 48px;
  border-radius: 8px;
  padding: 0 10px;
  background-color: #282626;
  color: #fff;
  margin: 24px 0;
`;
