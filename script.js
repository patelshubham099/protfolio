const SITE_VERSION = "20260518c";

const profileData = {
  hero: {
    role: "Mechanical Engineer | Powertrain and Drivetrain Systems",
    name: "Shubham Patel",
    summary:
      "Mechanical engineer working across EV powertrain development, drivetrain analysis, process knowledge, structural verification, and vehicle integration. My work is strongest where design decisions have to stay technically sound and practically buildable.",
    portrait: "./assets/custom/imageprofilr.jpg",
    topics: [
      { label: "Powertrain Development", type: "project", id: "powertrain-dev" },
      { label: "Drivetrain Analysis", type: "project", id: "transmission-analysis" },
      { label: "Process Knowledge", type: "project", id: "process-release" },
      { label: "Design Validation", type: "project", id: "cae-fea" }
    ],
    facts: [
      { label: "Based in", value: "Bengaluru, India" },
      { label: "Current role", value: "Ather Energy" },
      { label: "Earlier exposure", value: "Matter Motor Works and Solize" }
    ]
  },
  strengths: [
    {
      title: "Powertrain Development and Transmission Engineering",
      text: "Gearbox layouts, ratio studies, and design decisions tied to EV transmission behaviour and product targets."
    },
    {
      title: "Drivetrain Analysis and Design Verification",
      text: "System-level interpretation of gears, shafts, bearings, and structural loads to support durability, efficiency, and design confidence."
    },
    {
      title: "Process Knowledge and Release Coordination",
      text: "Drawing updates, producibility review, issue closure, and coordination shaped by manufacturing knowledge and release needs."
    },
    {
      title: "Vehicle Integration and Build Readiness",
      text: "Vehicle layout, subsystem integration, packaging discipline, and build-aware engineering with assembly constraints in mind."
    }
  ],
  projects: [
    {
      id: "powertrain-dev",
      category: "Mobility Systems",
      title: "EV powertrain development",
      tools: "Romax, Gearbox Layout, Fits and Tolerances",
      image: "./assets/custom/matter bike.jpg",
      imageFit: "cover",
      excerpt: "Transmission development work tied to product decisions and engineering follow-through.",
      summary:
        "At Matter, I worked on transmission-focused development for the Aera platform. The work covered Romax modelling, ratio studies, fit review, drawing support, and engineering follow-through linked to product delivery.",
      points: [
        "Modelled the 4-speed gearbox for Matter Aera in Romax.",
        "Worked on gear ratio selection and drivetrain behaviour.",
        "Handled fit checks and drawing support.",
        "Supported issue closure during validation."
      ],
      links: [
        { label: "Matter Motor Works", url: "https://www.matter.in/" }
      ]
    },
    {
      id: "transmission-analysis",
      category: "Drivetrain Analysis",
      title: "Transmission analysis",
      tools: "Romax, Shafts, Bearings, Gears",
      image: "./assets/custom/transmission matter.jpg",
      imageFit: "contain",
      excerpt: "System-level work across gears, shafts, and bearings for strength, life, and efficiency.",
      summary:
        "This work was about reading the drivetrain as one interacting system. I used Romax outputs around gears, shafts, and bearings to support strength, life, efficiency, and reliability decisions before hardware testing.",
      points: [
        "Evaluated gears, shafts, and bearings together at system level.",
        "Used strength, life, and efficiency outputs in design decisions.",
        "Applied analysis to improve confidence before physical validation."
      ],
      links: []
    },
    {
      id: "process-release",
      category: "Release and Execution",
      title: "Process knowledge and release coordination",
      tools: "Manufacturing Knowledge, Fits and Tolerances, Drawing Release",
      image: "./assets/baja_ppt_media/image57.png",
      imageFit: "cover",
      excerpt: "Engineering support around closure, coordination, and release readiness.",
      summary:
        "A useful part of my work has been carrying analysis and design work through drawing updates, producibility checks, issue closure, and release-oriented coordination informed by manufacturing knowledge.",
      points: [
        "Worked on fit review with drawing-related engineering support.",
        "Supported producibility review and issue-closure activity during validation phases.",
        "Connected engineering decisions with release and execution needs.",
        "Worked with supplier, manufacturing, and process-planning constraints."
      ],
      links: []
    },
    {
      id: "cae-fea",
      category: "Structural Validation",
      title: "Structural analysis and verification",
      tools: "Siemens NX, ANSYS, Von Mises, FOS",
      image: "./assets/baja_doc_media/image34.png",
      imageFit: "contain",
      excerpt: "Structural checks for components that had to withstand realistic vehicle loads.",
      summary:
        "My Baja analysis work covered component loading, meshing choices, deformation checks, and factor-of-safety review for parts that had to survive actual vehicle conditions.",
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
      title: "Vehicle packaging and integration",
      tools: "Siemens NX, Packaging, Roll Cage",
      image: "./assets/custom/baja cad file for atv.png",
      imageFit: "contain",
      excerpt: "ATV packaging and subsystem integration with safety, space, and build constraints in mind.",
      summary:
        "In Team Czar, I worked on Baja ATV layout and 3D integration with attention to driver packaging, roll cage logic, subsystem placement, and the connection between design, analysis, manufacturing, and testing.",
      points: [
        "Worked on ATV packaging and subsystem arrangement.",
        "Supported roll cage and vehicle layout decisions.",
        "Connected layout work with downstream build and validation needs."
      ],
      links: [
        { label: "Watch Team Car", url: "https://youtu.be/NYkb9fxaxEs?si=JbQ8QjwCxLdfS5cS" }
      ]
    },
    {
      id: "robot-design",
      category: "Robotics",
      title: "Firefighting robot design",
      tools: "Mechanical Design, Mobility Layout, Packaging",
      image: "./assets/custom/finl model robot.jpg",
      imageFit: "contain",
      excerpt: "Tracked firefighting robot concept developed from exploration through final integrated layout.",
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
    }
  ],
  support: [
    {
      title: "Cross-Functional Coordination",
      text: "Worked across analysis, design, manufacturing, and release-oriented discussions rather than staying limited to one isolated engineering step."
    },
    {
      title: "Documentation and Design Review Support",
      text: "Prepared engineering reports, drawing support material, and technical communication that helped reviews move with better clarity and less back-and-forth."
    },
    {
      title: "Build and Validation Follow-Up",
      text: "Stayed close to the practical side of execution through manufacturing exposure, validation closure, and issue tracking linked to real hardware outcomes."
    },
    {
      title: "Technical Communication",
      text: "Comfortable explaining analysis results, design tradeoffs, and issue status clearly in team discussions and review settings."
    }
  ],
  contactNote:
    "If the conversation is around powertrain systems, drivetrain analysis, process knowledge, structural verification, or vehicle integration, feel free to reach out.",
  contacts: [
    { label: "Email", action: "Send message", url: "mailto:patelshubham152.ps@gmail.com" },
    { label: "LinkedIn", action: "Open profile", url: "https://linkedin.com/in/shubham-patel-38b679176" },
    { label: "Resume", action: "Open resume", url: "./assets/ShubhamPatel_Resume_2025.pdf" }
  ]
};

