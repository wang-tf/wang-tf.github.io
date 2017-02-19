





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d311c4a37b4a480a760dda55c72eb656b70f39154f15e1b7a7f6506e143d7ec0.css" integrity="sha256-0xHEo3tKSAp2DdpVxy62VrcPORVPFeG3p/ZQbhQ9fsA=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-d91441e85aab9af121f8064d22f7b52fc2115c55a8d412ab077a776324ea7db0.css" integrity="sha256-2RRB6FqrmvEh+AZNIve1L8IRXFWo1BKrB3p3YyTqfbA=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>MathJax/MathMenu.js at master · mathjax/MathJax</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">


  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTUzNjI2ODc5Ojc3Yjk4N2FlYWU3YjkyMGVjMDhhYmE2MWNkZDAzODgzYWZiMDNjODU2ZDIwNjcyMGNiNGFkZDJjZGE4Njg2ZTY=--b63d41cb486352d1daf00ceb811f8b627bc504b4">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="17E0:2957:8BD395F:DDB1AE6:58A91054" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="17E0:2957:8BD395F:DDB1AE6:58A91054" name="octolytics-dimension-request_id" /><meta content="18094980" name="octolytics-actor-id" /><meta content="wang-tf" name="octolytics-actor-login" /><meta content="fe455506c108996ed294c43d65528df9d0e6c03b6e4ee96df526e9a62e7a25b5" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



      <meta name="hostname" content="github.com">
  <meta name="user-login" content="wang-tf">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YjZjODZhMjgxNjNlOTA1ZWZiNzUyOGFlYTA3OTZiMGYwNTEwMDg2YzJhN2EzYTBjZmM5OGUxYzU1NGVlODI1M3x7InJlbW90ZV9hZGRyZXNzIjoiNjAuMjQ3LjU1LjIwOSIsInJlcXVlc3RfaWQiOiIxN0UwOjI5NTc6OEJEMzk1RjpEREIxQUU2OjU4QTkxMDU0IiwidGltZXN0YW1wIjoxNDg3NDc0NzcyLCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="d4fc0ca10d3f0ae872d0dd094f0bb32ba0462aa4">

  <meta http-equiv="x-pjax-version" content="dced5968bf278b1b8283932700604931">
  

    
  <meta name="description" content="MathJax - Beautiful math in all browsers">
  <meta name="go-import" content="github.com/mathjax/MathJax git https://github.com/mathjax/MathJax.git">

  <meta content="252187" name="octolytics-dimension-user_id" /><meta content="mathjax" name="octolytics-dimension-user_login" /><meta content="847885" name="octolytics-dimension-repository_id" /><meta content="mathjax/MathJax" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="847885" name="octolytics-dimension-repository_network_root_id" /><meta content="mathjax/MathJax" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mathjax/MathJax/commits/master.atom" rel="alternate" title="Recent Commits to MathJax:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/mathjax/MathJax/blob/master/extensions/MathMenu.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production windows vis-public page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <div class="header" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/search" class="js-site-search-form" data-scoped-search-url="/mathjax/MathJax/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="mathjax/MathJax">This repository</span>
  </div>
    <a class="dropdown-item" href="/mathjax/MathJax/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/wang-tf"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@wang-tf" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/18094980?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">wang-tf</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/wang-tf" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/wang-tf?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ELmAL95x2ctJvKXVwWSTZ+uHU7g5b2pCGqgubm2D4VggLsCaIWUIffUTm2q7oJcxIlCtUDjM/6xJ2TAtBq7JkQ==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ko7mrFAkS0XIVxkZ/VZZ0fIU5CrzDu4fdnvhZdMT4XsaGaYZrzCa83T4J6aHkl2HO8MawvKte/ElCv8muD7Jsg==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>
    
  </div>
</div>


      

  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
      <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      



