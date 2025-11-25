import { Art, Banner, Column, Keybind, Text } from 'asciitorium';

/**
 * Prologue - Opening narrative that sets up the game world
 */

interface PrologueProps {
  onComplete: () => void;
}

export const Prologue = ({ onComplete }: PrologueProps) => {
  return (
    <Column align="center" width="fill" height="fill">
      <Keybind keyBinding="Enter" action={onComplete} />

      <Banner font="pencil" text="Prologue" />

      {/* prettier-ignore */}
      <Text width={75} textAlign="top-left" height="fill" typewriter>
        The ruins of an old mining settlement cling to the rim of a deep and broken valley.
        Once beautiful and prosperous, it now leaks monsters through the earth
        like a broken sewer main. Three fissures scar the landscape and seem to be spewing this cesspool of evil: ¶¶

        • The Graveditch ¶
        • The Mine ¶
        • The Tomb ¶¶

        Rumors claim these places promise treasure and glory. Mostly, it's just death. ¶¶

        Into this bleak landscape wanders a recently graduated bard. While having no
        possessions of his own, he does carry a strain of optimism that his mother classifies as a medical concern. ¶¶ Arriving
        at the Lonely Lantern Inn, he spies a sign nailed to the outer wall: BARDS WANTED! ¶¶

        An unusual policy for a place with no visible prospects of commerce... but then again, thats why they need a bard! ¶¶
        Pushing aside a bothersome thought about the need for bards - in plural - he knocks on the door...
      </Text>

      <Text textAlign="bottom" gap={2}>
        Press [Enter] to enter the Lonely Lantern Inn...
      </Text>
    </Column>
  );
};
