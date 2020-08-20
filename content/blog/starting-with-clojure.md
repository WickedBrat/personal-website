---
title: "Getting started with Clojure"
date: 2020-08-01
slug: "starting-with-clojure"
description: "Clojure and functional programming"
keywords: ["clojure", "functional programming", "blog", "gojek"]
draft: false
tags: ["clojure", "functional programming"]
math: false
toc: true
---

If you're here, it means that probably you've come across functional programming or Clojure. If not, perhaps I need to check my SEO. Anyway, let's make the most out of it. Throughout the blog, I'll try to simplify and present my understanding of the **Functional Programming** and **Clojure**.
When you're getting started with Clojure, the book [Brave Clojure](https://www.braveclojure.com/getting-started/) is going to be your life saver. [Joy of Clojure](http://www.joyofclojure.com/) is another book you'd find handy. For practicals and hands-on, I'd recommend [4clojure.com](http://www.4clojure.com/). Let's dive in!

## How's Clojure different

Clojure has a lot of resemblance with Lisp. In other words, you can say Clojure is Lisp with support for JVM. Supporting JVM turns out to be a big deal for a number of reasons:

- JVM has been around for a long time and is fast, really fast.
- It has the support of numerous libraries, built-in.
- JVM is used by a lot of companies for their microservices.

Clojure has an opinionated approach to functional programming. It has support for high-order functions. This means that it can take functions as arguments and a function can also return values from other functions. One of the coolest things is that the data in Clojure are immutable by default. This means that everything, when defined has fixed value and can't be changed. Having immutable data values is several benefits like all the data-structures are thread-safe and one thread can't change the values of others. You also don't need to worry any other code changing your variable values.

## Java vs Clojure

To understand the difference between usage of Clojure and Java because one might argue that Java also runs on JVM. To successfully do that, we need to understand the working of Clojure behind the scenes.

Clojure is a hosted language. Unlike most other programming languages Clojure programs are executed within JVM itself. Typically, Java source codes are compiled to produce JAR files which are then run by the JVM. But for Clojure, there is a Clojure library running inside JVM that runs the Clojure source code.

## REPL

REPL (Read-Eval-Print-Loop) is an advanced environment that is shipped with most Lisp languages. In day-to-day development, REPL could prove to be one of the most useful tools. While developing code in Java, one issue you must have come across is the long cycle taken to test a simple change of code. With REPL, you can eliminate this process by simply running your Clojure code in REPL.

## Some good practices
