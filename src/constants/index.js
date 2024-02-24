// import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
// import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

import { secure, service, shipping, star, facebook, instagram, twitter } from "../assets/icons";
import { headphone1, headphone2, headphone3, customer1, customer2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#product-detail", label: "Product Detail" },
    { href: "#contact-us", label: "Contact Us" },
];


export const statistics = [
    { value: '48 hours', label: 'Battery Life' },
    { value: '3 years', label: `Warranty` },
    { value: '10k+', label: 'Customers' },
];
export const headphones = [
    {
        name: "h1",
        headphone: headphone1,
    },
    {
        name: "h2",
        headphone: headphone2,
    },
    {
        name: "h3",
        headphone: headphone3,
    },
];


export const detail = [
    {
       title: "Name",
       text: "SonicWave",
    },

    {
        title: "Price",
        text: "$348.00",
    },
    {
        title: "Product Dimensions",
        text: "7.27 x 3.03 x 9.94 Inches",
    },
    {
        title: "Weight",
        text: "13 Ounces",
    },
    {
        title: "Connectivity",
        text: "Bluetooth 5.0 wireless technology",
    },
    {
        title: "Multi Device",
        text: "Yes",
    },
    {
        title: "Noise Canceling",
        text: "Yes",
    },
    {
        title: "Battery Life",
        text: "48 Hours",
    },
    {
        title: "Charging Time",
        text: "30 Minutes",
    },
 
  
];

export const services = [
    {
        imgURL: shipping,
        label: "Free shipping",
        describe: "Efficient and reliable, our shipping ensures your Sonic experience begins promptly."
    },
    {
        imgURL: secure,
        label: "Secure",
        describe: "Rest assured, Sonic provides secure payment options to ensure peace of mind with every transaction."
    },
    {
        imgURL: service,
        label: "Customer service",
        describe: "Our dedicated customer service team is always here to assist you with any inquiries or concerns."
    },
];



export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Emily Carter',
        rating: 4.9,
        feedback: "These headphones are a game-changer! The sound quality is phenomenal, noise-cancelling is superb, and they're incredibly comfortable. I'm beyond satisfied with my purchase."
    },
    {
        imgURL: customer2,
        customerName: 'Maxwell Saunders',
        rating: 4.5,
        feedback: "These headphones exceeded my expectations! Great built quality, long battery life, stylish design, and amazing sound. Highly recommend!"
    }
];


export const footerLinks = [

    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Directions", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
          
        ],
    },

    {
        title: "Promotions & Discounts",
        links: [
            { name: "Student", link: "/" },
            { name: "Military", link: "/" },
            { name: "Teacher", link: "/" },
            { name: "Medical", link: "/" },
            { name: "Birthday", link: "/" },
        ],
    },

    {
        title: "Get in touch",
        links: [
            { name: "customer@sonic.com", link: "mailto:customer@sonic.com" },
            { name: "+123456789", link: "tel:+987654321" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
