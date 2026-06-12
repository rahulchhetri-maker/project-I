/**
 * ABO± Network Infrastructure Core Engines
 * Fully Refactored & Optimized Production-Ready Layer
 */

// Function to toggle the modal visibility
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('auth-modal');
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');

    // 1. Unified toggle function
    window.toggleAuth = () => {
        modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
    };

    // 2. Select ALL buttons that should open the modal
    // Note: Give your buttons the class "btn-auth"
    const authButtons = document.querySelectorAll('.btn-auth');
    authButtons.forEach(btn => {
        btn.addEventListener('click', toggleAuth);
    });

    // 3. View Switcher
    window.switchView = (view) => {
        if (view === 'login') {
            loginView.style.display = 'block';
            registerView.style.display = 'none';
            if(tabLogin) tabLogin.classList.add('active');
            if(tabRegister) tabRegister.classList.remove('active');
        } else {
            loginView.style.display = 'none';
            registerView.style.display = 'block';
            if(tabLogin) tabLogin.classList.remove('active');
            if(tabRegister) tabRegister.classList.add('active');
        }
    };
});

// Global state tracking variables
/**
 * BloodFlowController: High-performance animation engine
 * Manages the fluid flow, pulse rhythms, and bag levels programmatically.
 */
class BloodFlowController {
    constructor(svgElement) {
        this.svg = svgElement;
        this.fluid = this.svg.querySelector('.liquid-wave-element');
        this.pulseRings = this.svg.querySelectorAll('.pulse-ring');
        this.startTime = performance.now();
        this.bloodLevel = 0; // 0 to 100
        
        this.init();
    }

    init() {
        this.animate();
    }

    // Update the fluid level dynamically
    setBloodLevel(percent) {
        this.bloodLevel = Math.min(100, Math.max(0, percent));
    }

    animate(currentTime) {
        const elapsed = (currentTime - this.startTime) / 1000;

        // 1. Precise Fluid Wave Motion
        const wave = Math.sin(elapsed * 2.5) * 5;
        const fillOffset = 120 - (this.bloodLevel * 1.35);
        this.fluid.setAttribute('transform', `translate(${wave}, ${fillOffset})`);

        // 2. Pulse Rhythm Engine (Lub-Dub variation)
        const pulse = Math.sin(elapsed * 4) > 0.9 ? 1 : 0;
        this.pulseRings.forEach(ring => {
            ring.style.opacity = pulse ? 0.6 : 0;
            ring.style.transform = pulse ? 'scale(1.5)' : 'scale(1)';
        });

        requestAnimationFrame((t) => this.animate(t));
    }
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    const svg = document.querySelector('.donation-svg-engine');
    const engine = new BloodFlowController(svg);
    
    // Example: Gradually fill the bag over time
    let progress = 0;
    const interval = setInterval(() => {
        progress += 0.5;
        engine.setBloodLevel(progress);
        if (progress >= 100) clearInterval(interval);
    }, 100);
});

