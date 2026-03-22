const portfolioData = {
  profile: {
    role: "Mechanical Engineer | 3 Years Experience",
    name: "Shubham Patel",
    summary:
      "Mechanical engineer with experience across powertrain development, drivetrain analysis, CAE, CAD, Baja vehicle work, robotics, validation, and technical communication. The portfolio below groups the work by skill area so the technical depth is easier to follow.",
    introNote:
      "My work has mostly been around understanding how a system behaves, making design decisions that hold up in practice, and communicating those decisions clearly through reports, testing, and reviews.",
    facts: [
      { label: "Based in", value: "Bengaluru, India" },
      { label: "Current role", value: "Ather Energy" },
      { label: "Main areas", value: "Powertrain, CAE, CAD, validation" }
    ],
    contactNote:
      "If you want to discuss drivetrain work, CAE, CAD, Baja projects, robotics, or the way these projects were executed, feel free to reach out.",
    contacts: [
      { label: "Email", value: "patelshubham152.ps@gmail.com", url: "mailto:patelshubham152.ps@gmail.com" },
      { label: "Phone", value: "+91 9624069783", url: "tel:+919624069783" },
      { label: "LinkedIn", value: "linkedin.com/in/shubham-patel-38b679176", url: "https://linkedin.com/in/shubham-patel-38b679176" },
      { label: "Resume", value: "ShubhamPatel_Resume_2025", url: "./assets/ShubhamPatel_Resume_2025.pdf" }
    ],
    signals: [
      {
        title: "Powertrain and drivetrain",
        text: "Gearbox modelling, ratio studies, tolerance stack-up, and validation-linked engineering for EV transmission work."
      },
      {
        title: "CAE and analysis",
        text: "Structural analysis used to support design decisions instead of treating simulation as a separate exercise."
      },
      {
        title: "CAD and integration",
        text: "Vehicle layout, roll cage logic, subsystem integration, and concept development with build constraints in mind."
      },
      {
        title: "Build and communication",
        text: "Manufacturing exposure, testing logic, reporting, and team coordination that supported real project delivery."
      }
    ]
  },
  visuals: {
    portrait: "./assets/custom/imageprofilr.jpg",
    featured: [
      {
        title: "Matter powertrain context",
        caption: "Product-level context behind the transmission and release work.",
        image: "./assets/custom/matter bike.jpg",
        imageFit: "cover"
      },
      {
        title: "Transmission package",
        caption: "Driveline package tied to system analysis and design decisions.",
        image: "./assets/custom/transmission matter.jpg",
        imageFit: "contain"
      },
      {
        title: "Baja ATV CAD",
        caption: "A strong visual for packaging, layout, and vehicle design maturity.",
        image: "./assets/custom/baja cad file for atv.png",
        imageFit: "contain"
      }
    ]
  },
  focusAreas: [
    {
      title: "Powertrain and drivetrain",
      summary: "Gearbox modelling, transmission analysis, ratio selection, tolerance stack-up, and release-oriented problem solving for EV mobility systems.",
      tags: ["Romax", "Gearbox", "Drivetrain", "DFM"]
    },
    {
      title: "CAE and validation",
      summary: "Finite element analysis, realistic load interpretation, and design checks that support confidence before physical testing.",
      tags: ["ANSYS", "NX", "Loads", "FOS"]
    },
    {
      title: "CAD and integration",
      summary: "Vehicle packaging, roll cage layout, subsystem placement, tracked robot concepts, and design decisions linked to build reality.",
      tags: ["CAD", "Packaging", "Vehicle", "Robotics"]
    },
    {
      title: "Build and communication",
      summary: "Manufacturing exposure, testing logic, project reporting, technical presentations, and engineering coordination.",
      tags: ["Testing", "Manufacturing", "Reports", "Leadership"]
    }
  ],
  loopNodes: [
    { label: "Powertrain", note: "Transmission development", cardId: "powertrain-dev" },
    { label: "Simulation", note: "System-level analysis", cardId: "transmission-analysis" },
    { label: "CAE", note: "Structural work", cardId: "cae-fea" },
    { label: "CAD", note: "Vehicle packaging", cardId: "atv-cad" },
    { label: "Build", note: "Manufacturing and testing", cardId: "manufacturing-exposure" },
    { label: "Start", note: "Back to the beginning", target: "#overview" }
  ],
  flowOrder: [
    "powertrain-dev",
    "transmission-analysis",
    "cae-fea",
    "atv-cad",
    "robot-design",
    "design-iterations",
    "manufacturing-exposure",
    "vehicle-dynamics-testing",
    "baja-leadership",
    "technical-teaching",
    "awards-recognition",
    "documentation-presentation"
  ],
  technicalCards: [
    {
      id: "powertrain-dev",
      category: "Mobility Systems",
      title: "Powertrain Development",
      tools: "Romax, Gearbox Design, Tolerance Stack-Up",
      image: "./assets/custom/matter bike.jpg",
      imageFit: "cover",
      excerpt: "EV transmission work tied to validation, release, and product decisions.",
      summary:
        "At Matter, I worked on the 4-speed transmission for the Aera platform. The work covered Romax modelling, ratio studies, tolerance stack-up, drawing support, and follow-up during validation and release activity.",
      points: [
        "Modelled the 4-speed gearbox for Matter Aera in Romax.",
        "Worked on gear ratio selection and drivetrain behaviour.",
        "Handled tolerance stack-up and drawing support.",
        "Supported RCA and DFM closure during validation."
      ],
      links: [
        { label: "Matter Motor Works", url: "https://www.matter.in/" }
      ]
    },
    {
      id: "transmission-analysis",
      category: "Drivetrain Simulation",
      title: "Transmission Analysis",
      tools: "Romax, Shafts, Bearings, Gears",
      image: "./assets/custom/transmission matter.jpg",
      imageFit: "contain",
      excerpt: "System-level work across gears, shafts, and bearings for strength, life, and efficiency.",
      summary:
        "This work was about reading the drivetrain as one system. I used Romax outputs around gears, shafts, and bearings to support strength, life, efficiency, and reliability decisions before hardware validation.",
      points: [
        "Evaluated gears, shafts, and bearings together at system level.",
        "Used strength, life, and efficiency outputs in design decisions.",
        "Applied analysis to improve confidence before physical validation."
      ],
      links: []
    },
    {
      id: "cae-fea",
      category: "Simulation",
      title: "CAE and Structural Analysis",
      tools: "Siemens NX, ANSYS, Von Mises, FOS",
      image: "./assets/baja_doc_media/image34.png",
      imageFit: "contain",
      excerpt: "Static and structural checks for components that had to survive real vehicle loads.",
      summary:
        "My Baja CAE work covered component loading, meshing choices, deformation checks, and factor-of-safety review for parts that had to survive actual vehicle conditions.",
      points: [
        "Analysed hubs, uprights, and structural members under combined loads.",
        "Worked with 2D quad and 3D tetra element strategies.",
        "Used stress, deformation, and FOS as core evaluation outputs."
      ],
      links: []
    },
    {
      id: "atv-cad",
      category: "Vehicle Design",
      title: "ATV Design and CAD",
      tools: "Siemens NX, Packaging, Roll Cage",
      image: "./assets/custom/baja cad file for atv.png",
      imageFit: "contain",
      excerpt: "Baja ATV packaging and subsystem integration with safety and performance in mind.",
      summary:
        "In Team Czar, I worked on Baja ATV layout and CAD with attention to driver packaging, roll cage logic, subsystem placement, and the link between design, analysis, manufacturing, and testing.",
      points: [
        "Worked on ATV packaging and subsystem arrangement.",
        "Supported roll cage and vehicle layout decisions.",
        "Connected CAD work with downstream build and validation needs."
      ],
      links: [
        { label: "Watch Team Car", url: "https://youtu.be/NYkb9fxaxEs?si=JbQ8QjwCxLdfS5cS" }
      ]
    },
    {
      id: "robot-design",
      category: "Robotics",
      title: "Firefighting Robot Design",
      tools: "Mechanical Design, Mobility Layout, Packaging",
      image: "./assets/custom/finl model robot.jpg",
      imageFit: "contain",
      excerpt: "Tracked firefighting robot concept developed for industrial hazard use cases.",
      summary:
        "This final-year project focused on a remote-controlled firefighting robot for industrial use. I worked through tracked mobility concepts, packaging, power and torque checks, and the final integrated layout.",
      points: [
        "Worked on tracked mobility architecture and suspension concepts.",
        "Integrated the water monitor, drive system, and controller layout.",
        "Studied power, torque, battery, and structural requirements."
      ],
      links: [
        { label: "AAAG India", url: "https://aaagindia.in/" }
      ]
    },
    {
      id: "design-iterations",
      category: "Concept Work",
      title: "Design Iteration",
      tools: "Layout Exploration, Feasibility, Selection",
      image: "./assets/custom/design iterations robot.jpg",
      imageFit: "contain",
      excerpt: "Concept comparison before freezing one practical engineering direction.",
      summary:
        "This part of the work was about comparing concepts, rejecting weak directions, and converging on layouts that are stable, buildable, and practical.",
      points: [
        "Compared alternate layouts before freezing direction.",
        "Used engineering constraints to eliminate weaker concepts.",
        "Balanced packaging, traction, and structural practicality."
      ],
      links: []
    },
    {
      id: "manufacturing-exposure",
      category: "Build and Release",
      title: "Manufacturing Exposure",
      tools: "Machining, CNC, Welding, Shop-Floor Work",
      image: "./assets/baja_ppt_media/image57.png",
      imageFit: "cover",
      excerpt: "Design choices informed by fabrication, fixtures, machining, and build reality.",
      summary:
        "Alongside design and simulation, I have worked close to manufacturing workflows including jigs and fixtures, machining exposure, supplier coordination, and the practical constraints that shape released hardware.",
      points: [
        "Supported jigs, fixtures, and manufacturing planning in Baja work.",
        "Exposure to machining, welding, and CNC-oriented workflows.",
        "Worked with supplier and process considerations in industry roles."
      ],
      links: []
    },
    {
      id: "vehicle-dynamics-testing",
      category: "Validation",
      title: "Vehicle Testing and Data",
      tools: "Accelerometers, Endurance Data, ADAMS",
      image: "./assets/baja_doc_media/image25.png",
      imageFit: "contain",
      excerpt: "Simulation and test feedback used together to understand vehicle behaviour.",
      summary:
        "Baja work also involved reading test behaviour, endurance data, accelerometer outputs, and the link between simulation assumptions and what the vehicle actually does.",
      points: [
        "Interpreted test-oriented data to understand vehicle behaviour.",
        "Used simulation and testing logic together, not separately.",
        "Built engineering judgement around dynamic response and performance."
      ],
      links: []
    }
  ],
  secondaryCards: [
    {
      id: "baja-leadership",
      category: "Leadership",
      title: "Team Czar Leadership",
      tools: "Analysis Head, Planning, Coordination",
      image: "./assets/custom/medal recieved.jpg",
      imageFit: "cover",
      excerpt: "Technical ownership plus team coordination inside the Baja program.",
      summary:
        "At Team Czar, I moved from contributing in design and analysis to taking on the role of Analysis Department Head. That meant balancing technical work with planning, coordination, and support across the team.",
      points: [
        "Led analysis work for the Baja team in the 2021 cycle.",
        "Supported planning, testing, and manufacturing coordination.",
        "Worked on gearbox and differential calculations as part of the role."
      ],
      links: [
        { label: "Watch Team Car", url: "https://youtu.be/NYkb9fxaxEs?si=JbQ8QjwCxLdfS5cS" }
      ]
    },
    {
      id: "technical-teaching",
      category: "Communication",
      title: "Technical Teaching",
      tools: "Fluid Mechanics, MATLAB, Machine Design",
      image: "./assets/custom/imageprofilr.jpg",
      imageFit: "cover",
      excerpt: "Explaining difficult engineering topics clearly through live sessions and problem solving.",
      summary:
        "As a Subject Matter Expert at Edufeat, I delivered live sessions and solved advanced mechanical engineering problems. That strengthened the way I explain technical content clearly and directly.",
      points: [
        "Worked across Fluid Mechanics, Strength of Materials, and MATLAB.",
        "Improved clarity in explaining technical concepts.",
        "Built confidence in collaborative and client-facing communication."
      ],
      links: []
    },
    {
      id: "awards-recognition",
      category: "Academic Strength",
      title: "Awards and Recognition",
      tools: "PDEU, Silver Medal, Academic Performance",
      image: "./assets/custom/medal recieved.jpg",
      imageFit: "cover",
      excerpt: "Strong academic performance backed by a solid analytical base.",
      summary:
        "My academic work at PDEU resulted in a CPI of 9.81 out of 10 and the Silver Medal for securing second rank in Mechanical Engineering.",
      points: [
        "Silver Medalist at PDEU.",
        "CPI 9.81 out of 10.",
        "Strong grounding in design, analysis, and mechanical systems."
      ],
      links: [
        { label: "PDEU", url: "https://admission.pdeu.ac.in/" }
      ]
    },
    {
      id: "documentation-presentation",
      category: "Documentation",
      title: "Documentation and Presentation",
      tools: "Reports, Technical Slides, Project Communication",
      image: "./assets/custom/premiliery design robot.jpg",
      imageFit: "contain",
      excerpt: "Turning engineering work into reports, slides, and structured communication.",
      summary:
        "Alongside execution, I have consistently documented work through reports, slide decks, evaluation material, and technical summaries so the engineering stays understandable to reviewers, mentors, and collaborators.",
      points: [
        "Worked on project reports and evaluation material.",
        "Presented design and analysis content in competition and academic settings.",
        "Comfortable turning technical work into structured communication."
      ],
      links: []
    }
  ]
};

