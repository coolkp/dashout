const gardenTips = {
  general: [
    {
      title: "Water Wisely",
      tip: "Water your garden early in the morning to reduce evaporation. Aim for the soil, not the leaves, to prevent fungal diseases.",
      icon: "droplet"
    },
    {
      title: "Mulch Your Beds",
      tip: "Apply 2-3 inches of organic mulch around plants to retain moisture, suppress weeds, and regulate soil temperature.",
      icon: "layers"
    },
    {
      title: "Feed the Soil",
      tip: "Add compost regularly to improve soil structure and provide slow-release nutrients for your plants.",
      icon: "soil"
    }
  ],
  flowers: [
    {
      title: "Deadhead Regularly",
      tip: "Remove spent blooms to encourage more flowers and extend the blooming season throughout summer.",
      icon: "flower"
    },
    {
      title: "Plant for Pollinators",
      tip: "Include native wildflowers and herbs like lavender to attract bees, butterflies, and other beneficial pollinators.",
      icon: "butterfly"
    },
    {
      title: "Group by Sun Needs",
      tip: "Plant sun-loving flowers together and shade-tolerant ones in sheltered spots for the best results.",
      icon: "sun"
    },
    {
      title: "Stagger Bloom Times",
      tip: "Choose varieties that bloom at different times so you have color in your garden from spring through fall.",
      icon: "calendar"
    }
  ],
  vegetables: [
    {
      title: "Rotate Your Crops",
      tip: "Don't plant the same vegetable family in the same spot year after year. Rotation prevents soil depletion and reduces pest buildup.",
      icon: "rotate"
    },
    {
      title: "Companion Planting",
      tip: "Grow basil near tomatoes, carrots near onions, and marigolds everywhere to naturally deter pests.",
      icon: "companion"
    },
    {
      title: "Harvest Often",
      tip: "Pick vegetables regularly to encourage continued production. Many plants like beans and zucchini produce more when harvested frequently.",
      icon: "harvest"
    },
    {
      title: "Succession Planting",
      tip: "Sow new seeds every 2-3 weeks for a continuous harvest instead of one large crop all at once.",
      icon: "succession"
    }
  ],
  lawn: [
    {
      title: "Mow High",
      tip: "Set your mower blade to 3-4 inches. Taller grass develops deeper roots, shades out weeds, and retains moisture better.",
      icon: "mower"
    },
    {
      title: "Leave Clippings",
      tip: "Grass clippings decompose quickly and return nitrogen to your lawn, reducing the need for fertilizer by up to 25%.",
      icon: "recycle"
    },
    {
      title: "Aerate Annually",
      tip: "Aerate compacted soil in fall to improve water and nutrient penetration to grass roots.",
      icon: "aerate"
    },
    {
      title: "Overseed Thin Areas",
      tip: "Fall is the best time to overseed bare patches. Keep new seed moist until germination, typically 7-14 days.",
      icon: "seed"
    }
  ],
  trees: [
    {
      title: "Prune at the Right Time",
      tip: "Prune most deciduous trees in late winter while dormant. Avoid pruning in fall when healing is slow and disease risk is high.",
      icon: "scissors"
    },
    {
      title: "Water Deep, Not Often",
      tip: "Young trees need deep, infrequent watering to encourage roots to grow downward rather than staying near the surface.",
      icon: "deepwater"
    },
    {
      title: "Protect the Root Zone",
      tip: "Keep mulch 3-4 inches away from the trunk to prevent rot, and extend it out to the drip line.",
      icon: "shield"
    },
    {
      title: "Right Tree, Right Place",
      tip: "Consider the mature size before planting. Keep large trees 20+ feet from buildings and power lines.",
      icon: "tree"
    }
  ],
  herbs: [
    {
      title: "Pinch for Bushiness",
      tip: "Regularly pinch off the growing tips of herbs like basil and mint to encourage bushy, compact growth.",
      icon: "pinch"
    },
    {
      title: "Don't Over-Water",
      tip: "Most herbs prefer well-drained soil and slightly dry conditions. Overwatering is the number one cause of herb failure.",
      icon: "droplet"
    },
    {
      title: "Harvest Before Flowering",
      tip: "Pick herb leaves before the plant flowers for the best flavor. Once herbs bolt, the leaves become bitter.",
      icon: "timer"
    },
    {
      title: "Grow Near Your Kitchen",
      tip: "Plant frequently used herbs close to your kitchen door so you can easily snip fresh seasonings while cooking.",
      icon: "kitchen"
    }
  ],
  succulents: [
    {
      title: "Soak and Dry Method",
      tip: "Water succulents thoroughly, then let the soil dry completely before watering again. Typically once every 1-2 weeks.",
      icon: "droplet"
    },
    {
      title: "Maximum Sunlight",
      tip: "Most succulents need at least 6 hours of direct sunlight. Gradually introduce them to prevent sunburn.",
      icon: "sun"
    },
    {
      title: "Use Fast-Draining Soil",
      tip: "Mix regular potting soil with perlite or coarse sand for the quick drainage succulents need to thrive.",
      icon: "soil"
    },
    {
      title: "Propagate from Leaves",
      tip: "Many succulents can grow new plants from fallen leaves. Lay them on dry soil and mist occasionally.",
      icon: "leaf"
    }
  ],
  pests: [
    {
      title: "Encourage Beneficial Insects",
      tip: "Ladybugs, lacewings, and parasitic wasps are natural pest controllers. Plant dill and fennel to attract them.",
      icon: "ladybug"
    },
    {
      title: "Neem Oil Spray",
      tip: "A diluted neem oil spray works as a natural pesticide for aphids, mealybugs, and whiteflies without harming bees.",
      icon: "spray"
    },
    {
      title: "Inspect Regularly",
      tip: "Check the undersides of leaves weekly. Catching pest problems early makes them much easier to control.",
      icon: "magnifier"
    },
    {
      title: "Healthy Plants Resist Pests",
      tip: "Well-fed, properly watered plants are naturally more resistant to pest attacks. Focus on plant health first.",
      icon: "shield"
    }
  ]
};

