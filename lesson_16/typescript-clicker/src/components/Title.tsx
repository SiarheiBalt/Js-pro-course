interface IProps {
  item: number;
}

export const Title = ({ item }: IProps) => {
  return (
    <div>
      <h3>{item}</h3>
    </div>
  );
};