const PLATFORM_STATE = {
  currentTheme: 'dark',
  isMenuOpen: false,
  // expanded eligibility weights (keys are question data-weight values)
  eligibilityWeights: { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  activeFeedIndex: 0
};

// Simulated Real-Time Telemetry Event Log Matrix
const FIELD_TELEMETRY_STREAM = [
  { c: 'green', t: 'Anil Kumar registered as A+ active donor pool node' },
  { c: 'red', t: 'Emergency Broadcast Broadcasted: O− requested at Patan Hospital' },
  { c: 'green', t: 'Maya Thapa cleared allocation sequence · Group B+' },
  { c: 'yellow', t: 'Reserves tracking critically low vector threshold at BPKIHS' },
  { c: 'green', t: 'Spatial tracking matched 4 active nodes in Bhaktapur vicinity' }
];

// Database Matrix for Cross-Matching Visualizer
const CROSS_MATCH_MATRIX = {
  op:  { give: "All Blood Profiles (Universal Donor Node)", receive: "O+ Profile , O− Profile" },
  on:  { give: "Absolute Universal Distribution Profile Stack", receive: "O− Matrix Node Exclusively" },
  ap:  { give: "A+ Profile , AB+ Profile", receive: "A+ , A− , O+ , O− Profiles" },
  an:  { give: "A+ , A− , AB+ , AB− Node Vectors", receive: "A− Profile , O− Profile Profiles" },
  bp:  { give: "B+ Profile , AB+ Profile", receive: "B+ , B− , O+ , O− Profiles" },
  bn:  { give: "B+ , B− , AB+ , AB− Node Vectors", receive: "B− Profile , O− Profile Profiles" },
  abp: { give: "AB+ Profile Segment Exclusively (Universal Receiver Node)", receive: "Complete Network Spectrum (All Active Pools)" },
  abn: { give: "AB+ Profile , AB− Profile Components", receive: "AB− , A− , B− , O− Profile Pools" }
};

// Globally cached DOM references
const DOM = {
  html: document.documentElement,
  navbar: document.getElementById('navbar'),
  progressBar: document.getElementById('progress'),
  preloader: document.getElementById('preloader'),
  preBar: document.getElementById('pre-bar'),
  preText: document.getElementById('pre-text'),
  themeToggle: document.getElementById('theme-toggle'),
  themeIcon: document.querySelector('.toggle-thumb i'),
  menuBtn: document.getElementById('menu-btn'),
  mobileMenu: document.getElementById('mobile-menu'),
  curDot: document.getElementById('cur-dot'),
  curRing: document.getElementById('cur-ring'),
  compatOutput: document.getElementById('compat-output'),
  eligScore: document.getElementById('elig-score'),
  eligFeedback: document.getElementById('elig-feedback'),
  activityFeed: document.getElementById('activity-feed'),
  pulsePath: document.getElementById('pulse-path'),
  testimonialTrack: document.getElementById('testimonial-track')
};

/**
 * MODULE 1: LENIS SMOOTH SCROLL INTEGRATION
 * Unlocked native momentum parameters by releasing strict HTML/CSS containment rules
 */
const initLenisScrollEngine = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.0,
    prevent: false
  });

const runScrollLoop = (time) => {
  lenis.raf(time);
  requestAnimationFrame(runScrollLoop);
};

requestAnimationFrame(runScrollLoop);

  // High-performance smooth scrolling matrix link router
  document.querySelectorAll('.nav-links a, .mob-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href');
      
      if (targetID === '#') {
        lenis.scrollTo(0);
      } else {
        lenis.scrollTo(targetID);
      }
      
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    });
  });
};

/**
 * MODULE 2: GRAPHICAL TELEMETRY & BOOT SEQUENCE HANDLERS
 */
const initPreloaderSequence = () => {
  let loadProgress = 0;
  
  const loadingInterval = setInterval(() => {
    loadProgress += Math.floor(Math.random() * 15) + 5;
    
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(loadingInterval);
      
      gsap.to(DOM.preloader, { 
        opacity: 0, 
        duration: 0.8, 
        ease: 'power4.inOut', 
        onComplete: () => {
          DOM.preloader.style.display = 'none';
        } 
      });
      
      triggerHeroCinematics();
    }
    
    if (DOM.preBar) DOM.preBar.style.width = `${loadProgress}%`;
    if (DOM.preText) DOM.preText.innerText = `SYSTEM BOOT PARAMETERS: ${loadProgress}%`;
  }, 80);
};

const triggerHeroCinematics = () => {
  gsap.from('.hero-title .grad', { textShadow: "0 0 0px rgba(255,31,61,0)", duration: 1.5 });
  gsap.from('.hero-left > *', { opacity: 0, y: 40, duration: 1.2, stagger: 0.15, ease: 'power4.out' });
  gsap.from('.donor-card-float', { scale: 0.8, opacity: 0, duration: 1, delay: 0.6, ease: 'back.out(1.7)' });
};