export function getRandomTips(categories, count = 5) {
  const allTips = [];

  categories.forEach(cat => {
    if (gardenTips[cat]) {
      gardenTips[cat].forEach(tip => {
        allTips.push({ ...tip, category: cat });
      });
    }
  });

  // Always include general tips
  gardenTips.general.forEach(tip => {
    allTips.push({ ...tip, category: 'general' });
  });

  // Shuffle and pick
  const shuffled = allTips.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function analyzeGardenColors(imageData) {
  // Analyze dominant colors from the canvas image data to guess garden type
  const data = imageData.data;
  let greenCount = 0;
  let brownCount = 0;
  let colorfulCount = 0;
  let totalPixels = 0;

  // Sample every 20th pixel for performance
  for (let i = 0; i < data.length; i += 80) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    totalPixels++;

    // Green detection (foliage)
    if (g > r && g > b && g > 60) {
      greenCount++;
    }
    // Brown detection (soil, mulch, wood)
    else if (r > 80 && g > 50 && b < 80 && r > g) {
      brownCount++;
    }
    // Colorful detection (flowers)
    else if ((r > 150 && g < 100) || (b > 150 && g < 100) || (r > 150 && b > 100 && g < 120)) {
      colorfulCount++;
    }
  }

  const greenPct = greenCount / totalPixels;
  const brownPct = brownCount / totalPixels;
  const colorfulPct = colorfulCount / totalPixels;

  const categories = [];

  if (greenPct > 0.3) categories.push('lawn', 'trees');
  if (greenPct > 0.1 && greenPct <= 0.3) categories.push('herbs', 'succulents');
  if (colorfulPct > 0.05) categories.push('flowers');
  if (brownPct > 0.15) categories.push('vegetables');
  if (greenPct < 0.1 && brownPct < 0.1) categories.push('succulents');

  // Always suggest pest tips if garden is detected
  if (greenPct > 0.05 || brownPct > 0.05 || colorfulPct > 0.02) {
    categories.push('pests');
  }

  // Fallback
  if (categories.length === 0) {
    categories.push('general', 'flowers', 'herbs');
  }

  return {
    categories: [...new Set(categories)],
    stats: {
      greenPct: Math.round(greenPct * 100),
      brownPct: Math.round(brownPct * 100),
      colorfulPct: Math.round(colorfulPct * 100)
    }
  };
}

export default gardenTips;
