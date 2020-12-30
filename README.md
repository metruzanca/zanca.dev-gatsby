<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://zbest.dev">
    <!-- TODO Put live URL once this branch merges -->
    <img alt="zbestdev" src="https://raw.githubusercontent.com/metruzanca/zbest_dev/feature/landing-page/static/ZBest-dev.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Samuele Zanca's Blog and Portfolio
</h1>

My personal Blog and Portfolio. Here you'll find a collection of my technical ramblings. Mostly on frontend development.

## Built with 🛠

- Love
- Gatsby
- Netlify CMS
- Typescript
- Styled-Components
- Markdown

## Features 🚀

> For now this is acting as a personal todolist for the site

With [Gatsby](https://gatsbyjs.com) we get the following for free:

- Static Site Load Speed
- Automatic optimization of images in Markdown posts
- Support for code syntax highlighting
- Includes React Helmet to allow editing site meta tags

Using [Netlify](https://www.netlifycms.org/) for hosting and CMS
(_also Drafting/Preview Blog posts_)

Custom Features:

- Reading Time Calculation
- Reading progress bar
- Smooth scroll when clicking on a navlink with #href
- Intersection observer for animated navbar.

### To Do:

- [ ] Blog Tags
- [ ] Utterenc.es for comments
- [ ] RSS feed
- [ ] Offiline
- [ ] Categories/Series (e.g. devlog)
- [ ] Finish landing page, duh.
- [ ] Wakatime widget?
- [ ] Snazzy Work Experience section
- [ ] Even snazzier globe animation to show off work locations
- [ ] Pull github pinned projects for featured projects.
- [ ] Pull github repositories that have the repo.website is set to `https://zbest.dev/projects/name-of-repository` and generate a site page based on the repository.
  - Make a workflow for these repos where if their readme gets updated, this triggers a netlify rebuild via netlify build webhook.
- [ ] Special tags on projects for `Work related projets`. These would need to have their own site post probably as I can't make repos for these.
  - These should also show up in Work Experience.
- ~~Light Mode w/ toggle switch~~, no _light mode sucks_, dark mode forever!
- [ ] Particles on landing page hero section?
- [ ] Crossposting with syndication(_am i using this word right?_) linking back to website.
  - [Dev.to](http://Dev.to)
  - [Medium](http://Medium.com)
- [ ] Automatic Social Media posts with new blog articles (Also check: Twitter/Linkedin Cards meta)
  - Linkedin [Most important]
  - Twatter
- [ ] Integration of some kind with [JSONResume](JSONResume.org)
  - Create a better JSONResume theme.
  - Keep resume in JSON format.
  - Use data from JSON resume to update Work Experience section and vice versa.
  - Add a Section to the CMS (/admin) to update the JSON resume maybe? (take advantage of netlify's editor)
  - Update the hosted resume with JSONResume. (_The one which is available to download from [zbest.dev/resume.pdf](https://zbest.dev/resume.pdf)_)
    - Update [linkedin](https://developer.linkedin.com/docs/v1/compliance/profile-edit-api) and indeed profiles. (Doesn't seem possible on indeed, :( )
  - Update all social platform's "working @ xyz" Fields

### Netlify TODO:

- [ ] Site Map sent to google
  - Need to enable plugin for this.
- [ ] Backend analitics for popular pages / successful blog articles
- [ ] Form submissions
