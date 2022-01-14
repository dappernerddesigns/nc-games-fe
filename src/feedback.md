# Checklist for NC Games Front End

Well done Verity! You've got some great functionality in there and your app is responsive and nice to use. Brilliant work!
<br/> I appreciate you may have already tackled some of the things below but have a read through and decide what to focus on next. My suggestion would be comment voting :)

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [x] provides general info about your app
- [x] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [x] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [x] Basic styling added
- [x] Responsive design
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc)
- [x] Refreshing doesn’t cause an issue on sub-pages
- [x] No errors in the console
- [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

- [ ] Some indication of who is logged in (this can be hardcoded)

### Reviews

- [x] Serves all reviews / top reviews
- [x] Can vote on reviews
- [ ] Can vote a maximum of once in either direction per page load
  - I don't think this is in the readme so I'll leave it up to you whether to implement or not
- [x] Votes are persistent when page is refreshed
- [x] Reviews by category pages load only relevant reviews (especially when navigating from one category page to another)
  - Might be nice to have an option to show differnt categories when on a filtered category reviews page. So the user doesn't have to keep going back to the home page to change category
- [x] Can sort reviews by date created / comment_count / votes

### Individual Review / Comments

- [x] Individual reviews are served with comments
- [x] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Can post new comments, which are persistent

---

- Do you need "/reviews/:review_id/comments" route? Can't reach it via a link and users probably find comments most useful under the review itself

---

### Additional functionality:

- [x] Can only delete comments of logged in user
- [x] Deleted comments don’t re-appear on re-render/refresh
- [ ] sort comments by date created / votes
- [ ] navigate over pages of reviews (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display reviews by specific user
- [ ] post new review
- [ ] delete logged in user's reviews

## Error Handling

- [x] Bad url
- [ ] Bad category slug in url
- [ ] Bad review_id in url
- [x] Post comment: (No text in comment body / Can you post without logging in?)
  - Doesn't allow you to click `write` button but also doesn't tell you why the button's disabled. HINT - the `required` attribute on the input will do this for you

## Code

- [-] Well named components
  - Components are well named but consider the naming of your api requests. They should be camelCased and include the http method eg instead of `AllReviews`, `getAllReviews`
  - Should be `api.js` rather than `.jsx` as you're not using any jsx in that file
- [-] Components reused where possible (`Reviews` / `Voter`...)
  - Comment voting not yet up and running so have perfect opportunity to reuse voting component
- [x] Minimal state - don't hold derivable data in state
- [x] Set state correctly, using previous state where possible
- [x] Handle asynchronicity clearly (i.e. isLoading pattern)
- [-] Functions are DRY (`handleChange` for controlled components / api calls)
  - Use axios params so you only need one getReviews api function instead of AllReviewsByCat and AllReviews
- [x] Use object destructuring where possible
- [x] Tidy? If not: ESLint / Prettier
- [x] `node_modules` git ignored
- [ ] No `console.log`s / comments
- [x] remove unnecessary files (e.g. App.test.js)

---

- Comments.js is huge. Can addComment and deleteComment be extracted out and just setComments be passed down on props?
- Make sure your app is accesible by using aria labels on all our images and icons.

---

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the reviews a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent reviews e.g. last 10 minutes
