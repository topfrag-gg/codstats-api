# Schema Design Decisions

This document outlines the rationale behind the current Prisma schema structure and key assumptions made to accurately
model Call of Duty League (CDL) and Challengers match data.

## Core Principles

- Reflect real-world structure: The schema mirrors the standard CDL match format (best-of-5 series) and its game types
  (Hardpoint, Search & Destroy, Control).
- Normalize relational data: Players, teams, events, maps, and modes are all modeled as separate entities to ensure
  flexibility and scalability.
- Enable granular stat tracking: Stats are tracked per player per map within a match, allowing advanced leaderboard and
  comparison features.

## Key Design Decisions

### 1. **`Match` and `MatchMap` Relationship**

- A `Match` represents a best-of-5 series.
- Each individual map played in a match is represented by a `MatchMap`.
- This allows for accurate data ordering (via `mapNumber`) and association with a specific `map` and `mode`.

```prisma
model Match {
  id          String     @id @default(cuid())
  eventId     String
  teamAId     String
  teamBId     String
  matchDate   DateTime
  matchMaps   MatchMap[] // Best-of-5 structure
  ...
}
```

### 2. **`Map` and `Mode` Separation**

1. CDL Maps and game modes change over time (between game iterations), so they are modeled separately.
2. A `MatchMap` links to both a `Map` (e.g., Vault) and a `Mode` (e.g., Control).

This makes it easy to:

- Filter matches by mode or map
- Track stats per map/mode combination
- Update maps/modes each CDL season without schema changes

### 3. **Match Format Assumptions**

We assume the CDL matches follow the typical best-of-5 format:

1. Hardpoint
2. Search & Destroy
3. Control (or another swing game mode)
4. Hardpoint
5. Search & Destroy

However, not all matches go to 5 maps. The schema accommodates this by:

- Using an array of `MatchMap` records
- Relying on `mapNumber` to retain order (1-5)
- Allowing fewer than 5 entries in a series.

### 4. `MatchMapPlayerStat`

- Player-level stats are tracked per map, not just per match.
- Enables performance breakdowns across different game modes or specific maps.
- Supports advanced features like map-specific K/D, win rates, and clutches.

```prisma
model MatchPlayerStat {
  id
  matchMapId
  playerId
  kills
  deaths
  assists
  damage
  ...
}
```

### 5. Teams and Players

- A `Player` belongs to a `Team` via `teamId`.
- Team history/versioning is not tracked in the current version of the API, but can be added later (e.g.,
  `TeamMembership` join table).
- Current design assumes players are always on one time at a time.

## Future Considerations

These enhancements are planner or under consideration:

- Team history tracking (e.g., roster moves, coaching changes, etc.)
- Event grouping (e.g., qualifiers, majors, minors, LAN vs online, etc.)
- Advanced stats (first blood %, control tick caps, bomb plants/defuses)
- Match results (e.g., team score, win status)
- Round-level data (not currently tracked)