const elements = {
  heroRole: document.getElementById("hero-role"),
  heroName: document.getElementById("hero-name"),
  heroSummary: document.getElementById("hero-summary"),
  heroPortrait: document.getElementById("hero-portrait"),
  heroFacts: document.getElementById("hero-facts"),
  introNote: document.getElementById("intro-note"),
  signalList: document.getElementById("signal-list"),
  loopRing: document.getElementById("loop-ring"),
  featureStrip: document.getElementById("feature-strip"),
  focusGrid: document.getElementById("focus-grid"),
  portfolioPills: document.getElementById("portfolio-pills"),
  technicalGrid: document.getElementById("technical-grid"),
  secondaryGrid: document.getElementById("secondary-grid"),
  contactNote: document.getElementById("contact-note"),
  contactList: document.getElementById("contact-list"),
  modal: document.getElementById("detail-modal"),
  modalClose: document.getElementById("modal-close"),
  modalImageWrap: document.getElementById("modal-image-wrap"),
  modalKicker: document.getElementById("modal-kicker"),
  modalTitle: document.getElementById("modal-title"),
  modalTools: document.getElementById("modal-tools"),
  modalImage: document.getElementById("modal-image"),
  modalSummary: document.getElementById("modal-summary"),
  modalPoints: document.getElementById("modal-points"),
  modalLinks: document.getElementById("modal-links"),
  modalNext: document.getElementById("modal-next")
};