const initScrollTriggers = () => {
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (scrollHeight > 0 && DOM.progressBar) {
      DOM.progressBar.style.width = `${(winScroll / scrollHeight) * 100}%`;
    }
    
    if (window.scrollY > 50) {
      DOM.navbar.classList.add('scrolled');
    } else {
      DOM.navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  document.querySelectorAll('section').forEach((sec) => {
    gsap.fromTo(sec, { y: 60, opacity: 0.8, rotationX: 2 }, {
      y: 0, opacity: 1, rotationX: 0, ease: 'none',
      scrollTrigger: {
        trigger: sec,
        start: 'top bottom',
        end: 'top center',
        scrub: true
      }
    });
  });
};

/**
 * MODULE 3: INTERACTIVE USER INTERFACE MECHANISMS
 */
const initUserInterfaceControllers = () => {
  const applyTheme = (theme) => {
    // 1. Set global theme
    DOM.html.setAttribute("data-theme", theme);
    PLATFORM_STATE.currentTheme = theme;

    // 2. Sync toggle safely (single source of truth = HTML attribute)
    if (DOM.themeToggle) {
      DOM.themeToggle.checked = theme === "light";
    }

    // 3. Sync icon
    if (DOM.themeIcon) {
      DOM.themeIcon.className =
        theme === "light"
          ? "fa-solid fa-sun"
          : "fa-solid fa-moon";
    }

    // 4. Prevent visual glitches after theme switch
    requestAnimationFrame(() => {
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });

    // 5. Persist theme
    localStorage.setItem("theme", theme);
  };

  // Load saved theme ONCE (prevents mismatch bug)
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  // Toggle handler
  if (DOM.themeToggle) {
    DOM.themeToggle.addEventListener("change", () => {
      const newTheme =
        DOM.html.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";

      applyTheme(newTheme);
    });
  }
};

  // Mobile Overlay Toggle Module
  if (DOM.menuBtn && DOM.mobileMenu) {
    DOM.menuBtn.addEventListener('click', () => {
      PLATFORM_STATE.isMenuOpen = !PLATFORM_STATE.isMenuOpen;
      DOM.mobileMenu.classList.toggle('open', PLATFORM_STATE.isMenuOpen);
    });

    document.querySelectorAll('.mob-link').forEach(link => {
      link.addEventListener('click', () => {
        PLATFORM_STATE.isMenuOpen = false;
        DOM.mobileMenu.classList.remove('open');
      });
    });
  }

  // High-Fidelity Custom Pointer Mechanics
  if (DOM.curDot && DOM.curRing && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      gsap.to(DOM.curDot, { x: e.clientX, y: e.clientY, duration: 0.05 });
      gsap.to(DOM.curRing, { x: e.clientX, y: e.clientY, duration: 0.25 });
    });

    document.querySelectorAll('a, button, .bnode, .qb').forEach(elem => {
      elem.addEventListener('mouseenter', () => DOM.curRing.classList.add('on'));
      elem.addEventListener('mouseleave', () => DOM.curRing.classList.remove('on'));
    });
  }

  // Magnetic Click Ripples 
  document.querySelectorAll('.ripple-wrap').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = this.getBoundingClientRect();
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });


/**
 * MODULE 4: PIPELINE CALCULATIONS & CAROUSEL DRIVERS
 */
const initDataCalculatorsAndSliders = () => {
  document.querySelectorAll('.bnode').forEach(node => {
    node.addEventListener('click', function() {
      document.querySelectorAll('.bnode').forEach(n => n.classList.remove('active'));
      this.classList.add('active');
      
      const bloodType = this.getAttribute('data-type');
      if (DOM.compatOutput && CROSS_MATCH_MATRIX[bloodType]) {
        DOM.compatOutput.innerHTML = `
          <h3>Cross-Operational Pipeline Details for ${this.innerText} Matrix</h3>
          <div class="compat-row">
            <div class="ci">
              <div class="ci-lbl">Outbound Recipient Vectors (Can Give To)</div>
              <div class="ci-val">${CROSS_MATCH_MATRIX[bloodType].give}</div>
            </div>
            <div class="ci">
              <div class="ci-lbl">Inbound Inflow Pipeline (Can Receive From)</div>
              <div class="ci-val">${CROSS_MATCH_MATRIX[bloodType].receive}</div>
            </div>
          </div>
        `;
        gsap.from('.compat-row', { opacity: 0, y: 15, duration: 0.4 });
      }
    });
  });
};

