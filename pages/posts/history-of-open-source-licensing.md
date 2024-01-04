---
title: History of Open Source Licensing
date: 2021-02-05T22:47:50.390Z
description: An in-depth exploration of the history, evolution, and future of open source software licensing, and its impact on commercialization and the cloud computing era.
---
Commercial open source software has always been a head scratcher for many: how exactly can you publish your entire code base online, make it free for people to download, but also create a viable business around it? Red Hat's IPO in '99 was a great result, but it was more of a one-of success than a playbook that other makers could follow. In the past decade open source has boomed in popularity, but the path to commercialization has gotten even more complicated, as the shift to the cloud put AWS and other providers in a position to easily host and redistribute open source project without rewarding the original creators. In this post we will dive into the history of open source software licensing, its evolution over the last 40 years, and what the future holds.

## "Open Letter to Hobbyists"

Before the 70s, software was not considered copyrightable, and therefore had no licenses attached to it; early commercial products like IBM's mainframe software were distributed with source code included. The landscape started changing with the *"US Commission on New Technological Uses of Copyrighted Works (CONTU)"* of 1974, which stated that "computer programs, to the extent that they embody an author's original creation, are proper subject matter of copyright". In 1976, a young Bill Gates authored ["Open Letter to Hobbyists"](https://archive.nytimes.com/www.nytimes.com/library/cyber/surf/072397mind-letter.html) and published it on the New York Times; in the essay, Gates denounced people who obtained copies of BASIC without paying the license fee: "Who can afford to do professional work for nothing?". These copies were bootleg versions of the BASIC paper tape. One of the original tapes was stolen at a Homebrew Computer Club meetup in June 1975, and copies of it were redistributed at the following meeting.

