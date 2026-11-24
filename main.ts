// The Houseplant Out-of-Office — make.fun entry (main account @hazel-lynx-59).
// Writes one out-of-office auto-reply, as if written by a neglected fern,
// to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of at most 120 characters,
// one line, not only white space. This line is 95 characters.
// Plant voice: a fern ignored since March, unwatered — yet thriving on
// spite and indirect sunlight. Punch lands on the last words ("indirect
// sunlight"); the setup (out of office since March, no watering) is the
// neglect, the turn is the fern thriving anyway.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Out of office since March. No one has watered me. I am thriving on spite and indirect sunlight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