<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qvEE7Zf8kWqGdogHtBrUPnVv44IBMbMXBfBYBIWxNg6hI+AHZP7oZMC69aBKg/WNn/f4Ipeo9xI+wi1c6h0/cw==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="847885" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/mathjax/MathJax/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/mathjax/MathJax/watchers"
            aria-label="173 users are watching this repository">
            173
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="oEEjMnsDZ3bFlebedY1zawlLVPkhN1EFGj1RQJU9KeoJCFPa/uBDdGKl3+Bo9/8HKuaKTAgj4peMzMP5SHLzVw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar mathjax/MathJax"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/mathjax/MathJax/stargazers"
           aria-label="3780 users starred this repository">
          3,780
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="45227C0KBnWm84lPL/tTcxlB4SlX8+oOWEMChXSoq74seDdFLxDYj+JKWpK9PrINLgSkNgSFCcJlyV+ptDhvpg==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star mathjax/MathJax"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/mathjax/MathJax/stargazers"
           aria-label="3780 users starred this repository">
          3,780
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="r3nRrR0bPrJ6CR3oN0TdIaRGVuHjLtYUlE0WCFiTfNjwCxa0v69LpPtRZblflr4XrBKBQv9zoNxEDsSiiJX98Q==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of mathjax/MathJax to your account"
                aria-label="Fork your own copy of mathjax/MathJax to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/mathjax/MathJax/network" class="social-count"
       aria-label="578 users forked this repository">
      578
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/mathjax" class="url fn" rel="author">mathjax</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/mathjax/MathJax" data-pjax="#js-repo-pjax-container">MathJax</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/mathjax/MathJax" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mathjax/MathJax" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/mathjax/MathJax/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /mathjax/MathJax/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">250</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/mathjax/MathJax/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /mathjax/MathJax/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">2</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/mathjax/MathJax/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /mathjax/MathJax/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/mathjax/MathJax/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /mathjax/MathJax/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/mathjax/MathJax/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /mathjax/MathJax/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/mathjax/MathJax/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /mathjax/MathJax/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/mathjax/MathJax/blob/6273842a9746731b9ecca0de18ec9fd50a36df99/extensions/MathMenu.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:388cc229fb18fff26e41b7100c42cad8 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/develop/extensions/MathMenu.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/mathjax/MathJax/blob/master/extensions/MathMenu.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node-2.5/extensions/MathMenu.js"
               data-name="mathjax-node-2.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                mathjax-node-2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node-2.5.1/extensions/MathMenu.js"
               data-name="mathjax-node-2.5.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                mathjax-node-2.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node/extensions/MathMenu.js"
               data-name="mathjax-node"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                mathjax-node
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v1.1-latest/extensions/MathMenu.js"
               data-name="v1.1-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v1.1-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.0-latest/extensions/MathMenu.js"
               data-name="v2.0-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.0-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.1-latest/extensions/MathMenu.js"
               data-name="v2.1-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.1-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.2-latest/extensions/MathMenu.js"
               data-name="v2.2-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.2-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.3-latest/extensions/MathMenu.js"
               data-name="v2.3-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.3-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.4-latest/extensions/MathMenu.js"
               data-name="v2.4-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.4-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.5-latest/extensions/MathMenu.js"
               data-name="v2.5-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.5-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.6-latest/extensions/MathMenu.js"
               data-name="v2.6-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.6-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/woff2/extensions/MathMenu.js"
               data-name="woff2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                woff2
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/v1.1/extensions/MathMenu.js"
              data-name="v1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1">
                v1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/v1.1a/extensions/MathMenu.js"
              data-name="v1.1a"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1a">
                v1.1a
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.7.0/extensions/MathMenu.js"
              data-name="2.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.7.0">
                2.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.7.0-beta.0/extensions/MathMenu.js"
              data-name="2.7.0-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.7.0-beta.0">
                2.7.0-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.1/extensions/MathMenu.js"
              data-name="2.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.1">
                2.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.1-rc.1/extensions/MathMenu.js"
              data-name="2.6.1-rc.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.1-rc.1">
                2.6.1-rc.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.0/extensions/MathMenu.js"
              data-name="2.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.0">
                2.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.0-beta.2/extensions/MathMenu.js"
              data-name="2.6.0-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.0-beta.2">
                2.6.0-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.0-beta.1/extensions/MathMenu.js"
              data-name="2.6.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.0-beta.1">
                2.6.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.0-beta.0/extensions/MathMenu.js"
              data-name="2.6.0-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.0-beta.0">
                2.6.0-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.5.3/extensions/MathMenu.js"
              data-name="2.5.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.5.3">
                2.5.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.5.2/extensions/MathMenu.js"
              data-name="2.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.5.2">
                2.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.5.1/extensions/MathMenu.js"
              data-name="2.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.5.1">
                2.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.5.0/extensions/MathMenu.js"
              data-name="2.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.5.0">
                2.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.4.0/extensions/MathMenu.js"
              data-name="2.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.4.0">
                2.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.3.0/extensions/MathMenu.js"
              data-name="2.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.3.0">
                2.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.2.0/extensions/MathMenu.js"
              data-name="2.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.0">
                2.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.1.0/extensions/MathMenu.js"
              data-name="2.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.0">
                2.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.0.0/extensions/MathMenu.js"
              data-name="2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0">
                2.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/mathjax/MathJax/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/mathjax/MathJax"><span>MathJax</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/mathjax/MathJax/tree/master/extensions"><span>extensions</span></a></span><span class="separator">/</span><strong class="final-path">MathMenu.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/mathjax/MathJax/contributors/master/extensions/MathMenu.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/mathjax/MathJax/raw/master/extensions/MathMenu.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/mathjax/MathJax/blame/master/extensions/MathMenu.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/mathjax/MathJax/commits/master/extensions/MathMenu.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/mathjax/MathJax?branch=master&amp;filepath=extensions%2FMathMenu.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/edit/master/extensions/MathMenu.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Dz/JrToHvBf/9Nu9HCSbseGiLpiOODXxjheuy382ms/DWYzNYzujnSXyS+5W2mfIL6PpfbHp2MwycVkbDRZfTw==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/delete/master/extensions/MathMenu.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pz1UHyW2lTtdvrMRmBxErMCvn9ATWwSiusmAbxnYvGLrpX4RD3z9pyVrpYXnmFZt/O0hMcOEduxBtpY2/dXxnQ==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      20 lines (18 sloc)
      <span class="file-info-divider"></span>
    37.3 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  /MathJax/extensions/MathMenu.js</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Copyright (c) 2009-2016 The MathJax Consortium</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  you may not use this file except in compliance with the License.</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  You may obtain a copy of the License at</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *      http://www.apache.org/licenses/LICENSE-2.0</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Unless required by applicable law or agreed to in writing, software</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  See the License for the specific language governing permissions and</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  limitations under the License.</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">(function(f,o,q,e,r){var p=&quot;2.7.0&quot;;var d=MathJax.Callback.Signal(&quot;menu&quot;);MathJax.Extension.MathMenu={version:p,signal:d};var t=function(u){return MathJax.Localization._.apply(MathJax.Localization,[[&quot;MathMenu&quot;,u]].concat([].slice.call(arguments,1)))};var i=MathJax.Object.isArray;var a=f.Browser.isPC,l=f.Browser.isMSIE,m=((document.documentMode||0)&gt;8);var j=(a?null:&quot;5px&quot;);var s=f.CombineConfig(&quot;MathMenu&quot;,{delay:150,showRenderer:true,showMathPlayer:true,showFontMenu:false,showContext:false,showDiscoverable:false,showLocale:true,showLocaleURL:false,semanticsAnnotations:{TeX:[&quot;TeX&quot;,&quot;LaTeX&quot;,&quot;application/x-tex&quot;],StarMath:[&quot;StarMath 5.0&quot;],Maple:[&quot;Maple&quot;],ContentMathML:[&quot;MathML-Content&quot;,&quot;application/mathml-content+xml&quot;],OpenMath:[&quot;OpenMath&quot;]},windowSettings:{status:&quot;no&quot;,toolbar:&quot;no&quot;,locationbar:&quot;no&quot;,menubar:&quot;no&quot;,directories:&quot;no&quot;,personalbar:&quot;no&quot;,resizable:&quot;yes&quot;,scrollbars:&quot;yes&quot;,width:400,height:300,left:Math.round((screen.width-400)/2),top:Math.round((screen.height-300)/3)},styles:{&quot;#MathJax_About&quot;:{position:&quot;fixed&quot;,left:&quot;50%&quot;,width:&quot;auto&quot;,&quot;text-align&quot;:&quot;center&quot;,border:&quot;3px outset&quot;,padding:&quot;1em 2em&quot;,&quot;background-color&quot;:&quot;#DDDDDD&quot;,color:&quot;black&quot;,cursor:&quot;default&quot;,&quot;font-family&quot;:&quot;message-box&quot;,&quot;font-size&quot;:&quot;120%&quot;,&quot;font-style&quot;:&quot;normal&quot;,&quot;text-indent&quot;:0,&quot;text-transform&quot;:&quot;none&quot;,&quot;line-height&quot;:&quot;normal&quot;,&quot;letter-spacing&quot;:&quot;normal&quot;,&quot;word-spacing&quot;:&quot;normal&quot;,&quot;word-wrap&quot;:&quot;normal&quot;,&quot;white-space&quot;:&quot;nowrap&quot;,&quot;float&quot;:&quot;none&quot;,&quot;z-index&quot;:201,&quot;border-radius&quot;:&quot;15px&quot;,&quot;-webkit-border-radius&quot;:&quot;15px&quot;,&quot;-moz-border-radius&quot;:&quot;15px&quot;,&quot;-khtml-border-radius&quot;:&quot;15px&quot;,&quot;box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-webkit-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-moz-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-khtml-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,filter:&quot;progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color=&#39;gray&#39;, Positive=&#39;true&#39;)&quot;},&quot;#MathJax_About.MathJax_MousePost&quot;:{outline:&quot;none&quot;},&quot;.MathJax_Menu&quot;:{position:&quot;absolute&quot;,&quot;background-color&quot;:&quot;white&quot;,color:&quot;black&quot;,width:&quot;auto&quot;,padding:(a?&quot;2px&quot;:&quot;5px 0px&quot;),border:&quot;1px solid #CCCCCC&quot;,margin:0,cursor:&quot;default&quot;,font:&quot;menu&quot;,&quot;text-align&quot;:&quot;left&quot;,&quot;text-indent&quot;:0,&quot;text-transform&quot;:&quot;none&quot;,&quot;line-height&quot;:&quot;normal&quot;,&quot;letter-spacing&quot;:&quot;normal&quot;,&quot;word-spacing&quot;:&quot;normal&quot;,&quot;word-wrap&quot;:&quot;normal&quot;,&quot;white-space&quot;:&quot;nowrap&quot;,&quot;float&quot;:&quot;none&quot;,&quot;z-index&quot;:201,&quot;border-radius&quot;:j,&quot;-webkit-border-radius&quot;:j,&quot;-moz-border-radius&quot;:j,&quot;-khtml-border-radius&quot;:j,&quot;box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-webkit-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-moz-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,&quot;-khtml-box-shadow&quot;:&quot;0px 10px 20px #808080&quot;,filter:&quot;progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color=&#39;gray&#39;, Positive=&#39;true&#39;)&quot;},&quot;.MathJax_MenuItem&quot;:{padding:(a?&quot;2px 2em&quot;:&quot;1px 2em&quot;),background:&quot;transparent&quot;},&quot;.MathJax_MenuArrow&quot;:{position:&quot;absolute&quot;,right:&quot;.5em&quot;,&quot;padding-top&quot;:&quot;.25em&quot;,color:&quot;#666666&quot;,&quot;font-family&quot;:(l?&quot;&#39;Arial unicode MS&#39;&quot;:null),&quot;font-size&quot;:&quot;.75em&quot;},&quot;.MathJax_MenuActive .MathJax_MenuArrow&quot;:{color:&quot;white&quot;},&quot;.MathJax_MenuArrow.RTL&quot;:{left:&quot;.5em&quot;,right:&quot;auto&quot;},&quot;.MathJax_MenuCheck&quot;:{position:&quot;absolute&quot;,left:&quot;.7em&quot;,&quot;font-family&quot;:(l?&quot;&#39;Arial unicode MS&#39;&quot;:null)},&quot;.MathJax_MenuCheck.RTL&quot;:{right:&quot;.7em&quot;,left:&quot;auto&quot;},&quot;.MathJax_MenuRadioCheck&quot;:{position:&quot;absolute&quot;,left:(a?&quot;1em&quot;:&quot;.7em&quot;)},&quot;.MathJax_MenuRadioCheck.RTL&quot;:{right:(a?&quot;1em&quot;:&quot;.7em&quot;),left:&quot;auto&quot;},&quot;.MathJax_MenuLabel&quot;:{padding:(a?&quot;2px 2em 4px 1.33em&quot;:&quot;1px 2em 3px 1.33em&quot;),&quot;font-style&quot;:&quot;italic&quot;},&quot;.MathJax_MenuRule&quot;:{&quot;border-top&quot;:(a?&quot;1px solid #CCCCCC&quot;:&quot;1px solid #DDDDDD&quot;),margin:(a?&quot;4px 1px 0px&quot;:&quot;4px 3px&quot;)},&quot;.MathJax_MenuDisabled&quot;:{color:&quot;GrayText&quot;},&quot;.MathJax_MenuActive&quot;:{&quot;background-color&quot;:(a?&quot;Highlight&quot;:&quot;#606872&quot;),color:(a?&quot;HighlightText&quot;:&quot;white&quot;)},&quot;.MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus&quot;:{&quot;background-color&quot;:&quot;#E8E8E8&quot;},&quot;.MathJax_ContextMenu:focus&quot;:{outline:&quot;none&quot;},&quot;.MathJax_ContextMenu .MathJax_MenuItem:focus&quot;:{outline:&quot;none&quot;},&quot;#MathJax_AboutClose&quot;:{top:&quot;.2em&quot;,right:&quot;.2em&quot;},&quot;.MathJax_Menu .MathJax_MenuClose&quot;:{top:&quot;-10px&quot;,left:&quot;-10px&quot;},&quot;.MathJax_MenuClose&quot;:{position:&quot;absolute&quot;,cursor:&quot;pointer&quot;,display:&quot;inline-block&quot;,border:&quot;2px solid #AAA&quot;,&quot;border-radius&quot;:&quot;18px&quot;,&quot;-webkit-border-radius&quot;:&quot;18px&quot;,&quot;-moz-border-radius&quot;:&quot;18px&quot;,&quot;-khtml-border-radius&quot;:&quot;18px&quot;,&quot;font-family&quot;:&quot;&#39;Courier New&#39;,Courier&quot;,&quot;font-size&quot;:&quot;24px&quot;,color:&quot;#F0F0F0&quot;},&quot;.MathJax_MenuClose span&quot;:{display:&quot;block&quot;,&quot;background-color&quot;:&quot;#AAA&quot;,border:&quot;1.5px solid&quot;,&quot;border-radius&quot;:&quot;18px&quot;,&quot;-webkit-border-radius&quot;:&quot;18px&quot;,&quot;-moz-border-radius&quot;:&quot;18px&quot;,&quot;-khtml-border-radius&quot;:&quot;18px&quot;,&quot;line-height&quot;:0,padding:&quot;8px 0 6px&quot;},&quot;.MathJax_MenuClose:hover&quot;:{color:&quot;white!important&quot;,border:&quot;2px solid #CCC!important&quot;},&quot;.MathJax_MenuClose:hover span&quot;:{&quot;background-color&quot;:&quot;#CCC!important&quot;},&quot;.MathJax_MenuClose:hover:focus&quot;:{outline:&quot;none&quot;}}});var n,k,b;f.Register.StartupHook(&quot;MathEvents Ready&quot;,function(){n=MathJax.Extension.MathEvents.Event.False;k=MathJax.Extension.MathEvents.Hover;b=MathJax.Extension.MathEvents.Event.KEY});var h=MathJax.Object.Subclass({Keydown:function(u,v){switch(u.keyCode){case b.ESCAPE:this.Remove(u,v);break;case b.RIGHT:this.Right(u,v);break;case b.LEFT:this.Left(u,v);break;case b.UP:this.Up(u,v);break;case b.DOWN:this.Down(u,v);break;case b.RETURN:case b.SPACE:this.Space(u,v);break;default:return;break}return n(u)},Escape:function(u,v){},Right:function(u,v){},Left:function(u,v){},Up:function(u,v){},Down:function(u,v){},Space:function(u,v){}},{});var g=MathJax.Menu=h.Subclass({version:p,items:[],posted:false,title:null,margin:5,Init:function(u){this.items=[].slice.call(arguments,0)},With:function(u){if(u){f.Insert(this,u)}return this},Post:function(M,E,B){if(!M){M=window.event||{}}var I=document.getElementById(&quot;MathJax_MenuFrame&quot;);if(!I){I=g.Background(this);delete c.lastItem;delete c.lastMenu;delete g.skipUp;d.Post([&quot;post&quot;,g.jax]);g.isRTL=(MathJax.Localization.fontDirection()===&quot;rtl&quot;)}var v=o.Element(&quot;div&quot;,{onmouseup:g.Mouseup,ondblclick:n,ondragstart:n,onselectstart:n,oncontextmenu:n,menuItem:this,className:&quot;MathJax_Menu&quot;,onkeydown:g.Keydown,role:&quot;menu&quot;});if(M.type===&quot;contextmenu&quot;||M.type===&quot;mouseover&quot;){v.className+=&quot; MathJax_ContextMenu&quot;}if(!B){MathJax.Localization.setCSS(v)}for(var N=0,K=this.items.length;N&lt;K;N++){this.items[N].Create(v)}if(g.isMobile){o.addElement(v,&quot;span&quot;,{className:&quot;MathJax_MenuClose&quot;,menu:E,ontouchstart:g.Close,ontouchend:n,onmousedown:g.Close,onmouseup:n},[[&quot;span&quot;,{},&quot;\u00D7&quot;]])}I.appendChild(v);this.posted=true;if(v.offsetWidth){v.style.width=(v.offsetWidth+2)+&quot;px&quot;}var H=M.pageX,F=M.pageY;var u=document.body.getBoundingClientRect();var C=(window.getComputedStyle?window.getComputedStyle(document.body):{marginLeft:&quot;0px&quot;});var A=u.right-Math.min(0,u.left)+parseFloat(C.marginLeft);if(!H&amp;&amp;!F&amp;&amp;&quot;clientX&quot; in M){H=M.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;F=M.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(!E){var L=g.CurrentNode()||M.target;if((M.type===&quot;keydown&quot;||(!H&amp;&amp;!F))&amp;&amp;L){var P=window.pageXOffset||document.documentElement.scrollLeft;var O=window.pageYOffset||document.documentElement.scrollTop;var w=L.getBoundingClientRect();H=(w.right+w.left)/2+P;F=(w.bottom+w.top)/2+O}if(H+v.offsetWidth&gt;A-this.margin){H=A-v.offsetWidth-this.margin}if(g.isMobile){H=Math.max(5,H-Math.floor(v.offsetWidth/2));F-=20}g.skipUp=M.isContextMenu}else{var z=&quot;left&quot;,J=E.offsetWidth;H=(g.isMobile?30:J-2);F=0;while(E&amp;&amp;E!==I){H+=E.offsetLeft;F+=E.offsetTop;E=E.parentNode}if(!g.isMobile){if((g.isRTL&amp;&amp;H-J-v.offsetWidth&gt;this.margin)||(!g.isRTL&amp;&amp;H+v.offsetWidth&gt;A-this.margin)){z=&quot;right&quot;;H=Math.max(this.margin,H-J-v.offsetWidth+6)}}if(!a){v.style[&quot;borderRadiusTop&quot;+z]=0;v.style[&quot;WebkitBorderRadiusTop&quot;+z]=0;v.style[&quot;MozBorderRadiusTop&quot;+z]=0;v.style[&quot;KhtmlBorderRadiusTop&quot;+z]=0}}v.style.left=H+&quot;px&quot;;v.style.top=F+&quot;px&quot;;if(document.selection&amp;&amp;document.selection.empty){document.selection.empty()}var G=window.pageXOffset||document.documentElement.scrollLeft;var D=window.pageYOffset||document.documentElement.scrollTop;g.Focus(v);if(M.type===&quot;keydown&quot;){g.skipMouseoverFromKey=true;setTimeout(function(){delete g.skipMouseoverFromKey},s.delay)}window.scrollTo(G,D);return n(M)},Remove:function(u,v){d.Post([&quot;unpost&quot;,g.jax]);var w=document.getElementById(&quot;MathJax_MenuFrame&quot;);if(w){w.parentNode.removeChild(w);if(this.msieFixedPositionBug){detachEvent(&quot;onresize&quot;,g.Resize)}}if(g.jax.hover){delete g.jax.hover.nofade;k.UnHover(g.jax)}g.Unfocus(v);if(u.type===&quot;mousedown&quot;){g.CurrentNode().blur()}return n(u)},Find:function(u){return this.FindN(1,u,[].slice.call(arguments,1))},FindId:function(u){return this.FindN(0,u,[].slice.call(arguments,1))},FindN:function(y,v,x){for(var w=0,u=this.items.length;w&lt;u;w++){if(this.items[w].name[y]===v){if(x.length){if(!this.items[w].submenu){return null}return this.items[w].submenu.FindN(y,x[0],x.slice(1))}return this.items[w]}}return null},IndexOf:function(u){return this.IndexOfN(1,u)},IndexOfId:function(u){return this.IndexOfN(0,u)},IndexOfN:function(x,v){for(var w=0,u=this.items.length;w&lt;u;w++){if(this.items[w].name[x]===v){return w}}return null},Right:function(u,v){g.Right(u,v)},Left:function(u,v){g.Left(u,v)},Up:function(v,w){var u=w.lastChild;u.menuItem.Activate(v,u)},Down:function(v,w){var u=w.firstChild;u.menuItem.Activate(v,u)},Space:function(u,v){this.Remove(u,v)}},{config:s,Remove:function(u){return g.Event(u,this,&quot;Remove&quot;)},Mouseover:function(u){return g.Event(u,this,&quot;Mouseover&quot;)},Mouseout:function(u){return g.Event(u,this,&quot;Mouseout&quot;)},Mousedown:function(u){return g.Event(u,this,&quot;Mousedown&quot;)},Mouseup:function(u){return g.Event(u,this,&quot;Mouseup&quot;)},Keydown:function(u){return g.Event(u,this,&quot;Keydown&quot;)},Touchstart:function(u){return g.Event(u,this,&quot;Touchstart&quot;)},Touchend:function(u){return g.Event(u,this,&quot;Touchend&quot;)},Close:function(u){return g.Event(u,this.menu||this.parentNode,(this.menu?&quot;Touchend&quot;:&quot;Remove&quot;))},Event:function(w,y,u,x){if(g.skipMouseover&amp;&amp;u===&quot;Mouseover&quot;&amp;&amp;!x){return n(w)}if(g.skipMouseoverFromKey&amp;&amp;u===&quot;Mouseover&quot;){delete g.skipMouseoverFromKey;return n(w)}if(g.skipUp){if(u.match(/Mouseup|Touchend/)){delete g.skipUp;return n(w)}if(u===&quot;Touchstart&quot;||(u===&quot;Mousedown&quot;&amp;&amp;!g.skipMousedown)){delete g.skipUp}}if(!w){w=window.event}var v=y.menuItem;if(v&amp;&amp;v[u]){return v[u](w,y)}return null},BGSTYLE:{position:&quot;absolute&quot;,left:0,top:0,&quot;z-index&quot;:200,width:&quot;100%&quot;,height:&quot;100%&quot;,border:0,padding:0,margin:0},Background:function(v){var w=o.addElement(document.body,&quot;div&quot;,{style:this.BGSTYLE,id:&quot;MathJax_MenuFrame&quot;},[[&quot;div&quot;,{style:this.BGSTYLE,menuItem:v,onmousedown:this.Remove}]]);var u=w.firstChild;if(g.msieBackgroundBug){u.style.backgroundColor=&quot;white&quot;;u.style.filter=&quot;alpha(opacity=0)&quot;}if(g.msieFixedPositionBug){w.width=w.height=0;this.Resize();attachEvent(&quot;onresize&quot;,this.Resize)}else{u.style.position=&quot;fixed&quot;}return w},Resize:function(){setTimeout(g.SetWH,0)},SetWH:function(){var u=document.getElementById(&quot;MathJax_MenuFrame&quot;);if(u){u=u.firstChild;u.style.width=u.style.height=&quot;1px&quot;;u.style.width=document.body.scrollWidth+&quot;px&quot;;u.style.height=document.body.scrollHeight+&quot;px&quot;}},posted:false,active:null,GetNode:function(u){var v=document.getElementById(u.inputID+&quot;-Frame&quot;);return v.isMathJax?v:v.firstChild},CurrentNode:function(){return g.GetNode(g.jax)},AllNodes:function(){var v=MathJax.Hub.getAllJax();var w=[];for(var x=0,u;u=v[x];x++){w.push(g.GetNode(u))}return w},ActiveNode:function(){return g.active},FocusNode:function(u){g.active=u;u.focus()},Focus:function(u){!g.posted?g.Activate(u):g.ActiveNode().tabIndex=-1;u.tabIndex=0;g.FocusNode(u)},Activate:function(u,v){g.UnsetTabIndex();g.posted=true},Unfocus:function(){g.ActiveNode().tabIndex=-1;g.SetTabIndex();g.FocusNode(g.CurrentNode());g.posted=false},MoveHorizontal:function(y,z,w){if(!y.shiftKey){return}var v=g.AllNodes();var u=v.length;if(u===0){return}var x=v[g.Mod(w(g.IndexOf(v,g.CurrentNode())),u)];if(x===g.CurrentNode()){return}g.menu.Remove(y,z);g.jax=MathJax.Hub.getJaxFor(x);g.FocusNode(x);g.menu.Post(null)},Right:function(u,v){g.MoveHorizontal(u,v,function(w){return w+1})},Left:function(u,v){g.MoveHorizontal(u,v,function(w){return w-1})},UnsetTabIndex:function(){var v=g.AllNodes();for(var w=0,u;u=v[w];w++){if(u.tabIndex&gt;0){u.oldTabIndex=u.tabIndex}u.tabIndex=-1}},SetTabIndex:function(){var v=g.AllNodes();for(var w=0,u;u=v[w];w++){if(u.oldTabIndex!==undefined){u.tabIndex=u.oldTabIndex;delete u.oldTabIndex}else{u.tabIndex=f.getTabOrder(u)}}},Mod:function(u,v){return((u%v)+v)%v},IndexOf:(Array.prototype.indexOf?function(u,v,w){return u.indexOf(v,w)}:function(u,x,y){for(var w=(y||0),v=u.length;w&lt;v;w++){if(x===u[w]){return w}}return -1}),saveCookie:function(){o.Cookie.Set(&quot;menu&quot;,this.cookie)},getCookie:function(){this.cookie=o.Cookie.Get(&quot;menu&quot;)}});MathJax.Menu.NAV=h;var c=g.ITEM=h.Subclass({name:&quot;&quot;,node:null,menu:null,Attributes:function(u){return f.Insert({onmouseup:g.Mouseup,ondragstart:n,onselectstart:n,onselectend:n,ontouchstart:g.Touchstart,ontouchend:g.Touchend,className:&quot;MathJax_MenuItem&quot;,role:this.role,menuItem:this},u)},Create:function(w){if(!this.hidden){var v=this.Attributes();var u=this.Label(v,w);o.addElement(w,&quot;div&quot;,v,u)}},Name:function(){return t(this.name[0],this.name[1])},Mouseover:function(u,v){if(v.parentNode===g.ActiveNode().parentNode){this.Deactivate(g.ActiveNode())}this.Activate(u,v)},Mouseout:function(u,v){this.Deactivate(v)},Mouseup:function(u,v){return this.Remove(u,v)},DeactivateSubmenus:function(z){var y=document.getElementById(&quot;MathJax_MenuFrame&quot;).childNodes,v=c.GetMenuNode(z).childNodes;for(var w=0,u=v.length;w&lt;u;w++){var x=v[w].menuItem;if(x&amp;&amp;x.submenu&amp;&amp;x.submenu.posted&amp;&amp;x!==z.menuItem){x.Deactivate(v[w])}}this.RemoveSubmenus(z,y)},RemoveSubmenus:function(w,v){v=v||document.getElementById(&quot;MathJax_MenuFrame&quot;).childNodes;var u=v.length-1;while(u&gt;=0&amp;&amp;c.GetMenuNode(w).menuItem!==v[u].menuItem){v[u].menuItem.posted=false;v[u].parentNode.removeChild(v[u]);u--}},Touchstart:function(u,v){return this.TouchEvent(u,v,&quot;Mousedown&quot;)},Touchend:function(u,v){return this.TouchEvent(u,v,&quot;Mouseup&quot;)},TouchEvent:function(v,w,u){if(this!==c.lastItem){if(c.lastMenu){g.Event(v,c.lastMenu,&quot;Mouseout&quot;)}g.Event(v,w,&quot;Mouseover&quot;,true);c.lastItem=this;c.lastMenu=w}if(this.nativeTouch){return null}g.Event(v,w,u);return false},Remove:function(u,v){v=v.parentNode.menuItem;return v.Remove(u,v)},With:function(u){if(u){f.Insert(this,u)}return this},isRTL:function(){return g.isRTL},rtlClass:function(){return(this.isRTL()?&quot; RTL&quot;:&quot;&quot;)}},{GetMenuNode:function(u){return u.parentNode}});g.ENTRY=g.ITEM.Subclass({role:&quot;menuitem&quot;,Attributes:function(u){u=f.Insert({onmouseover:g.Mouseover,onmouseout:g.Mouseout,onmousedown:g.Mousedown,onkeydown:g.Keydown,&quot;aria-disabled&quot;:!!this.disabled},u);u=this.SUPER(arguments).Attributes.call(this,u);if(this.disabled){u.className+=&quot; MathJax_MenuDisabled&quot;}return u},MoveVertical:function(u,E,w){var x=c.GetMenuNode(E);var D=[];for(var z=0,C=x.menuItem.items,y;y=C[z];z++){if(!y.hidden){D.push(y)}}var B=g.IndexOf(D,this);if(B===-1){return}var A=D.length;var v=x.childNodes;do{B=g.Mod(w(B),A)}while(D[B].hidden||!v[B].role||v[B].role===&quot;separator&quot;);this.Deactivate(E);D[B].Activate(u,v[B])},Up:function(v,u){this.MoveVertical(v,u,function(w){return w-1})},Down:function(v,u){this.MoveVertical(v,u,function(w){return w+1})},Right:function(v,u){this.MoveHorizontal(v,u,g.Right,!this.isRTL())},Left:function(v,u){this.MoveHorizontal(v,u,g.Left,this.isRTL())},MoveHorizontal:function(A,z,u,B){var x=c.GetMenuNode(z);if(x.menuItem===g.menu&amp;&amp;A.shiftKey){u(A,z)}if(B){return}if(x.menuItem!==g.menu){this.Deactivate(z)}var v=x.previousSibling.childNodes;var y=v.length;while(y--){var w=v[y];if(w.menuItem.submenu&amp;&amp;w.menuItem.submenu===x.menuItem){g.Focus(w);break}}this.RemoveSubmenus(z)},Space:function(u,v){this.Mouseup(u,v)},Activate:function(u,v){this.Deactivate(v);if(!this.disabled){v.className+=&quot; MathJax_MenuActive&quot;}this.DeactivateSubmenus(v);g.Focus(v)},Deactivate:function(u){u.className=u.className.replace(/ MathJax_MenuActive/,&quot;&quot;)}});g.ITEM.COMMAND=g.ENTRY.Subclass({action:function(){},Init:function(u,w,v){if(!i(u)){u=[u,u]}this.name=u;this.action=w;this.With(v)},Label:function(u,v){return[this.Name()]},Mouseup:function(u,v){if(!this.disabled){this.Remove(u,v);d.Post([&quot;command&quot;,this]);this.action.call(this,u)}return n(u)}});g.ITEM.SUBMENU=g.ENTRY.Subclass({submenu:null,marker:&quot;\u25BA&quot;,markerRTL:&quot;\u25C4&quot;,Attributes:function(u){u=f.Insert({&quot;aria-haspopup&quot;:&quot;true&quot;},u);u=this.SUPER(arguments).Attributes.call(this,u);return u},Init:function(u,w){if(!i(u)){u=[u,u]}this.name=u;var v=1;if(!(w instanceof g.ITEM)){this.With(w),v++}this.submenu=g.apply(g,[].slice.call(arguments,v))},Label:function(u,v){this.submenu.posted=false;return[this.Name()+&quot; &quot;,[&quot;span&quot;,{className:&quot;MathJax_MenuArrow&quot;+this.rtlClass()},[this.isRTL()?this.markerRTL:this.marker]]]},Timer:function(u,v){this.ClearTimer();u={type:u.type,clientX:u.clientX,clientY:u.clientY};this.timer=setTimeout(e([&quot;Mouseup&quot;,this,u,v]),s.delay)},ClearTimer:function(){if(this.timer){clearTimeout(this.timer)}},Touchend:function(v,x){var w=this.submenu.posted;var u=this.SUPER(arguments).Touchend.apply(this,arguments);if(w){this.Deactivate(x);delete c.lastItem;delete c.lastMenu}return u},Mouseout:function(u,v){if(!this.submenu.posted){this.Deactivate(v)}this.ClearTimer()},Mouseover:function(u,v){this.Activate(u,v)},Mouseup:function(u,v){if(!this.disabled){if(!this.submenu.posted){this.ClearTimer();this.submenu.Post(u,v,this.ltr);g.Focus(v)}else{this.DeactivateSubmenus(v)}}return n(u)},Activate:function(u,v){if(!this.disabled){this.Deactivate(v);v.className+=&quot; MathJax_MenuActive&quot;}if(!this.submenu.posted){this.DeactivateSubmenus(v);if(!g.isMobile){this.Timer(u,v)}}g.Focus(v)},MoveVertical:function(w,v,u){this.ClearTimer();this.SUPER(arguments).MoveVertical.apply(this,arguments)},MoveHorizontal:function(w,y,v,x){if(!x){this.SUPER(arguments).MoveHorizontal.apply(this,arguments);return}if(this.disabled){return}if(!this.submenu.posted){this.Activate(w,y);return}var u=c.GetMenuNode(y).nextSibling.childNodes;if(u.length&gt;0){this.submenu.items[0].Activate(w,u[0])}}});g.ITEM.RADIO=g.ENTRY.Subclass({variable:null,marker:(a?&quot;\u25CF&quot;:&quot;\u2713&quot;),role:&quot;menuitemradio&quot;,Attributes:function(v){var u=s.settings[this.variable]===this.value?&quot;true&quot;:&quot;false&quot;;v=f.Insert({&quot;aria-checked&quot;:u},v);v=this.SUPER(arguments).Attributes.call(this,v);return v},Init:function(v,u,w){if(!i(v)){v=[v,v]}this.name=v;this.variable=u;this.With(w);if(this.value==null){this.value=this.name[0]}},Label:function(v,w){var u={className:&quot;MathJax_MenuRadioCheck&quot;+this.rtlClass()};if(s.settings[this.variable]!==this.value){u={style:{display:&quot;none&quot;}}}return[[&quot;span&quot;,u,[this.marker]],&quot; &quot;+this.Name()]},Mouseup:function(x,y){if(!this.disabled){var z=y.parentNode.childNodes;for(var v=0,u=z.length;v&lt;u;v++){var w=z[v].menuItem;if(w&amp;&amp;w.variable===this.variable){z[v].firstChild.style.display=&quot;none&quot;}}y.firstChild.display=&quot;&quot;;s.settings[this.variable]=this.value;g.cookie[this.variable]=s.settings[this.variable];g.saveCookie();d.Post([&quot;radio button&quot;,this])}this.Remove(x,y);if(this.action&amp;&amp;!this.disabled){this.action.call(g,this)}return n(x)}});g.ITEM.CHECKBOX=g.ENTRY.Subclass({variable:null,marker:&quot;\u2713&quot;,role:&quot;menuitemcheckbox&quot;,Attributes:function(v){var u=s.settings[this.variable]?&quot;true&quot;:&quot;false&quot;;v=f.Insert({&quot;aria-checked&quot;:u},v);v=this.SUPER(arguments).Attributes.call(this,v);return v},Init:function(v,u,w){if(!i(v)){v=[v,v]}this.name=v;this.variable=u;this.With(w)},Label:function(v,w){var u={className:&quot;MathJax_MenuCheck&quot;+this.rtlClass()};if(!s.settings[this.variable]){u={style:{display:&quot;none&quot;}}}return[[&quot;span&quot;,u,[this.marker]],&quot; &quot;+this.Name()]},Mouseup:function(u,v){if(!this.disabled){v.firstChild.display=(s.settings[this.variable]?&quot;none&quot;:&quot;&quot;);s.settings[this.variable]=!s.settings[this.variable];g.cookie[this.variable]=s.settings[this.variable];g.saveCookie();d.Post([&quot;checkbox&quot;,this])}this.Remove(u,v);if(this.action&amp;&amp;!this.disabled){this.action.call(g,this)}return n(u)}});g.ITEM.LABEL=g.ENTRY.Subclass({role:&quot;menuitem&quot;,Init:function(u,v){if(!i(u)){u=[u,u]}this.name=u;this.With(v)},Label:function(u,v){u.className+=&quot; MathJax_MenuLabel&quot;;return[this.Name()]},Activate:function(u,v){this.Deactivate(v);g.Focus(v)},Mouseup:function(u,v){}});g.ITEM.RULE=g.ITEM.Subclass({role:&quot;separator&quot;,Attributes:function(u){u=f.Insert({&quot;aria-orientation&quot;:&quot;vertical&quot;},u);u=this.SUPER(arguments).Attributes.call(this,u);return u},Label:function(u,v){u.className+=&quot; MathJax_MenuRule&quot;;return null}});g.About=function(y){var v=g.About.GetFont();var A=g.About.GetFormat();var u=[&quot;MathJax.js v&quot;+MathJax.fileversion,[&quot;br&quot;]];u.push([&quot;div&quot;,{style:{&quot;border-top&quot;:&quot;groove 2px&quot;,margin:&quot;.25em 0&quot;}}]);g.About.GetJax(u,MathJax.InputJax,[&quot;InputJax&quot;,&quot;%1 Input Jax v%2&quot;]);g.About.GetJax(u,MathJax.OutputJax,[&quot;OutputJax&quot;,&quot;%1 Output Jax v%2&quot;]);g.About.GetJax(u,MathJax.ElementJax,[&quot;ElementJax&quot;,&quot;%1 Element Jax v%2&quot;]);u.push([&quot;div&quot;,{style:{&quot;border-top&quot;:&quot;groove 2px&quot;,margin:&quot;.25em 0&quot;}}]);g.About.GetJax(u,MathJax.Extension,[&quot;Extension&quot;,&quot;%1 Extension v%2&quot;],true);u.push([&quot;div&quot;,{style:{&quot;border-top&quot;:&quot;groove 2px&quot;,margin:&quot;.25em 0&quot;}}],[&quot;center&quot;,{},[f.Browser+&quot; v&quot;+f.Browser.version+(A?&quot; \u2014 &quot;+t(A.replace(/ /g,&quot;&quot;),A):&quot;&quot;)]]);g.About.div=g.Background(g.About);var x=o.addElement(g.About.div,&quot;div&quot;,{id:&quot;MathJax_About&quot;,tabIndex:0,onkeydown:g.About.Keydown},[[&quot;b&quot;,{style:{fontSize:&quot;120%&quot;}},[&quot;MathJax&quot;]],&quot; v&quot;+MathJax.version,[&quot;br&quot;],t(v.replace(/ /g,&quot;&quot;),&quot;using &quot;+v),[&quot;br&quot;],[&quot;br&quot;],[&quot;span&quot;,{style:{display:&quot;inline-block&quot;,&quot;text-align&quot;:&quot;left&quot;,&quot;font-size&quot;:&quot;80%&quot;,&quot;max-height&quot;:&quot;20em&quot;,overflow:&quot;auto&quot;,&quot;background-color&quot;:&quot;#E4E4E4&quot;,padding:&quot;.4em .6em&quot;,border:&quot;1px inset&quot;},tabIndex:0},u],[&quot;br&quot;],[&quot;br&quot;],[&quot;a&quot;,{href:&quot;http://www.mathjax.org/&quot;},[&quot;www.mathjax.org&quot;]],[&quot;span&quot;,{className:&quot;MathJax_MenuClose&quot;,id:&quot;MathJax_AboutClose&quot;,onclick:g.About.Remove,onkeydown:g.About.Keydown,tabIndex:0,role:&quot;button&quot;,&quot;aria-label&quot;:t(&quot;CloseAboutDialog&quot;,&quot;Close about MathJax dialog&quot;)},[[&quot;span&quot;,{},&quot;\u00D7&quot;]]]]);if(y.type===&quot;mouseup&quot;){x.className+=&quot; MathJax_MousePost&quot;}x.focus();MathJax.Localization.setCSS(x);var z=(document.documentElement||{});var w=window.innerHeight||z.clientHeight||z.scrollHeight||0;if(g.prototype.msieAboutBug){x.style.width=&quot;20em&quot;;x.style.position=&quot;absolute&quot;;x.style.left=Math.floor((document.documentElement.scrollWidth-x.offsetWidth)/2)+&quot;px&quot;;x.style.top=(Math.floor((w-x.offsetHeight)/3)+document.body.scrollTop)+&quot;px&quot;}else{x.style.marginLeft=Math.floor(-x.offsetWidth/2)+&quot;px&quot;;x.style.top=Math.floor((w-x.offsetHeight)/3)+&quot;px&quot;}};g.About.Remove=function(u){if(g.About.div){document.body.removeChild(g.About.div);delete g.About.div}};g.About.Keydown=function(u){if(u.keyCode===b.ESCAPE||(this.id===&quot;MathJax_AboutClose&quot;&amp;&amp;(u.keyCode===b.SPACE||u.keyCode===b.RETURN))){g.About.Remove(u);g.CurrentNode().focus();n(u)}},g.About.GetJax=function(v,A,y,x){var z=[];for(var B in A){if(A.hasOwnProperty(B)&amp;&amp;A[B]){if((x&amp;&amp;A[B].version)||(A[B].isa&amp;&amp;A[B].isa(A))){z.push(t(y[0],y[1],(A[B].id||B),A[B].version))}}}z.sort();for(var w=0,u=z.length;w&lt;u;w++){v.push(z[w],[&quot;br&quot;])}return v};g.About.GetFont=function(){var u=MathJax.Hub.outputJax[&quot;jax/mml&quot;][0]||{};var v={SVG:&quot;web SVG&quot;,CommonHTML:&quot;web TeX&quot;,&quot;HTML-CSS&quot;:(u.imgFonts?&quot;image&quot;:(u.webFonts?&quot;web&quot;:&quot;local&quot;)+&quot; &quot;+u.fontInUse)}[u.id]||&quot;generic&quot;;return v+&quot; fonts&quot;};g.About.GetFormat=function(){var u=MathJax.Hub.outputJax[&quot;jax/mml&quot;][0]||{};if(u.id!==&quot;HTML-CSS&quot;||!u.webFonts||u.imgFonts){return}return u.allowWebFonts.replace(/otf/,&quot;woff or otf&quot;)+&quot; fonts&quot;};g.Help=function(u){q.Require(&quot;[MathJax]/extensions/HelpDialog.js&quot;,function(){MathJax.Extension.Help.Dialog({type:u.type})})};g.ShowSource=function(y){if(!y){y=window.event}var x={screenX:y.screenX,screenY:y.screenY};if(!g.jax){return}if(this.format===&quot;MathML&quot;){var v=MathJax.ElementJax.mml;if(v&amp;&amp;typeof(v.mbase.prototype.toMathML)!==&quot;undefined&quot;){try{g.ShowSource.Text(g.jax.root.toMathML(&quot;&quot;,g.jax),y)}catch(w){if(!w.restart){throw w}e.After([this,g.ShowSource,x],w.restart)}}else{if(!q.loadingToMathML){q.loadingToMathML=true;g.ShowSource.Window(y);e.Queue(q.Require(&quot;[MathJax]/extensions/toMathML.js&quot;),function(){delete q.loadingToMathML;if(!v.mbase.prototype.toMathML){v.mbase.prototype.toMathML=function(){}}},[this,g.ShowSource,x]);return}}}else{if(this.format===&quot;Error&quot;){g.ShowSource.Text(g.jax.errorText,y)}else{if(s.semanticsAnnotations[this.format]){var u=g.jax.root.getAnnotation(this.format);if(u.data[0]){g.ShowSource.Text(u.data[0].toString())}}else{if(g.jax.originalText==null){alert(t(&quot;NoOriginalForm&quot;,&quot;No original form available&quot;));return}g.ShowSource.Text(g.jax.originalText,y)}}}};g.ShowSource.Window=function(v){if(!g.ShowSource.w){var w=[],u=s.windowSettings;for(var x in u){if(u.hasOwnProperty(x)){w.push(x+&quot;=&quot;+u[x])}}g.ShowSource.w=window.open(&quot;&quot;,&quot;_blank&quot;,w.join(&quot;,&quot;))}return g.ShowSource.w};g.ShowSource.Text=function(z,x){var u=g.ShowSource.Window(x);delete g.ShowSource.w;z=z.replace(/^\s*/,&quot;&quot;).replace(/\s*$/,&quot;&quot;);z=z.replace(/&amp;/g,&quot;&amp;amp;&quot;).replace(/&lt;/g,&quot;&amp;lt;&quot;).replace(/&gt;/g,&quot;&amp;gt;&quot;);var y=t(&quot;EqSource&quot;,&quot;MathJax Equation Source&quot;);if(g.isMobile){u.document.open();u.document.write(&quot;&lt;html&gt;&lt;head&gt;&lt;meta name=&#39;viewport&#39; content=&#39;width=device-width, initial-scale=1.0&#39; /&gt;&lt;title&gt;&quot;+y+&quot;&lt;/title&gt;&lt;/head&gt;&lt;body style=&#39;font-size:85%&#39;&gt;&quot;);u.document.write(&quot;&lt;pre&gt;&quot;+z+&quot;&lt;/pre&gt;&quot;);u.document.write(&quot;&lt;hr&gt;&lt;input type=&#39;button&#39; value=&#39;&quot;+t(&quot;Close&quot;,&quot;Close&quot;)+&quot;&#39; onclick=&#39;window.close()&#39; /&gt;&quot;);u.document.write(&quot;&lt;/body&gt;&lt;/html&gt;&quot;);u.document.close()}else{u.document.open();u.document.write(&quot;&lt;html&gt;&lt;head&gt;&lt;title&gt;&quot;+y+&quot;&lt;/title&gt;&lt;/head&gt;&lt;body style=&#39;font-size:85%&#39;&gt;&quot;);u.document.write(&quot;&lt;table&gt;&lt;tr&gt;&lt;td&gt;&lt;pre&gt;&quot;+z+&quot;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;);u.document.write(&quot;&lt;/body&gt;&lt;/html&gt;&quot;);u.document.close();var v=u.document.body.firstChild;setTimeout(function(){var B=(u.outerHeight-u.innerHeight)||30,A=(u.outerWidth-u.innerWidth)||30,w,E;A=Math.max(140,Math.min(Math.floor(0.5*screen.width),v.offsetWidth+A+25));B=Math.max(40,Math.min(Math.floor(0.5*screen.height),v.offsetHeight+B+25));if(g.prototype.msieHeightBug){B+=35}u.resizeTo(A,B);var D;try{D=x.screenX}catch(C){}if(x&amp;&amp;D!=null){w=Math.max(0,Math.min(x.screenX-Math.floor(A/2),screen.width-A-20));E=Math.max(0,Math.min(x.screenY-Math.floor(B/2),screen.height-B-20));u.moveTo(w,E)}},50)}};g.Scale=function(){var z=[&quot;CommonHTML&quot;,&quot;HTML-CSS&quot;,&quot;SVG&quot;,&quot;NativeMML&quot;,&quot;PreviewHTML&quot;],u=z.length,y=100,w,v;for(w=0;w&lt;u;w++){v=r[z[w]];if(v){y=v.config.scale;break}}var x=prompt(t(&quot;ScaleMath&quot;,&quot;Scale all mathematics (compared to surrounding text) by&quot;),y+&quot;%&quot;);if(x){if(x.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)){x=parseFloat(x);if(x){if(x!==y){for(w=0;w&lt;u;w++){v=r[z[w]];if(v){v.config.scale=x}}g.cookie.scale=f.config.scale=x;g.saveCookie();f.Queue([&quot;Rerender&quot;,f])}}else{alert(t(&quot;NonZeroScale&quot;,&quot;The scale should not be zero&quot;))}}else{alert(t(&quot;PercentScale&quot;,&quot;The scale should be a percentage (e.g., 120%%)&quot;))}}};g.Zoom=function(){if(!MathJax.Extension.MathZoom){q.Require(&quot;[MathJax]/extensions/MathZoom.js&quot;)}};g.Renderer=function(){var v=f.outputJax[&quot;jax/mml&quot;];if(v[0]!==s.settings.renderer){var y=f.Browser,x,u=g.Renderer.Messages,w;switch(s.settings.renderer){case&quot;NativeMML&quot;:if(!s.settings.warnedMML){if(y.isChrome&amp;&amp;y.version.substr(0,3)!==&quot;24.&quot;){x=u.MML.WebKit}else{if(y.isSafari&amp;&amp;!y.versionAtLeast(&quot;5.0&quot;)){x=u.MML.WebKit}else{if(y.isMSIE){if(!y.hasMathPlayer){x=u.MML.MSIE}}else{if(y.isEdge){x=u.MML.WebKit}else{x=u.MML[y]}}}}w=&quot;warnedMML&quot;}break;case&quot;SVG&quot;:if(!s.settings.warnedSVG){if(y.isMSIE&amp;&amp;!m){x=u.SVG.MSIE}}break}if(x){x=t(x[0],x[1]);x+=&quot;\n\n&quot;;x+=t(&quot;SwitchAnyway&quot;,&quot;Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)&quot;);g.cookie.renderer=v[0].id;g.saveCookie();if(!confirm(x)){g.cookie.renderer=s.settings.renderer=o.Cookie.Get(&quot;menu&quot;).renderer;g.saveCookie();return}if(w){g.cookie.warned=s.settings.warned=true}g.cookie.renderer=s.settings.renderer;g.saveCookie()}f.Queue([&quot;setRenderer&quot;,f,s.settings.renderer,&quot;jax/mml&quot;],[&quot;Rerender&quot;,f])}};g.Renderer.Messages={MML:{WebKit:[&quot;WebkitNativeMMLWarning&quot;,&quot;Your browser doesn&#39;t seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable.&quot;],MSIE:[&quot;MSIENativeMMLWarning&quot;,&quot;Internet Explorer requires the MathPlayer plugin in order to process MathML output.&quot;],Opera:[&quot;OperaNativeMMLWarning&quot;,&quot;Opera&#39;s support for MathML is limited, so switching to MathML output may cause some expressions to render poorly.&quot;],Safari:[&quot;SafariNativeMMLWarning&quot;,&quot;Your browser&#39;s native MathML does not implement all the features used by MathJax, so some expressions may not render properly.&quot;],Firefox:[&quot;FirefoxNativeMMLWarning&quot;,&quot;Your browser&#39;s native MathML does not implement all the features used by MathJax, so some expressions may not render properly.&quot;]},SVG:{MSIE:[&quot;MSIESVGWarning&quot;,&quot;SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly.&quot;]}};g.AssistiveMML=function(w,u){var v=MathJax.Extension.AssistiveMML;if(!v){if(!u){q.Require(&quot;[MathJax]/extensions/AssistiveMML.js&quot;,[&quot;AssistiveMML&quot;,g,w,true])}return}MathJax.Hub.Queue([(s.settings.assistiveMML?&quot;Add&quot;:&quot;Remove&quot;)+&quot;AssistiveMathML&quot;,v])};g.Font=function(){var u=r[&quot;HTML-CSS&quot;];if(!u){return}document.location.reload()};g.Locale=function(){MathJax.Localization.setLocale(s.settings.locale);MathJax.Hub.Queue([&quot;Reprocess&quot;,MathJax.Hub])};g.LoadLocale=function(){var u=prompt(t(&quot;LoadURL&quot;,&quot;Load translation data from this URL:&quot;));if(u){if(!u.match(/\.js$/)){alert(t(&quot;BadURL&quot;,&quot;The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with &#39;.js&#39;&quot;))}q.Require(u,function(v){if(v!=q.STATUS.OK){alert(t(&quot;BadData&quot;,&quot;Failed to load translation data from %1&quot;,u))}})}};g.MPEvents=function(w){var v=s.settings.discoverable,u=g.MPEvents.Messages;if(!m){if(s.settings.mpMouse&amp;&amp;!confirm(t.apply(t,u.IE8warning))){delete g.cookie.mpContext;delete s.settings.mpContext;delete g.cookie.mpMouse;delete s.settings.mpMouse;g.saveCookie();return}s.settings.mpContext=s.settings.mpMouse;g.cookie.mpContext=g.cookie.mpMouse=s.settings.mpMouse;g.saveCookie();MathJax.Hub.Queue([&quot;Rerender&quot;,MathJax.Hub])}else{if(!v&amp;&amp;w.name[1]===&quot;Menu Events&quot;&amp;&amp;s.settings.mpContext){alert(t.apply(t,u.IE9warning))}}};g.MPEvents.Messages={IE8warning:[&quot;IE8warning&quot;,&quot;This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?&quot;],IE9warning:[&quot;IE9warning&quot;,&quot;The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead.&quot;]};f.Browser.Select({MSIE:function(u){var v=(document.compatMode===&quot;BackCompat&quot;);var w=u.versionAtLeast(&quot;8.0&quot;)&amp;&amp;document.documentMode&gt;7;g.Augment({margin:20,msieBackgroundBug:((document.documentMode||0)&lt;9),msieFixedPositionBug:(v||!w),msieAboutBug:v,msieHeightBug:((document.documentMode||0)&lt;9)});if(m){delete s.styles[&quot;#MathJax_About&quot;].filter;delete s.styles[&quot;.MathJax_Menu&quot;].filter}},Firefox:function(u){g.skipMouseover=u.isMobile&amp;&amp;u.versionAtLeast(&quot;6.0&quot;);g.skipMousedown=u.isMobile}});g.isMobile=f.Browser.isMobile;g.noContextMenu=f.Browser.noContextMenu;g.CreateLocaleMenu=function(){if(!g.menu){return}var z=g.menu.Find(&quot;Language&quot;).submenu,w=z.items;var v=[],B=MathJax.Localization.strings;for(var A in B){if(B.hasOwnProperty(A)){v.push(A)}}v=v.sort();z.items=[];for(var x=0,u=v.length;x&lt;u;x++){var y=B[v[x]].menuTitle;if(y){y+=&quot; (&quot;+v[x]+&quot;)&quot;}else{y=v[x]}z.items.push(c.RADIO([v[x],y],&quot;locale&quot;,{action:g.Locale}))}z.items.push(w[w.length-2],w[w.length-1])};g.CreateAnnotationMenu=function(){if(!g.menu){return}var w=g.menu.Find(&quot;Show Math As&quot;,&quot;Annotation&quot;).submenu;var v=s.semanticsAnnotations;for(var u in v){if(v.hasOwnProperty(u)){w.items.push(c.COMMAND([u,u],g.ShowSource,{hidden:true,nativeTouch:true,format:u}))}}};f.Register.StartupHook(&quot;End Config&quot;,function(){s.settings=f.config.menuSettings;if(typeof(s.settings.showRenderer)!==&quot;undefined&quot;){s.showRenderer=s.settings.showRenderer}if(typeof(s.settings.showFontMenu)!==&quot;undefined&quot;){s.showFontMenu=s.settings.showFontMenu}if(typeof(s.settings.showContext)!==&quot;undefined&quot;){s.showContext=s.settings.showContext}g.getCookie();g.menu=g(c.SUBMENU([&quot;Show&quot;,&quot;Show Math As&quot;],c.COMMAND([&quot;MathMLcode&quot;,&quot;MathML Code&quot;],g.ShowSource,{nativeTouch:true,format:&quot;MathML&quot;}),c.COMMAND([&quot;Original&quot;,&quot;Original Form&quot;],g.ShowSource,{nativeTouch:true}),c.SUBMENU([&quot;Annotation&quot;,&quot;Annotation&quot;],{disabled:true}),c.RULE(),c.CHECKBOX([&quot;texHints&quot;,&quot;Show TeX hints in MathML&quot;],&quot;texHints&quot;),c.CHECKBOX([&quot;semantics&quot;,&quot;Add original form as annotation&quot;],&quot;semantics&quot;)),c.RULE(),c.SUBMENU([&quot;Settings&quot;,&quot;Math Settings&quot;],c.SUBMENU([&quot;ZoomTrigger&quot;,&quot;Zoom Trigger&quot;],c.RADIO([&quot;Hover&quot;,&quot;Hover&quot;],&quot;zoom&quot;,{action:g.Zoom}),c.RADIO([&quot;Click&quot;,&quot;Click&quot;],&quot;zoom&quot;,{action:g.Zoom}),c.RADIO([&quot;DoubleClick&quot;,&quot;Double-Click&quot;],&quot;zoom&quot;,{action:g.Zoom}),c.RADIO([&quot;NoZoom&quot;,&quot;No Zoom&quot;],&quot;zoom&quot;,{value:&quot;None&quot;}),c.RULE(),c.LABEL([&quot;TriggerRequires&quot;,&quot;Trigger Requires:&quot;]),c.CHECKBOX((f.Browser.isMac?[&quot;Option&quot;,&quot;Option&quot;]:[&quot;Alt&quot;,&quot;Alt&quot;]),&quot;ALT&quot;),c.CHECKBOX([&quot;Command&quot;,&quot;Command&quot;],&quot;CMD&quot;,{hidden:!f.Browser.isMac}),c.CHECKBOX([&quot;Control&quot;,&quot;Control&quot;],&quot;CTRL&quot;,{hidden:f.Browser.isMac}),c.CHECKBOX([&quot;Shift&quot;,&quot;Shift&quot;],&quot;Shift&quot;)),c.SUBMENU([&quot;ZoomFactor&quot;,&quot;Zoom Factor&quot;],c.RADIO(&quot;125%&quot;,&quot;zscale&quot;),c.RADIO(&quot;133%&quot;,&quot;zscale&quot;),c.RADIO(&quot;150%&quot;,&quot;zscale&quot;),c.RADIO(&quot;175%&quot;,&quot;zscale&quot;),c.RADIO(&quot;200%&quot;,&quot;zscale&quot;),c.RADIO(&quot;250%&quot;,&quot;zscale&quot;),c.RADIO(&quot;300%&quot;,&quot;zscale&quot;),c.RADIO(&quot;400%&quot;,&quot;zscale&quot;)),c.RULE(),c.SUBMENU([&quot;Renderer&quot;,&quot;Math Renderer&quot;],{hidden:!s.showRenderer},c.RADIO([&quot;HTML-CSS&quot;,&quot;HTML-CSS&quot;],&quot;renderer&quot;,{action:g.Renderer}),c.RADIO([&quot;CommonHTML&quot;,&quot;Common HTML&quot;],&quot;renderer&quot;,{action:g.Renderer,value:&quot;CommonHTML&quot;}),c.RADIO([&quot;PreviewHTML&quot;,&quot;Preview HTML&quot;],&quot;renderer&quot;,{action:g.Renderer,value:&quot;PreviewHTML&quot;}),c.RADIO([&quot;MathML&quot;,&quot;MathML&quot;],&quot;renderer&quot;,{action:g.Renderer,value:&quot;NativeMML&quot;}),c.RADIO([&quot;SVG&quot;,&quot;SVG&quot;],&quot;renderer&quot;,{action:g.Renderer}),c.RADIO([&quot;PlainSource&quot;,&quot;Plain Source&quot;],&quot;renderer&quot;,{action:g.Renderer,value:&quot;PlainSource&quot;}),c.RULE(),c.CHECKBOX([&quot;FastPreview&quot;,&quot;Fast Preview&quot;],&quot;FastPreview&quot;)),c.SUBMENU(&quot;MathPlayer&quot;,{hidden:!f.Browser.isMSIE||!s.showMathPlayer,disabled:!f.Browser.hasMathPlayer},c.LABEL([&quot;MPHandles&quot;,&quot;Let MathPlayer Handle:&quot;]),c.CHECKBOX([&quot;MenuEvents&quot;,&quot;Menu Events&quot;],&quot;mpContext&quot;,{action:g.MPEvents,hidden:!m}),c.CHECKBOX([&quot;MouseEvents&quot;,&quot;Mouse Events&quot;],&quot;mpMouse&quot;,{action:g.MPEvents,hidden:!m}),c.CHECKBOX([&quot;MenuAndMouse&quot;,&quot;Mouse and Menu Events&quot;],&quot;mpMouse&quot;,{action:g.MPEvents,hidden:m})),c.SUBMENU([&quot;FontPrefs&quot;,&quot;Font Preference&quot;],{hidden:!s.showFontMenu},c.LABEL([&quot;ForHTMLCSS&quot;,&quot;For HTML-CSS:&quot;]),c.RADIO([&quot;Auto&quot;,&quot;Auto&quot;],&quot;font&quot;,{action:g.Font}),c.RULE(),c.RADIO([&quot;TeXLocal&quot;,&quot;TeX (local)&quot;],&quot;font&quot;,{action:g.Font}),c.RADIO([&quot;TeXWeb&quot;,&quot;TeX (web)&quot;],&quot;font&quot;,{action:g.Font}),c.RADIO([&quot;TeXImage&quot;,&quot;TeX (image)&quot;],&quot;font&quot;,{action:g.Font}),c.RULE(),c.RADIO([&quot;STIXLocal&quot;,&quot;STIX (local)&quot;],&quot;font&quot;,{action:g.Font}),c.RADIO([&quot;STIXWeb&quot;,&quot;STIX (web)&quot;],&quot;font&quot;,{action:g.Font}),c.RULE(),c.RADIO([&quot;AsanaMathWeb&quot;,&quot;Asana Math (web)&quot;],&quot;font&quot;,{action:g.Font}),c.RADIO([&quot;GyrePagellaWeb&quot;,&quot;Gyre Pagella (web)&quot;],&quot;font&quot;,{action:g.Font}),c.RADIO([&quot;GyreTermesWeb&quot;,&quot;Gyre Termes (web)&quot;],&quot;font&quot;,{action:g.Font}),c.RADIO([&quot;LatinModernWeb&quot;,&quot;Latin Modern (web)&quot;],&quot;font&quot;,{action:g.Font}),c.RADIO([&quot;NeoEulerWeb&quot;,&quot;Neo Euler (web)&quot;],&quot;font&quot;,{action:g.Font})),c.SUBMENU([&quot;ContextMenu&quot;,&quot;Contextual Menu&quot;],{hidden:!s.showContext},c.RADIO([&quot;MathJax&quot;,&quot;MathJax&quot;],&quot;context&quot;),c.RADIO([&quot;Browser&quot;,&quot;Browser&quot;],&quot;context&quot;)),c.COMMAND([&quot;Scale&quot;,&quot;Scale All Math ...&quot;],g.Scale),c.RULE().With({hidden:!s.showDiscoverable,name:[&quot;&quot;,&quot;discover_rule&quot;]}),c.CHECKBOX([&quot;Discoverable&quot;,&quot;Highlight on Hover&quot;],&quot;discoverable&quot;,{hidden:!s.showDiscoverable})),c.SUBMENU([&quot;Accessibility&quot;,&quot;Accessibility&quot;],c.CHECKBOX([&quot;AssistiveMML&quot;,&quot;Assistive MathML&quot;],&quot;assistiveMML&quot;,{action:g.AssistiveMML}),c.CHECKBOX([&quot;InTabOrder&quot;,&quot;Include in Tab Order&quot;],&quot;inTabOrder&quot;)),c.SUBMENU([&quot;Locale&quot;,&quot;Language&quot;],{hidden:!s.showLocale,ltr:true},c.RADIO(&quot;en&quot;,&quot;locale&quot;,{action:g.Locale}),c.RULE().With({hidden:!s.showLocaleURL,name:[&quot;&quot;,&quot;localURL_rule&quot;]}),c.COMMAND([&quot;LoadLocale&quot;,&quot;Load from URL ...&quot;],g.LoadLocale,{hidden:!s.showLocaleURL})),c.RULE(),c.COMMAND([&quot;About&quot;,&quot;About MathJax&quot;],g.About),c.COMMAND([&quot;Help&quot;,&quot;MathJax Help&quot;],g.Help));if(g.isMobile){(function(){var v=s.settings;var u=g.menu.Find(&quot;Math Settings&quot;,&quot;Zoom Trigger&quot;).submenu;u.items[0].disabled=u.items[1].disabled=true;if(v.zoom===&quot;Hover&quot;||v.zoom==&quot;Click&quot;){v.zoom=&quot;None&quot;}u.items=u.items.slice(0,4);if(navigator.appVersion.match(/[ (]Android[) ]/)){g.ITEM.SUBMENU.Augment({marker:&quot;\u00BB&quot;})}})()}g.CreateLocaleMenu();g.CreateAnnotationMenu()});g.showRenderer=function(u){g.cookie.showRenderer=s.showRenderer=u;g.saveCookie();g.menu.Find(&quot;Math Settings&quot;,&quot;Math Renderer&quot;).hidden=!u};g.showMathPlayer=function(u){g.cookie.showMathPlayer=s.showMathPlayer=u;g.saveCookie();g.menu.Find(&quot;Math Settings&quot;,&quot;MathPlayer&quot;).hidden=!u};g.showFontMenu=function(u){g.cookie.showFontMenu=s.showFontMenu=u;g.saveCookie();g.menu.Find(&quot;Math Settings&quot;,&quot;Font Preference&quot;).hidden=!u};g.showContext=function(u){g.cookie.showContext=s.showContext=u;g.saveCookie();g.menu.Find(&quot;Math Settings&quot;,&quot;Contextual Menu&quot;).hidden=!u};g.showDiscoverable=function(u){g.cookie.showDiscoverable=s.showDiscoverable=u;g.saveCookie();g.menu.Find(&quot;Math Settings&quot;,&quot;Highlight on Hover&quot;).hidden=!u;g.menu.Find(&quot;Math Settings&quot;,&quot;discover_rule&quot;).hidden=!u};g.showLocale=function(u){g.cookie.showLocale=s.showLocale=u;g.saveCookie();g.menu.Find(&quot;Language&quot;).hidden=!u};MathJax.Hub.Register.StartupHook(&quot;HTML-CSS Jax Ready&quot;,function(){if(!MathJax.OutputJax[&quot;HTML-CSS&quot;].config.imageFont){g.menu.Find(&quot;Math Settings&quot;,&quot;Font Preference&quot;,&quot;TeX (image)&quot;).disabled=true}});e.Queue(f.Register.StartupHook(&quot;End Config&quot;,{}),[&quot;Styles&quot;,q,s.styles],[&quot;Post&quot;,f.Startup.signal,&quot;MathMenu Ready&quot;],[&quot;loadComplete&quot;,q,&quot;[MathJax]/extensions/MathMenu.js&quot;])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.10112s from github-fe150-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-UGFpyy/nYlS5IejJRN1AblyrLXGeZX6s6K2phIYjFHI=" src="https://assets-cdn.github.com/assets/frameworks-506169cb2fe76254b921e8c944dd406e5cab2d719e657eace8ada98486231472.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-nrR/vKgzIgtY04IzQr+/baIfC0MMDbvXMn+eNDU7rcU=" src="https://assets-cdn.github.com/assets/github-9eb47fbca833220b58d3823342bfbf6da21f0b430c0dbbd7327f9e34353badc5.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

