import backOne from "../assets/images/back-1.jpg"
import backTwo from "../assets/images/back-2.jpg"
import backThree from "../assets/images/back-3.jpg"
import backFour from "../assets/images/back-4.jpg"
import backFive from "../assets/images/back-5.jpg"
import kristineOne from "../assets/images/kristine-1.jpg"
import kristineTwo from "../assets/images/kristine-2.jpg"
import imageOne from "../assets/images/1.jpg"
import imageTwo from "../assets/images/2.jpg"
import imageThree from "../assets/images/3.jpg"
import imageFour from "../assets/images/4.jpg"
import imageFive from "../assets/images/5.jpg"
import imageSix from "../assets/images/6.jpg"
import imageSeven from "../assets/images/7.jpg"
import imageEight from "../assets/images/8.jpg"
import imageNine from "../assets/images/9.jpg"
import imageTen from "../assets/images/10.jpg"
import imageEleven from "../assets/images/11.jpg"

export type GalleryImage = {
  src: ImageMetadata
  alt: string
  caption: string
}

/**
 * The original portfolio order is preserved exactly. Alt text was absent in
 * the Gatsby source and is added here based on the photographs themselves.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: backOne,
    alt: "Burgundy, blush and ivory wedding bouquet with mixed greenery",
    caption: "Burgundy, blush and ivory wedding bouquet",
  },
  {
    src: backTwo,
    alt: "Bridal bouquet, boutonnière and red rose petals",
    caption: "Bridal bouquet and boutonnière",
  },
  {
    src: backThree,
    alt: "White anemone and burgundy calla lily wedding bouquet",
    caption: "White and burgundy wedding bouquet",
  },
  {
    src: backFour,
    alt: "Colourful burgundy and green wedding bouquet",
    caption: "Colourful burgundy and green bouquet",
  },
  {
    src: backFive,
    alt: "White calla lilies, roses and burgundy accents",
    caption: "Calla lilies, roses and burgundy accents",
  },
  {
    src: kristineOne,
    alt: "Bride and bridesmaids in turquoise dresses holding colourful bouquets",
    caption: "Bride and bridesmaids",
  },
  {
    src: kristineTwo,
    alt: "Bride and groom walking through a garden with a colourful bridal bouquet",
    caption: "Garden wedding portraits",
  },
  {
    src: imageOne,
    alt: "Bridesmaids in pastel dresses holding soft green and white bouquets",
    caption: "Bridesmaids with green and white bouquets",
  },
  {
    src: imageTwo,
    alt: "Bride holding a white and peach rose bouquet",
    caption: "White and peach rose bouquet",
  },
  {
    src: imageThree,
    alt: "Bride and groom with a purple and pink bridal bouquet",
    caption: "Purple and pink bridal bouquet",
  },
  {
    src: imageFour,
    alt: "Bride and groom in an outdoor garden with a green and white bouquet",
    caption: "Outdoor wedding portraits",
  },
  {
    src: imageFive,
    alt: "Bridesmaids in emerald dresses holding white bouquets with the bride",
    caption: "Bridesmaids in emerald dresses",
  },
  {
    src: imageSix,
    alt: "Boutonnière with blue thistle and greenery beside a cigar and matches",
    caption: "Blue thistle boutonnière",
  },
  {
    src: imageSeven,
    alt: "Bride and groom holding hands with a white and blue boutonnière",
    caption: "White and blue boutonnière",
  },
  {
    src: imageEight,
    alt: "Blush and cream bridal bouquet on a lace wedding dress",
    caption: "Blush and cream bridal bouquet",
  },
  {
    src: imageNine,
    alt: "Bride and groom at a stone doorway with a white and pink bouquet",
    caption: "Stone doorway wedding portraits",
  },
  {
    src: imageTen,
    alt: "Romantic blush, burgundy and greenery bridal bouquet",
    caption: "Blush and burgundy bridal bouquet",
  },
  {
    src: imageEleven,
    alt: "Wedding party in burgundy dresses with the bride, groom and flower girl",
    caption: "Wedding party portraits",
  },
]

export const featuredImages = [
  galleryImages[2],
  galleryImages[6],
  galleryImages[16],
] as const

/**
 * Art-directed selection for the homepage collage. Each image shows a
 * different part of the day: portraits, the wedding party, bouquets and
 * personal flowers.
 */
export const homeFeaturedImages = {
  main: galleryImages[15],
  top: galleryImages[7],
  detail: galleryImages[0],
  accent: galleryImages[12],
} as const
