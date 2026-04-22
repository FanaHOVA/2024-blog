---
title: Why machine learning falls short in early stage venture capital
date: 2019-08-27T04:00:00.000Z
---
The advent of machine learning has been one of the major catalysts for innovation in this decade, powering products like Alexa and Netflix’s recommendation system. At a high level, the goal of machine learning is to use historical data to train models that will help inform future decisions through prediction. In order for predictions to have a high degree of accuracy, the training set for the models needs to be both 1) large enough and 2) varied enough. Luckily for machine learning engineers around the world, we produce a quintillion (10¹⁸) bytes of data every day, giving them plenty to work with.

As a consumer, you experience applications of machine learning every day, from your Instagram Explore tab to your Spotify playlists. Machine learning may also be bleeding into your work life, in areas such as Gmail’s auto-complete suggestions or your use of a virtual assistant to schedule meetings. Many of these applications have a massive data set to train their model. As examples, every day there’s 95 million new posts on Instagram, 42,000 songs added to Spotify and 294 billion emails sent, along with very high usage: Instagram users spend 53 minutes per day on it, Spotify users stream 148 minutes of music per day.

This is called a *data effect*: the more you use the platform, the better it works for you. Without historical data, you run into a cold start problem, meaning that your model doesn’t have enough data to infer the user’s preferences, and can’t serve them highly-tailored content.

At first glance, venture capital seems like an obvious application of machine learning. You have thousands and thousands of companies started each year, and only a small percentage of them (less than 1%) reach large exits ($500m+). Why not use machine learning to automatically surface the best ones to the top? We think of early stage startups as [complex adaptive systems](https://en.wikipedia.org/wiki/Complex_adaptive_system): the behavior of the individual elements that make the system (team, market, product, business model, etc) doesn’t predict the behavior of the system as a whole. There’s a myriad of other small factors that you can’t measure that play into a startup’s success, like chemistry between team members. The earlier you invest, the less data is available as well; even if there was a magic formula to evaluate a company, you might not have all the information to plug into it.

As a software engineer, you always have to pick the right tool for the job, and sometimes the best tool is not obvious. There’s a myriad of languages, frameworks and patterns that you can use. In the past five years, we have found that machine learning can be a useful tool, but it is in no way comprehensive enough to predict winners. In high frequency trading there is enough information for algorithms to confidently achieve price arbitrage when buying and selling stock; we view venture capital as low frequency trading with enough information for algorithms to achieve information arbitrage to inform an investing decision, which requires a different set of tools.

Here’s some of the issues that we encountered:

## There’s asymmetrical access to data in venture capital

Quant hedge funds have access to the same market data for publicly traded companies through official filings and live feeds from the exchanges. Competition in the quant hedge fund business is therefore based on which funds can better interpret the data to achieve desired outcomes. In venture capital, the situation is very different. Firms will have ad-hoc access to information based on their relationship with founders, and some firms have better access than others.

Venture capital is a zero sum game, since only a certain group of investors will get into a deal while the rest will not. This makes timing of information very important, as the round will not be open indefinitely. Round size, valuation, monthly growth, churn, etc are all impossible to learn without speaking to the founder directly, or to another investor who’s already received that information. The earlier a company is, the more frequently information changes as well, as the company may pivot or add/lose a key team member. This leads to an incomplete data set that makes predictive models unreliable.

To provide an example, let’s say you have a list of 1000 companies, and revenue growth is one of the features of your model, but you only have that information for 10% of the companies. You won’t be able to accurately use revenue as a decision making factor, because the amount of data you have is not statistically significant.

Data asymmetry means that you cannot use the model to surface new deals, but only to sort companies in your pipeline after you’ve had a conversation with the founder and filled out this information. While this is useful, it doesn’t help with getting through the pre-meeting top of funnel, where most of the noise exists.

## Machine learning is past-driven, venture capital is future-driven

Once you have the data, understanding which parts are informative is very difficult. Mike Maples at Floodgate has talked extensively about how their team looks for technology waves that can help companies grow to very large scale. The returns generated today are the results of technology trends started five to ten years ago, and in some cases even twenty years ago.

Machine learning can help you analyze the present by looking at the past; as a venture capitalist, [you have to live in the future, then invest in what’s missing](http://www.paulgraham.com/startupideas.html).Every company lives within a macro trend (cloud computing, mobile, social networks, sharing economy, etc), which will change the features that your model takes into account.

Imagine you’re in 1999, building a model to source your deal flow. You train it using all existing successful companies: Microsoft, IBM, Oracle, Cisco, Adobe, etc. They all either sell hardware or software that is delivered through physical devices like CDs, which gets updated maybe once a year. Do you think a model trained on that data would suggest Salesforce as a good investment, a SaaS platform that pushes updates on demand, or PayPal, an email payment service that gave users free money as an incentive to join? The model would have needed to understand the value of a completely new delivery mechanism for software.

If we reference back to the [Venture Capital Investment Triangle](https://medium.com/@645ventures/circle-of-competence-and-the-venture-capital-investment-triangle-663d65265c83), an article that we published in 2018, we can identify the bottom left quadrant as the one where machine learning works best: existing and known markets with incremental product improvements.

![Image for post](https://miro.medium.com/max/60/0*FJL1UAVpko5irgbp?q=20)

![Image for post](https://miro.medium.com/max/1502/0*FJL1UAVpko5irgbp)

Letting a black box model screen your top of funnel could create blind spots by deprioritizing companies with new business model approaches, markets that are unproven, or products that appear unlikely to be adopted.

One might argue that the software might be able to predict the characteristics of a team that is capable of being successful; however, the personality and technical skills required to build Oculus are quite different from what is required to build Salesforce. This is because the best venture capital returns are generated by companies that are creating new categories. Some signals are statistically relevant when looking at past performance: for example, 70% of founders out of 195 $1B+ dollar companies had a previous exit. For those cases, you’re better off building a rule-based system, as you know what you’re looking for.

At 645 Ventures, we have a blended approach: instead of fully automating the process, we built software that stack ranks the companies and then enhances every member of our team by giving them the tools to make better, faster and more informed decisions. The combination of human and software systems also enables us to better understand and evaluate markets and products that are completely new.

## Lack of liquidity in the market doesn’t let you course correct

If you deal with publicly traded securities, you can quickly get in and out of a position. As your model develops and gets more accurate, you’re able to rebalance your portfolio to increase returns. In venture capital you don’t have that luxury, which drastically reduces your margin of error. This applies to both errors of omission and errors of commission:

* If you’re an early stage investor and your model doesn’t surface the seed/Series A round of Google/Facebook/Uber, you’ve missed the boat. That particular round isn’t going to happen again, and your portfolio construction strategy may not allow you to invest in subsequent rounds. With a stock, you can miss out on some of the appreciation, but you’d still be able to buy in the public market for many years
* Similarly, if your model had surfaced companies that aren’t performing (bad business models that were predicted to be good, markets that took too long to develop, etc) you are not able to decide to get that money back and invest it in something else. Even if your model has now improved, you have less swings left at bat because a part of your fund has already been deployed.

For all of the reasons above, we do not build predictive black box models. Our engineering team has instead been working side by side with the investment team, building tools and processes that change dynamically and supercharge every member of the team. We use market and competitor data to help our team have a prepared mind when evaluating a company, and to automatically surface the best ones based on each team member’s investment interest. At the same time, we always give them a way to see the whole set of companies sourced by our software rather than automatically discarding them, and course correct in real time if we notice blindspots or identify new market opportunities.

How this data is actually used might be a topic for a different blog post, but that’s all for today. Cya!