import Heroimg1 from "./assets/HeroImg1.jpg";
import Heroimg2 from "./assets/HeroImg2.jpg";
// featured products--------------------
import featuredImg1 from "./assets/leatherRecliningChair.jpg";
import featuredImg2 from "./assets/smartwatch.jpg";
import featuredImg3 from "./assets/menwears.jpg";
import featuredImg4 from "./assets/womenBeautyset.jpg";

export const HerosectImg = [
  {
    id: 1,
    Himage: Heroimg1,
    HeroTitle: "Welcome to EasyShop:Discover the Best Deals on Quality Products",
    HeroSubtitle:
      "Your One-Stop Online Shopping DestinationShop from the comfort of your own home, 24/7, and enjoy",
    clsName: "text-1",
    buttonClass: "heroCont-btn",
    buttonText: "Shop Here",
    url: "/ProductPage",
  },
  {
    id: 2,
    Himage: Heroimg2,
    HeroTitle: "Get Exclusive Discounts and Free Shipping",
    HeroSubtitle:"Join our loyalty program and enjoy rewards on every purchase",
    clsName2: "text-2",
    buttonId: "heroProd-btn",
    buttonText: "Contact Here",
    url: "/ContactPage",
  },
];

export const featuredProducts = [
  {
    id: 101,
    image: featuredImg1,
    Name: "leather Reclining Chair",
    price: 9.99,
    rating: 4.5,
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi facilis aspernatur itaque, perferendis sed possimus iusto explicabo deserunt cumque numquam quod magni dolore soluta a tempora, nemo, corrupti assumenda?",
  },
  {
    id: 102,
    image: featuredImg2,
    Name: "smart watch",
    price: 12.99,
    rating: 5,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi facilis aspernatur itaque, perferendis sed possimus iusto explicabo deserunt cumque numquam quod magni dolore soluta a tempora, nemo, corrupti assumenda?",
  },
  {
    id: 103,
    image: featuredImg3,
    Name: "men wears",
    price: 7.99,
    rating: 4.2,
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi facilis aspernatur itaque, perferendis sed possimus iusto explicabo deserunt cumque numquam quod magni dolore soluta a tempora, nemo, corrupti assumenda?",
  },
  {
    id: 104,
    image: featuredImg4,
    Name: "women Beauty set",
    price: 2.99,
    rating: 3.5,
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi facilis aspernatur itaque, perferendis sed possimus iusto explicabo deserunt cumque numquam quod magni dolore soluta a tempora, nemo, corrupti assumenda?",
  },
];
