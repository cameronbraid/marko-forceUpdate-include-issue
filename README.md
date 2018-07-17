This repo is no longer relevant since the bug was fixed in marko 4.12.1 

see https://github.com/marko-js/marko/issues/1022

I am having an issue in 4.7.5 (and other versions, see below) with calling forceUpdate causing state within included components to be lost.  The components are being destroyed and re-created.

I have setup a standalone project using yarn/wepac dev server/browser-refresh

https://github.com/cameronbraid/marko-forceUpdate-include-issue

To exercise the issue, click both the counting buttons, then click the forceUpdate buttons.  The forceUpdate buttons should not reset any of the counting buttons to zero.

To run :

* `yarn`  to install deps
* `yarn dev` in one shell - for webpack dev server
* `yarn server` in another shell - for browser-refresh server

It runs server at http://localhost:8080 

I have setup the project with marko@4.5.0-beta.2 since this demonstrates what I believe is correct semantics for forceUpdate - that component state is retained when forceUpdate is called.

It appears that 4.5.0-beta.3 introduces the problem

* `yarn add marko@4.5.0-beta.3` 
* `yarn add marko@4.7.5`
* `yarn add marko@4.9.2`