const fallbackStories = [
  {
    id: "tool-reuse-system-design",
    category: "Gear Manufacturing",
    date: "May 2026",
    title: "Using proven hobbing and shaving routes to shorten gearbox development",
    excerpt: "A new gearset moves faster when it stays inside a tool route the plant already understands.",
    summary:
      "If a new gearbox can be built around existing hobbing, shaving, workholding, and inspection capability, development time usually falls because the team is validating the design, not inventing the process.",
    takeaways: [
      { point: "Known hobbing and shaving routes remove avoidable process-development time." },
      { point: "Existing clamping and inspection logic make early quality feedback faster." },
      { point: "The best shortcut is often choosing a geometry that fits proven manufacturing capability." }
    ],
    content: [
      { text: "For a new gearbox, it helps to check early whether module, pressure angle, face width, and shaft form can stay within tooling and machine capability already used in production. If the same hob family, shaving route, clamping logic, and inspection method can be reused, the team learns faster because fewer variables are changing at once." },
      { text: "That shortens development not by cutting corners, but by avoiding unnecessary process invention. The effort stays focused on tooth behaviour, shaft loading, durability, and release readiness rather than on basic process stabilisation." }
    ]
  },
  {
    id: "heat-treatment-distortion",
    category: "Manufacturing",
    date: "May 2026",
    title: "Carburizing distortion has to be designed for, not discovered later",
    excerpt: "Thin sections and imbalance in geometry can turn heat treatment into a dimensional problem if they are ignored early.",
    summary:
      "Heat treatment is not only a materials step. For gears and related parts, geometry, section thickness, and process route can directly affect distortion, cleanup allowance, and final quality.",
    takeaways: [
      { point: "Large thin sections deserve distortion review before the geometry is frozen." },
      { point: "Tooth edges, section changes, and quench sensitivity can become dimensional problems later." },
      { point: "Early allowances and process-aware geometry reduce rework after hardening." }
    ],
    content: [
      { text: "Carburizing and quenching can reveal distortion potential that was already built into the part through geometry and process choice. Thin areas react differently from heavier sections, and that can show up as warpage, lead change, or uneven cleanup during finishing." },
      { text: "For gears, shafts, and other slender parts, it is safer to think about heat-treatment behaviour at the concept stage itself. Section balance, stock allowance, chamfering, and the likely hardening route should be considered before release, not after hardware starts moving." }
    ]
  },
  {
    id: "gear-train-system-view",
    category: "Drivetrain Thinking",
    date: "May 2026",
    title: "Gears, shafts, and bearings should be judged as one system",
    excerpt: "Local improvements can create downstream issues if the gear train is not read as a connected system.",
    summary:
      "Drivetrain work gets better when gears, shafts, bearings, fits, and housing behaviour are reviewed together instead of as isolated parts.",
    takeaways: [
      { point: "A stronger gear is not automatically a better gearbox if it shifts load elsewhere." },
      { point: "System reading improves judgement on durability, efficiency, and manufacturability." },
      { point: "Useful analysis is the kind that changes a decision before hardware proves it the hard way." }
    ],
    content: [
      { text: "In transmission work, a gear decision rarely stays inside the gear alone. A change in tooth geometry, shaft stiffness, bearing support, or fit condition can alter load sharing, misalignment sensitivity, heat, and overall behaviour." },
      { text: "That is why the best engineering discussions are usually system-level. The goal is not only to make one part stronger, but to keep the whole gearbox predictable, manufacturable, and easier to validate." }
    ]
  }
];

