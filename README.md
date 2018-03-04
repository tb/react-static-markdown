# [react-static-markdown](https://github.com/tb/react-static-markdown)

Markdown files utils for [react-static](https://github.com/nozzle/react-static)

## Install

    yarn add -D globby gray-matter mdxc mdx-loader
    yarn add react react-static-markdown 

## Example usage with mdx-loader

static.config.js

    webpack: (config, {defaultLoaders, stage}) => {
      config.resolve.extensions.push('.md');
      config.module.rules = [
        {
          oneOf: [
            {
              test: /\.md$/,
              use: ['mdx-loader'],
            },
            defaultLoaders.cssLoader,
            defaultLoaders.jsLoader,
            defaultLoaders.fileLoader,
          ],
        },
      ];
      return config;
    },

Usage

    import About from 'content/pages/about.md';
    
    ...

    <About />

## Example usage without mdx-loader

Markdown is transformed to mdx during `getRoutes` and then evaluated to component.

static.config.js

    const getFiles = require('react-static-mdx/getFilesWithMdx');
    
    ...
    
    const pages = await getFiles('content/pages/*.md');

Usage

    import mdxToComponent from 'react-static-mdx/mdxToComponent';
    
    ...
    
    const Page = mdxToComponent(page.contentmdx);
    
    ...
    
    <Page {...props} />

## License

React Static uses the MIT license. For more information on this license, [click here](https://github.com/tb/react-static-markdown/blob/master/LICENSE).
 