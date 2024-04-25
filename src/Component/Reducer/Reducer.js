import React, { createContext, useReducer } from 'react'

const context = createContext()

export const initialState = {
  List: [
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/f/7/g/xxl-pink-1-otus-original-imagjg3gbywghznh.jpeg?q=70",
      name: "Men Regular Fit Washed Cut Away Collar...",
      price: "₹449",
      discount: "₹349",
      quantity: "1",
      product: "MENS",
      brand: "Snitch"

    },

    {
      id: 2,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/m/y/m-st1-vebnor-original-imagn69kcwphkfrf.jpeg?q=70",
      name: "Men Regular Fit ",
      price: "₹678",
      discount: "₹349",
      quantity: "1",
      product: "MENS",
      brand: "Snitch"
    },



    {
      id: 3,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/1/o/p/-original-imagx7pgxfnr5uny.jpeg?q=70",
      name: "Men Solid Round Neck Cotton Blend Green...",
      price: "₹449",
      discount: "₹349",
      quantity: "1",
      product: "MENS",
      brand: "Snitch"

    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/6/l/m/xl-c-block-951-953-tqh-original-imagntnugf8ynvtz.jpeg?q=70",
      name: "Men Solid Round Neck ",
      price: "₹599",
      discount: "₹449",
      quantity: "1",
      product: "MENS",
      brand: "WROGN"

    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/300/300/xif0q/jean/e/k/e/28-black-cargo-01-dpocket-nayak-fashion-original-imagvsj799rsbfvg.jpeg?q=90",
      name: "Men Slim Mid Rise Dark Black Jeans",
      price: "₹1999",
      discount: "₹1749",
      quantity: "1",
      product: "MENS",
      "brand": "Roadster"
    },
    {
      id:6,
      image: "https://rukminim2.flixcart.com/image/300/300/xif0q/jean/n/i/p/32-fmjen2249-flying-machine-original-imagt8etwecghb8p.jpeg?q=90",
      name: "Men Slim Mid Rise Dark ",
      price: "₹1999",
      discount: "₹1549",
      quantity: "1",
      product: "MENS",
      "brand": "Roadster"
    },
    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/612/612/l51d30w0/blazer/e/p/a/48-118454902-jack-jones-original-imagfsxnhyfwff62.jpeg?q=70",
      name: "Cotton blend Solid Coat For Men",
      price: "₹2449",
      discount: "₹2349",
      quantity: "1",
      product: "MENS",
      brand: "PETER ENGLAND"
    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/612/612/kyrlifk0/blazer/o/s/g/44-pebzotlby15203-peter-england-original-imagaxce3tvchqvg.jpeg?q=70",
      name: "Cotton blend Solid Coat",
      price: "₹3200",
      discount: "₹2999",
      quantity: "1",
      product: "MENS",
      brand: "PETER ENGLAND"
    },
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/top/u/k/4/m-coller-tops-style-prezone-original-imagjuvvhzxhmf4y.jpeg?q=70",
      name: "Women Boxy, Regular Fit",
      price: "₹449",
      discount: "₹349",
      quantity: "1",
      product: "women",
      brand: "SASSAFRAS "

    },
    {
      id: 2,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/top/v/c/c/s-shtop41631-shae-by-sassafras-original-imagw5nnxdbkkhny.jpeg?q=70",
      name: "Women Printed Crepe Straight Kurta",
      price: "₹679",
      discount: "₹349",
      quantity: "1",
      product: "women",
      brand: "SASSAFRAS "
    },
    {
      id: 3,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/skirt/2/a/p/xs-ss-01001-skirt-femvy-original-imagyrfqvxjnuez6.jpeg?q=70",
      name: "Women Solid A- line Black Skirt",
      price: "₹449",
      discount: "₹389",
      quantity: "1",
      product: "women",
      brand: "POPWINGS"
    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/skirt/u/p/l/l-1-p-popt11306-popwings-original-imagsur5h87ctbfm.jpeg?q=70",
      name: "Women Solid A-line Green Skirt",
      price: "₹549",
      discount: "₹449",
      quantity: "1",
      product: "women",
      brand: "POPWINGS"


    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/1/5/p/free-30251-pithavadiwala-unstitched-original-imagujffkynq9xz2.jpeg?q=70",
      name: "Paisley Kanjivaram Cotton Blend Saree ",
      price: "₹1999",
      discount: "₹1749",
      quantity: "1",
      product: "women",
      brand: "Sinsay "
    },
    {
      id: 6,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/5/o/9/free-fk-ys-p1-kalavati-green-yashika-unstitched-original-imagxuymfg42de7g.jpeg?q=70",
      name: "Paisley Kanjivaram Silk Blend Saree",
      price: "₹449",
      discount: "₹349",
      quantity: "1",
      product: "women",
      brand: "Sinsay "
    },
    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/gown/4/i/u/na-m-3-4-sleeve-stitched-2511-sp-anarkali-venusy-na-original-imaghs5f2wwgaf6y.jpeg?q=70",
      name: "Women Printed  Kurta",
      price: "₹449",
      discount: "₹349",
      quantity: "1",
      product: "women",
      brand: "ZWERLON "
    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/gown/1/5/n/na-xl-half-sleeve-stitched-ss-96-femvy-na-original-imagwvgn3nm3pqkv.jpeg?q=70 ",
      name: "Women Boxy",
      price: "₹449",
      discount: "₹349",
      quantity: "1",
      product: "women",
      brand: "ZWERLON "
    },
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/4/4/r/15-16-years-hft-23hr5-icj-na-tq2-be-sa-hellcat-original-imagn9y6ma4w7wnz.jpeg?q=70",
      name: "Boys Printed Cotton Blend T Shirt",
      price: "₹449",
      discount: "₹349",
      quantity: "1",
      product: "kids",
      brand: "Snitch"

    },
    {
      id: 2,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/h/k/p/13-14-years-gbs38374flbfst11-game-begins-original-imagusqszdje5fkg.jpeg?q=70",
      name: "Boys Printed T Shirt",
      price: "₹679",
      discount: "₹349",
      quantity: "1",
      product: "kids",
      brand: "Snitch"
    },
    {
      id: 3,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/j/i/4/6-7-years-printed-emblica-original-imagpyf2hzfp6kms.jpeg?q=70",
      name: "Boys T Shirt",
      price: "₹599",
      discount: "₹449",
      quantity: "1",
      product: "kids",
      brand: "WROGN"
    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/6/o/n/3-4-years-gf0070-d-grn-fashion-dream-original-imaghh7zhdhpsjby.jpeg?q=70",
      name: "Girls Calf Length Party Dress ",
      price: "₹499",
      discount: "₹389",
      quantity: "1",
      product: "kids",
      brand: "WROGN"
    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/z/h/q/13-14-years-gf0057-blu-fashion-dream-original-imaghm9z6cycmjj2.jpeg?q=70",
      name: "Girls Party Dress",
      price: "₹569",
      discount: "₹469",
      quantity: "1",
      product: "kids",
      brand: "Roadster"
    },
    {
      id: 6,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/j/q/r/6-7-years-boy23-pt10-red-alan-jones-original-imagx8psazfcc68y.jpeg?q=70",
      name: "Boys Full Slevee T Shirt",
      price: "₹449",
      discount: "₹349",
      quantity: "1",
      product: "kids",
      brand: "Roadster"
    },
    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-lehenga-choli/j/w/i/3-4-years-bk-yelloe-gulab-rayasa-original-imagtbkkqrtjahkm.jpeg?q=70",
      name: "Girls dSjo dress",
      price: "₹679",
      discount: "₹600",
      quantity: "1",
      product: "kids",
      brand: "PETER ENGLAND"
    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/0/d/k/5-6-years-provogue103-3116-provogue-original-imaghudy3yd9f2bq.jpeg?q=70",
      name: "Boys Printed Shirt",
      price: "₹449",
      discount: "₹349",
      quantity: "1",
      product: "kids",
      brand: "PETER ENGLAND"
    },
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70",
      name: "Apple iPhone 14 (Black, 128 GB)",
      price: "₹69,900",
      discount: "₹56,999",
      quantity: "1",
      product: "mobile",
      brand: "APPLE"

    },
    {
      id: 2,
      image: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
      name: "Apple iPhone 13 (Blue, 128 GB)",
      price: "₹59,900",
      discount: "₹52,999",
      quantity: "1",
      product: "mobile",
      brand: "APPLE"


    },
    {
      id: 3,
      image: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/8/z/w/iphone-13-mlph3hn-a-apple-original-imag6vzzhrxgazsg.jpeg?q=70",
      name: "Apple iPhone 15 (Pink, 128 GB)",
      price: "₹89,900",
      discount: "₹79,999",
      quantity: "1",
      product: "mobile",
      brand: "APPLE"
    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/image/312/312/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=70",
      name: "Apple iPhone 13 (Green, 128 GB)",
      price: "₹59,900",
      discount: "₹52,999",
      quantity: "1",
      product: "mobile",
      brand: "APPLE"
    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/x/t/-original-imagtc6ffhgm3f2g.jpeg?q=70",
      name: "Apple iPhone 15 (Green, 128 GB)",
      price: "₹89,900",
      discount: "₹79,999",
      quantity: "1",
      product: "mobile",
      brand: "APPLE"
    },
    {
      id: 6,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70",
      name: "Apple iPhone 14 (Purple, 128 GB)",
      price: "₹69,900",
      discount: "₹56,999",
      quantity: "1",
      product: "mobile",
      brand: "APPLE"
    },
    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
      name: "Apple iPhone 15 (Blue, 128 GB)",
      price: "₹89,900",
      discount: "₹79,999",
      quantity: "1",
      product: "mobile",
      brand: "APPLE"
    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=70",
      name: "Apple iPhone 14 (Red, 128 GB)",
      price: "₹69,900",
      discount: "₹56,999",
      quantity: "1",
      product: "mobile",
      brand: "APPLE"
    }
  ],
  Count: 1
}

const reduce = (state, action) => {
  console.log(state, action)
}

const Reducer = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState)
  return (
    <context.Provider value={{ state, dispatch }}>
      <div>
        {children}
      </div>
    </context.Provider>
  )
}

export { Reducer, context }