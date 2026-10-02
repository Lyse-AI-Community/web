---
title: "SparksLyse: we build our own artificial intelligence from scratch"
pubDate: 2026-09-24
description: "Project presentation."
---

At SparksLyse, we like to understand and master what we use. So rather than just calling a third-party API, we decided to embark on an ambitious project: building our own language model, **entirely from scratch**, hosted on your site.

## Why start from scratch?

Most AI projects today simply call GPT, Claude, or another model via an API. It's effective, but it means depending on an external service, its prices, its limits, and its choices.

We preferred another route: to train a model ourselves, starting from a blank page. No pre-existing model that needs to be refined, no black box: the architecture, the training, the data, everything is done **in-house**.

## The bet: small, but specialized

We do not have the means to compete with the giants of the sector on a general model of several hundred billion parameters. Our basic model has **336 million parameters** deliberately compact, designed to run on your own hardware rather than on server farms.

But a small general model has its limits. Our solution: rather than a single model that tries to do everything moderately well, we build a **system of specialist models**. Everyone will be trained to excel on a specific task: text correction, classification, generation of structured commands, etc. A central model, our chatbot, will recognize when a request goes beyond its scope of expertise and will automatically find the right specialist to respond. A bit like a team where everyone has their own area of ​​expertise.

## Where we are

The model is currently going through its **pre-training** phase: it is learning the basics of the French language by reading a very large volume of text approximately **19.2 GB** of data (web pages, Wikipedia). This is the longest and most computationally intensive step — the one that lays the foundation for everything else.

Once this solid foundation is laid, will come:

- learning to talk (so that he knows how to talk naturally),
- the construction of the first specialist models,
- then the integration of the complete system which orchestrates everything.

## The rest

We will document each major step here, with regular progress updates. The objective: to show you concretely what it takes to build an AI from A to Z, and to share behind the scenes of a project that we lead with passion.

See you soon for the rest.
