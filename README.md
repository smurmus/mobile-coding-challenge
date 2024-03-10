# Wonderschool Mobile Project

## Introduction

**Thanks for your interest in joining the Wonderschool engineering team! Our team is on a mission to ensure every child has access to early education that help them realize their potential. We believe we can impact the lives of every child by building well designed and well engineered products.**

If you're one of those people that love solving challenging problems that touches the lives of many, we would love to talk to you.

As a start to our formal interview process, we ask everyone to submit a project. The project is a foundational piece of our process and it's referenced later in our process during the technical interviews.

This project is designed to figure out if you would love working on our stack -- we build most of our mobile apps using `React Native`. We'd also would like to see how you would problem-solve in a real world setting.

If at any point you have questions concerning the project and/or interview process, please
do not hesitate to email engineering@wonderschool.com. We would also love to hear from you if you have a better idea on how we can do this. We love engineers that have an opinion about improving processes.

Again, thanks for taking the time to do this project and here's hoping we talk soon!

---

## [Project](#project)
This project revolves around building a simple menu and shopping cart.
- [x] The user can add items from the menu to the shopping cart.
- [x] The user can change screens to the shopping cart.
- [x] The shopping cart will have all the items that were added from the menu screen and an 'amount' display object showing
the number of times that item was added to the shopping cart.
- [x] Users should have some feedback that an item was added to the cart.
- [x] There should be a (+) button to add 1 to the amount for an item and a (-) button to subtract 1 from the amount
- [x] The shopping cart should also include the base price of the item, and the total price (base x amount)
- [x] When an item in the shopping cart reaches 0 amount, it should be removed from the shopping cart
- [x] There should be a total cost that is a sum of all the items (x the amount) in the shopping cart
displayed at the bottom

## Technical Detail
* Prefer to use functional components unless there is reason to use class based components
* Prefer to use hooks
* Use immutable data and js functional higher order functions (reduce, map, filter, etc) when possible
* Make sure code is styled and linted. eslint and prettier has been set up.
* import the data from `src/data/menu`. Treat this data as if it were from data you received from an API.Store this data however you see fit.
* Do not use any third party state manager (ie. redux). Please use context api.
* `react-navigation` for navigation has already been set up in the project, but feel free to handle navigation anyway you want. 
* Please treat this as if it's a greenfield project that is going to be worked on by multiple developers. 

## Acceptance Criteria

* In the interest of keeping this challenge short, spend a minimal amount of time styling the components.
  The styling shouldn't affect usability of the UI, but it's less important that how pretty the app looks. (for now :))
* All the points under [Project](#project) above should be completed
* App should functional
* Include in your submission a note about future changes you'd make to this application, and how your approach would enable you to do so.

## Submission

To submit your project, commit all your changes to the `master` branch and run the
following commands:

```
# Make sure all changes were committed
git diff-index --quiet HEAD -- || echo 'You have uncommitted changes!'

# Create bundle to submit
git bundle create mobile-coding-challenge.bundle HEAD master
```

Email the generated _mobile-coding-challenge.bundle_ file to engineering@wonderschool.com. We do our
best to review and respond to submissions within 1-2 business days.



## Sample Images
Here is how a completed project could look
It does not have to look like this

<img width="381" alt="Screen Shot 2021-07-28 at 12 06 10 AM" src="https://user-images.githubusercontent.com/3309671/127279653-3e9726f4-2f9e-45d3-8ad2-3046889fb1f5.png" />
<img width="398" alt="Screen Shot 2021-07-27 at 11 58 53 PM" src="https://user-images.githubusercontent.com/3309671/127279655-e7b3e7a6-cc20-44d9-ba69-6775fbbb36cc.png" />

