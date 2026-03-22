const profileData = {
  hero: {
    role: "Mechanical Engineer | 3 Years Experience",
    name: "Shubham Patel",
    summary:
      "Mechanical engineer with experience across EV powertrain development, drivetrain analysis, CAE-led design validation, vehicle CAD, Baja programs, and build-oriented engineering. My work has mainly involved turning analysis into practical design decisions, from gearbox modelling and tolerance stack-up to structural checks, packaging, and technical documentation.",
    portrait: "./assets/custom/imageprofilr.jpg",
    tags: ["EV Powertrain Development", "Drivetrain Analysis", "CAE Validation", "Vehicle CAD"],
    facts: [
      { label: "Based in", value: "Bengaluru, India" },
      { label: "Current role", value: "Ather Energy" },
      { label: "Background", value: "Mechanical Engineering, PDEU" }
    ]
  },
  strengths: [
    {
      title: "EV Powertrain and Transmission Development",
      text: "Gearbox modelling, ratio selection, tolerance stack-up, design support, and release-linked engineering for electric mobility systems."
    },
    {
      title: "Drivetrain Analysis and Design Validation",
      text: "System-level interpretation of gears, shafts, and bearings to support durability, efficiency, and reliability before hardware validation."
    },
    {
      title: "CAE and Structural Verification",
      text: "Finite element analysis, load-case definition, deformation checks, and factor-of-safety review for mechanically critical components."
    },
    {
      title: "Vehicle CAD, Packaging, and Build Support",
      text: "Packaging, layout, subsystem integration, manufacturing exposure, and engineering decisions shaped by testing and build reality."
    }
  ],
  projects: [
    {
      id: "powertrain-dev",
      category: "Mobility Systems",
      title: "EV Powertrain Development",
      tools: "Romax, Gearbox Design, Tolerance Stack-Up",
      image: "./assets/custom/matter bike.jpg",
      imageFit: "cover",
      excerpt: "Transmission development work tied to validation, release, and product decisions.",
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
      category: "Drivetrain Analysis",
      title: "Transmission Analysis in Romax",
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
      id: "cae-fea",
      category: "CAE and Validation",
      title: "CAE and Structural Validation",
      tools: "Siemens NX, ANSYS, Von Mises, FOS",
      image: "./assets/baja_doc_media/image34.png",
      imageFit: "contain",
      excerpt: "Structural checks for components that had to withstand realistic vehicle loads.",
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
      title: "Baja ATV Design and Packaging",
      tools: "Siemens NX, Packaging, Roll Cage",
      image: "./assets/custom/baja cad file for atv.png",
      imageFit: "contain",
      excerpt: "ATV packaging and subsystem integration with safety and performance in mind.",
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
      id: "manufacturing-exposure",
      category: "Build Support",
      title: "Manufacturing and Build Support",
      tools: "Machining, CNC, Welding, Shop-Floor Work",
      image: "./assets/baja_ppt_media/image57.png",
      imageFit: "cover",
      excerpt: "Design decisions informed by fabrication, fixtures, machining, and build reality.",
      summary:
        "Alongside design and simulation, I have worked close to manufacturing workflows including jigs and fixtures, machining exposure, supplier coordination, and the practical constraints that shape released hardware.",
      points: [
        "Supported jigs, fixtures, and manufacturing planning in Baja work.",
        "Exposure to machining, welding, and CNC-oriented workflows.",
        "Worked with supplier and process considerations in industry roles."
      ],
      links: []
    }
  ],
  support: [
    {
      title: "Team Leadership and Coordination",
      text: "Progressed from contributor to Analysis Department Head in Team Czar, balancing technical ownership with planning and coordination."
    },
    {
      title: "Technical Communication",
      text: "Explained mechanical engineering topics through live sessions and problem solving work, which strengthened clarity in technical discussions."
    },
    {
      title: "Engineering Documentation",
      text: "Worked on reports, evaluation material, and technical presentations that made the engineering easier to review and communicate."
    },
    {
      title: "Academic Foundation",
      text: "Silver Medal at PDEU with a CPI of 9.81, reflecting a strong analytical base in mechanical engineering."
    }
  ],
  contactNote:
    "Available for conversations around powertrain, drivetrain analysis, CAE, CAD, validation, and broader product development work.",
  contacts: [
    { label: "Email", value: "patelshubham152.ps@gmail.com", url: "mailto:patelshubham152.ps@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/shubham-patel-38b679176", url: "https://linkedin.com/in/shubham-patel-38b679176" },
    { label: "Resume", value: "ShubhamPatel_Resume_2025", url: "./assets/ShubhamPatel_Resume_2025.pdf" }
  ]
};

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
  modalLinks: document.getElementById("modal-links")
};

const projectMap = new Map();

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
          <span>${item.value}</span>
        </a>
      `
    )
    .join("");
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
  document.body.style.overflow = "";
}

function attachEvents() {
  document.addEventListener("click", (event) => {
    const projectCard = event.target.closest("[data-project-id]");
    if (projectCard) {
      openModal(projectCard.dataset.projectId);
      return;
    }

    if (event.target.closest("[data-close='true']") || event.target === elements.modalClose) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    const projectCard = event.target.closest("[data-project-id]");
    if (projectCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openModal(projectCard.dataset.projectId);
      return;
    }

    if (event.key === "Escape" && !elements.modal.hidden) {
      closeModal();
    }
  });
}

function init() {
  renderHero();
  renderStrengths();
  renderProjects();
  renderSupport();
  renderContacts();
  attachEvents();
}

init();
