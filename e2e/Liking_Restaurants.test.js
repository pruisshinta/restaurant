/* eslint-disable no-undef */
const assert = require('assert');

Feature('Like and Unlike Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('Like And Unlike', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-box a');
  const firstRestoran = locate('.restaurant-box a').first();
  const firstRestoranTitle = await I.grabTextFrom(firstRestoran);
  I.click(firstRestoran);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.detail-info');

  const likedRestoranTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestoranTitle, likedRestoranTitle);

  I.seeElement('#hamburger-button', 'a[href="#/like"]');
  I.click('a[href="#/like"]');

  I.seeElement('.restaurant-box a');
  const favoritedRestoran = locate('.restaurant-box a').first();
  const favoritedRestoranTitle = await I.grabTextFrom(favoritedRestoran);

  I.click(favoritedRestoran);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.seeElement('#hamburger-button', 'a[href="#/like"]');
  I.click('a[href="#/like"]');

  I.dontSee(favoritedRestoranTitle);
});
