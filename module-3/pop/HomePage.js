/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */

const homePage = new Layout("Home", "https://epam.com", { css: 'body' });

const elementsContainer = new Element("Body", {css: 'body'});

const navbar = new Element("Navbar", { css: 'header' });

const backgroundVideo = new Element("Background Video", { css: 'background-video-ui background-video--narrow' });
const sliderTitle = new Element("Slider Title", { css: 'header' });
backgroundVideo.addChildren(sliderTitle);

const footer = new Element("Footer", { css: 'footer' });

elementsContainer.addChildren(navbar);
elementsContainer.addChildren(backgroundVideo);
elementsContainer.addChildren(footer);
homePage.addChildren(elementsContainer);

