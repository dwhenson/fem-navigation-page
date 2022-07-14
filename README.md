# Progressively enhanced, accessable, dropdown menus and burger menu

![Design preview for the navigation challenge coding challenge](images/desktop-preview.jpg)

Honestly, I don't like dropdown menus or burger menus, so I had to view this as a challenge. Getting both to work without Javascript has been a challenge. The result is OK, but not perfect, if JS fails the dropdowns will activate on hover, and navigation items will wrap, remaining visible, instead of being hidden by the burger-menu.

I'm still working on an intrinsic design approach, and the only breakpoint in the page is to left align the `main` content at larger viewports. I'm getting much more comfortable with this approach now, and I feel like its a lovely way to build a page. The main advantage is that it relegates breakpoints to minor tweaks rather than massive layout shifts.

## Lessons learnt

- 💡 If you want to build dropdown menus that are robust and accessible, be ready to put some time aside. There's probably more I could do here but it works.

## Problems

I struggled to get the images responding nicely using `srcset`. Then someone suggested in the Slack that I should be using `picture` here. Changing this around fixed my problem, but I still feel uneasy about using the `srcset` attribute.

## Resources

- 🔗 For the click/hover menus I used [this great resource](https://github.com/mrwweb/clicky-menus), which although a little complicated is really solid once you get the hang of things.
- 🔗 For the burger menu I used [Andy Bell's fully-responsive, progressively enhanced burger menu](https://piccalil.li/tutorial/build-a-fully-responsive-progressively-enhanced-burger-menu/). The link provides a very thorough and in-depth guide to building one.

## Future learning

- 🙇‍♂️ I'm learning React in the background to all this, so want to concentrate on layout for a few challenges now while I build up some core skills in React and hopefully get to try a project using it before too long.