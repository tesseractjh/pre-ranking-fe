import React from 'react';
import styled, { css } from 'styled-components';
import useNotification from '@hooks/queries/useNotification';
import useDeleteAllNotifications from '@hooks/mutations/useDeleteAllNotifications';
import pxToRem from '@utils/pxToRem';
import Popup from '@components/common/Popup';
import Button, { Medium } from '@components/common/Button';
import ComponentLoading from '@components/common/Fallback/Loading/ComponentLoading';
import NotificationItem from './NotificationItem';
import useHandleItemClick from './hooks/useHandleItemClick';

const Header = styled.div`
  ${({ theme }) => theme.mixin.flex('space-between')}
  padding: ${pxToRem(12, 20)};
  background-color: ${({ theme }) => theme.color.PURPLE_500};
  font-weight: 600;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.WHITE};
`;

const DeleteButton = styled.button`
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.color.WHITE};

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  flex: 1;
  overflow-y: auto;
  ${({ theme }) => theme.placeholder.scrollbar}
`;

const ButtonWrapper = styled.li`
  padding: ${pxToRem(10, 0)};
  text-align: center;
`;

const Fallback = styled.div`
  ${({ theme }) => theme.mixin.flex()}
  height: 100%;
  font-size: ${pxToRem(16)};
  text-align: center;
  color: ${({ theme }) => theme.color.GRAY_600};
`;

const ContainerStyle = css`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch')}
  width: ${pxToRem(400)};
  right: ${pxToRem(-50)};
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const ButtonStyle = css`
  border: 1px solid ${({ theme }) => theme.color.GRAY_300};
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.BLACK};

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY_100};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.GRAY_200};
  }
`;

const NotificationPopup = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { data, fetchNextPage, isFetching } = useNotification(0);
  const { mutate: handleClear } = useDeleteAllNotifications();
  const handleClick = useHandleItemClick();

  if (!data) {
    return null;
  }

  const hasNotification = !!data.pages[0].notifications.length;

  return (
    <Popup css={ContainerStyle} ref={ref}>
      {isFetching && <ComponentLoading />}
      <Header>
        알림
        <DeleteButton
          type="button"
          onClick={() => handleClear({})}
          disabled={!hasNotification}
        >
          전체 삭제
        </DeleteButton>
      </Header>
      <List>
        {data.pages.map(({ notifications }) =>
          notifications.map((data) => (
            <NotificationItem
              key={data.notification_id}
              data={data}
              onClick={handleClick}
            />
          ))
        )}
        {hasNotification ? (
          <ButtonWrapper>
            <Button css={[Medium, ButtonStyle]} onClick={() => fetchNextPage()}>
              알림 더보기
            </Button>
          </ButtonWrapper>
        ) : (
          <Fallback>알림이 없습니다!</Fallback>
        )}
      </List>
    </Popup>
  );
});

NotificationPopup.displayName = 'NotificationPopup';

export default NotificationPopup;
