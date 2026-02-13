import React, { Component } from "react";

const gardenTipsDatabase = {
  sunlight: {
    "full-sun": {
      title: "Full Sun Garden",
      tips: [
        "Plant sun-loving varieties like tomatoes, peppers, roses, and lavender.",
        "Mulch heavily (2-3 inches) to retain soil moisture in direct sunlight.",
        "Water deeply in the early morning to reduce evaporation losses.",
        "Consider installing drip irrigation for consistent moisture delivery."
      ]
    },
    "partial-shade": {
      title: "Partial Shade Garden",
      tips: [
        "Great for hostas, ferns, impatiens, and lettuce varieties.",
        "Monitor which hours receive sun — morning sun is gentler than afternoon.",
        "Reduce watering frequency as shaded soil retains moisture longer.",
        "Prune overhead branches selectively to optimize light levels."
      ]
    },
    "full-shade": {
      title: "Full Shade Garden",
      tips: [
        "Focus on shade-tolerant plants: hostas, ferns, astilbe, and bleeding hearts.",
        "Avoid overwatering — shaded areas dry out slowly.",
        "Use light-colored mulch or stones to brighten the area visually.",
        "Consider container gardening with portable pots you can move to catch light."
      ]
    }
  },
  soil: {
    clay: {
      title: "Clay Soil",
      tips: [
        "Amend with compost and gypsum to improve drainage and break up compaction.",
        "Avoid working clay soil when wet — it compacts further and damages structure.",
        "Raised beds are an excellent solution for heavy clay gardens.",
        "Plant clay-tolerant species: daylilies, asters, and switchgrass."
      ]
    },
    sandy: {
      title: "Sandy Soil",
      tips: [
        "Add organic matter (compost, peat moss) to improve water retention.",
        "Use slow-release fertilizers — nutrients wash through sandy soil quickly.",
        "Water more frequently but for shorter durations.",
        "Great for root vegetables like carrots, radishes, and potatoes."
      ]
    },
    loamy: {
      title: "Loamy Soil",
      tips: [
        "You have ideal garden soil — most plants will thrive here.",
        "Maintain soil health with annual compost top-dressing.",
        "Practice crop rotation to prevent nutrient depletion.",
        "This soil is perfect for a diverse vegetable or flower garden."
      ]
    },
    rocky: {
      title: "Rocky Soil",
      tips: [
        "Build raised beds above the rocky layer for vegetable gardening.",
        "Use rock-garden plants: sedums, thyme, lavender, and alpine varieties.",
        "Improve planting holes with added compost and topsoil mix.",
        "Consider terracing on slopes to create deeper planting pockets."
      ]
    }
  },
  climate: {
    tropical: {
      title: "Tropical Climate",
      tips: [
        "Embrace fast-growing tropical plants: hibiscus, bird of paradise, and palms.",
        "Watch for fungal diseases — high humidity promotes mildew and rot.",
        "Ensure excellent drainage to prevent root waterlogging during rainy seasons.",
        "Use shade cloth during extreme heat to protect tender plants."
      ]
    },
    temperate: {
      title: "Temperate Climate",
      tips: [
        "Plan for four-season interest with a mix of perennials, shrubs, and bulbs.",
        "Start seeds indoors 6-8 weeks before the last frost date.",
        "Protect sensitive plants from late spring frosts with row covers.",
        "Compost fallen leaves in autumn for rich spring soil amendment."
      ]
    },
    arid: {
      title: "Arid / Dry Climate",
      tips: [
        "Adopt xeriscaping principles — use drought-resistant native plants.",
        "Install drip irrigation systems to minimize water waste.",
        "Apply thick gravel or bark mulch to reduce soil evaporation.",
        "Group plants by water needs (hydrozoning) for efficient irrigation."
      ]
    },
    cold: {
      title: "Cold Climate",
      tips: [
        "Choose hardy perennials rated for your zone (e.g., coneflowers, peonies).",
        "Protect root zones with 4-6 inches of winter mulch after the ground freezes.",
        "Use cold frames or hoop houses to extend the growing season.",
        "Plant spring bulbs (tulips, daffodils) in fall for early spring color."
      ]
    }
  },
  gardenSize: {
    small: {
      title: "Small Garden (under 100 sq ft)",
      tips: [
        "Use vertical gardening — trellises, wall planters, and hanging baskets.",
        "Choose compact and dwarf plant varieties bred for small spaces.",
        "Succession plant to maximize harvests from limited space.",
        "Container gardening lets you rearrange your layout easily."
      ]
    },
    medium: {
      title: "Medium Garden (100-500 sq ft)",
      tips: [
        "Create distinct zones: vegetables, flowers, and a relaxation area.",
        "Install pathways with stepping stones or gravel for easy access.",
        "Consider a small raised bed section for herbs and salad greens.",
        "Add a focal point like a birdbath or small ornamental tree."
      ]
    },
    large: {
      title: "Large Garden (500+ sq ft)",
      tips: [
        "Plan a layout with themed garden rooms — herb garden, cutting garden, etc.",
        "Invest in a composting system to recycle garden and kitchen waste.",
        "Incorporate native plants to attract pollinators and reduce maintenance.",
        "Consider a greenhouse or potting shed for year-round gardening."
      ]
    }
  },
  goal: {
    vegetables: {
      title: "Growing Vegetables",
      tips: [
        "Start with easy-to-grow vegetables: tomatoes, zucchini, beans, and lettuce.",
        "Rotate crops annually — don't plant the same family in the same spot.",
        "Use companion planting: basil with tomatoes, marigolds to repel pests.",
        "Harvest regularly to encourage continued production throughout the season."
      ]
    },
    flowers: {
      title: "Flower Garden",
      tips: [
        "Mix annuals for instant color with perennials for lasting structure.",
        "Plan for continuous blooms by choosing plants with staggered flowering times.",
        "Deadhead spent flowers regularly to promote new blooms.",
        "Layer plantings: tall in back, medium in middle, low-growers in front."
      ]
    },
    relaxation: {
      title: "Relaxation Space",
      tips: [
        "Add fragrant plants like lavender, jasmine, and gardenia near seating areas.",
        "Include a water feature — even a small fountain adds calming ambiance.",
        "Create a private nook with hedges, ornamental grasses, or bamboo screens.",
        "Use warm-toned outdoor lighting for evening enjoyment."
      ]
    },
    wildlife: {
      title: "Wildlife & Pollinator Garden",
      tips: [
        "Plant native wildflowers to attract bees, butterflies, and hummingbirds.",
        "Leave some areas 'wild' with leaf litter and logs for habitat.",
        "Add a shallow water dish with pebbles as a pollinator watering station.",
        "Avoid pesticides — use integrated pest management methods instead."
      ]
    }
  }
};

class GardenTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gardenSize: "",
      sunlight: "",
      soilType: "",
      climate: "",
      goal: "",
      showResults: false,
      tips: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleFormValueChange(inputName, event) {
    this.setState({ [inputName]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { gardenSize, sunlight, soilType, climate, goal } = this.state;
    const tips = [];

    if (gardenSize && gardenTipsDatabase.gardenSize[gardenSize]) {
      tips.push(gardenTipsDatabase.gardenSize[gardenSize]);
    }
    if (sunlight && gardenTipsDatabase.sunlight[sunlight]) {
      tips.push(gardenTipsDatabase.sunlight[sunlight]);
    }
    if (soilType && gardenTipsDatabase.soil[soilType]) {
      tips.push(gardenTipsDatabase.soil[soilType]);
    }
    if (climate && gardenTipsDatabase.climate[climate]) {
      tips.push(gardenTipsDatabase.climate[climate]);
    }
    if (goal && gardenTipsDatabase.goal[goal]) {
      tips.push(gardenTipsDatabase.goal[goal]);
    }

    this.setState({ showResults: true, tips });
  }

  handleReset() {
    this.setState({
      gardenSize: "",
      sunlight: "",
      soilType: "",
      climate: "",
      goal: "",
      showResults: false,
      tips: []
    });
  }

  renderForm() {
    return (
      <section className="ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>Tell Us About Your Garden</h2>
                <p className="lead">
                  Fill in the details below and we'll provide personalized tips
                  to help your garden thrive.
                </p>
              </div>
              <form onSubmit={this.handleSubmit} className="garden-form">
                {/* Garden Size */}
                <div className="form-group mb-4">
                  <label htmlFor="gardenSize">
                    <strong>
                      <span className="ti-ruler-pencil mr-2 color-secondary"></span>
                      Garden Size
                    </strong>
                  </label>
                  <select
                    id="gardenSize"
                    className="form-control"
                    value={this.state.gardenSize}
                    onChange={e => this.handleFormValueChange("gardenSize", e)}
                    required
                  >
                    <option value="">Select your garden size...</option>
                    <option value="small">Small (under 100 sq ft)</option>
                    <option value="medium">Medium (100 - 500 sq ft)</option>
                    <option value="large">Large (500+ sq ft)</option>
                  </select>
                </div>

                {/* Sunlight */}
                <div className="form-group mb-4">
                  <label htmlFor="sunlight">
                    <strong>
                      <span className="ti-shine mr-2 color-secondary"></span>
                      Sunlight Exposure
                    </strong>
                  </label>
                  <select
                    id="sunlight"
                    className="form-control"
                    value={this.state.sunlight}
                    onChange={e => this.handleFormValueChange("sunlight", e)}
                    required
                  >
                    <option value="">Select sunlight level...</option>
                    <option value="full-sun">Full Sun (6+ hours direct)</option>
                    <option value="partial-shade">
                      Partial Shade (3-6 hours)
                    </option>
                    <option value="full-shade">
                      Full Shade (less than 3 hours)
                    </option>
                  </select>
                </div>

                {/* Soil Type */}
                <div className="form-group mb-4">
                  <label htmlFor="soilType">
                    <strong>
                      <span className="ti-layers mr-2 color-secondary"></span>
                      Soil Type
                    </strong>
                  </label>
                  <select
                    id="soilType"
                    className="form-control"
                    value={this.state.soilType}
                    onChange={e => this.handleFormValueChange("soilType", e)}
                    required
                  >
                    <option value="">Select soil type...</option>
                    <option value="clay">Clay (heavy, sticky when wet)</option>
                    <option value="sandy">
                      Sandy (loose, drains quickly)
                    </option>
                    <option value="loamy">
                      Loamy (dark, crumbly, ideal)
                    </option>
                    <option value="rocky">Rocky (stony, shallow)</option>
                  </select>
                </div>

                {/* Climate */}
                <div className="form-group mb-4">
                  <label htmlFor="climate">
                    <strong>
                      <span className="ti-cloud mr-2 color-secondary"></span>
                      Climate Zone
                    </strong>
                  </label>
                  <select
                    id="climate"
                    className="form-control"
                    value={this.state.climate}
                    onChange={e => this.handleFormValueChange("climate", e)}
                    required
                  >
                    <option value="">Select your climate...</option>
                    <option value="tropical">Tropical (hot & humid)</option>
                    <option value="temperate">
                      Temperate (four seasons)
                    </option>
                    <option value="arid">Arid / Dry (low rainfall)</option>
                    <option value="cold">Cold (long winters)</option>
                  </select>
                </div>

                {/* Goal */}
                <div className="form-group mb-4">
                  <label htmlFor="goal">
                    <strong>
                      <span className="ti-target mr-2 color-secondary"></span>
                      Garden Goal
                    </strong>
                  </label>
                  <select
                    id="goal"
                    className="form-control"
                    value={this.state.goal}
                    onChange={e => this.handleFormValueChange("goal", e)}
                    required
                  >
                    <option value="">What's your main goal?</option>
                    <option value="vegetables">Grow Vegetables & Herbs</option>
                    <option value="flowers">Beautiful Flower Garden</option>
                    <option value="relaxation">
                      Create a Relaxation Space
                    </option>
                    <option value="wildlife">
                      Attract Wildlife & Pollinators
                    </option>
                  </select>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn solid-btn btn-lg">
                    <span className="ti-light-bulb mr-2"></span>
                    Get My Garden Tips
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderResults() {
    const { tips } = this.state;
    const iconMap = {
      "Small Garden (under 100 sq ft)": "ti-layout-grid2",
      "Medium Garden (100-500 sq ft)": "ti-layout-grid3",
      "Large Garden (500+ sq ft)": "ti-layout-grid4",
      "Full Sun Garden": "ti-shine",
      "Partial Shade Garden": "ti-cloud",
      "Full Shade Garden": "ti-na",
      "Clay Soil": "ti-layers",
      "Sandy Soil": "ti-layers-alt",
      "Loamy Soil": "ti-check-box",
      "Rocky Soil": "ti-harddrives",
      "Tropical Climate": "ti-bolt",
      "Temperate Climate": "ti-world",
      "Arid / Dry Climate": "ti-sun",
      "Cold Climate": "ti-star",
      "Growing Vegetables": "ti-gift",
      "Flower Garden": "ti-heart",
      "Relaxation Space": "ti-cup",
      "Wildlife & Pollinator Garden": "ti-twitter"
    };

    return (
      <section className="ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="section-heading text-center mb-5">
                <h2>Your Personalized Garden Tips</h2>
                <p className="lead">
                  Based on your garden profile, here are our expert
                  recommendations.
                </p>
              </div>

              {tips.map((category, index) => (
                <div key={index} className="card mb-4 border-0 shadow-sm">
                  <div
                    className="card-header bg-white border-0 pt-4 pb-2 px-4"
                  >
                    <h5 className="mb-0">
                      <span
                        className={
                          (iconMap[category.title] || "ti-check") +
                          " mr-2 color-secondary"
                        }
                      ></span>
                      {category.title}
                    </h5>
                  </div>
                  <div className="card-body px-4 pb-4">
                    <ul className="list-unstyled">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="py-2">
                          <span className="ti-check-box mr-2 color-secondary"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="text-center mt-5">
                <button
                  className="btn outline-btn btn-lg"
                  onClick={this.handleReset}
                >
                  <span className="ti-back-left mr-2"></span>
                  Start Over with New Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <React.Fragment>
        {/* Hero Section */}
        <section
          className="hero-section ptb-100 background-img"
          style={{
            background:
              "linear-gradient(135deg, #0cac8c 0%, #30BE76 50%, #6fcd97 100%)",
            minHeight: "400px"
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9 col-lg-7">
                <div className="hero-content-left text-white text-center pt-5">
                  <h1 className="text-white mb-3">
                    <span className="ti-gift mr-2"></span>
                    Garden Improvement Tips
                  </h1>
                  <p className="lead text-white">
                    Get personalized gardening advice tailored to your unique
                    garden conditions. Tell us about your space and we'll help
                    you create the garden of your dreams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="gray-light-bg ptb-50" style={{ padding: "30px 0" }}>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3 col-6 mb-3">
                <div className="p-3">
                  <span className="ti-shine d-block h3 color-secondary mb-2"></span>
                  <strong>Sunlight</strong>
                  <p className="small text-muted mb-0">
                    Matched to your exposure
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="p-3">
                  <span className="ti-layers d-block h3 color-secondary mb-2"></span>
                  <strong>Soil Type</strong>
                  <p className="small text-muted mb-0">
                    Advice for your soil
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="p-3">
                  <span className="ti-cloud d-block h3 color-secondary mb-2"></span>
                  <strong>Climate</strong>
                  <p className="small text-muted mb-0">
                    Zone-specific guidance
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="p-3">
                  <span className="ti-target d-block h3 color-secondary mb-2"></span>
                  <strong>Your Goals</strong>
                  <p className="small text-muted mb-0">
                    Tailored to your vision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form or Results */}
        {this.state.showResults ? this.renderResults() : this.renderForm()}

        {/* Bottom CTA */}
        {!this.state.showResults && (
          <section className="gray-light-bg ptb-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <h3>Why Use Garden Improvement Tips?</h3>
                  <p className="lead mt-3">
                    Every garden is unique. Soil conditions, sunlight,
                    climate, and your personal goals all affect what will
                    thrive. Our tailored recommendations take all these
                    factors into account so you can garden smarter, not
                    harder.
                  </p>
                  <div className="row mt-5">
                    <div className="col-md-4 mb-4">
                      <div className="p-4 bg-white rounded shadow-sm h-100">
                        <span className="ti-ruler-pencil d-block h2 color-secondary mb-3"></span>
                        <h6>Space Optimization</h6>
                        <p className="small text-muted">
                          Make the most of every square foot, whether you
                          have a balcony or an acre.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="p-4 bg-white rounded shadow-sm h-100">
                        <span className="ti-palette d-block h2 color-secondary mb-3"></span>
                        <h6>Plant Selection</h6>
                        <p className="small text-muted">
                          Choose the right plants for your specific
                          conditions and avoid costly mistakes.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="p-4 bg-white rounded shadow-sm h-100">
                        <span className="ti-time d-block h2 color-secondary mb-3"></span>
                        <h6>Seasonal Planning</h6>
                        <p className="small text-muted">
                          Know what to plant when, based on your climate
                          zone and goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default GardenTips;
