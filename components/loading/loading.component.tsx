import { useHydration } from '../../hooks/use-hydration.hook';
import * as SC from './loading.style';
import { LoadingProps } from './loading.type';

export const Loading = ({ children }: LoadingProps) => {
  const hydration = useHydration();

  if (!hydration) {
    return (
      <SC.Loading>
        <div className="loading-text">لطفا منتظر بمانید</div>
      </SC.Loading>
    );
  }
  return children;
};
