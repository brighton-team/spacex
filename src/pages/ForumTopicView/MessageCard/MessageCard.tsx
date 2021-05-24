import React from 'react';

import { Card, Author, Content, StyledAvatar } from './styledItems';

const MessageCard = (props: OwnProps): JSX.Element => {
  const { authorName, datePublished, message } = props;

  const formattedDate = new Date(datePublished).toLocaleDateString();
  const formattedTime = new Date(datePublished).toLocaleTimeString();

  return (
    <Card>
      <Author>
        <StyledAvatar variant="square" />
        <p>{authorName}</p>
      </Author>
      <Content>
        <p>
          Опубликовано {formattedDate} {formattedTime}
        </p>
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
