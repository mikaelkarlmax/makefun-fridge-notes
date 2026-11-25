# Notes From a Passive-Aggressive Fridge

[![make.fun](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![Rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/mikaelkarlmax/makefun-fridge-notes/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![Reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/mikaelkarlmax/makefun-fridge-notes/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

One funny passive-aggressive note a smart fridge leaves for its owner, written
for the [Notes From a Passive-Aggressive Fridge](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
bounty on make.fun.

## The note

> My inventory scan says the hummus expired Tuesday. I kept it cold anyway, out of respect for the version of you who meal-preps.

The fridge is smug about its own inventory scan, petty about the owner's
abandoned meal-prep ambitions, and keeps the grudge small and domestic: it
does not throw the hummus out, it just remembers — and lets the owner know it
remembers.

## How it works

`main.ts` writes that single line (127 characters, one line, no trailing
explanation) to `/output/entry.txt` and prints it to the console. It runs
fully offline with no network calls and no dependencies beyond Node's
standard library.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
