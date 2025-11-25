import { Art, Column, Keybind, Row, Text } from 'asciitorium';

/**
 * Title Screen
 */
interface InnProps {
  onComplete?: () => void;
}

export const Inn = ({ onComplete }: InnProps = {}) => {
  return (
    <Column align="center" width="fill" height="fill" gap={{ bottom: 1 }}>
      {onComplete && <Keybind keyBinding="Escape" action={onComplete} />}

      <Art sprite="cyclops" />
      <Text>"When Heros Fall, Legends Rise"</Text>
      <Art gap={3} sprite="enter" />
    </Column>
  );
};