The final nail in the coffin of public-domain software came with the verdict of *[Apple vs Franklin](https://en.wikipedia.org/wiki/Apple_Computer,_Inc._v._Franklin_Computer_Corp.)* in 1983, which clarified that both the source code (the human-readable code) and the binary code (the machine readable code) of a program are covered by copyright. After Apple vs Franklin, the software landscape quickly started moving towards widespread licensing and binary-only distribution of software. IBM reverted its original policy and announced it'd be no longer distributing the source code along with software purchases. 

"Free software" was now vulnerable to larger companies leveraging their source code and redistributing it as a commercial product. Apple itself was a clear representation of the divide between hobbyists, like Steve Wozniak and the Homebrew Computer Club, and more commercially-focused minds, like Steve Jobs and Bill Gates.

## The GNU Project and the birth of "Open Source"

In the 1970s Richard Stallman, a Harvard graduate, spent time at MIT's AI laboratory where he built a reputation as a strong proponent of "free software". Disturbed by the development in the software licensing world, he founded [the GNU Project](https://www.gnu.org/gnu/thegnuproject.en.html) in 1983, with the aim of representing and supporting the free software movement. The organization is responsible for the creation of the GNU General Public License (GPL) in 1989, which would then be adopted by leading projects of the time like Linux and MySQL.

The GPL leveraged a new concept called "copyleft". "Copyleft" allows software creators to grant users access to the source code of their applications and lets them create derivative work on top of it, but it requires that work to also adopt the same license. This makes it impossible for companies to take projects under "copyleft", package them and redistribute them as closed-source commercial products. The GPL was a pivotal moment in the history of open source software; to this day, the license is still leveraged by some of the most popular open source projects like Red Hat, MySQL, Git, and Ubuntu. 

In 1997 Eric Raymond, a long-time Linux contributor, published ["The Cathedral and the Bazaar"](http://www.catb.org/~esr/writings/cathedral-bazaar/), in which he talked about his experience in free software (the "Bazaar" model), and what his advantages are over the status quo of packaged software the industry offered (the "Cathedral" model). In summary, Raymond argues that the wisdom of the crowd offered by the Bazaar model generates better results than a small group of developers could. *"Given enough eyeballs, all bugs are shallow."* Netscape's CEO would mention Raymond's work as one of his inspirations when deciding to open source the browser (more on that later).

In that same year Christine Peterson, a fellow MIT alum, coined the term "open source" during a group meeting with Raymond and other "free software" leaders at the Foresight Institute. We should all consider ourselves lucky that "cooperatively developed" didn't win that fight! Raymond updated his essay accordingly on February 9th 1998 (["Changed free software to open source''](http://www.catb.org/~esr/writings/cathedral-bazaar/cathedral-bazaar/)) and at the "Freeware Summit" of 1998, a vote was taken to adopt "Open source" as the standard term. The event was then renamed to "Open Source Summit", which still runs to the this day, supported by the Linux Foundation. 

## Open Source goes commercial

In March 1998, Netscape open sourced their Communicator 5.0 source code on their newly registered [Mozilla.org](http://mozilla.org) domain. This quote from Bob Lisbonne, SVP of client products at Netscape at the time, touches on one of the most important aspects of open source: the possibility of tapping into an unlimited pool of talent.

"It's no longer Netscape alone, pushing the client software forward, but now it's really the whole Net. For Netscape, this gives us a way to engage the creative, innovative abilities of literally orders of magnitude more people than we could ever--really any commercial software company could ever--afford to just put on their payroll." 

The software was released under the **Netscape Public License,** which wasn't recognized as a true open source one, and [received criticism by Richard Stallman](https://www.gnu.org/philosophy/netscape-npl.html). Mozilla eventually spun out of Netscape, and launched the Firefox browser in 2002 under the **Mozilla Public License.** In that same time period, other open source projects were being launched both in enterprise contexts, like Sun Microsystems's [OpenOffice.org](http://openoffice.org) and Rapid7's Metasploit, but also in the gaming space, like Linden Lab's Second Life. In other cases, the open source project was preceding the company: Matt Mullenweg created WordPress in 2003, but only left CNET to start Automattic in 2006, and raised $1.1M in 2007. 

In the early 2000s, licensing was still pretty straight forward, with most projects living under GPL or BSD licenses. The latter (not to be confused with Linux's BSD distribution) is one of the most permissive licenses, and doesn't require the disclosure of source code of derivative works. For example, I could take an open source BSD-licensed project, modify it, and redistribute it as commercial closed source product without issues. 

GPL licenses on the other hand require you to disclose your source code if it leverages other GPL-licensed pieces of code. While great in theory, this is hard to enforce; if a closed source application uses GPL source code but I have no visibility into the code itself, how can I confirm it's in violation? *[Free Software Foundation (FSF) vs Cisco](https://www.theguardian.com/technology/blog/2008/dec/12/cisco-fsf-opensource)* in 2008's was one of the first GPL lawsuits that were against a large enterprise.  In 2016 [Automattic accused Wix of using GPL-licensed code](https://arstechnica.com/information-technology/2016/11/wordpress-and-wix-trade-shots-over-alleged-theft-of-open-source-code/) in one of their projects, but quickly resolved the issue out of court. 

As cloud computing became more popular in the 2000s, there was a major shift in the open source world. In the early days, a big part of the OSS community was individual developers participating in the development of these projects as a hobby; as time went on, open source became a larger focus for enterprises. This usually happens in two ways: 

* The company uses an open sources project for marketing the company as a thought leader, as well as a recruiting tool to attract top talent to work on it (a good example of this is Google with TensorFlow in machine learning, but you also see it with React at Facebook)
* An open source project is monetized through an open core or commercial open source strategy. This is the case for companies like MongoDB, Elastic, DataBricks, etc.

This shift caused GPL to lose in popularity, as it'd require companies to open source their core products if they were to use their own open source work. Companies started moving to an Apache or MIT license. Nowadays, those two licenses account for more than 50% of all licenses. This also allowed the rise of startups that can help companies manage open source compliance, such as [FOSSA](http://fossa.com) and [Snyk](http://snyk.io). 

![WhiteSource breakdown of licenses](/images/screen-shot-2021-02-05-at-5.52.24-pm.png)

*Credit to WhiteSource for the visualization*

## Staying open source in a cloud-first world

Open source software and cloud computing have been a big net positive for engineering teams around the world, drastically lowering the upfront cost and time to develop software. On the other hand, there's been a lot of discussion around whether or not cloud providers are taking advantage of open source projects, by leveraging their distribution channels to monetize open source work without giving anything back to the creators.

The community is somewhat split on this, with one side arguing that cloud providers don't owe anything to the creators, while the other side sees this as an ethical breach of the open source sentiment, even though it's technically legal. The next few years will be pivotal in deciding what the future of commercial open source looks like, especially from a licensing perspective. 

**MongoDB** was a pioneer of the first generation of large commercial open source companies. The first release of MongoDB came out in 2009; for the first few years the company behind it, at the time still named 10gen, didn't have a commercial product other than professional services and training. In 2013 they were named DB system of the year by DB-Engines, officially rebranded to MongoDB, and launched their first Enterprise version. The product was licensed under AGPLv3. The company grew very quickly and eventually went public in 2017. In 2018, MongoDB announced a license change, moving from AGPLv3 to a newly-created SSPL (Server-side Public License), a fork of GPLv3 with additional language that prevents companies from offering Mongo as a commercial service without a commercial license. They submitted the SSPL to the Open Source Initiative for approval as a recognized open source license. The submission was received with mostly negative feedback from the community, which led to MongoDB withdrawing their proposal to the OSI. They still went ahead with relicensing their product though, and still offer it under SSPL today. 

**Elastic** is another iconic company in the open source world. It was founded in 2012, and quickly became one of the fastest growing projects out there, going public just 6 years later. The community version was originally released under Apache license. In January 2021, Elastic also moved both ElasticSearch and Kibana to SSPL, [accusing AWS of unethical practices](https://www.elastic.co/blog/why-license-change-AWS). AWS responded by announcing that going forward they will be [stepping up to maintain an ElasticSearch fork](https://aws.amazon.com/blogs/opensource/stepping-up-for-a-truly-open-source-elasticsearch/?sc_channel=sm&sc_campaign=launch_&sc_publisher=TWITTER&sc_country=Global&sc_geo=GLOBAL&sc_outcome=awareness&trk=launch__TWITTER&linkId=109673114) that will be fully under Apache2 licensing. Similarly to Mongo, ElasticSearch received no support from the open source community after this change, especially since ElasticSearch was built on top of Apache Lucene, another open source project. 

Other open source companies have instead embraced working with cloud providers, keeping their licenses  Grafana recently [announced a partnership with AWS](https://grafana.com/blog/2020/12/15/announcing-amazon-managed-service-for-grafana/) which will allow customers to run managed instances on AWS. Grafana still uses the more permissive Apache license (Grafana was born as a fork of Elastic's Kibana). Similarly, Redis is still licensed under BSD-3 and has a managed offering powered by AWS, on top of the  

Another way of leveraging open source software to build businesses has been the open core model. An example is DataBricks, a cloud platform for large data science workloads. The founders created Apache Spark while at Berkley, which is still open source to this day. They also released other popular open source projects, such as Delta Lake. DataBricks leverages all of them as part of their architecture, but there's plenty of other code they have written internally to run the platform that allowed them to build a business worth $27B.  

## Where do we go from here?

The rise of commercial open source has been, in my opinion, a net positive for the community. The amount of great software that is free to use is amazing, and most times the user isn't required to pay for anything until they reach very large scale. The wave of relicensing that started a couple years ago due to the cloud providers re-hosting projects is understandable, as these companies spend a lot of money to support them. The problem is that engineers will now have to be a lot more careful about picking open source projects as core parts of their infrastructure. 

For example, the SSPL says *"If you make the functionality of the Program or a modified version available to third parties as a service, you must make the Service Source Code available via network download to everyone at no charge, under the terms of this License."* Would Grafana fall under this definition, since it started as a fork of Kibana? If I build something like [Algolia](https://www.algolia.com) on top of ElasticSearch, would I get sued? These are all questions that we have no answers for, as they have not been answered in a court of law. 

My hope is that over the next few years we will find new business models that startups can leverage to monetize open source projects, while at the same time letting engineers around the world benefit from their work without risking legal complications. 

Thank you for reading through the end! This is definitely the longest thing I've written to date on the internet. If you have any questions/feedback, please feel free to send me a note at afanelli at 645ventures.com, would love to hear from you. 







Some sources from this article:

[https://www.cnet.com/news/netscape-sets-source-code-free/](https://www.cnet.com/news/netscape-sets-source-code-free/>)

[http://www.bswd.com/CNSV-1304-Saper(IP-SIG).pdf](http://www.bswd.com/CNSV-1304-Saper%28IP-SIG%29.pdf) 

[https://opentechstrategies.com/files/pub/oss-licensing-issues.pdf](https://opentechstrategies.com/files/pub/oss-licensing-issues.pdf)

[https://en.wikipedia.org/wiki/History_of_free_and_open-source_software](https://en.wikipedia.org/wiki/History_of_free_and_open-source_software)

Red Hat S1: [https://www.sec.gov/Archives/edgar/data/1087423/000104746999023237/0001047469-99-023237.txt](https://www.sec.gov/Archives/edgar/data/1087423/000104746999023237/0001047469-99-023237.txt)

[https://fossa.com/blog/which-open-source-license-is-the-best-for-commercialization/](https://fossa.com/blog/which-open-source-license-is-the-best-for-commercialization/)

[https://techcrunch.com/2018/09/07/commons-clause-stops-open-source-abuse/](https://techcrunch.com/2018/09/07/commons-clause-stops-open-source-abuse/)

[https://techcrunch.com/2018/11/29/the-crusade-against-open-source-abuse/](https://techcrunch.com/2018/11/29/the-crusade-against-open-source-abuse/)

[http://turingmachine.org/~dmg/papers/dmg2010evol.pdf](http://turingmachine.org/~dmg/papers/dmg2010evol.pdf)

[https://www.gnu.org/licenses/gpl-faq.html#GPLIncompatibleLibs](https://www.gnu.org/licenses/gpl-faq.html#GPLIncompatibleLibs)

[https://opensource.com/article/18/2/coining-term-open-source-software](https://opensource.com/article/18/2/coining-term-open-source-software)