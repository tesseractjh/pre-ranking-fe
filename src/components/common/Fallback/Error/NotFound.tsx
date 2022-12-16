import { ReactComponent as BanIcon } from '@assets/icons/ban.svg';
import Error from '.';

interface Props {
  fullScreen?: boolean;
}

function NotFound({ fullScreen }: Props) {
  return (
    <Error
      icon={BanIcon}
      title="404 Not Found"
      content="존재하지 않는 페이지입니다"
      fullScreen={fullScreen}
    />
  );
}

export default NotFound;
