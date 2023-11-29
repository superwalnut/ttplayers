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




