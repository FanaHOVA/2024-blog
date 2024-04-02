---
title: How AI wasted half my day with the wrong decorator
date: 2024-04-02
description: Or, for future "self StackOverlow" purposes: how to fix PicklingError: Can't pickle <function name>: attribute lookup failed
---

After a decade of coding in Ruby, the AI wave made me cave in to switching to Python, as most tools don't have Ruby bindings. Luckily, it's super easy to pickup a new language and framework thanks to LLMs. You can ask them "what's the Python equivalent of Ruby's XYZ" and it will usually give a good answer. I also use [Cursor](https://cursor.sh/) as my editor, and their multi-line Copilot is super helpful when learning.

Yesterday I was setting up some async workers in a Django app to do data extraction in the background. Claude suggested django-q for a project as something similar to Sidekiq from the Rails world; great! After following its instructions and setting up everything, I couldn't even get the thing to compile due to this error: 

`cannot import name 'baseconv' from 'django.utils'`

Tuns out, `django-q` development has been abandoned and one of its dependencies removed from Django core! Claude did know this, as when asked about the error it responded saying: 

> The baseconv module was removed from Django in version 3.1 as part of a code cleanup process. However, some older versions of django-q might still rely on this module.

But it wasn't smart enough to make the jump to "do not use this package", sadly, which wasted about 30-60 mins of my time trying to rebuild my environment, updating packages, etc.

Through my Googling, I then found [`django-q2`](https://github.com/django-q2/django-q2), which is a fork of the original project that supports newer Python and Django versions. Awesome! I swapped the package, updated my settings, etc. Run the code and...

`PicklingError: Can't pickle <function extract_endpoints_task at 0x11558bb50>: attribute lookup extract_endpoints_task on docs_extraction.tasks failed`

That's weird. I've had issues before with pickling objects that have dependencies, are wrapped within modules, etc, but the code Claude gave me was pretty clean:

```
from django_q.tasks import async_task
from .models import Document

@async_task
def extract_endpoints_task(document_id):
    document = Document.objects.get(id=document_id)
    document.extract_endpoints()
```

I spent over an hour asking Claude for suggestions on how to fix it; it suggested a whole bunch of things that didn't work. I tried trimming down the function to just say `return 1`, I moved `tasks.py` in different apps, I tried to manually point to a fork of `django-picklefield` that was linked in the docs, nothing seemed to work. 

Turns out that all along, the `@async_task` decorator was just made up by Claude 😅 That's what was causing the pickling error. Deleting that line made everything work well. I think it'd be really easy to pickup for someone who had used django_q before, but it wasn't for me as someone trying to learn. As a noob, the code looks pretty clean and idiomatic Python, so there's really no reason to believe it's wrong at first.

LLMs and Copilots have made me at least 5-10x more productive, but sometimes I get into these issues and it's a good reminder that "AGI" is not quite here yet, no matter what the Twitter hype wants you to believe.