const cardMap = new Map();
const flowLookup = new Map(portfolioData.flowOrder.map((id, index) => [id, index]));

function renderHero() {
  const { profile, visuals } = portfolioData;

  elements.heroRole.textContent = profile.role;
  elements.heroName.textContent = profile.name;
  elements.heroSummary.textContent = profile.summary;
  elements.heroPortrait.src = visuals.portrait;
  elements.introNote.textContent = profile.introNote;

  elements.heroFacts.innerHTML = profile.facts
    .map(
      (item) => `
        <article class="fact-item">
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </article>
      `
    )
    .join("");

  elements.signalList.innerHTML = profile.signals
    .map(
      (item) => `
        <article class="info-card">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");

  elements.contactNote.textContent = profile.contactNote;
  elements.contactList.innerHTML = profile.contacts
    .map(
      (item) => `
        <a class="contact-link" href="${item.url}" ${item.url.startsWith("#") ? "" : 'target="_blank" rel="noreferrer"'}>
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </a>
      `
    )
    .join("");
}

function renderLoop() {
  const nodesMarkup = portfolioData.loopNodes
    .map((item, index) => {
      if (item.cardId) {
        return `
          <button class="area-node area-node-${index + 1}" type="button" data-open-card="${item.cardId}">
            <span>
              <strong>${item.label}</strong>
              <small>${item.note}</small>
            </span>
          </button>
        `;
      }

      return `
        <a class="area-node area-node-${index + 1}" href="${item.target}">
          <span>
            <strong>${item.label}</strong>
            <small>${item.note}</small>
          </span>
        </a>
      `;
    })
    .join("");

  elements.loopRing.insertAdjacentHTML("beforeend", nodesMarkup);
}

function renderFeatured() {
  elements.featureStrip.innerHTML = portfolioData.visuals.featured
    .map(
      (item) => `
        <article class="feature-card">
          <div class="feature-image" data-fit="${item.imageFit || "cover"}">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="feature-body">
            <strong>${item.title}</strong>
            <p class="feature-caption">${item.caption}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFocusAreas() {
  elements.focusGrid.innerHTML = portfolioData.focusAreas
    .map(
      (area) => `
        <article class="focus-card">
          <h3>${area.title}</h3>
          <p>${area.summary}</p>
          <div class="focus-tags">${area.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>
      `
    )
    .join("");
}

function buildCard(card) {
  cardMap.set(card.id, card);

  return `
    <article class="skill-card" id="${card.id}" data-card-id="${card.id}" role="button" tabindex="0" aria-label="Open details for ${card.title}">
      <div class="card-media" data-fit="${card.imageFit || "cover"}">
        <img src="${card.image}" alt="${card.title}">
      </div>
      <div class="card-body">
        <p class="card-category">${card.category}</p>
        <h4 class="card-title">${card.title}</h4>
        <p class="card-tools">${card.tools}</p>
        <p class="card-excerpt">${card.excerpt}</p>
        <span class="card-action">Open detail</span>
      </div>
    </article>
  `;
}

function renderCards() {
  const allCards = [...portfolioData.technicalCards, ...portfolioData.secondaryCards];
  const categories = [...new Set(allCards.map((card) => card.category))];

  elements.portfolioPills.innerHTML = categories.map((item) => `<span>${item}</span>`).join("");
  elements.technicalGrid.innerHTML = portfolioData.technicalCards.map((card) => buildCard(card)).join("");
  elements.secondaryGrid.innerHTML = portfolioData.secondaryCards.map((card) => buildCard(card)).join("");
}

function getNextFlowItem(cardId) {
  const currentIndex = flowLookup.get(cardId);
  if (currentIndex === undefined) {
    return null;
  }

  const nextIndex = currentIndex + 1;
  if (nextIndex >= portfolioData.flowOrder.length) {
    return { type: "restart" };
  }

  return { type: "card", cardId: portfolioData.flowOrder[nextIndex] };
}

function openModal(cardId) {
  const card = cardMap.get(cardId);
  if (!card) {
    return;
  }

  const nextItem = getNextFlowItem(cardId);

  elements.modalKicker.textContent = card.category || "Detail";
  elements.modalTitle.textContent = card.title;
  elements.modalTools.textContent = card.tools;
  elements.modalImage.src = card.image;
  elements.modalImage.alt = card.title;
  elements.modalImageWrap.dataset.fit = card.imageFit || "cover";
  elements.modalSummary.textContent = card.summary;
  elements.modalPoints.innerHTML = card.points.map((point) => `<li>${point}</li>`).join("");
  elements.modalLinks.innerHTML = (card.links || [])
    .map((link) => `<a class="modal-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");

  if (nextItem && nextItem.type === "card") {
    const nextCard = cardMap.get(nextItem.cardId);
    elements.modalNext.hidden = false;
    elements.modalNext.textContent = `Next: ${nextCard.title}`;
    elements.modalNext.dataset.nextCard = nextCard.id;
    elements.modalNext.dataset.restart = "";
  } else {
    elements.modalNext.hidden = false;
    elements.modalNext.textContent = "Back to Start";
    elements.modalNext.dataset.nextCard = "";
    elements.modalNext.dataset.restart = "true";
  }

  elements.modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  elements.modal.hidden = true;
  document.body.style.overflow = "";
}

function attachEvents() {
  document.addEventListener("click", (event) => {
    const loopCard = event.target.closest("[data-open-card]");
    if (loopCard) {
      openModal(loopCard.dataset.openCard);
      return;
    }

    const card = event.target.closest("[data-card-id]");
    if (card) {
      openModal(card.dataset.cardId);
      return;
    }

    if (event.target === elements.modalNext) {
      if (elements.modalNext.dataset.restart === "true") {
        closeModal();
        document.getElementById("overview").scrollIntoView({ behavior: "smooth" });
        return;
      }

      if (elements.modalNext.dataset.nextCard) {
        openModal(elements.modalNext.dataset.nextCard);
      }
      return;
    }

    if (event.target.closest("[data-close='true']") || event.target === elements.modalClose) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    const activeCard = event.target.closest("[data-card-id]");
    if (activeCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openModal(activeCard.dataset.cardId);
      return;
    }

    if (event.key === "Escape" && !elements.modal.hidden) {
      closeModal();
    }
  });
}

function init() {
  renderHero();
  renderLoop();
  renderFeatured();
  renderFocusAreas();
  renderCards();
  attachEvents();
}

init();
