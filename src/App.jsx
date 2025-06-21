import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Mainroutes from "./routes/Mainroutes";
import { asyncCurrentUser } from "./store/actions/UsersAction";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProducts } from "./store/actions/ProductsAction";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let existDB = JSON.parse(localStorage.getItem("userdb"));
    if (!existDB) {
      const admin = {
        id: "0",
        username: "Admin",
        email: "admin@admin.com",
        password: "000000",
        isAdmin: true,
      };

      localStorage.setItem("userdb", JSON.stringify([admin]));
    }
  }, []);

  useEffect(() => {
    let existDB = JSON.parse(localStorage.getItem("productdb"));
    if (!existDB) {
      const products = [
        {
          id: "TMHHjYU2HuT9k5RJcvdjH",
          title: "Classic Men's White Shirt",
          price: "899",
          description:
            "Every wardrobe needs a Classic White Shirt, and this one delivers premium quality with everyday style. Tailored from breathable cotton, it offers a crisp look perfect for formal meetings or casual outings. The slim-fit cut flatters your shape while allowing comfortable movement. With buttoned cuffs and a sharp collar, this shirt pairs effortlessly with jeans or trousers. It’s machine washable, easy to maintain, and ideal for layering under blazers or wearing on its own for a clean, polished look.",
          category: "men's clothing",
          image:
            "https://plus.unsplash.com/premium_photo-1727942416727-9f16462ef11b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        },
        {
          id: "Tk25qC0UtuZwwhmVfpdqr",
          title: "Denim Jacket",
          price: "1399",
          description:
            "This rugged yet stylish Men's Denim Jacket is a timeless wardrobe staple. Designed with a relaxed fit, dual chest pockets, and buttoned front, it brings effortless edge to your look. The durable denim fabric offers a structured feel and keeps you warm during transitional weather. Pair it with a white t-shirt and boots for a classic vibe, or layer over a hoodie for a modern twist. It’s perfect for travel, casual days, or night outs.",
          category: "men's clothing",
          image:
            "https://images.unsplash.com/photo-1614697688184-66a55d41e298?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fERlbmltJTIwSmFja2V0fGVufDB8fDB8fHww",
        },
        {
          id: "If8VG2RRv0dhZFHjzKsmx",
          title: "Casual Sports Hoodie",
          price: "999",
          description:
            "Our Casual Men's Hoodie offers unmatched comfort and a sporty aesthetic. Made from a soft blend of cotton and polyester, this hoodie features a drawstring hood, front kangaroo pocket, and ribbed cuffs and hem. It’s perfect for workouts, travel, or just lounging at home. The minimal branding and solid color design make it a versatile option for any casual outfit. Easy to maintain and machine washable, it’s a daily go-to for men on the move.",
          category: "men's clothing",
          image:
            "https://plus.unsplash.com/premium_photo-1727967194091-05d5f317f77e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fENhc3VhbCUyMFNwb3J0cyUyMEhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: "I_7ePwLtPdWgAQqH4e9SL",
          title: "Women's Summer Floral Dress",
          price: "1399",
          description:
            "Celebrate sunny days with our Women's Summer Floral Dress, designed for ease and beauty. The soft, flowing fabric drapes effortlessly and keeps you cool in warmer weather. Featuring adjustable straps, a flared silhouette, and delicate floral patterns, this dress adds charm to any occasion. Whether you're at the beach, brunch, or a casual day out, it provides a flattering fit and all-day comfort. Lightweight and breathable, it’s the perfect summer essential.",
          category: "woman's clothing",
          image:
            "https://images.unsplash.com/photo-1652212029659-771ff516b0b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V29tZW4ncyUyMEZsb3JhbCUyMFN1bW1lciUyMERyZXNzfGVufDB8fDB8fHww",
        },

        {
          id: "XEOLK8sClGK-lMj0vhm_v",
          title: "Boys' Cotton Casual Shirt",
          price: "799",
          description:
            "Upgrade your child’s wardrobe with this Boys' Cotton Casual Shirt, tailored for both comfort and style. Crafted from soft, breathable cotton, it features a classic checkered design, button-up front, and a relaxed fit—perfect for playdates or family outings. The durable stitching ensures long-lasting wear, while the vibrant colors make it fun to wear all day.",
          category: "kid's clothing",
          image:
            "https://images.unsplash.com/photo-1664982803698-b6b514e9928b?w=900&auto=format&fit=crop&q=60",
        },
        {
          id: "A12B23C34D45E56F67G7",
          title: "Girls' Floral Summer Dress",
          price: "699",
          description:
            "Lightweight cotton dress with pastel floral prints, flutter sleeves, and a flared skirt—ideal for warm-weather fun and family gatherings.",
          category: "kid's clothing",
          image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&auto=format&fit=crop&q=60",
        },
        {
          id: "H89I90J01K12L23M34N4",
          title: "Toddler Boys' Denim Overalls",
          price: "999",
          description:
            "Durable denim overalls with adjustable straps, side snaps for easy changing, and playful embroidered pocket—perfect for everyday adventures.",
          category: "kid's clothing",
          image:
            "https://plus.unsplash.com/premium_photo-1693242804074-20a78966f4e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9kZGxlciUyMEJveXMnJTIwRGVuaW0lMjBPdmVyYWxsc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: "O45P56Q67R78S89T90U0",
          title: "Unisex Kids' Hoodie",
          price: "899",
          description:
            "Soft fleece hoodie available in vibrant solid colors, featuring a kangaroo pocket and ribbed cuffs—great for school or outdoor play.",
          category: "kid's clothing",
          image:
            "https://images.unsplash.com/photo-1701673072655-0b7c89ec2138?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VW5pc2V4JTIwS2lkcyclMjBIb29kaWV8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: "V11W22X33Y44Z55A66B6",
          title: "Boys' Printed T‑Shirt Pack (3‑pack)",
          price: "1199",
          description:
            "Set of three cotton tees featuring fun prints and vibrant colors—ideal for everyday wear and easy mix-and-match.",
          category: "kid's clothing",
          image:
            "https://images.unsplash.com/photo-1628068431732-b8d752c52523?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Qm95cyclMjBQcmludGVkJTIwVCVFMiU4MCU5MVNoaXJ0JTIwUGFjayUyMCgzJUUyJTgwJTkxcGFjayl8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: "C77D88E99F00G11H22I3",
          title: "Girls' Leggings Set (2‑pack)",
          price: "799",
          description:
            "Stretchy cotton blend leggings with cute patterns and comfortable elastic waist—perfect under dresses or with tees.",
          category: "kid's clothing",
          image:
            "https://plus.unsplash.com/premium_photo-1723553201287-ab9a8fbe57d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2lybHMnJTIwTGVnZ2luZ3MlMjBTZXQlMjAoMiVFMiU4MCU5MXBhY2spfGVufDB8fDB8fHww",
        },
        {
          id: "J33K44L55M66N77O88P8",
          title: "Men's Slim Fit Oxford Shirt",
          price: "1599",
          description:
            "Tailored slim-fit Oxford shirt made from crisp cotton—needle-stitched buttons and adjustable cuffs for a sleek office or casual look.",
          category: "men's clothing",
          image:
            "https://plus.unsplash.com/premium_photo-1727942421317-382428c9ac44?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVuJ3MlMjBTbGltJTIwRml0JTIwT3hmb3JkJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: "Q99R00S11T22U33V44W4",
          title: "Men's Linen Short‑Sleeve Shirt",
          price: "1799",
          description:
            "Breathable linen shirt with a relaxed fit, button-down collar, and side vents—ideal for summer vacations or casual events.",
          category: "men's clothing",
          image:
            "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=900&auto=format&fit=crop&q=60",
        },
        {
          id: "X55Y66Z77A88B99C00D0",
          title: "Men's Puffer Vest",
          price: "2299",
          description:
            "Lightweight insulated vest with quilted design, stand-up collar, and zip pockets—great for layering on chilly mornings.",
          category: "men's clothing",
          image:
            "https://plus.unsplash.com/premium_photo-1707932485795-1d0aed727376?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVuJ3MlMjBQdWZmZXIlMjBWZXN0fGVufDB8fDB8fHww",
        },
        {
          id: "E11F22G33H44I55J66K6",
          title: "Men's Skinny Joggers",
          price: "1399",
          description:
            "Tapered-leg joggers made with stretch cotton and elastic waist—combining comfort and streetwear style.",
          category: "men's clothing",
          image:
            "https://images.unsplash.com/photo-1704300553191-d530728380a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhY2twYW50JTIwbWVufGVufDB8fDB8fHww",
        },
        {
          id: "L77M88N99O00P11Q22R2",
          title: "Men's Thermal Henley",
          price: "1299",
          description:
            "Waffle-knit thermal Henley shirt with button placket, designed to provide warmth and rugged flair for cool-weather layering.",
          category: "Men's clothing",
          image:
            "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=900&auto=format&fit=crop&q=60",
        },
        {
          id: "S33T44U55V66W77X88Y8",
          title: "Women's Ruffle Sleeve Blouse",
          price: "1499",
          description:
            "Flowy chiffon blouse with delicate ruffle sleeves, keyhole back, and soft pleats—perfect for office or brunch.",
          category: "woman's clothing",
          image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&auto=format&fit=crop&q=60",
        },
        {
          id: "Z99A00B11C22D33E44F4",
          title: "Women's High‑Waist Skinny Jeans",
          price: "1999",
          description:
            "Stretch-denim skinny jeans with high rise and ankle length—designed for a flattering silhouette and all-day comfort.",
          category: "woman's clothing",
          image:
            "https://images.unsplash.com/photo-1547410701-73b5a0ada51d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V29tZW4ncyUyMEhpZ2glRTIlODAlOTFXYWlzdCUyMFNraW5ueSUyMEplYW5zfGVufDB8fDB8fHww",
        },
        {
          id: "G55H66I77J88K99L00M0",
          title: "Women's Cotton Sundress",
          price: "1699",
          description:
            "Breathable cotton sundress with adjustable straps, smocked bodice, and flared skirt—perfect for summer days out.",
          category: "woman's clothing",
          image:
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=60",
        },
        {
          id: "N11O22P33Q44R55S66T6",
          title: "Women's Knit Cardigan",
          price: "1799",
          description:
            "Cozy cable-knit cardigan with button front and drop shoulders—ideal for layering during transitional seasons.",
          category: "woman's clothing",
          image:
            "https://plus.unsplash.com/premium_photo-1664391753897-b12da2576eb5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V29tZW4ncyUyMEtuaXQlMjBDYXJkaWdhbnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: "U77V88W99X00Y11Z22A2",
          title: "Women's Ponte Pencil Skirt",
          price: "1599",
          description:
            "Structured ponte-knit pencil skirt with back slit and concealed zipper—office-ready and comfortable.",
          category: "woman's clothing",
          image:
            "https://images.unsplash.com/photo-1646054224885-f978f5798312?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V29tZW4ncyUyMFBvbnRlJTIwUGVuY2lsJTIwU2tpcnR8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: "B33C44D55E66F77G88H8",
          title: "Women's Graphic Tee",
          price: "899",
          description:
            "100% cotton crewneck tee with bold graphic print—soft, casual, and easy to style with jeans or skirts.",
          category: "woman's clothing",
          image:
            "https://images.unsplash.com/photo-1611078844630-85c0a9a34623?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V29tZW4ncyUyMEdyYXBoaWMlMjBUZWV8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: "I99J00K11L22M33N44O4",
          title: "Women's Stretch Palazzo Pants",
          price: "1899",
          description:
            "Flowy palazzo pants with elastic waist and breathable fabric—great for relaxed elegance at home or on vacation.",
          category: "woman's clothing",
          image:
            "https://images.unsplash.com/photo-1621767527600-82962221c6b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29tZW4ncyUyMFN0cmV0Y2glMjBQYWxhenpvJTIwUGFudHN8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: "P55Q66R77S88T99U00V0",
          title: "Women's Moto Leather Jacket",
          price: "3499",
          description:
            "Faux leather moto jacket with asymmetric zip, quilted shoulders, and contoured fit—adds edge to any outfit.",
          category: "woman's clothing",
          image:
            "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=900&auto=format&fit=crop&q=60",
        },
        {
          id: "W11X22Y33Z44A55B66C6",
          title: "Women's Wrap Midi Dress",
          price: "2099",
          description:
            "Elegant wrap-style midi dress in stretchy jersey knit, with V-neck and soft drape—versatile for both day and evening.",
          category: "woman's clothing",
          image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&auto=format&fit=crop&q=60",
        },
      ];

      localStorage.setItem("productdb", JSON.stringify(products));
    }
  }, []);

  const user = useSelector((state) => state.userReducer.users);
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    !user && dispatch(asyncCurrentUser());
  }, [user]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products]);

  return (
    <div className="relative px-3 *:bg-[#fdfbf5] w-full md:py-4 md:px-6 ">
      <NavBar />
      <Mainroutes />
      <Footer />
    </div>
  );
};

export default App;
