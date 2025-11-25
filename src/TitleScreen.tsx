import { Art, Banner, Column, Keybind, Row, Text } from 'asciitorium';

/**
 * Title Screen
 */
interface TitleScreenProps {
  onComplete?: () => void;
}

export const TitleScreen = ({ onComplete }: TitleScreenProps = {}) => {
  return (
    <Column align="center" width="fill" height="fill" gap={{ bottom: 1 }}>
      {onComplete && <Keybind keyBinding="Enter" action={onComplete} />}

      <Row height={28} align="center">
        <Column align="center">
          <Art sprite="flame" position={{ x: 12, y: 13 }} />
          <Art sprite="lantern" />
        </Column>
        <Column gap={{ left: 5 }}>
          <Banner font="marker" text="The" letterSpacing={1} />
          <Banner font="marker" text="Lonely" letterSpacing={1} />
          <Banner font="marker" text="Lantern" letterSpacing={1} />
          <Banner font="marker" text="Inn" letterSpacing={1} />
        </Column>
      </Row>
      <Text>"When Heros Fall, Legends Rise"</Text>
      <Art gap={3} sprite="enter" />
    </Column>
  );
};
