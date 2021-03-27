import React from 'react';

import { Card, Author, Content, StyledAvatar } from './styledItems';

const MessageCard = (props: OwnProps) => {
  const { authorName, datePublished, message } = props;

  return (
    <Card>
      <Author>
        <StyledAvatar variant="square" />
        <p>{authorName}</p>
      </Author>
      <Content>
        <p>Опубликовано {datePublished}</p>
        <p>{message}</p>
      </Content>
    </Card>
  );
};

type OwnProps = {
  authorName: string;
  datePublished: string;
  message: string;
};

export default MessageCard;
