---
title: The case for BYOD (Bring-your-own-data) applications
date: 2022-02-08T21:23:35.377Z
---
*Originally published on the 645 Ventures blog.*

When we [announced our investment](https://645ventures.com/the-commoditization-of-business-intelligence-tools-the-rise-of-embedded) in Cube in 2020, we talked about “embedded intelligence” and how data-rich software products have become. On your average SaaS dashboard, you will find plenty of charts, stats, tables, and more that tell you information about your usage, impact on your business, etc. While that’s been useful to customers, it has also created a need for ETL products like Fivetran, which help companies extract that data into their own databases and warehouses so that they can run deeper analysis on it. For certain use cases, data also gets sent to other software products; this need has created another category called *reverse* ETL, headlined by companies like [Census](https://www.getcensus.com/) and [Hightouch](https://hightouch.io/).

At a high level, the current flow for some use cases is the following:

* I enter data in Software A, which stores it in its database
* I move data out of Software A’s database into my own warehouse (ETL)
* Optional: transform data in my warehouse with dbt or similar
* I move data from my warehouse into Software B to re-use it (Reverse ETL)

How did we get to this point? Why is it so hard to use your data across services?

If you’ve spent any time in IT buying, you’ve heard the phrases “vendor lock-in” or “high switching cost”. Companies have historically thought that keeping your data captive in their databases makes it harder for you to leave them for a competitor. Sadly that has proved true, which is why so many terrible products are still highly valued publicly traded companies. The advances in data engineering tools that we mentioned above undermine this status quo, which creates a **brand new opportunity for products that will create value not by holding your data hostage, but by allowing you to execute and automate actions on top of it.**

One way startups can try to attack incumbents is by building **BYOD (bring-your-own-data) applications**. Instead of asking customers to send you their data and allow you to store, your product could sit on top of their existing data warehouse and read data from there. It could also send data back to the warehouse just like an ETL product would extract it from traditional software. The product-led growth trend will also lead more startups to offering a self-serve option to their product; if customers could easily bring their existing data to it through this approach, it’d make the time to generate value much lower and increase retention.

There are a few benefits for both buyers and builders of BYOD products:

### **Benefits to the buyer of a BYOD product:**

* **More freedom:** Having the product and the underlying data separated lowers the lock-in into a certain vendor. This will allow companies to more easily move from one tool to the other if they don’t find it to be a good fit for their needs.
* **Lower compliance overhead:** especially for large enterprises, sending data to 3rd parties is very hard if not downright impossible due to compliance and security requirements. This type of architecture could ease that burden; in turn, it will make sales cycles easier for the startup.
* **Data ownership:** companies will be in full control of their data and will decide how and where to store it. This will reduce the need to build ETL pipelines.

### **Benefits to startups building BYOD products:**

* **Better price and usage alignment:** by removing the cost of hosting the data, your pricing model can focus on the value you deliver to the customer. It also makes it easier to retain them with discounts in periods of lower usage as your costs are lower.
* **Less data management overhead:** while the burden of data storage, reliability, and availability was on the company’s end, it is now pushed to the customer and their warehouse provider instead. This will make it easier to build data-heavy applications without over-engineering them.
* **Lower switching cost from competitors:** in the past going after an incumbent meant asking a customer to export from the incumbent’s software to yours. In this architecture, they might already have their data in their warehouse, which will make it easier to test your product alongside their existing solution.

An example of this new paradigm in the SIEM space is [Panther](https://runpanther.io/integrations/snowflake/), a company we backed in 2019 that [recently raised a large Series B](https://runpanther.io/press-releases/panther-labs-raises-120m-series-b-with-unicorn-valuation-led-by-coatue/?utm_source=homebanner+&utm_medium=direct+). Traditionally, people might use a product like Splunk as their SIEM; in order to use Splunk, you have to send data to them and let them store it. Panther on the other hand can run analysis on top of data you already have in your Snowflake instances, as well as helping you funnel it there. The value that Panther offers is in their performance, as well as their alerting and remediation engine; holding customers’ data hostage isn’t necessary to make customers adopt your product and grow usage.

While this BYOD approach is very different than traditional SaaS products and will initially only be interesting to companies that have somewhat mature data practices in their team, the very fast growth of companies like Snowflake, Fivetran, Census, etc, shows that there are enough companies out there feeling this pain point.

Areas that are closer to the technical side of the house, like security, observability, product analytics, etc will be more receptive but I believe that over the next couple of years it will start to spread throughout the organization, including sales, marketing, and finance. If you are building either a BYOD SaaS product or developer infrastructure that will allow companies to do it more easily, I’d love to talk! You can reach me at afanelli(at)645ventures.com or [@FanaHOVA](https://twitter.com/fananhova) on Twitter.