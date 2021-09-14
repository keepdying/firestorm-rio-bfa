# Firestorm RIO

A raider.io like M+ scoring system for Firestorm Servers.

## FAQ

### How does this work?

All data is **parsed** from Firestorm's website (https://firestorm-servers.com/en/challenge/index) by using Selenium.

### How do you score runs?

Exact scoring formula is given below

```
    max_time = dungTimers[0] + 600  # assume max deplete time 10 min
    deplete_score = keylvltoscore[dungLevel - 2] + 0.01 # If depleted score goes down to -2
    timed_score = keylvltoscore[dungLevel]
    up_score = keylvltoscore[dungLevel + 1] # when timed +2 or +3, score goes up to +1 
    if timer >= max_time: # if went pepegas
        return deplete_score
    elif max_time > timer > dungTimers[0]: # if depleted
        return (((timer - max_time) / (max_time - dungTimers[0])) * (deplete_score - timed_score)) + deplete_score
    else:
        return ((timer / dungTimers[0]) * (timed_score - up_score)) + up_score
```

### My runs doesnt show up?

If your run doesn't appear on website, I can't parse that. Also keep in mind there _could_ be some mistakes parsing in algorithm.
