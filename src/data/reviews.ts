export type Review = {
  name: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  featured?: boolean
  excerpt?: string
  truncated?: boolean
}

/**
 * Reviews supplied by KD Flowers for the website. Wording and reviewer names
 * are reproduced as provided. There are no public review dates in the source
 * material, so no dates are displayed.
 */
export const reviews: Review[] = [
  {
    name: "Larisa Topen",
    rating: 5,
    featured: true,
    excerpt:
      "Working with Kylee from KD Flowers was an absolute pleasure. She was so easy to communicate with from the start and really took the time to listen to my ideas and vision.",
    text: `Working with Kylee from KD Flowers was an absolute pleasure. She was so easy to communicate with from the start and really took the time to listen to my ideas and vision. She asked thoughtful questions and made me feel confident that she truly understood the look I was going for.

Kylee was also very transparent about pricing, and her quote was very reasonable compared to others I had received. I appreciated her honesty and clarity throughout the planning process.

On the wedding day, she completely brought my dreams to life. She even made a special trip to hand-deliver my bouquet to me at the hotel, which was such a thoughtful touch. She handled all of the setup at both the ceremony and reception spaces, and everything looked absolutely beautiful. The flowers were fresh, bright, and exactly what I had imagined.

I couldn’t be happier with how everything turned out and I would highly recommend Kylee at KD Flowers.`,
  },
  {
    name: "Stephanie Thalen",
    rating: 5,
    featured: true,
    excerpt:
      "Kylee was phenomenal to work with. I didn’t have a great idea of what I wanted as I am not terribly creative, but she blew my expectations out of the water.",
    text: `Kylee was phenomenal to work with. I didn’t have a great idea of what I wanted as I am not terribly creative, but she blew my expectations out of the water. The flowers were stunning and we received so many compliments on them. She included the one special flower I requested in all the bouquets and it fit in seamlessly. The colours were so beautiful together.

Kylee was also a dream to work with. She delivered buds for our bud vases and set up our sweetheart table for us, and delivered the girls bouquets where we were getting ready. This made our day stress free! I could not recommend her enough!!!`,
  },
  {
    name: "Melissa Butera",
    rating: 5,
    featured: true,
    excerpt:
      "I couldn't have been happier with the floral arrangements at my wedding, thanks to Kylee. She truly exceeded my expectations with her beautiful creations that perfectly complemented our venue and theme.",
    text: "I couldn't have been happier with the floral arrangements at my wedding, thanks to Kylee. She truly exceeded my expectations with her beautiful creations that perfectly complemented our venue and theme. Not only were the flowers stunning and fresh, but Kylee was incredibly affordable compared to other options we considered. Her attention to detail and creativity really shone through, making our special day even more magical. I highly recommend her services to anyone looking for a talented and budget-friendly florist.",
  },
  {
    name: "Kristi Louise",
    rating: 5,
    text: `Kylee did our flowers for our June 7th wedding and my flower dreams came true! She got all the personal touches I requested and they were even more beautiful than I could have imagined! Her customer service was incredible and we are just so happy!

Thank you ❤️`,
  },
  {
    name: "Sarah Edwards",
    rating: 5,
    featured: true,
    excerpt:
      "Kylee was an amazing choice for our wedding flowers! Right from the start Kylee was super easy to communicate with, she was very friendly and really made my wedding feel like a priority!",
    text: "Kylee was an amazing choice for our wedding flowers! Right from the start Kylee was super easy to communicate with, she was very friendly and really made my wedding feel like a priority! The photos speak for themselves based on how amazing her work was, and I didn’t make it easy on her either! We had a bridal party of 7 groomsmen/bridesmaids (each with a boutonnière and bouquet), a ring bearer, 2 grandparents part of the ceremony who had corsages, 2 signing table pieces and arbor pieces, and confetti. Kylee delivered on all of her promises, and on the morning of the wedding she even went out of her way to the uncooperative hotel staff when locating me to deliver the flowers! We were getting ready at a hotel and while I (the bride) was running around, the hotel front desk told Kylee “there was no wedding here”. Instead of leaving, Kylee went out of her way to look for me, finding me in the lobby and personally making sure I got everything I needed. Long story short - book with KD Flowers for your wedding! You will not be disappointed!!",
  },
  {
    name: "d tota",
    rating: 5,
    truncated: true,
    text: `Our wedding invitation said it all, "nothing fancy... just love" and after explaining what we wanted to Kylee she made...`,
  },
  {
    name: "Raw Performance",
    rating: 5,
    text: "I had an awesome experience working with Kylee for my June 2022 wedding. The bouquets were absolutely stunning - I got so many compliments. She completely captured what I envisioned for my bouquets and table florals and she was so great to work with.",
  },
  {
    name: "Natalie F",
    rating: 5,
    text: "Simply stunning. Kylee went above and beyond putting together the most beautiful arbor and centre pieces and creating our picture perfect bouquets. The flowers were beautiful, budget friendly and she is a breeze to work with. Thank you for being a part of our special day!",
  },
  {
    name: "Madeline Fillmore",
    rating: 5,
    text: "Kylee did an amazing job on the flowers for my wedding - she completely fulfilled my wants in terms of types of flowers and greenery and colour palette, while keeping budget in mind. Would recommend Kylee to anyone!",
  },
  {
    name: "Breana Garagan",
    rating: 5,
    text: "Went to a wedding this weekend and all I can say is WOW!!! The florals were absolutely stunning and I could not take my eyes off of them. Especially the brides bouquet. I highly recommend choosing KD Flowers for your wedding!! Stunning.",
  },
  {
    name: "maryam farrag",
    rating: 5,
    text: "Lovely flower design and great communication! I highly recommend Kylee‘s beautiful taste and craftsmanship.",
  },
  {
    name: "Maguelone de Roquefeuil",
    rating: 5,
    text: "Kylee did an AMAZING job with our wedding flowers. The bouquets, boutonnieres, and corsages were stunning. Thank you for your wonderful services, highly recommend!",
  },
  {
    name: "Torrie de Gelder",
    rating: 5,
    text: `Kylee did an extraordinary job organizing my bouquet! It's exactly what I invisioned it to be like! I'm beyond thankful, she did 1 Bridal, 4 bridesmaids Bouquets, and 5 boutonnieres.

I would recommend her to anyone in a heartbeat!`,
  },
  {
    name: "Kristine",
    rating: 5,
    text: "Kylee was absolutely amazing to work with and literally made all my dreams come true at such a reasonable price too. Our wedding flowers and centerpieces were stunning. Could not have asked for anything more perfect and beautiful ❤💐",
  },
  {
    name: "Jacquelyn King",
    rating: 5,
    text: "Kylee did the flowers for my bridal shower and wedding back in 2012, baby showers in 2013 and 2016 and has done various arrangements for other occasions for us. Her work is always beautifully put together, fresh and vibrant. Not only are her prices very reasonable, she is kind, knowledgeable and has great taste. I would recommend her to anyone and everyone!",
  },
  {
    name: "Alexandra Bennings",
    rating: 5,
    text: `I had such a wonderful experience with KD Flowers and chose this florist for my wedding day. I highly recommend Kylee's work.

KD Flowers stood out from the very first phone consultation I had.

Kylee made me feel comfortable as she took her time understanding exactly what I wanted. I love how she has years of experience in the industry and it definitely shows!

The arrangements were not only gorgeous but also affordable. Thank you so much for being so kind, flexible, and accommodating on a very special and important day in my family's lives. I will definitely be recommending Kylee to all my friends and family who may have events in the Niagara/St. Catherine's area.`,
  },
  {
    name: "Taylor Breanne",
    rating: 5,
    text: "Kylee from KD flowers did my wedding flowers and was absolutely amazing! She was very pleasant to work with and so accommodating with all of the ideas I had in order to stay under my budget as well as suggesting her own. She delivered all of the flowers the morning of our wedding which was amazing and caused 0 stress!! We were SO happy with the finished product and received lots of compliments. Would 100% recommend!!",
  },
  {
    name: "Madison Binder",
    rating: 5,
    text: `We used KD flowers for our wedding this past October and had a great experience. We did everything via phone calls and emails which worked well since I’m not from the area.

Kylee is very knowledgably and was able to capture the perfect floral arrangement for my bridal bouquet which was stunning! Great service and would highly recommend!`,
  },
  {
    name: "Alexa Moore",
    rating: 5,
    text: "Stunning floral arrangements for my wedding and excellent service, she goes above and beyond. Highly recommend!",
  },
  {
    name: "Bailey Lahey",
    rating: 5,
    text: "The floral arrangements were beautiful and exceeded my expectations! I would definitely recommend.",
  },
]

export const featuredReviews = reviews.filter((review) => review.featured)
