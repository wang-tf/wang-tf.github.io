





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d311c4a37b4a480a760dda55c72eb656b70f39154f15e1b7a7f6506e143d7ec0.css" integrity="sha256-0xHEo3tKSAp2DdpVxy62VrcPORVPFeG3p/ZQbhQ9fsA=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-d91441e85aab9af121f8064d22f7b52fc2115c55a8d412ab077a776324ea7db0.css" integrity="sha256-2RRB6FqrmvEh+AZNIve1L8IRXFWo1BKrB3p3YyTqfbA=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>MathJax/MathZoom.js at master · mathjax/MathJax</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">


  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTUzNjI2ODc5OjIxZjI1NTYzZDhmMjA0YjI3Yzg3YzIzZGQ1YmZiZDJkMzZmZjczOTExZTBkY2ZiOTg0Nzk1YTAxM2RkYjhjOGE=--1c77ee0525269bcb85c8f93731c023e888b0f919">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="7B01:2954:6D2360A:ACFB832:58A9101D" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="7B01:2954:6D2360A:ACFB832:58A9101D" name="octolytics-dimension-request_id" /><meta content="18094980" name="octolytics-actor-id" /><meta content="wang-tf" name="octolytics-actor-login" /><meta content="fe455506c108996ed294c43d65528df9d0e6c03b6e4ee96df526e9a62e7a25b5" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



      <meta name="hostname" content="github.com">
  <meta name="user-login" content="wang-tf">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MTUwOTRjZTFmMTA5MDk1OGMxYzA4YzAxZDdkMGZkNzk4ZmNiNzc1YjFjYjgzZjMwZDMyM2E4MzM2YmY4NWM4Mnx7InJlbW90ZV9hZGRyZXNzIjoiNjAuMjQ3LjU1LjIwOSIsInJlcXVlc3RfaWQiOiI3QjAxOjI5NTQ6NkQyMzYwQTpBQ0ZCODMyOjU4QTkxMDFEIiwidGltZXN0YW1wIjoxNDg3NDc0NzE3LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="d4fc0ca10d3f0ae872d0dd094f0bb32ba0462aa4">

  <meta http-equiv="x-pjax-version" content="dced5968bf278b1b8283932700604931">
  

    
  <meta name="description" content="MathJax - Beautiful math in all browsers">
  <meta name="go-import" content="github.com/mathjax/MathJax git https://github.com/mathjax/MathJax.git">

  <meta content="252187" name="octolytics-dimension-user_id" /><meta content="mathjax" name="octolytics-dimension-user_login" /><meta content="847885" name="octolytics-dimension-repository_id" /><meta content="mathjax/MathJax" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="847885" name="octolytics-dimension-repository_network_root_id" /><meta content="mathjax/MathJax" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mathjax/MathJax/commits/master.atom" rel="alternate" title="Recent Commits to MathJax:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/mathjax/MathJax/blob/master/extensions/MathZoom.js" data-pjax-transient>


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

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6h7pp53RddbdnRO/0xm7mIqXH9QojkRXeIyVjXJVKIHaiakSYsWkYGEyLQCp3b/OQ0DhPCkt0bkr/YvOGXgASA==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="DKMk/F/ukGWY/8NYCHIW/OA40YpAypHv9BIwpV/JhsE8NGRJoPpB0yRQ/edythKqKe8vYkFpBAGnYy7mNOSuCA==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qAedJLIoTEbszk4mb7Pn0u7bEelFUS0aWjXjEeHelrij1XnOQSo1SKoCM4GRKsZhBEMKSdPIaR9hB5ZJjnKfxQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="847885" />

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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Op2Wr3pFJ1OY9pbrswaVs/O67zkLdq+OhQgig4hiS32T1OZH/6YDUT/Gr9WufBnf0BcxjCJiHBwT+bA6VS2RwA==" /></div>
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bYoWM6f15T7GuXhvR/PYKU5KvkUze6aC7mav/M12ZEKib5eape87xIIAq7LVNjlXeQ/7WmANRU7T7PLQDeagWg==" /></div>
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
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="GU6Jmya9UHrE9cP473AyKWlJbLPxYfrtqC1pt/38QmJGPE6ChAklbEWtu6mHolEfYR27EO08jCV4brsdLfrDSw==" /></div>
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

    

