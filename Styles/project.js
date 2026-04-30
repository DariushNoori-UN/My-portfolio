
const projects = [
  {
    id: 1,
    number: "01",
    title: "IOT Project",
    subtitle: "Automated AI Human Detector",
    shortDesc: null,
    status: "done",
    tags: ["Python", "linux", "Raspberry Pi"],
    image: "", // e.g. "images/portfolio.png"
    description:
      "A Group project where we built an AI-powered human detection system using a Raspberry Pi and a camera module. The system uses a pre-trained model to identify humans in the camera feed and sends alerts when motion is detected.",
    learned: [
      "How to structure a multi-page website with consistent design language across pages.",
      "The importance of spacing, typography, and visual hierarchy in UI design.",
      "How to make design decisions that balance personality with professionalism.",
    ],
    skills: ["HTML & CSS", "Responsive layout", "Visual design", "Typography", "JavaScript DOM manipulation"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live Site", href: "#", filled: true },
    ],
  },
  {
    id: 2,
    number: "02",
    title: "SPA Booking Website",
    subtitle: "FullStack Essientials Project",
    shortDesc: null,
    status: "done",
    tags: ["Bootstrap", "JavaScript", "Advanced CSS"],
    image: null,
    description:
      "A website where we created a booking platform for a fictional spa. The site features a clean, calming design with interactive elements like a booking form, service descriptions, and a gallery. We focused on creating an intuitive user experience while showcasing the spa's offerings.",
    learned: [
      "How to use Bootstrap components to quickly build a responsive layout.",
      "How to use API requests to fetch and display dynamic content on a static site.",
      "How to use JavaScript to enhance user interactions, like form validation and dynamic content loading.",
    ],
    skills: ["Javscript", "API","Async/Await", "JSON handling", "Bootstrap"],
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    id: 3,
    number: "03",
    title: "Shoobh News",
    subtitle: "Web Development",
    shortDesc: null,
    status: "done",
    tags: ["JavaScript", "API", "UI/UX"],
    image: null,
    description:
      "A Comprehensive Tall-stack project where I build a News website with Laravel from Scratch unlocking the full potentional of mine in development",
    learned: [
      "How to connect front-end and bank-end using laravel livewire",
      "How to create validations for forms",
      "How to implement the crud logic",
    ],
    skills: ["Php", "Laravel/Livewire", "Tailwindcss", "Alpine.js", "MySQL"],
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    id: 4,
    number: "04",
    title: "Anderson's Webpage",
    subtitle: "UML Diagrams",
    shortDesc: "created a complex software design system for a client",
    status: "done",
    tags: ["Figma", "UML Diagram", "Communication","Software Design"],
    image: null,
    description:
      "As a film photography hobbyist, I wanted a minimal way to keep track of the rolls I shoot. This app lets me log each roll, add shot notes, and review past rolls. It uses browser localStorage so there's no backend needed.",
    learned: [
      "How to use localStorage to persist data without a server.",
      "How to build forms that feel lightweight and fast.",
      "How designing for a personal need makes you a better product thinker.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "LocalStorage", "Form design"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live Demo", href: "#", filled: true },
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Java OOP Exercises",
    subtitle: "Learning project",
    shortDesc: "A collection of object-oriented programming exercises in Java, covering inheritance, interfaces, and design patterns.",
    status: "done",
    tags: ["Java", "OOP", "Data Structures"],
    image: null,
    description:
      "A personal project repository I maintain as part of my Java learning journey at Thomas More. Includes classic OOP exercises, small simulations (like a bank account system), and experiments with data structures like linked lists and queues.",
    learned: [
      "How object-oriented design helps manage complexity in larger programs.",
      "The difference between interfaces and abstract classes — and when to use each.",
      "How to write clean, readable Java code with proper encapsulation.",
    ],
    skills: ["Java", "OOP", "Inheritance", "Interfaces", "Data structures"],
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    id: 6,
    number: "06",
    title: "Linux Dotfiles",
    subtitle: "System configuration",
    shortDesc: "My personal Linux configuration files — shell aliases, bash scripts, and terminal setup to make the CLI feel like home.",
    status: "wip",
    tags: ["Linux", "Bash", "Git"],
    image: null,
    description:
      "A repo where I track my evolving Linux environment setup. Includes shell aliases that save me keystrokes every day, a custom prompt, and bash scripts for repetitive tasks. It's a living project that grows as I get more comfortable on the command line.",
    learned: [
      "How to write Bash scripts that are actually useful day-to-day.",
      "How version-controlling config files makes switching machines painless.",
      "How spending time on your tools pays back every time you use them.",
    ],
    skills: ["Linux CLI", "Bash scripting", "Git", "Shell customization", "Automation"],
    links: [{ label: "GitHub", href: "#" }],
  },
];


