import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";


var mobileMenu = new MobileMenu();
// var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"), "85%"); //feature
new RevealOnScroll($(".testimonial"), "60%"); //testimonials

var stickyHeader = new StickyHeader();