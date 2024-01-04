---
title: Launching an open source LangChainHub UI
date: 2023-01-24
---

In the last few months I've been spending a lot of time playing around with different models and interfaces. There's a super cool project called [LangChain](https://github.com/hwchase17), a Python library that abstracts away the model-specific implementations, and lets you focus on your business logic. It also makes it easy to go from one model to the other without changing all of your code. 

On top of that, it offers a handy DSL that helps with chaining prompts and models together. They recently released [LangChainHub](https://blog.langchain.dev/langchainhub/), which is a collection of prompts that can be plugged into your LangChain projects. This makes it even easier to get started, as you can pull off-the-shelf prompts to build [ChatGPT-like](https://github.com/hwchase17/langchain-hub/blob/master/prompts/conversation/README.md) experiences, for example.

I noticed that LangChainHub didn't have a UI, so I decided to build one out. It's hosted [here](https://langchain-hub-ui-production.up.railway.app/), and I've open sourced both the [frontend](https://github.com/FanaHOVA/langchain-hub-ui/) and the [backend](https://github.com/FanaHOVA/langchain-hub-ui-scraper). 


#### Frontend

The frontend is written in Typescript; there's a couple `: any` type definitions in there, don't judge me. 

It runs on Next.js, with Prisma as an ORM for pulling data from a Postgres database. Nothing fancy here, but it was the first time I actually used Prisma in production, and really liked that I can just rewrite their schema model file instead of writing a separate migration like I have to do with Rails. 

#### Backend

The backend is in Ruby. It's a single Sinatra endpoint that uses the Octokit API to look at the ChainLangHub repo and traverses through the `prompts` folder. For each prompt, we slice the `README` file to isolate the name and description, and then save all the prompts in a Postgres database. This was the best way to avoid GitHub rate limiting, but it's not real time. Everything is hosted on Railway, which was extremely easy to do!

If you want to contribute or have any Qs, feel free to reach out on Github or on Twitter [@FanaHOVA](https://twitter.com/fanahova)! Always happy to chat. :)