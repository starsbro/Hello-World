# Assignment: Responsive Grid

**Due: Wed Jan 31, 11:59pm ET**

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'responsive-grid' (`git checkout -b responsive-grid`)
* add the necessary files in this directory to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Using the skills from class, create an index.html file and a styles.css file that have the required features (see below).  Demonstrate the skills from class where appropriate.

The page will be viewable using `npx serve` as the webserver
- Run this command in the same directory as your HTML file

## General Requirements

- Semantic HTML
- Semantic CSS class names 
  - BEM is acceptable but not required
- CSS where the rules are organized by structure (selectors in roughly document order)
- CSS where the properties in the rules are organized by property category
  - Include a blank line between categories
  - Future assignments will allow you to use your preferred CSS organization, but this assignment ensures you understand the concept
- CSS is written in a mobile-first approach as described in class
- The page is responsive
- The page is adaptive, with a breakpoint at 50rem
  - Below that breakpoint, the cards will move from a horizontal layout to a vertical one
- The page will contain a semantic and visible header
- The page will contain a semantic main section
- The page will contain a semantic and visible footer
- All pictures are loaded using pictures from http://placekitten.com/
    - This assignment has you use the urls to placekitten, but future assignments (once we've discussed copyright) will have you download images and include them in your repo
- All pictures are reasonable sized visually for the purpose they represent
  - You may resize using CSS for this assignment
    - On real projects you want your images to be the size you display to avoid loading larger images than you need, wasting bandwidth, time, and memory for the user

## Header Requirements

The header will have the following features:
- A "logo" pic (a cat)
- h1 text saying "Cats on the Internet"
- Semantically written navigation including 3 links
  - the links do not have to go to valid page

Visual requirements of the rendered header:
- the logo is presented to the left of the h1 text
- You may modify the size and appearance of the h1 element as long as it visually remains a heading
- the nav menu is horizontal links spanning the width of the header
  - At the adaptive breakpoint the menu converts to vertical list
- the nav links are not required to follow the 12 column grid, but that is permitted

## Main Requirements

The main section will consist of an h2 text and 3 cards
- The h2 text should be "Cats in the News"
- Each card will consist of 
  - a cat picture
  - an h3 heading with text of your choice
  - a block of lorem ipsum-like text or text of your choice, at least one sentence long
  - A link to "read more"
    - Be aware that "read more" has accessibility problems, and we will revisit this topic

Visual requirements of the main section
- The h2 heading should span the page
- The cards should each have different text of different lengths so that the card texts have different visual height (at least one card will word wrap more than another card)
- You may modify the size and appearance of the h2 element as long as it visually remains a heading
- The cards are evenly distributed using a 12-column grid
  - At the adaptive breakpoint the cards will stack vertically with each card filling the width of the grid
- The links in the cards will look like buttons, including a call to action color
- The links should appear in the same line across all the cards (when the cards on aligned)
    - Even if the cards have different amount of text that causes the text to wrap a different number of lines

## Footer Requirements

The footer should have at least 3 links
- The footer links should link to page urls, but those pages do not need to exist (You can link to files that don't exist)
- The links should be in a smaller text size than the main page
- The footer links should follow the 12 column grid
  - it will need to be a DIFFERENT grid as defined by CSS, but the 12 columns should fall in the same places

## Accessibility Requirements
- At the adaptive breakpoint, the footer links should convert to a vertical list
- All images should have quality alt text to describe the picture
- All text should have a clear contrast with the background it is presented on (easily readable)
- All text should be sized by rem units
- The page should generally be legible and readable by the average user

## Additional Restrictions
- Do not use float for layout
    - This assignment should have NO use of float
- Follow the best practices from class


