import * as SC from './hero-container.style';
import { HeroContainerProps } from './hero-container.type';
export const HeroContainer = ({ children }: HeroContainerProps) => {
  return <SC.HeroContainer>{children}</SC.HeroContainer>;
};
