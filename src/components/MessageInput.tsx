import { useState, useRef, useEffect } from 'react';

// eslint-disable-next-line import/default
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import styled from '@emotion/styled';
import { Mic, PlusCircle, Smile, SquareSlash } from 'lucide-react';

const MAX_MESSAGE_LENGTH = 20000;

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= MAX_MESSAGE_LENGTH) {
      setMessage(inputText);
    }
  };

  const handleEmojiSelect = (emoji: { native: string }) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
    setShowEmojiPicker(false);
  };

  useEffect(() => {
    if (textareaRef.current && contentRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
      contentRef.current.style.height = `${scrollHeight + 20}px`;
    }
  }, [message]);

  return (
    <InputContainer>
      <ContentWrapper ref={contentRef}>
        <StyledTextarea
          ref={textareaRef}
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="메시를 입력하세요..."
          rows={1}
        />
      </ContentWrapper>
      <IconContainer>
        <StyledIcon as={PlusCircle} />
        <EmojiPickerWrapper>
          <StyledIcon as={Smile} onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
          {showEmojiPicker && (
            <EmojiPickerContainer>
              <Picker
                data={data}
                onEmojiSelect={handleEmojiSelect}
                set="Apple"
                theme="Dark"
                icons="outline"
                emojiVersion="15.0"
                locale="en"
                autoFocus={false}
                navPosition="top"
                previewPosition="none"
                searchPosition="sticky"
                skinTonePosition="none"
              />
            </EmojiPickerContainer>
          )}
        </EmojiPickerWrapper>
        <StyledIcon as={SquareSlash} />
        <StyledIcon as={Mic} />
      </IconContainer>
    </InputContainer>
  );
};

export default MessageInput;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 16px;
  border: 1px solid #3d3d3d;
  background-color: #1d1b1b;
  color: #696969;
`;

const ContentWrapper = styled.div`
  min-height: 20px;
  max-height: 150px;
  overflow-y: auto;
  padding: 10px;
  margin: 4px 0 0 0;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 20px;
  border: none;
  background-color: transparent;
  color: #696969;
  font-size: 16px;
  resize: none;
  outline: none;

  &::placeholder {
    color: #696969;
  }
`;

const IconContainer = styled.div`
  display: flex;
  padding: 6px 10px 10px 10px;
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
  margin-right: 12px;
`;

const EmojiPickerWrapper = styled.div`
  position: relative;
`;

const EmojiPickerContainer = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1000;
`;