const elements = {
  heroRole: document.getElementById("hero-role"),
  heroName: document.getElementById("hero-name"),
  heroSummary: document.getElementById("hero-summary"),
  heroPortrait: document.getElementById("hero-portrait"),
  heroTags: document.getElementById("hero-tags"),
  heroFacts: document.getElementById("hero-facts"),
  strengthGrid: document.getElementById("strength-grid"),
  projectGrid: document.getElementById("project-grid"),
  supportGrid: document.getElementById("support-grid"),
  storyGrid: document.getElementById("story-grid"),
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
  storyModal: document.getElementById("story-modal"),
  storyModalClose: document.getElementById("story-modal-close"),
  storyModalKicker: document.getElementById("story-modal-kicker"),
  storyModalTitle: document.getElementById("story-modal-title"),
  storyModalMeta: document.getElementById("story-modal-meta"),
  storyModalSummary: document.getElementById("story-modal-summary"),
  storyModalTakeaways: document.getElementById("story-modal-takeaways"),
  storyModalContent: document.getElementById("story-modal-content")
};

const projectMap = new Map();
const storyMap = new Map();

function renderHero() {
  elements.heroRole.textContent = profileData.hero.role;
  elements.heroName.textContent = profileData.hero.name;
  elements.heroSummary.textContent = profileData.hero.summary;
  elements.heroPortrait.src = profileData.hero.portrait;
  elements.heroTags.innerHTML = profileData.hero.topics
    .map(
      (item) => `<button class="hero-tag hero-tag-link" type="button" data-link-type="${item.type}" data-link-id="${item.id}">${item.label}</button>`
    )
    .join("");
  elements.heroFacts.innerHTML = profileData.hero.facts
    .map(
      (item) => `
        <article class="fact-card compact-fact-card">
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </article>
      `
    )
    .join("");
}

