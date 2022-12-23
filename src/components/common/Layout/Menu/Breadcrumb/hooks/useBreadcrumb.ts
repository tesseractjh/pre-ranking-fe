import { useLocation } from 'react-router-dom';
import { isGroup, isButton } from '@components/common/NavBar/types/navBar';
import { NAV_BAR_LIST } from '@constants/navBar';
import usePredictionDetail from '@hooks/queries/usePredictionDetail';

const getBreadcrumbs = (param: string) => {
  let breadcrumbs: (string | undefined)[] = [];

  NAV_BAR_LIST.forEach(({ links, content: categoryContent }) => {
    links.forEach((groupLink) => {
      if (isGroup(groupLink)) {
        groupLink.children.forEach(
          ({ link: childLink, content: childContent }) => {
            if (childLink === param) {
              breadcrumbs = [categoryContent, groupLink.content, childContent];
            }
          }
        );
      } else if (isButton(groupLink) && groupLink.link === param) {
        breadcrumbs = [categoryContent, groupLink.content];
      }
    });
  });

  return breadcrumbs.filter(Boolean);
};

function useBreadcrumb() {
  const { pathname } = useLocation();
  const [, page, param = '', id = 0] = pathname.split('/');
  const { data } = usePredictionDetail(
    Number(id),
    page === 'predict' && param === 'detail'
  );
  const category = data?.prediction?.prediction_category
    .split('_')
    .slice(1)
    .join('_');

  return getBreadcrumbs(category ?? param);
}

export default useBreadcrumb;
