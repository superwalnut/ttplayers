# Import Steps


## Import All
```
dotnet TtPlayers.Importer.dll --all
```

## Push All - push all require-delta-push = true
```
dotnet TtPlayers.Importer.dll --push-all
```

## Show Push Summary
```
dotnet TtPlayers.Importer.dll --show-push-summary
```

## If event has been revised, 

need to run, this will delete related records and push new records.
---------------------------------------------------------------------------

```
dotnet TtPlayers.Importer.dll --revise-event --event-id=xxx
```

also need to update players & push players
-------------------------------------------

```
dotnet TtPlayers.Importer.dll --player
dotnet TtPlayers.Importer.dll --push-player
```


## Import players

--------------------
Update all players and do the, player import, sndtta-team import, player-ranking import, player-summary import
------------------------------------------------------

```
dotnet TtPlayers.Importer.dll --player
```

## For Sntta upcoming events
------------------------------
Just overwrite everything, since it is fairly small
------------------------------------------------------

```
dotnet TtPlayers.Importer.dll --sndtta-upcoming
```


# Push Steps
-----------------
This will push everything with RequireDeltaUpdate = true
--------------------------------------------------------

```
dotnet TtPlayers.Importer.dll --push-player
dotnet TtPlayers.Importer.dll --push-event
dotnet TtPlayers.Importer.dll --push-event-match
dotnet TtPlayers.Importer.dll --push-sndtta-team
dotnet TtPlayers.Importer.dll --push-sndtta-upcoming
```


# TTnet-Pytorch 

Table tennis analysis AI tool

https://github.com/maudzung/TTNet-Real-time-Analysis-System-for-Table-Tennis-Pytorch


Camera-Based-Table-Tennis-Posture-Analysis

https://github.com/wutonytt/Camera-Based-Table-Tennis-Posture-Analysis



# Blog ideas

Technique Guides: Break down various strokes, serves, footwork, and strategies. Include images or videos for better understanding.

Equipment Reviews: Discuss and review different paddles, rubbers, balls, tables, and other accessories. Compare brands, performance, and suitability for different playing styles.

Training Tips: Offer training routines, drills, and exercises for improving specific skills or overall game performance. Highlight agility, speed, precision, etc.

Player Profiles and Interviews: Feature interviews with professional players, coaches, or enthusiasts. Explore their training routines, strategies, and insights.

Tournament Coverage: Recap major tournaments, analyze matches, discuss standout performances, and predict outcomes of upcoming events.

Rule Clarifications and Updates: Explain rules, rule changes, and lesser-known regulations in an engaging and understandable manner.

Health and Fitness: Discuss the importance of fitness in table tennis, injury prevention, nutrition, and exercises tailored for table tennis players.

History of Table Tennis: Delve into the origins of table tennis, its evolution, significant milestones, and notable players who shaped the sport.

Strategy Breakdowns: Analyze famous matches or moments, dissecting the strategies used by players, and explaining their effectiveness.

Community Spotlights: Highlight local clubs, events, or initiatives, encouraging community engagement and participation.

Fun and Quirky Content: Create quizzes, trivia, or fun facts about table tennis. Share entertaining anecdotes or stories related to the sport.

Beginner's Guides: Develop content for newcomers, including basic rules, fundamental techniques, and how to get started in table tennis.