/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */

 const homePage = new Layout("Home","https://epam.com",{css: 'body'});

 const navbar = new Element("Navbar", {css: 'header'});
 