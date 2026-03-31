const SITE_VERSION = "20260331b";

const profileData = {
  hero: {
    role: "Mechanical Engineer | 3 Years Experience",
    name: "Shubham Patel",
    summary:
      "Mechanical engineer with experience across EV powertrain development, drivetrain analysis, release support, structural validation, vehicle integration, and build-facing execution. My work has largely sat between simulation, design updates, validation follow-up, and execution support, turning technical findings into practical engineering decisions.",
    portrait: "./assets/custom/imageprofilr.jpg",
    tags: ["Powertrain Development", "Drivetrain Analysis", "Release Support", "Design Validation"],
    facts: [
      { label: "Based in", value: "Bengaluru, India" },
      { label: "Current role", value: "Ather Energy" },
      { label: "Earlier exposure", value: "Matter Motor Works and Solize" }
    ]
  },
  strengths: [
    {
      title: "Powertrain Development and Transmission Support",
      text: "Gearbox modelling, ratio studies, stack-up decisions, and engineering support tied to EV transmission behaviour and product targets."
    },
    {
      title: "Drivetrain Analysis and Structural Validation",
      text: "System-level interpretation of shafts, gears, bearings, and structural loads to support durability, efficiency, and validation planning."
    },
    {
      title: "Engineering Release and Validation Support",
      text: "Tolerance stack-up, drawing support, DFM and RCA closure, validation follow-up, and practical coordination to move engineering work toward release."
    },
    {
      title: "Vehicle Integration and Build Readiness",
      text: "Vehicle layout, subsystem integration, packaging discipline, and build-aware engineering shaped by manufacturing and assembly constraints."
    }
  ],
  projects: [
    {
      id: "powertrain-dev",
      category: "Mobility Systems",
      title: "EV powertrain development",
      tools: "Romax, Gearbox Design, Tolerance Stack-Up",
      image: "./assets/custom/matter bike.jpg",
      imageFit: "cover",
      excerpt: "Transmission development work connected to validation, release, and product decisions.",
      summary:
        "At Matter, I worked on transmission-focused development for the Aera platform. The work covered Romax modelling, ratio studies, tolerance stack-up, drawing support, and engineering follow-up linked to validation and release activity.",
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
      category: "Drivetrain Analysis",
      title: "Transmission analysis",
      tools: "Romax, Shafts, Bearings, Gears",
      image: "./assets/custom/transmission matter.jpg",
      imageFit: "contain",
      excerpt: "System-level work across gears, shafts, and bearings for strength, life, and efficiency.",
      summary:
        "This work was about reading the drivetrain as one interacting system. I used Romax outputs around gears, shafts, and bearings to support strength, life, efficiency, and reliability decisions before hardware validation.",
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
      title: "Release support and issue closure",
      tools: "Tolerance Stack-Up, DFM, RCA, Release Support",
      image: "./assets/baja_ppt_media/image57.png",
      imageFit: "cover",
      excerpt: "Engineering support around closure, coordination, and getting decisions ready for execution.",
      summary:
        "A useful part of my work has been carrying analysis and design work through drawing updates, DFM checks, RCA closure, validation follow-up, and release-oriented coordination.",
      points: [
        "Worked on tolerance stack-up and drawing-related engineering support.",
        "Supported DFM and issue-closure activity during validation phases.",
        "Connected engineering decisions with release and execution needs.",
        "Worked with supplier, manufacturing, and practical process constraints."
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
      text: "Worked across analysis, design, validation, manufacturing, and release-oriented discussions rather than staying limited to one isolated engineering step."
    },
    {
      title: "Documentation and Design Review Support",
      text: "Prepared engineering reports, drawing support material, and technical communication that helped reviews move faster and with more clarity."
    },
    {
      title: "Build and Validation Follow-Up",
      text: "Stayed close to the practical side of execution through manufacturing exposure, validation closure, and issue-tracking linked to real hardware outcomes."
    },
    {
      title: "Leadership and Technical Communication",
      text: "Progressed into ownership roles in Team Czar and built confidence in explaining engineering work clearly in team, academic, and problem-solving settings."
    }
  ],
  contactNote:
    "If the conversation is around powertrain systems, drivetrain analysis, structural validation, vehicle integration, or engineering execution, feel free to reach out.",
  contacts: [
    { label: "Email", action: "Send message", url: "mailto:patelshubham152.ps@gmail.com" },
    { label: "LinkedIn", action: "Open profile", url: "https://linkedin.com/in/shubham-patel-38b679176" },
    { label: "Resume", action: "Open resume", url: "./assets/ShubhamPatel_Resume_2025.pdf" }
  ]
};

const fallbackStories = [
  {
    id: "analysis-to-decision",
    category: "Powertrain",
    date: "March 2026",
    title: "When analysis needs to change a design",
    excerpt: "Simulation becomes useful only when it pushes a design or release decision forward.",
    summary:
      "A large part of my drivetrain work has been less about generating outputs and more about deciding what those outputs should change.",
    takeaways: [
      "The value of Romax is in the decision it supports, not the report it generates.",
      "Stack-up and validation follow-up matter because they connect theory to release reality.",
      "Good analysis shortens decision time when it is tied to design actions."
    ],
    content: [
      "I have found that analysis work becomes meaningful only when it changes the next engineering step. If a model is accurate but does not help with ratio selection, stack-up, closure, or validation planning, it stays academic.",
      "In drivetrain work, the useful question is usually not whether the model is detailed enough. The useful question is whether the result is clear enough for the team to act on. That shift in thinking makes the work more practical and more valuable."
    ]
  },
  {
    id: "build-reality-in-cad",
    category: "Execution",
    date: "March 2026",
    title: "Why build reality should affect design early",
    excerpt: "Packaging work gets better when fabrication, assembly, and access are considered from the start.",
    summary:
      "Some of the best design decisions are not about cleaner geometry. They are about reducing pain later in build, assembly, and validation.",
    takeaways: [
      "Packaging quality is stronger when assembly and serviceability are considered early.",
      "Build constraints often improve design judgement rather than limit it.",
      "Practical exposure changes how clean or useful a model really is."
    ],
    content: [
      "Baja and project work made this clear to me very early. A layout can look resolved on screen and still create avoidable friction during fabrication or assembly.",
      "That is why I value build-facing engineering. It forces better decisions on spacing, access, manufacturability, and the overall maturity of the design."
    ]
  },
  {
    id: "baja-engineering-loop",
    category: "Learning",
    date: "March 2026",
    title: "What Baja taught me about the engineering loop",
    excerpt: "The strongest Baja learning was that design, simulation, build, and testing should keep informing each other.",
    summary:
      "Baja was useful because it made engineering feel like a loop instead of a sequence of separate tasks.",
    takeaways: [
      "Design, analysis, build, and testing make more sense when treated as one loop.",
      "Competition projects teach ownership because design choices show up quickly in reality.",
      "The fastest way to improve judgement is to stay close to both analysis and hardware."
    ],
    content: [
      "In Baja work, the design could not stay isolated from analysis, and analysis could not stay isolated from build. Each phase exposed something about the others.",
      "That experience shaped how I now think about engineering work. I prefer roles where the technical task is connected to validation, practical constraints, and the larger product outcome."
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
  elements.heroTags.innerHTML = profileData.hero.tags.map((tag) => `<span class="hero-tag">${tag}</span>`).join("");
  elements.heroFacts.innerHTML = profileData.hero.facts
    .map(
      (item) => `
        <article class="fact-card">
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
  elements.storyModalTakeaways.innerHTML = (story.takeaways || []).map((point) => `<li>${point}</li>`).join("");
  elements.storyModalContent.innerHTML = (story.content || []).map((paragraph) => `<p>${paragraph}</p>`).join("");

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




