# Firestorm RIO

A raider.io like M+ scoring system for Firestorm Servers.
https://keepdying.github.io/firestorm-rio/

## Frequently Asked Questions

### How does this work?
Every 30 minutes, **runs that can be seen on [Firestorm Ranking PvE](https://firestorm-servers.com/en/challenge/index) page** gets saved into database. If your run doesn't make it to that page, I won't have information about it and **It won't be added**. This is because **I don't have access to any data from Firestorm**.

### How do you score runs?

Exact scoring formula is given below:

```
    dungTimers = [+1 Timer, +2 Timer, +3 Timer]
    keylvltoscore = [...] # taken from raider.io addon
    
    max_time = dungTimers[0] + 5  # assume max deplete time 5 secs
    deplete_score = keylvltoscore[dungLevel - 2] + 0.01 # If depleted score goes down to -2
    timed_score = keylvltoscore[dungLevel]
    up_score = keylvltoscore[dungLevel + 1] # when timed +2 or +3, score goes up to +1 
    
    if timer >= max_time: # if went pepegas
        return deplete_score
        
    elif max_time > timer > dungTimers[0]: # if depleted
        return (((timer - max_time) / (max_time - dungTimers[0])) * (deplete_score - timed_score)) + deplete_score
        
    else: # if timed
        return ((timer / dungTimers[0]) * (timed_score - up_score)) + up_score
```
This should give similar scores like in raider.io BfA Season 4.

### Some of my runs are missing?

If your run doesn't appear on Firestorm website, I can't parse that. Also If your run didn't get parsed before weekly reset, You won't be able to see it.

Keep in mind most of the current data is gathered over past weeks in development by running parser manually so If you don't see a run you did 3 months ago don't blame me. 

### I want to see raw data?

Check players.json & runs.json in src folder.

### UI doesn't look good?

As you see I'm not much a front-end developer and having hard time with CSS. 

### I want to contribute?

You can check/change page's source in repo and make pull requests to contribute! 

### How can I contact you?

Discord: keepdying#5821
