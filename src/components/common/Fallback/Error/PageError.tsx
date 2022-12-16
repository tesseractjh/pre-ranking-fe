import { ReactComponent as WarningIcon } from '@assets/icons/warning.svg';
import Error from '.';

function PageError() {
  return (
    <Error
      icon={WarningIcon}
      title="연결에 실패했습니다!"
      content="잠시 후 다시 시도해주세요."
    />
  );
}

export default PageError;
