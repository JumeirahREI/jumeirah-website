export const easings = {
  // ✦ Hero-worthy, refined entry motions
  luxuryEaseOut: [0.16, 1, 0.3, 1], // smooth, premium "glide in"
  cinematicGlide: [0.33, 1, 0.68, 1], // very soft, keynote style
  slowLuxuryRise: [0.7, 0, 0.3, 1], // dramatic headline lift

  // ✦ Balanced in/out flows (great for components that appear & disappear)
  softEaseInOut: [0.4, 0, 0.2, 1], // balanced, works anywhere
  subtleLinger: [0.83, 0, 0.17, 1], // holds tension before release

  // ✦ Specialized fades / exits
  gentleEaseIn: [0.55, 0.055, 0.675, 0.19], // fades, blurs, opacity in
  gentleEaseOut: [0.215, 0.61, 0.355, 1], // clean disappear / exit
} as const;
