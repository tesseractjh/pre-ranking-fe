import { ReactComponent as PreparationIcon } from '@assets/icons/preparation.svg';
import Error from '.';

function Preparation() {
  return (
    <Error
      icon={PreparationIcon}
      title="서비스 준비중"
      content="보다 나은 서비스 제공을 위해 페이지 준비중에 있습니다."
      fullScreen={false}
    />
  );
}

export default Preparation;