// Diagnostic Metric Matrix Updates
window.answerQ = (btn, selectionValue) => {
  const itemNode = btn.closest('.q-item');
  if (!itemNode) return;
  
  const questionWeightID = itemNode.getAttribute('data-weight');
  
  itemNode.querySelectorAll('.qb').forEach(b => b.classList.remove('active-yes', 'active-no'));
  btn.classList.add(selectionValue ? 'active-yes' : 'active-no');
  
  PLATFORM_STATE.eligibilityWeights[questionWeightID] = selectionValue;
  recomputeEligibilityIndex();
};

const recomputeEligibilityIndex = () => {
  if (!DOM.eligScore || !DOM.eligFeedback) return;

  const w = PLATFORM_STATE.eligibilityWeights;

  // Immediate disqualifiers
  if (w['1'] === false) {
    DOM.eligScore.innerText = `0%`;
    DOM.eligFeedback.innerText = 'Not Eligible: Below minimum weight requirement.';
    gsap.from(DOM.eligScore, { scale: 0.7, duration: 0.3, ease: 'back.out' });
    return;
  }
  if (w['3'] === true) {
    DOM.eligScore.innerText = `0%`;
    DOM.eligFeedback.innerText = 'Not Eligible: Donated within the last 90 days.';
    gsap.from(DOM.eligScore, { scale: 0.7, duration: 0.3, ease: 'back.out' });
    return;
  }
  if (w['6'] === true) {
    DOM.eligScore.innerText = `0%`;
    DOM.eligFeedback.innerText = 'Not Eligible: Recent fever or infectious symptoms reported.';
    gsap.from(DOM.eligScore, { scale: 0.7, duration: 0.3, ease: 'back.out' });
    return;
  }
  if (w['7'] === false) {
    DOM.eligScore.innerText = `0%`;
    DOM.eligFeedback.innerText = 'Not Eligible: Does not meet minimum age requirement.';
    gsap.from(DOM.eligScore, { scale: 0.7, duration: 0.3, ease: 'back.out' });
    return;
  }

  // Start from 100 and apply soft penalties
  let score = 100;
  const notes = [];
  if (w['2'] === true) { score -= 60; notes.push('Tattoo/piercing within 6 months'); }
  if (w['4'] === true) { score -= 50; notes.push('Recent surgery within 6 months'); }
  if (w['5'] === true) { score -= 40; notes.push('Currently taking medication that may affect donation'); }

  if (score <= 40) {
    DOM.eligScore.innerText = `${Math.max(0, score)}%`;
    DOM.eligFeedback.innerText = `Temporarily Ineligible: ${notes.length ? notes.join('; ') : 'Further screening required.'}`;
  } else {
    DOM.eligScore.innerText = `${score}%`;
    DOM.eligFeedback.innerText = `Eligible: ${notes.length ? 'Notes: ' + notes.join('; ') : 'Passes preliminary checks.'}`;
  }

  gsap.from(DOM.eligScore, { scale: 0.7, duration: 0.3, ease: 'back.out' });
};

// Continuous Live Data Telemetry Generator Loop
const runLiveTelemetryFeedStream = () => {
  if (!DOM.activityFeed) return;
  
  setInterval(() => {
    const currentLogMessage = FIELD_TELEMETRY_STREAM[PLATFORM_STATE.activeFeedIndex % FIELD_TELEMETRY_STREAM.length];
    PLATFORM_STATE.activeFeedIndex++;
    
    const rowElement = document.createElement('div');
    rowElement.className = 'act-row';
    rowElement.innerHTML = `
      <div class="act-dot ${currentLogMessage.c}"></div>
      <div class="act-text">${currentLogMessage.t}</div>
      <div class="act-time">Just Now</div>
    `;
    
    DOM.activityFeed.insertBefore(rowElement, DOM.activityFeed.firstChild);
    
    if (DOM.activityFeed.children.length > 4) {
      DOM.activityFeed.lastChild.remove();
    }
    
    gsap.from(rowElement, { opacity: 0, x: -20, duration: 0.4 });
  }, 3500);
};

