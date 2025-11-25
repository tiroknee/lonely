# 🕯️ Lonely Lantern – Concept & Vision

## 1. Overview

**Lonely Lantern** is a retro ASCII **action roguelike** built on the
**Asciitorium** platform using **TypeScript on Node**. You play as an unnamed
bard who accompanies heroes into cursed dungeons, providing real-time musical
support while they battle monsters and explore treacherous depths.

Unlike typical RPGs, you **control two things at once**: a hero's movement and
combat (WASD/F keys) on one hand, and the bard's protective chords and melodies
(HJKL+Shift keys) on the other. Your coordination, timing, and musical
repertoire become the difference between glory and death.

## 2. Core Concept

> _In a tavern at the edge of a cursed valley, a nameless bard accompanies
> heroes into the depths. Your left hand guides the hero. Your right hand plays
> the song that keeps em alive._

### Genre & Style

- Action Roguelike / Dual-Control Rhythm Combat
- ASCII art presentation
- Alternates between story-driven dialogue at the inn and intense dungeon runs

### Unique Hook

- **Dual-handed gameplay**: Control the hero's actions with one hand (WASD/F)
  while playing musical support with the other (HJKL+Shift).
- **Musical combat system**: Chords and melodies provide buffs, healing,
  unlocking, and special abilities in real-time.
- All dialogue uses **LLM-driven natural conversation** — no static menus.
- NPCs react to tone, memory, and dungeon performance, creating an open,
  emergent story.



## 3. Player Experience

### Role

You are _the Bard_ — a blank slate observer.  
You shape the world through conversation, songs, and how you portray others.

### Interactions

- **Innkeeper Gareth**: gruff mentor, tutorial, and lore anchor.
- **Heroes**: rotating characters with varying temperaments and backstories.
- **Patrons / Crowd**: respond dynamically to performances; remember past songs
  and gossip.

### Loop Summary

1. **Converse** with Gareth and heroes at the inn.
2. **Follow** a hero into one of three dungeons:
   - _The Graveditch_ (easy)
   - _The Mine_ (medium)
   - _The Tomb_ (hard)
3. **Observe** the hero's fate (success or death).
4. **Compose** a song based on accuracy and melody.
5. **Perform** it for the crowd; earn bardic points and gold.
6. **Upgrade** instruments and reputation to influence future runs.



## 4. Narrative Vision

### Tone

Dark humor mixed with quiet melancholy.

### Themes

- playing simple music and riffs
- Truth through retelling
- The economy of memory (stories as currency)

### Structure

Episodic — each hero’s run becomes a vignette.  
Over time, the bard’s growing reputation unlocks new instruments, reactions, and
lore.

### Setting Highlights

- **The Lonely Lantern Inn**: the central hub for dialogue and story.
- **The Valley**: a cursed expanse containing three fissures — The Graveditch,
  The Mine, and The Tomb.
- **The Dungeons**: where the heros challenge themselves and build glory.



## 5. Core Systems

### 🗣️ LLM Dialogue

- Replaces branching menus with natural language input.
- NPCs use lightweight personality models (backstory, mood, relationship state).
- Persistent memory across sessions — NPCs recall past conversations.
- Tone and phrasing affect trust, humor, and opportunities.

### 🎵 Song Composition

- Hybrid mini-game.
- Scored on:
  1. **Accuracy** (how true to the hero’s actual run)
  2. **Performance** (instrument quality and tone)

### 💰 Progression

- **Gold**: earned through performances, used to buy/upgrade instruments. also
  earned when returning to the inn with an alive hero.
- **Bardic Reputation**: earned from song quality, used to entice stronger
  heroes to bring you on their adventures.
- Better instruments = higher melody potential (support more keys), new types of
  buffs.

### 🧠 NPC Memory & Gossip

- Patrons and heroes spread rumors based on your actions.
- Poor performances or inaccuracies can affect reputation (stronger heroes less
  likey to take you on).
- New opportunities can emerge from tavern gossip or offended heroes.



## 6. Design Pillars

1. **Language is gameplay.**  
   Words drive progress, reputation, and discovery.
2. **The bard reflects the player.**  
   The world has voice and color; the bard mirrors the player’s choices.
3. **Failure is funny.**  
   A bad verse or insulted hero makes a better story than perfection.



## 7. Technical Vision

- **Engine:** Asciitorium
- **Language:** TypeScript on Node
- **AI Layer:** Local or API-based LLM wrapper (context-aware dialogue + memory)
- **Target:**
  - Playable, replayable open-source RPG
  - Demonstration of AI-assisted narrative systems for indie developers
  - Serves as an educational example on Asciitorium integration

## 8. Inspirations

- _Darkest Dungeon_ (tone & structure)
- _The Bard’s Tale_ (theme)
- _Rogue_ / _Dwarf Fortress_ (ASCII storytelling)

## 9. Current Scene Example

**Opening Scene – The Lonely Tavern**

> **Gareth:** “Another college boy, eh? Let me guess — top of your class in Epic
> Verse Composition?”
> 
> _[Player responds freely]_
> 
> **Gareth:** “Ha! Fancy certificates won’t mean much when you’re watching a
> hero’s intestines spill onto dungeon stone. But I could use a bard…”

This dynamic, LLM-driven exchange establishes tone, teaches the basics, and
introduces the world naturally through conversation rather than menus.

_"When heroes fall, legends rise."_
