---
title: "Intro to Actor Model"
date: 2020-08-20
slug: "intro-to-actor-model"
description: "Actor model and more"
keywords: ["actor model", "akka", "distributed systems", "blog", "gojek"]
draft: true
tags: ["actor model", "akka model", "distributed systems", "system design"]
math: false
toc: true
---

Choosing a right system architecture to be used in production is one of the most importance part of the devlopement process. It's going to decide the reliability of the tech infrastructure in your organisation. When running services at scale, things are often prone to break. Mostly not because one service runs faulty, but that one (or more) of them doesn't let the other to work as expected. This calls for a need of an architecture, some ground rules that solves these cases.

## Do they act?

So what are exactly these things called actors? Actor can be seen as distributed services instead they do not exist in remote locations. Each actor is supposed to do one thing, handle just one functionality. The actor model is conceptual model to deal with concurrent computation. Having an actor exist individually holds no meaning. Actors come together in systems.

## Actors have mail boxes

Although multiple actors can run simultaneously, it's crucial to understand that these actors will process messages simultaneously which means that one actor can have multiple messages to process. This gives rise to
