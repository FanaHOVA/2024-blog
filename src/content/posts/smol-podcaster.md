---
title: "Open sourcing smol-podcaster"
date: 2023-08-09
---

A big part of our [Latent Space Podcast](https://latent.space) audience is people who actually don't listen to the podcast, but only read the writeup + transcript. We've made it a focus to always have high quality transcription for each episode, as well as "chapters" to skim to based on timestamps.

A lot of that work has been automated using large language models. I've open sourced a lot of it at [fanahova/smol-podcaster](https://github.com/FanaHOVA/smol-podcaster). At a high level:

- Uses whisper to transcribe the audio, as well as doing speaker recognition, labeling speakers and adding timestamps to each segment.
- Formats it in Markdown so that it's ready to copy into Substack.
- Uses Claude-100k to read through the transcript and create chapters with timestamps for all the topics mentioned in it.
- Uses both GPT-3.5-16k and Claude-100k to generate title ideas as well as tweet ideas.

It's been saving me a lot of time, and hopefully it helps other creators out there! 