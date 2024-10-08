import Row from './row';
import Wrap from './wrap';
import Column from './column';
import Center from './center';

export const layoutsToComponentMap = {
  // layouts
  Column: Column,
  TwoColumn: Column,
  Row: Row,
  SimpleRow: Row,
  FixedCenter: Center,
  SimpleWrap: Wrap,
};