// Procedural Dynamic Amplitude Canvas Path Wave Loops
let pulsePhaseShift = 0;
const animatePulseWaveNetwork = () => {
  if (!DOM.pulsePath) return;
  
  pulsePhaseShift += 0.05;
  let dynamicPathString = "M0,50 ";
  
  for (let xCoord = 0; xCoord <= 300; xCoord += 10) {
    let yCoord = 50 + Math.sin(xCoord * 0.05 + pulsePhaseShift) * 20 * (Math.random() * 0.4 + 0.6);
    
    if (xCoord % 70 === 0) yCoord -= 35;
    if (xCoord % 90 === 0) yCoord += 30;
    
    dynamicPathString += `L${xCoord},${yCoord} `;
  }
  
  DOM.pulsePath.setAttribute('d', dynamicPathString);
  requestAnimationFrame(animatePulseWaveNetwork);
};

// Testimonial Layer Slide Matrix Rotator logic
let activeSlideIndex = 0;
let _testimonialTimer = null;
let _sliderLock = false;
let _realSlideCount = 0;

const initTestimonialCarousel = () => {
  const track = DOM.testimonialTrack;
  if (!track) return;

  const slides = Array.from(track.children);
  if (slides.length < 2) return; // nothing to do

  // clone first and last for infinite feel
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, track.firstChild);

  _realSlideCount = slides.length;
  activeSlideIndex = 1; // start at real first

  // set initial position after layout
  requestAnimationFrame(() => {
    const gap = parseFloat(getComputedStyle(track).gap) || 32;
    const slideWidth = track.children[0].getBoundingClientRect().width + gap;
    gsap.set(track, { x: -slideWidth * activeSlideIndex });
  });

  // hover pause/resume
  track.addEventListener('mouseenter', _stopTestimonialAutoplay);
  track.addEventListener('mouseleave', _startTestimonialAutoplay);
};

window.shiftSlider = (movementDirection) => {
  if (!DOM.testimonialTrack || _sliderLock) return;
  _sliderLock = true;

  const track = DOM.testimonialTrack;
  const gap = parseFloat(getComputedStyle(track).gap) || 32;
  const slideWidth = track.children[0].getBoundingClientRect().width + gap;

  activeSlideIndex += movementDirection;

  gsap.to(track, { x: -slideWidth * activeSlideIndex, duration: 0.55, ease: 'power3.out', onComplete: () => {
    // handle looping when reaching clones
    if (activeSlideIndex === 0) {
      // moved to cloned last, jump to real last
      activeSlideIndex = _realSlideCount;
      gsap.set(track, { x: -slideWidth * activeSlideIndex });
    }
    if (activeSlideIndex === _realSlideCount + 1) {
      // moved to cloned first, jump to real first
      activeSlideIndex = 1;
      gsap.set(track, { x: -slideWidth * activeSlideIndex });
    }
    // small debounce to prevent rapid clicks
    setTimeout(() => { _sliderLock = false; }, 60);
  } });
};

const _startTestimonialAutoplay = (interval = 5000) => {
  if (_testimonialTimer) clearInterval(_testimonialTimer);
  _testimonialTimer = setInterval(() => window.shiftSlider(1), interval);
};
const _stopTestimonialAutoplay = () => {
  if (_testimonialTimer) clearInterval(_testimonialTimer);
  _testimonialTimer = null;
};

// initialize carousel when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTestimonialCarousel();
  // start autoplay after small delay
  setTimeout(() => _startTestimonialAutoplay(5000), 400);
});

/**
 * LIFE-CYCLE INITIALIZATION EXECUTION OVERLAY MANIFEST
 */
window.addEventListener('DOMContentLoaded', () => {
  initLenisScrollEngine();
  initPreloaderSequence();
  initScrollTriggers();
  initUserInterfaceControllers();
  initDataCalculatorsAndSliders();
  runLiveTelemetryFeedStream();
  animatePulseWaveNetwork();
});
document.documentElement.setAttribute(
  "data-theme",
  localStorage.getItem("theme") || "light"
);
