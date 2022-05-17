---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  ## monorepo vs. multi-repo
---

# monorepo

the good and the bad!

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
  class="abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# what is monorepo?


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->
<!-- 如果给你10w人的士兵，你如何管理他们？-->
<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# multi-repo

<img src="/img-monorepo/multi-repo.jpg">

---

# multi-repo

<img src="/img-monorepo/multi-repo2.jpg">

---

# who's using?

<img src="/img-monorepo/who-is-using.jpg">

---

# monorepo: the good:

## 1. consistency

---

# monorepo: the good:

## 2. deps management

---

# monorepo: the good:

## 3. faster & safer deployment

---

# monorepo: the good:

## 4. refactoring

---

# monorepo: the good:

## 5. code review

---

# monorepo: the good:

## 6. sharing

---

# monorepo: the bad:

## 1. security

---

# monorepo: the bad:

## 2. tech stack

---

# monorepo: the bad:

## 3. ci/cd

---

# monorepo: the bad:

## 4. communication

---

# toolings:

## 1. package managers
* npm v7+
* yarn v2+
* pnpm

---

## 2. building

- lerna
- nx parallelization + (remote) caching
- turborepo

---

## 3. releasing

- changeset

---

# Final thoughts

* faster development & deployment 🚀🚀🚀
* challenging & investment 💰💰💰

---

# 参考
- https://blog.last9.io/monorepo/
- https://www.npmjs.com/
- https://yarnpkg.com/
- https://pnpm.io/
- https://lerna.js.org/
- https://nx.dev/
- https://turborepo.org/
- https://github.com/changesets/changesets

---
# QA
