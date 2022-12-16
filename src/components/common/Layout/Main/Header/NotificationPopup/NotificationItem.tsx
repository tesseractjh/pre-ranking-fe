import React, { useContext } from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import timeFormatter from '@utils/timeFormatter';
import { ButtonWithPopupContext } from '@components/common/Button/ButtonWithPopup';

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
  ${({ theme }) => theme.mixin.inlineFlex('flex-start', 'stretch')}
  width: 100%;
  min-height: ${pxToRem(80)};
  padding: ${pxToRem(16, 20)};
  font-size: ${pxToRem(14)};
  text-align: left;
`;

const Title = styled.strong`
  font-weight: 700;
`;

const Flex = styled.span`
  overflow: hidden;
  flex: 1;
  ${({ theme }) =>
    theme.mixin.inlineFlexColumn('space-between', 'stretch', pxToRem(10))}
  width: 100%;
`;

const Text = styled.span`
  flex: 1;
  word-break: break-all;
  line-height: 1.3;
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
    notification_title: title,
    notification_text: text,
    notification_link: link,
    created_at: time
  } = data;

  const { handleClose } = useContext(ButtonWithPopupContext) ?? {};

  return (
    <Container>
      <Button
        type="button"
        onClick={(event) => {
          onClick({ param: id }, link)();
          handleClose?.(event);
        }}
      >
        <Flex>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Flex>
        <Time>{timeFormatter.relativeTime(time)}</Time>
      </Button>
    </Container>
  );
}

export default React.memo(NotificationItem);
