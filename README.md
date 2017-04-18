# Harvey

Harvey is a minimal blogging Hugo theme for developers that is hugely influenced by the minimalist design of default theme of [Cactus static site generator](https://github.com/koenbok/Cactus). This theme is designed to be light and fast, without sacrificing much of core blogging features such as dedicated about page, RSS feed support, syntax highlighting for source code and Disqus-powered comment system.

## Installation

Inside the folder of your Hugo site run:

    $ cd themes
    $ git clone https://github.com/fsylum/harvey.git

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Screenshot

![Homepage](https://raw.githubusercontent.com/fsylum/harvey/master/images/home.png)

Homepage

![Archive](https://raw.githubusercontent.com/fsylum/harvey/master/images/archive.png)

Custom archive page

![Blog Post](https://raw.githubusercontent.com/fsylum/harvey/master/images/single.png)

Single blog page

### Configuring

Take a look inside the [`exampleSite`](https://github.com/fsylum/harvey/blob/master/exampleSite/) folder of this theme. You'll find a file called [`config.toml`](https://github.com/fsylum/harvey/blob/master/exampleSite/config.toml).

To use it, copy the `config.toml` in the root folder of your Hugo site. Feel free to change strings as you like to customize your website. Sample content directory is also provided as a reference to get started.

In order to see your site in action, run Hugo's built-in local server.

    $ hugo server

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

## What's Included

* Disqus support can be enabled by including your Disqus shortname in config file (See [comments](https://gohugo.io/extras/comments/))
* Built-in Google Analytics support (See [Analytics](https://gohugo.io/extras/analytics/))
* Basic Opengraph, Twitter cards, Google News and schema support via Hugo internal template.
* [Table of Contents](https://gohugo.io/extras/toc/) can be enabled on blog post by settings front matter property `toc` to `true`
* Dedicated about page by editing `about.md` file in the content directory.
* Dedicated archive page that lists post by years
* Customizable main menu and footer menu
* Support for Google site verification meta key out of the box.
* Support for Chrome's theme color on mobile (See [developers.google.com](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android))

## Limitation

* No taxonomies (category, tags) support
* No pagination

## Extending

By default, this theme provides two empty partials, namely `before-content.html` and `after-content.html`. To extend single page view, create `before-content.html` and `after-content.html` files in your `layouts/partials` directory, and these files will be loaded accordingly.

## Contributing

Did you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/fsylum/harvey/issues) to let me know. Or make directly a [pull request](https://github.com/fsylum/harvey/pulls).

Please create a separate branch for your pull request.

## License

This theme is released under the MIT license. For more information read the [license](https://github.com/fsylum/harvey/blob/master/LICENSE.md).

## Acknowledgements

Thanks to

- [Nick Balestra](//github.com/nickbalestra/kactus) for creating the beautiful original theme this theme based on
- [Steve Francia](//github.com/spf13) for creating Hugo and the awesome community around the project.
