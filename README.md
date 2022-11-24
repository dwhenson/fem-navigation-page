# Intro section with dropdown navigation

This is a solution to the [Art gallery website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges are designed to help developers improve their coding skills by building realistic projects. Assets are provided, but no guidance, and developers are free to choose any approach to solving the challenge.

Honestly, I don't like dropdown menus or burger menus, so I had to view this as a challenge. Getting both to work without Javascript has been a challenge. The result is OK, but not perfect, if JS fails the dropdowns will activate on hover, and navigation items will wrap, remaining visible, instead of being hidden by the burger-menu.

I'm still working on an intrinsic design approach, and the only breakpoint in the page is to left align the `main` content at larger viewports. I'm getting much more comfortable with this approach now, and I feel like its a lovely way to build a page. The main advantage is that it relegates breakpoints to minor tweaks rather than massive layout shifts.

![Design preview for the navigation challenge coding challenge](images/desktop-preview.jpg)

## Overview

### The challenge

Your users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

## The solution

- [Live site](https://fem-navigation-page.vercel.app/)

## What I learned

- If you want to build dropdown menus that are robust and accessible, be ready to put some time aside. There's probably more I could do here but it works.

## Where I got stuck

I struggled to get the images responding nicely using `srcset`. Then someone suggested in the Slack that I should be using `picture` here. Changing this around fixed my problem, but I still feel uneasy about using the `srcset` attribute.

### Continued development

- I want to keep pushing on my learning an intrinsic design approach, but I'll allow myself more use of media queries so that the final product is more finished.
- I'm still struggling to get my head around the `srcset` attribute and `picture` element. I continually have to refer back to [this CSS Tricks article](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/) on how to implement them.

### Resources

- 🔗 For the click/hover menus I used [this great resource](https://github.com/mrwweb/clicky-menus), which although a little complicated is really solid once you get the hang of things.
- 🔗 For the burger menu I used [Andy Bell's fully-responsive, progressively enhanced burger menu](https://piccalil.li/tutorial/build-a-fully-responsive-progressively-enhanced-burger-menu/). The link provides a very thorough and in-depth guide to building one.

## Author

- [Personal Website](https://www.dwhenson.com)
- Frontend Mentor Profile - [@dwhenson](https://www.frontendmentor.io/profile/dwhenson)




