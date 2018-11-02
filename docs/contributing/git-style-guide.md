# Git style guide

There are many articles about best practices for git workflow. These are our preferred practices for:

- [Commits and messages](#commits-and-messages)
- [Branching and merging](#branching-and-merging)

## Commits and messages

Each commit should be a single logical change. This makes it easier to unpick code if things go wrong.

Commit messages should start with a short descriptive one-line summary, preferably no longer than 50 characters, with a leading capital and no full stop. Git convention is to write these in the present tense. For example:

```html
Add border around care cards component
```

If the commit refers to a ticket ID, then reference that in the commit message:

```html
[refs #94] Remove search icon IE8 fallback icon
```

After the summary line should come a blank line, followed by a more detailed description, which should wrap at around 72 characters.

```html
[refs #94] Remove search icon IE8 fallback icon

We are reducing the extra code and overheads for Internet Explorer 8,
so we are removing fallback icons. We have replaced a fallback icon
with the text search so it still functions.
See https://github.com/nhsuk/nhsuk-frontend/issues/94

```

If including a link to a ticket make sure it is publicly viewable.


## Branching and merging

You may often choose to work on a particular feature on a "feature branch"
rather than directly on `master`. Indeed, given how cheap branches are in Git,
this is [positively encouraged](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging).

You are encouraged to make liberal use of Git's [history rewriting
features](http://git-scm.com/book/en/Git-Tools-Rewriting-History) while working
locally, in order to arrange your commits into appropriate logical chunks that
will make sense to your fellow developers. In particular, you may find
`git rebase --interactive` very useful. You are also encouraged to avoid merge
commits and use `git rebase master` instead. However, you should not rewrite commits that have been pushed unless you:

  * are **very sure** that no-one else will be affected by you rewriting the
    branch history
  * have an Extremely Good Reason. For example: someone has committed
    sensitive information (personally identifiable data, passwords and suchlike)
    and it needs purging from history

When in doubt you should err towards smaller commits, which can be rebased
together later. It's harder to break large commits out into smaller chunks.

The smaller commits should still be logical chunks, but this will give context
for a more specific change and make git tools like `annotate` and `log` more
useful.

When merging from a feature branch to master (or any other mainline development
branch), in particular one that has previously been shared with colleagues, you
should use `git merge`'s `--no-ff` option to preserve evidence of your feature
branch in the repository history. This advice may be freely ignored for smaller
local feature branches for which a fast-forward merge will look like any other
routine development work on `master`.

If working on a ticket/issue, make a new branch for each one.

If the ticket has an ID, then include it in the name of the branch, such as:

```html
git checkout -b fix/NR-259-action-link
```

### Never call `git push -f` without additional arguments

Force pushing in git is a subject that attracts all kinds of religious
battles. This advice is not about the merits of force pushing.

This is about how to use `git push -f` if and when you do use it.

Let's say you're working on a branch, 'foobar', and you decide to force push
to the remote. So you do this:

```html
$ git push -f
```

If anyone has committed anything to master[^1] since you last pulled -- and if
you've been working on the branch for any length of time this is pretty likely
-- you will blow their changes away, because without arguments git will force
push *all* remote-tracking branches.

So, if you ever need to force push the 'foobar' branch, please instead do

```html
$ git push --force-with-lease origin foobar
```

`--force-with-lease` refuses to update a branch unless it is the state that we expect; i.e. nobody has updated the remote branch.
See: https://developer.atlassian.com/blog/2015/04/force-with-lease/

You can also change git's default behaviour of pushing all tracked branches by
doing `git config --global push.default upstream`, but you should probably get
into the habit of typing out your intentions in full when doing a destructive
operation like force pushing, otherwise disaster will strike when you use
someone else's differently-configured git, or miss a step when configuring a
new machine.

[^1]: (or any other remote-tracking branch you have in your local copy)
