# Import Steps


## For players

### 1. import players 
--------------------
only import new players OR player's rating has changed
------------------------------------------------------

```
dotnet TtPlayers.Importer.dll --player
```

### 2. import sndtta-players 
----------------------------
this will set player with sndtta flag and import Teams
------------------------------------------------------

```
dotnet TtPlayers.Importer.dll --sndtta-player
```

### 3. import player histories
------------------------------
if a player's match history has changed, we will import the player histories. Currently only import sndtta players
------------------------------------------------------

```
dotnet TtPlayers.Importer.dll --history
```

## For Events

### 1. import events
------------------------------
Only import new events
------------------------------------------------------

```
dotnet TtPlayers.Importer.dll --event
```

### 2. import event matches
------------------------------
Only import new event matches OR events held within the last 10 days (in case the matches recorded are not complete.)
------------------------------------------------------

```
dotnet TtPlayers.Importer.dll --match
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
dotnet TtPlayers.Importer.dll --push-player-history
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