//  HELPERS


/** Returns the HTML for a card image or a styled placeholder */
function cardImageHtml(p) {
  if (p.image) {
    return `
      <div class="card-image">
        <img
          src="${p.image}"
          alt="Screenshot of ${p.title}"
          onerror="this.parentElement.innerHTML = placeholderHtml()"
        />
      </div>`;
  }
  return `
    <div class="card-image">
      <div class="card-image-placeholder">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="13" cy="17" r="3" stroke="currentColor" stroke-width="1.5"/>
          <path d="M4 28l8-7 6 5 5-4 9 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>No screenshot yet</span>
      </div>
    </div>`;
}

/** Returns the HTML for the modal hero image or a slim placeholder */
function modalImageHtml(p) {
  if (p.image) {
    return `
      <div class="modal-image">
        <img src="${p.image}" alt="Screenshot of ${p.title}" />
      </div>`;
  }
  return `
    <div class="modal-image">
      <div class="modal-image-placeholder">No screenshot available</div>
    </div>`;
}


//  RENDER CARDS

function renderCards() {
  const grid = document.getElementById("projects-grid");

  grid.innerHTML = projects
    .map(
      (p) => `
    <div
      class="project-card"
      onclick="openModal(${p.id})"
      role="button"
      tabindex="0"
      aria-label="View details for ${p.title}"
    >
      ${cardImageHtml(p)}

      <div class="card-body">
        <div class="card-number">${p.number}</div>
        <h2 class="card-title">${p.title}</h2>
        
        <div class="card-footer">
          <span class="learn-more">
            View project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="status-badge ${p.status === "done" ? "status-done" : "status-wip"}">
            ${p.status === "done" ? "Completed" : "In progress"}
          </span>
        </div>
      </div>
    </div>`
    )
    .join("");
}


//  MODAL

function openModal(id) {
  const p = projects.find((x) => x.id === id);
  if (!p) return;

  const linksHtml = p.links
    .map(
      (l) =>
        `<a href="${l.href}" class="modal-link ${l.filled ? "filled" : ""}">${l.label}</a>`
    )
    .join("");

  document.getElementById("modal-body").innerHTML = `
    ${modalImageHtml(p)}

    <div class="modal-text">
      <p class="modal-label">Project ${p.number}</p>
      <h2 class="modal-title">${p.title}</h2>
      <p class="modal-subtitle">${p.subtitle}</p>

      <div class="modal-tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>

      <div class="modal-section">
        <h3>About this project</h3>
        <p>${p.description}</p>
      </div>

      <hr class="modal-divider"/>

      <div class="modal-section">
        <h3>What I learned</h3>
        <ul>${p.learned.map((l) => `<li>${l}</li>`).join("")}</ul>
      </div>

      <hr class="modal-divider"/>

      <div class="modal-section">
        <h3>Skills developed</h3>
        <div class="card-tags">
          ${p.skills.map((s) => `<span class="tag">${s}</span>`).join("")}
        </div>
      </div>

      <hr class="modal-divider"/>
      <div class="modal-links">${linksHtml}</div>
    </div>
  `;

  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// 
//  EVENT LISTENERS
// 
document.getElementById("modal-close").addEventListener("click", closeModal);

document.getElementById("modal-overlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();

  // Allow Enter key to open a focused card
  if (e.key === "Enter" && e.target.classList.contains("project-card")) {
    e.target.click();
  }
});

// 
//  INIT
// 
renderCards();