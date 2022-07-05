---
layout: post
title: Jekyll Sites
subtitle: Making blog posts and static websites with Jekyll
author: Warren Lim
cover-img: /assets/images/postimg/2022-01-25.jpg
permalink: /blog/2022-01-25-jekyll-blog
tags: [jekyll, web]
---

Jekyll sites are simple to set up, maintain, and deploy on [GitHub Pages](https://pages.github.com/)

## Prerequisites
- [Ruby](https://www.ruby-lang.org/en/)
- [Jekyll](https://jekyllrb.com/)

## Choosing a theme
To start off, choose a Jekyll [theme](https://jekyllrb.com/docs/themes/). Clone the repository or create a fork. If you are using WSL, be sure to place the repository in the Linux filesystem.

## Development
If you want to edit and view your Jekyll site locally (ie on your local machine), navigate to the repository folder and complete the following steps. These steps are done in UNIX shell. If you are on Windows, consider using [WSL](https://docs.microsoft.com/en-us/windows/wsl/about)

*Note: if you use WSL, place your repository in the Linux filesystem instead of Windows. Otherwise, installations and file transfers may be slow between Windows OS and Linux. You can still access the Linux filesystem in Windows Explorer by entering `\\wsl$` in the address bar.*

### Install Ruby

```shell
sudo apt-get install ruby-full
```

### Install [Jekyll](https://jekyllrb.com/docs/installation/) and Bundler

```shell
sudo gem install jekyll bundler
```

### Build locally:
Set the path for where to install dependencies.

```shell
bundle config set --local path 'vendor/bundle'
```

Then automatically install all the dependencies listed in `Gemfile` by running 
```shell
bundle install
```

Finally, you can run your local server:

```shell
bundle exec jekyll serve
```
Once the server is started, it will tell you the address it is on. `Ctrl+click` the link to open the site in your browser. The link will be something like `http://192.0.0.1:4000`
To stop the server, use `ctrl+c`. Changes you make to `_config.yml` will require you to stop and start the server to see changes. You can view other changes by refreshing the page in your browser.

## Things to add to this site:

- Implement pagination and tagging
