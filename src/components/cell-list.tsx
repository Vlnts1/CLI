import { useTypedSelector } from '../hooks/use-typed-selector';

export const CellList: React.FC = () => {
  useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => {
      data[id];
    }),
  );

  return <div>cellslist</div>;
};