function renderStrengths() {
  elements.strengthGrid.innerHTML = profileData.strengths
    .map(
      (item) => `
        <article class="strength-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function buildProjectCard(project) {
  projectMap.set(project.id, project);

  return `
    <article class="project-card" data-project-id="${project.id}" role="button" tabindex="0" aria-label="Open details for ${project.title}">
      <div class="project-media" data-fit="${project.imageFit || "cover"}">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-body">
        <p class="project-category">${project.category}</p>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-tools">${project.tools}</p>
        <p class="project-excerpt">${project.excerpt}</p>
      </div>
    </article>
  `;
}

function renderProjects() {
  elements.projectGrid.innerHTML = profileData.projects.map((project) => buildProjectCard(project)).join("");
}

function renderSupport() {
  elements.supportGrid.innerHTML = profileData.support
    .map(
      (item) => `
        <article class="support-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderContacts() {
  elements.contactNote.textContent = profileData.contactNote;
  elements.contactList.innerHTML = profileData.contacts
    .map(
      (item) => `
        <a class="contact-link" href="${item.url}" target="_blank" rel="noreferrer">
          <strong>${item.label}</strong>
          <span>${item.action}</span>
        </a>
      `
    )
    .join("");
}

function buildStoryCard(story) {
  storyMap.set(story.id, story);

  return `
    <article class="story-card" data-story-id="${story.id}" role="button" tabindex="0" aria-label="Open story ${story.title}">
      <p class="project-category">${story.category}</p>
      <h3>${story.title}</h3>
      <p class="story-meta">${story.date}</p>
      <p class="story-excerpt">${story.excerpt}</p>
      <span class="story-action">Read note</span>
    </article>
  `;
}

function renderStories(stories) {
  elements.storyGrid.innerHTML = stories.map((story) => buildStoryCard(story)).join("");
}

function normalizeStoryList(items, key) {
  return (items || [])
    .map((item) => {
      if (typeof item === "string") {
        return item;
      }

      if (item && typeof item === "object" && typeof item[key] === "string") {
        return item[key];
      }

      return "";
    })
    .filter(Boolean);
}

function openModal(projectId) {
  const project = projectMap.get(projectId);
  if (!project) {
    return;
  }

  elements.modalKicker.textContent = project.category;
  elements.modalTitle.textContent = project.title;
  elements.modalTools.textContent = project.tools;
  elements.modalImage.src = project.image;
  elements.modalImage.alt = project.title;
  elements.modalImageWrap.dataset.fit = project.imageFit || "cover";
  elements.modalSummary.textContent = project.summary;
  elements.modalPoints.innerHTML = project.points.map((point) => `<li>${point}</li>`).join("");
  elements.modalLinks.innerHTML = (project.links || [])
    .map((link) => `<a class="modal-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");

  elements.modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  elements.modal.hidden = true;
  document.body.style.overflow = elements.storyModal.hidden ? "" : "hidden";
}

function openStoryModal(storyId) {
  const story = storyMap.get(storyId);
  if (!story) {
    return;
  }

  elements.storyModalKicker.textContent = story.category;
  elements.storyModalTitle.textContent = story.title;
  elements.storyModalMeta.textContent = story.date;
  elements.storyModalSummary.textContent = story.summary;
  elements.storyModalTakeaways.innerHTML = normalizeStoryList(story.takeaways, "point")
    .map((point) => `<li>${point}</li>`)
    .join("");
  elements.storyModalContent.innerHTML = normalizeStoryList(story.content, "text")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  elements.storyModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeStoryModal() {
  elements.storyModal.hidden = true;
  document.body.style.overflow = elements.modal.hidden ? "" : "hidden";
}

async function loadStories() {
  if (window.location.protocol === "file:") {
    return fallbackStories;
  }

  try {
    const response = await fetch(`./data/stories.json?v=${SITE_VERSION}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Story file was not available.");
    }

    const payload = await response.json();
    if (Array.isArray(payload.stories) && payload.stories.length > 0) {
      return payload.stories;
    }
  } catch (error) {
    console.warn("Using fallback stories.", error);
  }

  return fallbackStories;
}

function attachEvents() {
  document.addEventListener("click", (event) => {
    const directLink = event.target.closest("[data-link-type]");
    if (directLink) {
      const linkType = directLink.dataset.linkType;
      const linkId = directLink.dataset.linkId;

      if (linkType === "project") {
        openModal(linkId);
      }

      if (linkType === "story") {
        openStoryModal(linkId);
      }

      return;
    }

    const projectCard = event.target.closest("[data-project-id]");
    if (projectCard) {
      openModal(projectCard.dataset.projectId);
      return;
    }

    const storyCard = event.target.closest("[data-story-id]");
    if (storyCard) {
      openStoryModal(storyCard.dataset.storyId);
      return;
    }

    if (event.target.closest("[data-close='true']") || event.target === elements.modalClose) {
      closeModal();
      return;
    }

    if (event.target.closest("[data-story-close='true']") || event.target === elements.storyModalClose) {
      closeStoryModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    const projectCard = event.target.closest("[data-project-id]");
    if (projectCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openModal(projectCard.dataset.projectId);
      return;
    }

    const storyCard = event.target.closest("[data-story-id]");
    if (storyCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openStoryModal(storyCard.dataset.storyId);
      return;
    }

    const directLink = event.target.closest("[data-link-type]");
    if (directLink && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      const linkType = directLink.dataset.linkType;
      const linkId = directLink.dataset.linkId;
      if (linkType === "project") {
        openModal(linkId);
      }
      if (linkType === "story") {
        openStoryModal(linkId);
      }
      return;
    }

    if (event.key === "Escape") {
      if (!elements.modal.hidden) {
        closeModal();
      }

      if (!elements.storyModal.hidden) {
        closeStoryModal();
      }
    }
  });
}

async function init() {
  renderHero();
  renderStrengths();
  renderProjects();
  renderSupport();
  renderContacts();
  renderStories(await loadStories());
  attachEvents();
}

init();
