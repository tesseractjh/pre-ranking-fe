import pxToRem from '@utils/pxToRem';
import timeFormatter from '@utils/timeFormatter';
import React from 'react';
import styled from 'styled-components';

interface Props {
  data: Model.Notification;
  onClick: (params: MutationParams, link: string) => () => Promise<void>;
}

const Container = styled.li`
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_200};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY_100};
  }
`;

const Button = styled.button`
  ${({ theme }) => theme.mixin.inlineFlex('space-between', 'flex-start')}
  width: 100%;
  min-height: ${pxToRem(80)};
  padding: ${pxToRem(16, 20)};
  font-size: ${pxToRem(14)};
  text-align: left;
`;

const Text = styled.span`
  flex: 1;
  word-break: break-all;
`;

const Time = styled.time`
  width: ${pxToRem(60)};
  font-size: ${pxToRem(12)};
  text-align: right;
  color: ${({ theme }) => theme.color.GRAY_500};
`;

function NotificationItem({ data, onClick }: Props) {
  const {
    notification_id: id,
    notification_text: text,
    notification_link: link,
    created_at: time
  } = data;

  return (
    <Container>
      <Button type="button" onClick={onClick({ body: id }, link)}>
        <Text>{text}</Text>
        <Time>{timeFormatter.relativeTime(time)}</Time>
      </Button>
    </Container>
  );
}

export default React.memo(NotificationItem);
