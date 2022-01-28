const SHOP_DATA = [
  {
    id: 1,
    title: "Suits",
    routeName: "suits",
    items: [
      {
        id: 1,
        name: "Black Brim",
        imageUrl:
          "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 25,
      },
      {
        id: 2,
        name: " Grey Calvin Klein",
        imageUrl:
          "https://images.unsplash.com/flagged/photo-1567194974473-c866a1ba88d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 18,
      },
      {
        id: 3,
        name: " Casual Brooks Brothers",
        imageUrl:
          "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 35,
      },
      {
        id: 4,
        name: "J Crew classic grey",
        imageUrl:
          "https://images.unsplash.com/photo-1604914509335-9001944f23d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 25,
      },
      {
        id: 5,
        name: "Green Burberry",
        imageUrl:
          "https://images.unsplash.com/photo-1584940120743-8981ca35b012?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 18,
      },
      {
        id: 6,
        name: "Italian Stretch",
        imageUrl:
          "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 14,
      },
      {
        id: 7,
        name: "Daily Grind",
        imageUrl:
          "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 18,
      },
      {
        id: 8,
        name: "Jetsetter Stretch",
        imageUrl:
          "https://images.unsplash.com/photo-1589458223095-03eee50f0054?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 14,
      },
      {
        id: 9,
        name: "Grey Armani",
        imageUrl:
          "https://images.unsplash.com/photo-1543132220-7bc04a0e790a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: "Mens Shoe",
    routeName: "MensShoe",
    items: [
      {
        id: 10,
        name: "Fifth Avenue Cap-Toe",
        imageUrl:
          "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwbff6785f/images/2.1/mens-shoes/fifthave-5735-walnut-angle-web.jpg?sw=736&sh=736&sm=fit",
        price: 220,
      },
      {
        id: 11,
        name: "Dean Oxfords",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0175/8496/products/color_black_1_dean_oxford_1000x1000.jpg?v=1618340935,%20//cdn.shopify.com/s/files/1/0175/8496/products/color_black_1_dean_oxford_750x750.jpg?v=1618340935%20,%20//cdn.shopify.com/s/files/1/0175/8496/products/color_black_1_dean_oxford_450x450.jpg?v=1618340935,%20//cdn.shopify.com/s/files/1/0175/8496/products/color_black_1_dean_oxford_150x150.jpg?v=1618340935",
        price: 280,
      },
      {
        id: 12,
        name: "Strandmok Cap-Toe",
        imageUrl:
          "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw554930a0/images/2.1/mens-shoes/strandmok5555-black-angle-web.jpg?sw=736&sh=736&sm=fit",
        price: 110,
      },
      {
        id: 13,
        name: "Derby Floral",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQufCqmiaF_ZNGPAHFkDjtV3hUBaU5bnRYOvRI13HkksADl_iLeD-Nf0x4_JoF-mQg3weD5q692DgwuNrgcVrmVdhf3qcng-4q4oHbuWP8&usqp=CAE",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Womens Shoe",
    routeName: "WomenShoe",
    items: [
      {
        id: 18,
        name: "Sam Edelman Hazel",
        imageUrl:
          "https://m.media-amazon.com/images/I/61lu9A28fKL._AC_SR700,525_.jpg",
        price: 125,
      },
      {
        id: 19,
        name: "Christian Louboutin",
        imageUrl:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQi7i6PefxL5V4wVSZ_8VVdcE2RKybud_y7aSwi5wvvxg4sSIaLToFBZeGkGsgUa42AbFEdFyTgM55LKak9cN56XEQ100ovE913FtaJE8&usqp=CAE",
        price: 90,
      },
      {
        id: 20,
        name: "Ted Baker",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTsBAj17xtYq76m0QoubH39dhbqR26YMPU7cZFaoeuGA00yxfZ2lVuBaNI6BFKB99hzp7qh9YSAnh9CM0l4KWTQNIdB0TiaW09rr_It1u6pentZs09wHRwfg&usqp=CAE",
        price: 90,
      },
      {
        id: 21,
        name: "J.Crew Pumps",
        imageUrl:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT60Y2bOyM6U8avhdfF9dRQVqA7JA4vELFNDC__saI4gc_n9Gsh-kyJpKlli8aorGaQnic34qhRIm1-TZEPb6SlF1yfDxvAeCnKHx3weVjW6BenSm1Gom7B_Q&usqp=CAE",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Bright Haze",
        imageUrl:
          "https://images.unsplash.com/photo-1560253034-1a9c043ffb28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 25,
      },
      {
        id: 24,
        name: "Sherpa Sweater",
        imageUrl:
          "https://images.unsplash.com/photo-1591338459467-bd36100b07c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1379&q=80",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1593201562586-c1dc00ec0511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1593380090147-a2192b72a9ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80",
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
];
export default SHOP_DATA;