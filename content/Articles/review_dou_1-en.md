---
title: "Review #1 of the DOU Podcast"
description: "A tongue-in-cheek review of a DOU podcast episode: a developer with 10 years at SAP comments on the guest's takes on SAP, KPI education and career switchers."
date: 2021-11-25
tags: ["review", "dou"]
author: "Dmytro Gladkyi"
thumbnail: "../assets/review_dou_1/thumbnail.png"
language: "en"
translationOf: "review_dou_1"
---
```
This micro-post is purely entertainment content
```

Finally a new host has joined the DOU team (well, "new" — there are already about 20 episodes with him :) ), meaning that besides the PHP admin and the gang of "journalists" there's finally someone who actually has something to do with IT, and so now we can watch very interesting interviews with all sorts of people on the [DOU](https://www.youtube.com/watch?v=ZNJAmgO4H7c) channel

![Dou3.png](../assets/review_dou_1/dou3.png)

The latest interview was with CTO/CPO Oleksandr Solovyov, and it turned out very interesting, so I'd like to comment on some of his remarks and on the topics the host and the guest brought up in general.

```
Disclaimer: Oleksandr and I were in the same group at FIOT (the KPI Faculty of Informatics and Computer Engineering), even though he didn't attend classes much, but we know each other personally :)
```

# Here Comes the Heat

![Dou0.png](../assets/review_dou_1/dou0.png)

Below I break the whole interview into the parts I'd like to comment on

## [Buying SAP](https://youtu.be/ZNJAmgO4H7c?t=493)

Here, of course, he opened with a spinning kick right away; I love that and often use this NLP trick myself.

**In short: "we build our own, because if we buy SAP, that'll be the end.", "SAP breaks you over its knee", etc.**