<a href="/mathjax/MathJax/blob/6273842a9746731b9ecca0de18ec9fd50a36df99/extensions/MathZoom.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:75e29af3b1ca6ba5f5f37a9b36b498ea -->

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
               href="/mathjax/MathJax/blob/develop/extensions/MathZoom.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/mathjax/MathJax/blob/master/extensions/MathZoom.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node-2.5/extensions/MathZoom.js"
               data-name="mathjax-node-2.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                mathjax-node-2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node-2.5.1/extensions/MathZoom.js"
               data-name="mathjax-node-2.5.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                mathjax-node-2.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/mathjax-node/extensions/MathZoom.js"
               data-name="mathjax-node"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                mathjax-node
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v1.1-latest/extensions/MathZoom.js"
               data-name="v1.1-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v1.1-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.0-latest/extensions/MathZoom.js"
               data-name="v2.0-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.0-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.1-latest/extensions/MathZoom.js"
               data-name="v2.1-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.1-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.2-latest/extensions/MathZoom.js"
               data-name="v2.2-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.2-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.3-latest/extensions/MathZoom.js"
               data-name="v2.3-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.3-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.4-latest/extensions/MathZoom.js"
               data-name="v2.4-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.4-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.5-latest/extensions/MathZoom.js"
               data-name="v2.5-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.5-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/v2.6-latest/extensions/MathZoom.js"
               data-name="v2.6-latest"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.6-latest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mathjax/MathJax/blob/woff2/extensions/MathZoom.js"
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
              href="/mathjax/MathJax/tree/v1.1/extensions/MathZoom.js"
              data-name="v1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1">
                v1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/v1.1a/extensions/MathZoom.js"
              data-name="v1.1a"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1a">
                v1.1a
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.7.0/extensions/MathZoom.js"
              data-name="2.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.7.0">
                2.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.7.0-beta.0/extensions/MathZoom.js"
              data-name="2.7.0-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.7.0-beta.0">
                2.7.0-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.1/extensions/MathZoom.js"
              data-name="2.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.1">
                2.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.1-rc.1/extensions/MathZoom.js"
              data-name="2.6.1-rc.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.1-rc.1">
                2.6.1-rc.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.0/extensions/MathZoom.js"
              data-name="2.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.0">
                2.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.0-beta.2/extensions/MathZoom.js"
              data-name="2.6.0-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.0-beta.2">
                2.6.0-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.0-beta.1/extensions/MathZoom.js"
              data-name="2.6.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.0-beta.1">
                2.6.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.6.0-beta.0/extensions/MathZoom.js"
              data-name="2.6.0-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.0-beta.0">
                2.6.0-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.5.3/extensions/MathZoom.js"
              data-name="2.5.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.5.3">
                2.5.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.5.2/extensions/MathZoom.js"
              data-name="2.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.5.2">
                2.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.5.1/extensions/MathZoom.js"
              data-name="2.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.5.1">
                2.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.5.0/extensions/MathZoom.js"
              data-name="2.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.5.0">
                2.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.4.0/extensions/MathZoom.js"
              data-name="2.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.4.0">
                2.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.3.0/extensions/MathZoom.js"
              data-name="2.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.3.0">
                2.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.2.0/extensions/MathZoom.js"
              data-name="2.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.0">
                2.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.1.0/extensions/MathZoom.js"
              data-name="2.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.0">
                2.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mathjax/MathJax/tree/2.0.0/extensions/MathZoom.js"
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
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/mathjax/MathJax"><span>MathJax</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/mathjax/MathJax/tree/master/extensions"><span>extensions</span></a></span><span class="separator">/</span><strong class="final-path">MathZoom.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/mathjax/MathJax/commit/7e3dd3f93678b7a7c4a545aa2c7f0d2380c3a681" data-pjax>
          7e3dd3f
        </a>
        <relative-time datetime="2016-10-02T16:38:51Z">Oct 2, 2016</relative-time>
      </span>
      <div>
        <img alt="" class="avatar" data-canonical-src="https://0.gravatar.com/avatar/a2ba2a8839add5489a6bc6c8e89ef5ea?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" height="20" src="https://camo.githubusercontent.com/7437cee2d3e902dfe21d44c191f7ddb5b8ed9b96/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f61326261326138383339616464353438396136626336633865383965663565613f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d7826733d313430" width="20" />
        <span class="user-mention">Davide P. Cervone</span>
          <a href="/mathjax/MathJax/commit/7e3dd3f93678b7a7c4a545aa2c7f0d2380c3a681" class="message" data-pjax="true" title="Repack and recombine for v2.7.0">Repack and recombine for v2.7.0</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@fred-wang" height="24" src="https://avatars2.githubusercontent.com/u/567455?v=3&amp;s=48" width="24" />
            <a href="/fred-wang">fred-wang</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/mathjax/MathJax/raw/master/extensions/MathZoom.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/mathjax/MathJax/blame/master/extensions/MathZoom.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/mathjax/MathJax/commits/master/extensions/MathZoom.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/mathjax/MathJax?branch=master&amp;filepath=extensions%2FMathZoom.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/edit/master/extensions/MathZoom.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="GidgPoObzEEe/ioX68fCDmNz0HvmleUar1DC3q8YHk8d8cYEwop2lEk0XCGaTvVB1eHx9C/6B91bloSztZ6JDg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mathjax/MathJax/delete/master/extensions/MathZoom.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="w24pxC7SDmhXsEdISONuxFryM7yY4mBP+hfb8x78QXfVMIGaoaZ3cmlLd7x4k/4v3grCrtKHWfHIQooayf5WZA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      20 lines (18 sloc)
      <span class="file-info-divider"></span>
    8.46 KB
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
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  /MathJax/extensions/MathZoom.js</span></td>
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
        <td id="LC19" class="blob-code blob-code-inner js-file-line">(function(a,d,f,c,j){var k=&quot;2.7.0&quot;;var i=a.CombineConfig(&quot;MathZoom&quot;,{styles:{&quot;#MathJax_Zoom&quot;:{position:&quot;absolute&quot;,&quot;background-color&quot;:&quot;#F0F0F0&quot;,overflow:&quot;auto&quot;,display:&quot;block&quot;,&quot;z-index&quot;:301,padding:&quot;.5em&quot;,border:&quot;1px solid black&quot;,margin:0,&quot;font-weight&quot;:&quot;normal&quot;,&quot;font-style&quot;:&quot;normal&quot;,&quot;text-align&quot;:&quot;left&quot;,&quot;text-indent&quot;:0,&quot;text-transform&quot;:&quot;none&quot;,&quot;line-height&quot;:&quot;normal&quot;,&quot;letter-spacing&quot;:&quot;normal&quot;,&quot;word-spacing&quot;:&quot;normal&quot;,&quot;word-wrap&quot;:&quot;normal&quot;,&quot;white-space&quot;:&quot;nowrap&quot;,&quot;float&quot;:&quot;none&quot;,&quot;-webkit-box-sizing&quot;:&quot;content-box&quot;,&quot;-moz-box-sizing&quot;:&quot;content-box&quot;,&quot;box-sizing&quot;:&quot;content-box&quot;,&quot;box-shadow&quot;:&quot;5px 5px 15px #AAAAAA&quot;,&quot;-webkit-box-shadow&quot;:&quot;5px 5px 15px #AAAAAA&quot;,&quot;-moz-box-shadow&quot;:&quot;5px 5px 15px #AAAAAA&quot;,&quot;-khtml-box-shadow&quot;:&quot;5px 5px 15px #AAAAAA&quot;,filter:&quot;progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color=&#39;gray&#39;, Positive=&#39;true&#39;)&quot;},&quot;#MathJax_ZoomOverlay&quot;:{position:&quot;absolute&quot;,left:0,top:0,&quot;z-index&quot;:300,display:&quot;inline-block&quot;,width:&quot;100%&quot;,height:&quot;100%&quot;,border:0,padding:0,margin:0,&quot;background-color&quot;:&quot;white&quot;,opacity:0,filter:&quot;alpha(opacity=0)&quot;},&quot;#MathJax_ZoomFrame&quot;:{position:&quot;relative&quot;,display:&quot;inline-block&quot;,height:0,width:0},&quot;#MathJax_ZoomEventTrap&quot;:{position:&quot;absolute&quot;,left:0,top:0,&quot;z-index&quot;:302,display:&quot;inline-block&quot;,border:0,padding:0,margin:0,&quot;background-color&quot;:&quot;white&quot;,opacity:0,filter:&quot;alpha(opacity=0)&quot;}}});var e,b,g;MathJax.Hub.Register.StartupHook(&quot;MathEvents Ready&quot;,function(){g=MathJax.Extension.MathEvents.Event;e=MathJax.Extension.MathEvents.Event.False;b=MathJax.Extension.MathEvents.Hover});var h=MathJax.Extension.MathZoom={version:k,settings:a.config.menuSettings,scrollSize:18,HandleEvent:function(n,l,m){if(h.settings.CTRL&amp;&amp;!n.ctrlKey){return true}if(h.settings.ALT&amp;&amp;!n.altKey){return true}if(h.settings.CMD&amp;&amp;!n.metaKey){return true}if(h.settings.Shift&amp;&amp;!n.shiftKey){return true}if(!h[l]){return true}return h[l](n,m)},Click:function(m,l){if(this.settings.zoom===&quot;Click&quot;){return this.Zoom(m,l)}},DblClick:function(m,l){if(this.settings.zoom===&quot;Double-Click&quot;||this.settings.zoom===&quot;DoubleClick&quot;){return this.Zoom(m,l)}},Hover:function(m,l){if(this.settings.zoom===&quot;Hover&quot;){this.Zoom(m,l);return true}return false},Zoom:function(o,u){this.Remove();b.ClearHoverTimer();g.ClearSelection();var s=MathJax.OutputJax[u.jaxID];var p=s.getJaxFromMath(u);if(p.hover){b.UnHover(p)}var q=this.findContainer(u);var l=Math.floor(0.85*q.clientWidth),t=Math.max(document.body.clientHeight,document.documentElement.clientHeight);if(this.getOverflow(q)!==&quot;visible&quot;){t=Math.min(q.clientHeight,t)}t=Math.floor(0.85*t);var n=d.Element(&quot;span&quot;,{id:&quot;MathJax_ZoomFrame&quot;},[[&quot;span&quot;,{id:&quot;MathJax_ZoomOverlay&quot;,onmousedown:this.Remove}],[&quot;span&quot;,{id:&quot;MathJax_Zoom&quot;,onclick:this.Remove,style:{visibility:&quot;hidden&quot;,fontSize:this.settings.zscale}},[[&quot;span&quot;,{style:{display:&quot;inline-block&quot;,&quot;white-space&quot;:&quot;nowrap&quot;}}]]]]);var z=n.lastChild,w=z.firstChild,r=n.firstChild;u.parentNode.insertBefore(n,u);u.parentNode.insertBefore(u,n);if(w.addEventListener){w.addEventListener(&quot;mousedown&quot;,this.Remove,true)}var m=z.offsetWidth||z.clientWidth;l-=m;t-=m;z.style.maxWidth=l+&quot;px&quot;;z.style.maxHeight=t+&quot;px&quot;;if(this.msieTrapEventBug){var y=d.Element(&quot;span&quot;,{id:&quot;MathJax_ZoomEventTrap&quot;,onmousedown:this.Remove});n.insertBefore(y,z)}if(this.msieZIndexBug){var v=d.addElement(document.body,&quot;img&quot;,{src:&quot;about:blank&quot;,id:&quot;MathJax_ZoomTracker&quot;,width:0,height:0,style:{width:0,height:0,position:&quot;relative&quot;}});n.style.position=&quot;relative&quot;;n.style.zIndex=i.styles[&quot;#MathJax_ZoomOverlay&quot;][&quot;z-index&quot;];n=v}var x=s.Zoom(p,w,u,l,t);if(this.msiePositionBug){if(this.msieSizeBug){z.style.height=x.zH+&quot;px&quot;;z.style.width=x.zW+&quot;px&quot;}if(z.offsetHeight&gt;t){z.style.height=t+&quot;px&quot;;z.style.width=(x.zW+this.scrollSize)+&quot;px&quot;}if(z.offsetWidth&gt;l){z.style.width=l+&quot;px&quot;;z.style.height=(x.zH+this.scrollSize)+&quot;px&quot;}}if(this.operaPositionBug){z.style.width=Math.min(l,x.zW)+&quot;px&quot;}if(z.offsetWidth&gt;m&amp;&amp;z.offsetWidth-m&lt;l&amp;&amp;z.offsetHeight-m&lt;t){z.style.overflow=&quot;visible&quot;}this.Position(z,x);if(this.msieTrapEventBug){y.style.height=z.clientHeight+&quot;px&quot;;y.style.width=z.clientWidth+&quot;px&quot;;y.style.left=(parseFloat(z.style.left)+z.clientLeft)+&quot;px&quot;;y.style.top=(parseFloat(z.style.top)+z.clientTop)+&quot;px&quot;}z.style.visibility=&quot;&quot;;if(this.settings.zoom===&quot;Hover&quot;){r.onmouseover=this.Remove}if(window.addEventListener){addEventListener(&quot;resize&quot;,this.Resize,false)}else{if(window.attachEvent){attachEvent(&quot;onresize&quot;,this.Resize)}else{this.onresize=window.onresize;window.onresize=this.Resize}}a.signal.Post([&quot;math zoomed&quot;,p]);return e(o)},Position:function(p,r){p.style.display=&quot;none&quot;;var q=this.Resize(),m=q.x,s=q.y,l=r.mW;p.style.display=&quot;&quot;;var o=-l-Math.floor((p.offsetWidth-l)/2),n=r.Y;p.style.left=Math.max(o,10-m)+&quot;px&quot;;p.style.top=Math.max(n,10-s)+&quot;px&quot;;if(!h.msiePositionBug){h.SetWH()}},Resize:function(m){if(h.onresize){h.onresize(m)}var q=document.getElementById(&quot;MathJax_ZoomFrame&quot;),l=document.getElementById(&quot;MathJax_ZoomOverlay&quot;);var o=h.getXY(q),n=h.findContainer(q);if(h.getOverflow(n)!==&quot;visible&quot;){l.scroll_parent=n;var p=h.getXY(n);o.x-=p.x;o.y-=p.y;p=h.getBorder(n);o.x-=p.x;o.y-=p.y}l.style.left=(-o.x)+&quot;px&quot;;l.style.top=(-o.y)+&quot;px&quot;;if(h.msiePositionBug){setTimeout(h.SetWH,0)}else{h.SetWH()}return o},SetWH:function(){var l=document.getElementById(&quot;MathJax_ZoomOverlay&quot;);if(!l){return}l.style.display=&quot;none&quot;;var m=l.scroll_parent||document.documentElement||document.body;l.style.width=m.scrollWidth+&quot;px&quot;;l.style.height=Math.max(m.clientHeight,m.scrollHeight)+&quot;px&quot;;l.style.display=&quot;&quot;},findContainer:function(l){l=l.parentNode;while(l.parentNode&amp;&amp;l!==document.body&amp;&amp;h.getOverflow(l)===&quot;visible&quot;){l=l.parentNode}return l},getOverflow:(window.getComputedStyle?function(l){return getComputedStyle(l).overflow}:function(l){return(l.currentStyle||{overflow:&quot;visible&quot;}).overflow}),getBorder:function(o){var m={thin:1,medium:2,thick:3};var n=(window.getComputedStyle?getComputedStyle(o):(o.currentStyle||{borderLeftWidth:0,borderTopWidth:0}));var l=n.borderLeftWidth,p=n.borderTopWidth;if(m[l]){l=m[l]}else{l=parseInt(l)}if(m[p]){p=m[p]}else{p=parseInt(p)}return{x:l,y:p}},getXY:function(o){var l=0,n=0,m;m=o;while(m.offsetParent){l+=m.offsetLeft;m=m.offsetParent}if(h.operaPositionBug){o.style.border=&quot;1px solid&quot;}m=o;while(m.offsetParent){n+=m.offsetTop;m=m.offsetParent}if(h.operaPositionBug){o.style.border=&quot;&quot;}return{x:l,y:n}},Remove:function(n){var p=document.getElementById(&quot;MathJax_ZoomFrame&quot;);if(p){var o=MathJax.OutputJax[p.previousSibling.jaxID];var l=o.getJaxFromMath(p.previousSibling);a.signal.Post([&quot;math unzoomed&quot;,l]);p.parentNode.removeChild(p);p=document.getElementById(&quot;MathJax_ZoomTracker&quot;);if(p){p.parentNode.removeChild(p)}if(h.operaRefreshBug){var m=d.addElement(document.body,&quot;div&quot;,{style:{position:&quot;fixed&quot;,left:0,top:0,width:&quot;100%&quot;,height:&quot;100%&quot;,backgroundColor:&quot;white&quot;,opacity:0},id:&quot;MathJax_OperaDiv&quot;});document.body.removeChild(m)}if(window.removeEventListener){removeEventListener(&quot;resize&quot;,h.Resize,false)}else{if(window.detachEvent){detachEvent(&quot;onresize&quot;,h.Resize)}else{window.onresize=h.onresize;delete h.onresize}}}return e(n)}};a.Browser.Select({MSIE:function(l){var n=(document.documentMode||0);var m=(n&gt;=9);h.msiePositionBug=!m;h.msieSizeBug=l.versionAtLeast(&quot;7.0&quot;)&amp;&amp;(!document.documentMode||n===7||n===8);h.msieZIndexBug=(n&lt;=7);h.msieInlineBlockAlignBug=(n&lt;=7);h.msieTrapEventBug=!window.addEventListener;if(document.compatMode===&quot;BackCompat&quot;){h.scrollSize=52}if(m){delete i.styles[&quot;#MathJax_Zoom&quot;].filter}},Opera:function(l){h.operaPositionBug=true;h.operaRefreshBug=true}});h.topImg=(h.msieInlineBlockAlignBug?d.Element(&quot;img&quot;,{style:{width:0,height:0,position:&quot;relative&quot;},src:&quot;about:blank&quot;}):d.Element(&quot;span&quot;,{style:{width:0,height:0,display:&quot;inline-block&quot;}}));if(h.operaPositionBug||h.msieTopBug){h.topImg.style.border=&quot;1px solid&quot;}MathJax.Callback.Queue([&quot;StartupHook&quot;,MathJax.Hub.Register,&quot;Begin Styles&quot;,{}],[&quot;Styles&quot;,f,i.styles],[&quot;Post&quot;,a.Startup.signal,&quot;MathZoom Ready&quot;],[&quot;loadComplete&quot;,f,&quot;[MathJax]/extensions/MathZoom.js&quot;])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.OutputJax[&quot;HTML-CSS&quot;],MathJax.OutputJax.NativeMML);</td>
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
      <li>&copy; 2017 <span title="0.11383s from github-fe149-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

