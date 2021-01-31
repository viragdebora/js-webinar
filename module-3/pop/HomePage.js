/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */

const homePage = new Layout("Home", "https://epam.com", { css: 'body' });

const navbar = new Elements("Navbar", { css: 'header' });
const services = navbar.get("Services");
const howWeDoIt = navbar.get("How We Do It");
const ourWork = navbar.get("Our Work");
const insights = navbar.get("Insights");
const about = navbar.get("About");
const careers = navbar.get("Careers");

const backgroundVideo = new Element("Background Video", { css: 'background-video-ui background-video--narrow' });
const sliderTitle = new Element("Slider Title", { css: 'header' });
backgroundVideo.addChildren(sliderTitle);

const footer = new Element("Footer", { css: 'footer' });

homePage.addChildren(navbar);
homePage.addChildren(backgroundVideo);
homePage.addChildren(footer);

module.export = homePage;