All these quotes are taken from Lurkmore, judging by everything, [from a well-known article](https://lurkmore.to/SAP). It's hilarious and has a lot of truth in it, but as someone who spent 10 years at SAP developing a manufacturing execution system (Discrete Manufacturing Industry), **I'm forced to deliver the verdict: it's all nonsense.**

Everyone who says SAP breaks you over its knee is usually at a low level of business and process maturity. It's like going from a regular school full of D-students straight into a physics and math lyceum, where the rules are different, the level of the kids is different, and generally all processes are built differently. Not some free-for-all School No. 15 where you do whatever you want. Yes, SAP forces you to run your business processes properly.

SAP is an ecosystem where the contractor, the supplier, the accountant, the report, the government contact, the agent, etc. all have to fit under a common, so to speak, class. That is, the fact that you were shitting out two sets of books in 1C — one for taxes, one for yourselves — is purely your problem, not the problem of SAP, which doesn't allow you to do that. If for some damn reason your plant doesn't track machine downtime and depreciation, that's your mistake as a manager. Because when you take orders, those very customers, or a government inspection, may ask for exactly these parameters.

```
One of the funny examples of these "simplifiers" going "SAP, yuck" happened to me at a trade forum.

We were showing our product, a 3D visualization of an assembly operation highlighting all the elements
where defects had been reported. Cool stuff.

A KAMAZ representative walks up.

- WHAT IS THIS?
- It's a visualization and assembly instruction for a vehicle clutch
- SO WHAT?
- ???
- WHAT CAN YOUR SAP DO?
- Uhhh, what do you mean?
- How do you track parts, that they were installed or written off?
- Our system keeps the full product genealogy; you can see which part from which batch went into which clutch.
If there were defects, they get written off to scrap or rework
= BULLSHIT
- ??
- WELL, MY WORKER STUFFED HIS POCKETS WITH BEARINGS AND CARRIED THEM OUT OF THE PLANT. HOW WILL YOUR SAP NOTICE THAT? YOUR SAP IS CRAP!
```

**Everybody knows Apple, right? At their keynotes they often say that the silicon and aluminum** in their MacBooks involve no child labor, slave labor or exploited people. Or come from a country the US has put on its terrorist list. How do you think they track all of that through a chain of 100 agents? Now take the output of these garage inventors from every company, combine it into one report and send it to Cook for approval. I'll wait. **Wrote a little Clojure script "we have no children at the plant", generated a PDF, sent it to the State Department, and that's it?**

No. First, nobody will accept such a report from you unless it's in the established format, from a trusted person or auditor (all sorts of parasites like Deloitte or PwC always graze here). Will you spend your time hiring all these parasites? The Apple contract will already have gone to someone else who already has this whole integrated ecosystem in place. Where with a few mouse clicks you get access to manufacturers that are 100% vetted, have the proper documents, and you're sure there won't be problems later. Or you can do what Oleksandr suggests — crap out something of your own :))

I also have plenty of experience with our software being installed at plants where these DIY tinkerers had been running the show before, where even technical documentation and standards weren't followed, for which the plant paid both in fines and in lost orders. And all because the tinkerers said **"SCREW THAT SAP, WE'LL JUST SLAP SOMETHING TOGETHER RIGHT NOW AND DUMP IT IN A JSON".** or **"OH, SAP IS SO COMPLICATED, WE ALREADY HAVE A LITTLE .NET SERVER HERE, I'LL JUST BOLT ON A COUPLE MORE PLANT TRACKERS"**

And then the evil SAP comes along and asks: why are all the numbers in your records listed without units of measure? (for example). Here's your line item — Glue: 300. 300 what? As my math teacher used to say, "300 what? DOGS?"

**So if your business is reselling sneakers bought on AliExpress with a 15% margin to local hustlers**, then yes. Grab Clojure and off you go. If it's something serious, or someone wants to buy you, or you want to go public, then sooner or later you come to the grown-ups. That is, to SAP, or Oracle, or MS. And you integrate. The level of pain depends on the level you were at when you started growing up.

## [About KPI](https://youtu.be/ZNJAmgO4H7c?t=2931)

The guest's story in short: got into somewhere, ended up somewhere, accidentally submitted documents somewhere, someone accidentally called back, studied something, the dorm was cool, the studies were crap, I build websites for selling goods online, so why did I even need KPI with its Department of Technical Cybernetics, which trained engineers for manufacturing?

![DOU1](../assets/review_dou_1/dou1.png)

```
I can't say I deliberately went to FIOT, because my first choice of faculty was Applied Mathematics, but the passing score was 32 (the whole KPI Lyceum crowd went there), and I had 30 (or 28), and FIOT happened to set its cutoff at 28. I got in through the KPI preparatory courses, so we took the exam in May or April.
```

Well, if everything just somehow happened by accident, then you probably really did end up in the wrong faculty. Stories about the awesome dorm are like Stockholm syndrome — over time you start defending some fierce trash: boozing, weed, sex dens, 72-hour non-stop DOTA sessions, someone taking a dump right into the soap dish in the showers, brawls with the Chinese students. Indeed, why study when there's so much interesting stuff around.

In general, all the haters and trash-talkers of KPI or Shevchenko University are exactly this "somehow it accidentally happened that I landed in the Mechanics and Math faculty, yuck, crap, they taught us some useless stuff, I don't need it in life" type.

Me, on the other hand — I, for example, read a Gantt chart (that's around year 2-3 at KPI, I think), and the supervisors at a Harley-Davidson plant were stunned, because for them it was practically sacred tablets that only the three of them could read, while everyone else waited for them. And here comes some guy from who-knows-where to their cultured USA, and he gets it too. By the way, after that they somehow started hiding all their charts from me, no idea why :) Did they think I was a spy?

If you want to read about another incident during the launch of a huge plant, head over [to my timeless piece about the singleton](http://dmytrogladkyi.com/#/micro/8)

## [About Career Switchers](https://youtu.be/ZNJAmgO4H7c?t=4332)

![DOU2.png](../assets/review_dou_1/dou2.png)

Guest: people used to love computers, were curious, figured things out and became programmers, and now it's: boozed until 17, graduated from the culture university, sold tomatoes at the market, took 3 IT courses and already want 5k.

Completely agree. We always had problems with (and fired) these kinds of switchers, who were dragged in from somewhere with a degree from a teachers' college, worked in Poland until 32, and then "boom, I'm a React dev now". People like that can't work independently, they always demanded "tell me exactly in the ticket what to do", because they're not used to finding things out, digging in, debugging someone else's code, setting up sound on Red Hat Linux. If I started teaching them how all of this is done, I saw absolutely empty eyes that didn't want to learn or find out anything.

Switchers don't have something in their heart — a love of technology, of exploring the binary world; there's not even anything to talk to them about in the kitchen, because all they care about is where to get drunk and that their buddy brought in a car with foreign plates and they're going to go look at it.

Of course, there are exceptions, but I too prefer people who confidently walked toward something, not "boom, at 30 I'm a dentist". Would you want your teeth drilled by a 35-year-old who switched from React to dentistry after taking YouTube dentistry courses?
