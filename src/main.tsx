import {
  App,
  PerfMonitor,
  State,
  Keybind,
  Switch,
  Case,
  Default,
} from 'asciitorium';

import { TitleScreen } from './TitleScreen.js';
import { Prologue } from './Prologue.js';
import { Inn } from './Inn.js';

// Top-level game modes
type ScreenState =
  | 'title'
  | 'prologue'
  | 'inn'
  | 'overworld';

// Single source of truth
const currentScreen = new State<ScreenState>('title');

// Perf monitor toggle
const showPerfMonitor = new State(true);

// Transition helpers
const screen = {
  goToTitle: () => (currentScreen.value = 'title'),
  goToPrologue: () => (currentScreen.value = 'prologue'),
  goToInn: () => (currentScreen.value = 'inn'),
  goToOverworld: () => (currentScreen.value = 'overworld'),
} as const;

// App root
const app = (
  <App font="PrintChar21" width={96} height={62} border>
    {/* Global perf toggle */}
    <Keybind
      keyBinding="F12"
      action={() => {
        showPerfMonitor.value = !showPerfMonitor.value;
      }}
    />

    {/* Screen state machine */}
    <Switch width="fill" height="fill" condition={currentScreen}>
      {/* Splash / title */}
      <Case when="title" create={TitleScreen} with={{ onComplete: screen.goToPrologue }} />

      {/* Story intro */}
      <Case when="prologue" create={Prologue} with={{ onComplete: screen.goToInn }} />

      {/* Innkeeper + Hero Selecting, Song Writing, etc. */}
      <Case when="inn" create={Inn} with={{ onComplete: screen.goToOverworld }} />

      <Default create={TitleScreen} with={{ onComplete: screen.goToPrologue }} />
    </Switch>

    <PerfMonitor visible={showPerfMonitor} />
  </App>
);

await app.start();