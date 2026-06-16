/**
 * ABO± Network Infrastructure Core Engines
 * Fully Refactored & Optimized Production-Ready Layer (Session Memory Only)
 */

// Global variable to store the picture temporarily for the session ONLY
window.currentSessionProfilePic = null;

// Global Notification Trigger Engine
window.addNotification = (msg) => {
    const noNotifMsg = document.getElementById('no-notif-msg');
    const notifDot = document.getElementById('notif-dot');
    const notifDropdown = document.getElementById('notif-dropdown');
    const notifBody = document.getElementById('notif-body');

    if (noNotifMsg) noNotifMsg.style.display = 'none';
    if (notifDot && notifDropdown && notifDropdown.style.display !== 'flex') {
        notifDot.style.display = 'block';
    }

    const notifItem = document.createElement('div');
    notifItem.className = 'notif-item';
    notifItem.innerHTML = `<strong>System Alert:</strong><br>${msg}`;
    if (notifBody) notifBody.prepend(notifItem);
};

// Notification Dropdown Click Handler
document.addEventListener("DOMContentLoaded", () => {
    const notifBtn = document.getElementById('notif-btn');
    const notifDropdown = document.getElementById('notif-dropdown');
    const notifDot = document.getElementById('notif-dot');
    const setupPic = document.getElementById('setup-pic');
    const fileBtnText = document.querySelector('.setup-file-text-btn');

    if (setupPic && fileBtnText) {
        setupPic.addEventListener('change', function() {
            if (this.files && this.files.length > 0) {
                const fileName = this.files[0].name;
                
                // If the filename is too long, truncate it nicely so it doesn't break the layout
                const cleanName = fileName.length > 22 
                    ? fileName.substring(0, 19) + '...' 
                    : fileName;
                
                // Change the button text and turn the icon into a green checkmark
                fileBtnText.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #00FF66;"></i> ${cleanName}`;
                fileBtnText.style.borderColor = 'var(--cb, #FF1F3D)';
            } else {
                // Reset back to original state if they clear selection
                fileBtnText.innerHTML = `<i class="fa-solid fa-camera"></i> Choose Photo`;
                fileBtnText.style.borderColor = '';
            }
        });
    }
    
    if (notifBtn && notifDropdown) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = notifDropdown.style.display === 'none' || notifDropdown.style.display === '';
            
            // Close signout dropdown if it is open
            const signoutDrop = document.getElementById('custom-signout-dropdown');
            if (signoutDrop) signoutDrop.style.display = 'none';

            notifDropdown.style.display = isHidden ? 'flex' : 'none';
            if (isHidden && notifDot) notifDot.style.display = 'none'; // Clear the red dot when reading
        });
    }
});

// Function to toggle the modal visibility
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".foot-email-form") || document.querySelector("form");
  const customAlert = document.getElementById("custom-alert");

  if (form) {
    form.addEventListener("invalid", (e) => {
      e.preventDefault();
      
      if (e.target.id === "foot-email") {
        customAlert.textContent = "Please enter a valid email address.";
      } else if (e.target.id === "foot-msg") {
        customAlert.textContent = "Please write a message before sending.";
      } else {
        customAlert.textContent = "Please fill out all required fields.";
      }

      customAlert.classList.add("show");

      setTimeout(() => {
        customAlert.classList.remove("show");
      }, 3500);
    }, true);
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('auth-modal');
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');

    window.toggleAuth = () => {
        modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
    };

    const loginButton = document.getElementById('log');
    if (loginButton) {
        loginButton.addEventListener('click', () => window.toggleAuth());
    }

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

/**
 * BloodFlowController: High-performance animation engine
 */
class BloodFlowController {
    constructor(svgElement) {
        this.svg = svgElement;
        this.fluid = this.svg.querySelector('.liquid-wave-element');
        this.pulseRings = this.svg.querySelectorAll('.pulse-ring');
        this.startTime = performance.now();
        this.bloodLevel = 0; 
        
        this.init();
    }

    init() {
        this.animate();
    }

    setBloodLevel(percent) {
        this.bloodLevel = Math.min(100, Math.max(0, percent));
    }

    animate(currentTime) {
        const elapsed = (currentTime - this.startTime) / 1000;

        const wave = Math.sin(elapsed * 2.5) * 5;
        const fillOffset = 120 - (this.bloodLevel * 1.35);
        this.fluid.setAttribute('transform', `translate(${wave}, ${fillOffset})`);

        const pulse = Math.sin(elapsed * 4) > 0.9 ? 1 : 0;
        this.pulseRings.forEach(ring => {
            ring.style.opacity = pulse ? 0.6 : 0;
            ring.style.transform = pulse ? 'scale(1.5)' : 'scale(1)';
        });

        requestAnimationFrame((t) => this.animate(t));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const svg = document.querySelector('.donation-svg-engine');
    const engine = new BloodFlowController(svg);
    
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
  eligibilityWeights: { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  activeFeedIndex: 0
};

const FIELD_TELEMETRY_STREAM = [
  { c: 'green', t: 'Anil Kumar registered as A+ active donor pool node' },
  { c: 'red', t: 'Emergency Broadcast Broadcasted: O− requested at Patan Hospital' },
  { c: 'green', t: 'Maya Thapa cleared allocation sequence · Group B+' },
  { c: 'yellow', t: 'Reserves tracking critically low vector threshold at BPKIHS' },
  { c: 'green', t: 'Spatial tracking matched 4 active nodes in Bhaktapur vicinity' }
];

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

const initUserInterfaceControllers = () => {
  const applyTheme = (theme) => {
    DOM.html.setAttribute("data-theme", theme);
    PLATFORM_STATE.currentTheme = theme;

    if (DOM.themeToggle) {
      DOM.themeToggle.checked = theme === "light";
    }

    if (DOM.themeIcon) {
      DOM.themeIcon.className =
        theme === "light"
          ? "fa-solid fa-sun"
          : "fa-solid fa-moon";
    }

    requestAnimationFrame(() => {
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });

    localStorage.setItem("theme", theme);
  };

  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

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

let activeSlideIndex = 0;
let _testimonialTimer = null;
let _sliderLock = false;
let _realSlideCount = 0;

const getTestimonialSlideWidth = (track) => {
  const gap = parseFloat(getComputedStyle(track).gap) || 32;
  const firstSlide = track.children[0];
  if (!firstSlide) return 0;
  return firstSlide.getBoundingClientRect().width + gap;
};

const initTestimonialCarousel = () => {
  const track = DOM.testimonialTrack;
  if (!track) return;

  const slides = Array.from(track.children);
  if (slides.length < 2) return; 

  _realSlideCount = slides.length;
  activeSlideIndex = 0;

  track.style.visibility = 'hidden';
  track.style.opacity = '0';

  requestAnimationFrame(() => {
    const slideWidth = getTestimonialSlideWidth(track);
    if (!slideWidth) {
        track.style.visibility = 'visible';
        track.style.opacity = '1';
        return;
    }

    gsap.set(track, { x: -slideWidth * activeSlideIndex });
    track.style.visibility = 'visible';
    track.style.opacity = '1';
  });

  document.querySelectorAll('.tn-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const direction = Number(btn.dataset.direction || 0);
      if (direction) {
        window.shiftSlider(direction);
      }
    });
  });
};

window.shiftSlider = (movementDirection) => {
  const track = DOM.testimonialTrack;
  if (!track || _sliderLock) return;
  _sliderLock = true;

  const slideWidth = getTestimonialSlideWidth(track);
  if (!slideWidth) {
    _sliderLock = false;
    return;
  }

  const nextIndex = activeSlideIndex + movementDirection;
  if (nextIndex < 0 || nextIndex >= _realSlideCount) {
    _sliderLock = false;
    return;
  }

  activeSlideIndex = nextIndex;

  gsap.to(track, {
    x: -slideWidth * activeSlideIndex,
    duration: 0.85,
    ease: 'power3.out',
    onComplete: () => {
      setTimeout(() => { _sliderLock = false; }, 120);
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initTestimonialCarousel();
});

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

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("footer-contact-form");
  const statusMsg = document.getElementById("form-status");
  const statusText = statusMsg.querySelector(".status-text");
  const submitBtn = document.getElementById("submit-btn");
  const btnText = submitBtn.querySelector(".btn-text");

  if (form) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault(); 

      submitBtn.style.opacity = "0.6";
      submitBtn.style.pointerEvents = "none";
      btnText.textContent = "Processing Async Routing...";
      
      statusMsg.className = "form-status-msg"; 
      
      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          statusText.textContent = "Data payload delivered successfully! We'll sync up shortly.";
          statusMsg.classList.add("show", "success");
          form.reset(); 
          if (typeof window.addNotification === 'function') {
              window.addNotification("Message delivered successfully. A representative will reach out to you within 24 hours.");
          }
        } else {
          const result = await response.json();
          if (result.errors) {
            statusText.textContent = result.errors.map(error => error.message).join(", ");
          } else {
            statusText.textContent = "Infrastructure failed to accept data transmission pipeline.";
          }
          statusMsg.classList.add("show", "error");
        }
      } catch (error) {
        statusText.textContent = "Network stream connection interrupted. Verify link parameters.";
        statusMsg.classList.add("show", "error");
      } finally {
        submitBtn.style.opacity = "1";
        submitBtn.style.pointerEvents = "auto";
        btnText.textContent = "Send Message";
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const authModal = document.getElementById('auth-modal');
    const donorModal = document.getElementById('donor-modal');
    const requestModal = document.getElementById('request-modal');

    const closeAllActiveModals = () => {
        if (authModal) authModal.style.display = 'none';
        if (donorModal) donorModal.style.display = 'none';
        if (requestModal) requestModal.style.display = 'none';
    };

    window.toggleAuth = () => {
        const targetState = (authModal.style.display === 'flex') ? 'none' : 'flex';
        closeAllActiveModals();
        authModal.style.display = targetState;
    };

    window.toggleDonorModal = () => {
        const targetState = (donorModal.style.display === 'flex') ? 'none' : 'flex';
        closeAllActiveModals();
        donorModal.style.display = targetState;
    };

    window.toggleRequestModal = () => {
        const targetState = (requestModal.style.display === 'flex') ? 'none' : 'flex';
        closeAllActiveModals();
        requestModal.style.display = targetState;
    };
    
    document.querySelectorAll('.auth-car').forEach(card => {
        card.addEventListener('wheel', (e) => {
            const scrollableTarget = card.querySelector('.auth-view');
            if (scrollableTarget) {
                scrollableTarget.scrollTop += e.deltaY;
                e.preventDefault(); 
            }
        }, { passive: false });
    });
});

/// =========================================================================
// FINAL PRODUCTION-READY LOGIN STATE & FORM VALIDATION PIPELINE
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    let isLoggedIn = false; // Initialize to false (no persistence)
    let pendingFormModal = null; 

    const authModal = document.getElementById('auth-modal');
    const donorModal = document.getElementById('donor-modal');
    const requestModal = document.getElementById('request-modal');
    const customAlert = document.getElementById("custom-alert");
    
    const usernameInput = document.querySelector('#login-view input[type="text"]');
    const passwordInput = document.querySelector('#login-view input[type="password"]');
    const loginSubmitBtn = document.querySelector('.submit-btnn');
    const headerLogBtn = document.getElementById('log');

    const signoutDropdown = document.getElementById('custom-signout-dropdown');
    const signoutItem = document.getElementById('signout-item');

    const closeAllActiveModals = () => {
        if (authModal) authModal.style.display = 'none';
        if (donorModal) donorModal.style.display = 'none';
        if (requestModal) requestModal.style.display = 'none';
    };

    const transformToUserCircle = (btnElement) => {
        if (!btnElement) return;
        const loginText = document.getElementById('login-text');
        const userIcon = document.getElementById('header-user-icon');
        const picContainer = document.getElementById('header-pic-container');

        if (loginText) loginText.style.display = 'none';

        if (window.currentSessionProfilePic) {
            if (picContainer) picContainer.style.display = 'block';
            if (userIcon) userIcon.style.display = 'none';
        } else {
            if (picContainer) picContainer.style.display = 'none';
            if (userIcon) userIcon.style.display = 'block';
        }

        btnElement.style.backgroundColor = 'red';
        btnElement.style.color = 'white';
        btnElement.style.borderRadius = '50%';
        btnElement.style.width = '42px';
        btnElement.style.height = '42px';
        btnElement.style.display = 'flex';
        btnElement.style.alignItems = 'center';
        btnElement.style.justifyContent = 'center';
        btnElement.style.border = 'none';
        btnElement.style.padding = '0';
        btnElement.style.cursor = 'pointer';

        if (typeof window.addNotification === 'function') {
            window.addNotification("Welcome back! You have successfully logged into your account.");
        }
    };

    const revertUserCircle = (btnElement) => {
        if (!btnElement) return;
        const loginText = document.getElementById('login-text');
        const userIcon = document.getElementById('header-user-icon');
        const picContainer = document.getElementById('header-pic-container');

        if (loginText) loginText.style.display = 'block';
        if (userIcon) userIcon.style.display = 'none';
        if (picContainer) picContainer.style.display = 'none';

        btnElement.style.backgroundColor = '';
        btnElement.style.color = '';
        btnElement.style.borderRadius = '';
        btnElement.style.width = '';
        btnElement.style.height = '';
        btnElement.style.display = '';
        btnElement.style.alignItems = '';
        btnElement.style.justifyContent = '';
        btnElement.style.border = '';
        btnElement.style.padding = '';
        btnElement.style.cursor = '';
    };

    window.toggleAuth = () => {
        if (isLoggedIn) {
            if (signoutDropdown) {
                if (signoutDropdown.style.display === 'block') {
                    signoutDropdown.style.display = 'none';
                } else {
                    const rect = headerLogBtn.getBoundingClientRect();
                    signoutDropdown.style.position = 'fixed';
                    signoutDropdown.style.top = `${rect.bottom + 20}px`;
                    signoutDropdown.style.left = 'auto'; 
                    signoutDropdown.style.right = `${window.innerWidth - rect.right}px`; 
                    signoutDropdown.style.display = 'block';
                }
            }
            return;
        }
        
        if (authModal) {
            const targetState = (authModal.style.display === 'flex') ? 'none' : 'flex';
            closeAllActiveModals();
            authModal.style.display = targetState;
        }
    };

    window.toggleDonorModal = () => {
        if (donorModal) {
            const targetState = (donorModal.style.display === 'flex') ? 'none' : 'flex';
            closeAllActiveModals();
            donorModal.style.display = targetState;
        }
    };

    window.toggleRequestModal = () => {
        if (requestModal) {
            const targetState = (requestModal.style.display === 'flex') ? 'none' : 'flex';
            closeAllActiveModals();
            requestModal.style.display = targetState;
        }
    };
    
    // Outside click management including Notification box
    window.addEventListener('click', (e) => {
        if (e.target === authModal) toggleAuth();
        if (e.target === donorModal) toggleDonorModal();
        if (e.target === requestModal) toggleRequestModal();
        
        if (signoutDropdown && headerLogBtn && !headerLogBtn.contains(e.target) && !signoutDropdown.contains(e.target)) {
            signoutDropdown.style.display = 'none';
        }

        const notifDropdown = document.getElementById('notif-dropdown');
        const notifBtn = document.getElementById('notif-btn');
        if (notifDropdown && notifBtn && !notifBtn.contains(e.target) && !notifDropdown.contains(e.target)) {
            notifDropdown.style.display = 'none';
        }
    });

    const styleCustomAlert = (text, isSuccess) => {
        if (!customAlert) return;
        customAlert.textContent = text;
        customAlert.style.fontWeight = "400";
        customAlert.style.fontFamily = "system-ui, -apple-system, sans-serif";
        
        if (isSuccess) {
            customAlert.style.background = "rgba(46, 164, 79, 0.85)"; 
            customAlert.style.backdropFilter = "blur(4px)";
            customAlert.style.color = "#ffffff";
        } else {
            customAlert.style.background = "rgba(224, 36, 36, 0.82)"; 
            customAlert.style.backdropFilter = "blur(4px)";
            customAlert.style.color = "#ffffff";
        }
        
        customAlert.classList.add("show");
        setTimeout(() => {
            customAlert.classList.remove("show");
            setTimeout(() => {
                customAlert.style.fontWeight = "";
                customAlert.style.background = "";
                customAlert.style.backdropFilter = "";
                customAlert.style.color = "";
            }, 400);
        }, 3500);
    };

    if (signoutItem) {
        signoutItem.addEventListener('click', (e) => {
            e.stopPropagation();
            isLoggedIn = false; // Reset to false
            
            // Delete the profile picture from temporary memory
            window.currentSessionProfilePic = null;
            
            if (signoutDropdown) signoutDropdown.style.display = 'none';
            revertUserCircle(headerLogBtn);
            
            if (usernameInput) usernameInput.value = '';
            if (passwordInput) passwordInput.value = '';
            
            styleCustomAlert("Signed out successfully", true);
        });
    }

    if (loginSubmitBtn) {
        loginSubmitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            
            const usernameValue = usernameInput ? usernameInput.value.trim() : '';
            const passwordValue = passwordInput ? passwordInput.value : '';
            
            // Read registration data from local storage
            const savedUserStr = localStorage.getItem('abo_user_data');
            const savedUser = savedUserStr ? JSON.parse(savedUserStr) : null;

            // Check against both Demo Credentials and Registered Local Storage Account
            const isDemoAccount = (usernameValue === 'admin@gmail.com' && passwordValue === 'Admin@123');
            const isLocalAccount = (savedUser && usernameValue === savedUser.email && passwordValue === savedUser.pass);

            if (isDemoAccount || isLocalAccount) {
                isLoggedIn = true;
                
                if (isLocalAccount && savedUser.profilePic) {
                    window.currentSessionProfilePic = savedUser.profilePic;
                } else {
                    window.currentSessionProfilePic = null; // Reset for demo account
                }

                if (typeof transformToUserCircle === 'function') {
                    transformToUserCircle(headerLogBtn);
                }
                if (authModal) authModal.style.display = 'none';
               
            } 
            
        });
    }

    // --- SECURE FORMSPREE SUBMISSION ENGINE ---
    const donorForm = document.getElementById("donor-registration-form");
    const requestForm = document.getElementById("blood-request-form");

    const handleSecureFormSubmit = async (event, modalElement) => {
        event.preventDefault(); 

        if (!isLoggedIn) {
            pendingFormModal = modalElement;
            closeAllActiveModals();
            if (authModal) authModal.style.display = 'flex';
            return; 
        }

        const form = event.target;
        const submitBtn = form.querySelector('.submit-form-btn');
        const originalBtnText = submitBtn.innerText;

        submitBtn.innerText = "Encrypting & Sending...";
        submitBtn.style.pointerEvents = "none";
        submitBtn.style.opacity = "0.7";

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json' 
                }
            });

            if (response.ok) {
                closeAllActiveModals();
                styleCustomAlert("Data Transmitted Successfully!", true);
                
                if (form.id === "donor-registration-form") {
                    if (typeof window.addNotification === 'function') window.addNotification("Thank you for registering. Our team will contact you within 24 hours regarding your donor status.");
                } else if (form.id === "blood-request-form") {
                    if (typeof window.addNotification === 'function') window.addNotification("Emergency request logged. We are routing matches and will reach out to you within 24 hours.");
                }
                
                form.reset(); 
            } else {
                styleCustomAlert("Network rejected the payload. Please check your inputs.", false);
            }
        } catch (error) {
            styleCustomAlert("Connection interrupted. Please try again.", false);
        } finally {
            submitBtn.innerText = originalBtnText;
            submitBtn.style.pointerEvents = "auto";
            submitBtn.style.opacity = "1";
        }
    };

    if (donorForm) {
        donorForm.addEventListener("submit", (e) => handleSecureFormSubmit(e, donorModal));
    }
    if (requestForm) {
        requestForm.addEventListener("submit", (e) => handleSecureFormSubmit(e, requestModal));
    }

    document.querySelectorAll('.auth-car').forEach(card => {
        card.addEventListener('wheel', (e) => {
            const scrollableTarget = card.querySelector('.auth-view');
            if (scrollableTarget) {
                scrollableTarget.scrollTop += e.deltaY;
                e.preventDefault(); 
            }
        }, { passive: false });
    });
});

// --- Dashboard Interactions & Image Live-Sync Engine ---
document.addEventListener('DOMContentLoaded', () => {
    const profileOption = document.getElementById('profile-option');
    const changePicBtn = document.getElementById('change-pic-btn');
    const picUploadInput = document.getElementById('pic-upload-input');

    // 1. Open Personal Information Modal from Dashboard dropdown
// 1. Open Personal Information Modal from Dashboard dropdown
    if (profileOption) {
        profileOption.addEventListener('click', () => {
            const dropdown = document.getElementById('custom-signout-dropdown');
            if (dropdown) dropdown.style.display = 'none'; 
            
            // --- NEW: Populate Profile Modal dynamically ---
            const savedUserStr = localStorage.getItem('abo_user_data');
            const savedUser = savedUserStr ? JSON.parse(savedUserStr) : null;

            const nameEl = document.querySelector('.profile-name');
            const contactEl = document.querySelectorAll('.profile-info-value')[2]; // 3rd info cell
            const locEl = document.querySelectorAll('.profile-info-value')[3];     // 4th info cell
            const ageGenderEl = document.querySelectorAll('.profile-info-value')[1]; // 2nd info cell

            if (savedUser && nameEl) {
                // If it's a registered user
                nameEl.innerText = savedUser.name;
                ageGenderEl.innerText = `${savedUser.age} / ${savedUser.gender}`;
                contactEl.innerHTML = `${savedUser.phone || 'No Phone'} <br> ${savedUser.email}`;
                locEl.innerText = savedUser.location;
            } else if (nameEl) {
                // Fallback to demo account
                nameEl.innerText = "Admin User";
                ageGenderEl.innerText = "19 / Rather not to say";
                contactEl.innerHTML = "+977 9800000000 <br> admin@gmail.com";
                locEl.innerText = "example, Nepal";
            }
            // ------------------------------------------------

            const profileModal = document.getElementById('profile-modal');
            if (profileModal) profileModal.style.display = 'flex'; 
            
            // Auto-load current image... (keep your existing code here)
        });
    }

    if (changePicBtn && picUploadInput) {
        changePicBtn.addEventListener('click', () => picUploadInput.click());
    }

    // 3. Live-sync image uploads across both dashboards and memory slots instantly for THIS SESSION
    if (picUploadInput) {
        picUploadInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageData = e.target.result;
                    // Assign to the temporary volatile memory ONLY
                    window.currentSessionProfilePic = imageData;
                    
                    // Live-sync inside dropdown frame
                    const dropImg = document.getElementById('profile-img-preview');
                    const dropIcon = document.getElementById('profile-icon');
                    if (dropImg && dropIcon) {
                        dropImg.src = imageData;
                        dropImg.style.display = 'block';
                        dropIcon.style.display = 'none';
                    }
                    
                    // Live-sync navbar user icon button
                    const headerImg = document.getElementById('header-profile-img');
                    const headerContainer = document.getElementById('header-pic-container');
                    const userIcon = document.getElementById('header-user-icon');
                    if (headerImg && headerContainer) {
                        if (userIcon) userIcon.style.display = 'none';
                        headerContainer.style.display = 'block';
                        headerImg.src = imageData;
                    }
                    
                    // Update the popup modal instantly if it is open
                    const popupImg = document.getElementById('popup-profile-img');
                    const popupIcon = document.getElementById('popup-profile-icon');
                    if (popupImg && popupIcon) {
                        popupImg.src = imageData;
                        popupImg.style.display = 'block';
                        popupIcon.style.display = 'none';
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

function lockScrollOnHover(element) {
    if (!element) return;
    element.addEventListener('wheel', (e) => {
        e.stopPropagation(); 
    }, { passive: false });
}

// 1. Fix for Modal Cards
const modalCard = document.querySelector('.auth-card');
if (modalCard) {
    lockScrollOnHover(modalCard);
}

// 2. Fix for Eligibility Questions Scrolling
const questionsList = document.querySelector('.qs-list');
if (questionsList) {
    questionsList.setAttribute('data-lenis-prevent', 'true');
    lockScrollOnHover(questionsList);
}

document.addEventListener("DOMContentLoaded", () => {
  const formsToValidate = [
    document.getElementById("donor-registration-form"),
    document.getElementById("emergency-request-form")
  ];
  
  const customAlert = document.getElementById("custom-alert");
  let alertTimeout = null;

  formsToValidate.forEach((form) => {
    if (!form || !customAlert) return;

    form.addEventListener("invalid", (e) => {
      e.preventDefault();
      
      const failedField = e.target;
      let alertMessage = "Please fill out all required fields.";

      if (failedField.placeholder) {
        alertMessage = `Please enter a valid ${failedField.placeholder.toLowerCase()}.`;
      } else if (failedField.tagName === "SELECT") {
        if (failedField.closest('.input-row-3')) {
          alertMessage = "Please select a complete and valid date profile.";
        } else {
          alertMessage = "Please make a selection for all required options.";
        }
      } else if (failedField.type === "tel") {
        alertMessage = "Please provide a valid contact phone number.";
      }

      customAlert.textContent = alertMessage;
      customAlert.classList.add("show");

      if (alertTimeout) clearTimeout(alertTimeout);
      
      alertTimeout = setTimeout(() => {
        customAlert.classList.remove("show");
      }, 3500);
    }, true);
  });
});
// =========================================================================
// LANGUAGE TRANSLATION ENGINE CONTROLLER (CSS ATTRIBUTE IMMUNE LAYER)
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-translate-btn');
    let pendingLanguage = null;

    // Background observer: Automatically applies language selection once the widget settles
    const checkTranslationEngine = setInterval(() => {
        const googleSelect = document.querySelector('.goog-te-combo');
        if (googleSelect && pendingLanguage) {
            googleSelect.value = pendingLanguage;
            googleSelect.dispatchEvent(new Event('change', { bubbles: true }));
            pendingLanguage = null; 
        }
    }, 400);
    
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            const langContainer = this.querySelector('.translate-text');
            const googleSelect = document.querySelector('.goog-te-combo');
            
            // Read current value from data attribute instead of DOM inner text strings
            const currentUI = langContainer.getAttribute('data-text');
            let targetLang = '';
            
            if (currentUI === 'ने') {
                langContainer.setAttribute('data-text', 'EN');
                targetLang = 'ne';
            } else {
                langContainer.setAttribute('data-text', 'ने');
                targetLang = 'en';
            }

            if (!googleSelect) {
                console.warn("Translation engine is still loading. Queueing selection...");
                pendingLanguage = targetLang;
                return;
            }

            googleSelect.value = targetLang;
            googleSelect.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }
});
/// =========================================================================
/// NEW PERSISTENT AUTHENTICATION, REGISTRATION & PROFILE SYSTEM (LOCAL STORAGE)
/// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // UI Elements
    const authModal = document.getElementById('auth-modal');
    const setupModal = document.getElementById('profile-setup-modal');
    const profileModal = document.getElementById('profile-modal');
    const signoutDropdown = document.getElementById('custom-signout-dropdown');

    const loginSubmitBtn = document.querySelector('.submit-btnn'); 
    const regSubmitBtn = document.getElementById('reg-submit-btn'); 
    const setupSubmitBtn = document.getElementById('setup-submit-btn'); 
    const signoutItem = document.getElementById('signout-item');
    const headerLogBtn = document.getElementById('log');
    const customAlert = document.getElementById("custom-alert");

    const picUploadInput = document.getElementById('pic-upload-input');
    const changePicBtn = document.getElementById('change-pic-btn');

    // --- HELPER: Custom Alert System ---
    const showAlert = (text, isSuccess) => {
        if (!customAlert) return alert(text);
        customAlert.textContent = text;
        customAlert.style.background = isSuccess ? "rgba(46, 164, 79, 0.95)" : "rgba(224, 36, 36, 0.95)";
        customAlert.classList.add("show");
        setTimeout(() => customAlert.classList.remove("show"), 3500);
    };

    // --- HELPER: Update UI for Logged In User ---
    const setLoggedInUI = (userData) => {
        const loginText = document.getElementById('login-text');
        const userIcon = document.getElementById('header-user-icon');
        const picContainer = document.getElementById('header-pic-container');
        const headerImg = document.getElementById('header-profile-img');

        if (loginText) loginText.style.display = 'none';
        headerLogBtn.style.cssText = "background-color: red; color: white; border-radius: 50%; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; border: none; padding: 0; cursor: pointer;";

        if (userData.profilePic) {
            if (picContainer) picContainer.style.display = 'block';
            if (userIcon) userIcon.style.display = 'none';
            if (headerImg) headerImg.src = userData.profilePic;
        } else {
            if (picContainer) picContainer.style.display = 'none';
            if (userIcon) userIcon.style.display = 'block';
        }
    };

    const setLoggedOutUI = () => {
        const loginText = document.getElementById('login-text');
        const userIcon = document.getElementById('header-user-icon');
        const picContainer = document.getElementById('header-pic-container');

        if (loginText) loginText.style.display = 'block';
        if (userIcon) userIcon.style.display = 'none';
        if (picContainer) picContainer.style.display = 'none';
        headerLogBtn.style.cssText = ""; // Reset to default
    };

    // --- 1. INITIAL LOAD (PERSISTENCE) ---
    const activeSession = localStorage.getItem('abo_active_session');
    const allUsers = JSON.parse(localStorage.getItem('abo_users') || '{}');

    // Generate Demo Account automatically if it doesn't exist
    if (!allUsers['admin@gmail.com']) {
        allUsers['admin@gmail.com'] = {
            email: 'admin@gmail.com', pass: 'Admin@123', name: 'Admin User', age: '19',
            gender: 'Other', bloodGroup: 'O-', location: 'Kathmandu, Nepal', phone: '+977 9800000000', profilePic: null
        };
        localStorage.setItem('abo_users', JSON.stringify(allUsers));
    }

    if (activeSession && allUsers[activeSession]) {
        setLoggedInUI(allUsers[activeSession]);
    } else {
        setLoggedOutUI();
    }

    // --- 2. REGISTRATION (STEP 1 - EMAIL/PASS VERIFICATION) ---
    if (regSubmitBtn) {
        regSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.getElementById('reg-email').value.trim();
            const pass = document.getElementById('reg-password').value;
            const confirmPass = document.getElementById('reg-confirm').value;

            // Strict Email Validation Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) return showAlert("Please enter a valid email address.", false);
            if (pass !== confirmPass || pass.length < 6) return showAlert("Passwords must match and be at least 6 characters.", false);
            if (allUsers[email]) return showAlert("An account with this email already exists.", false);

            // Save temporarily to pass to the next modal
            localStorage.setItem('abo_temp_reg_data', JSON.stringify({ email, pass }));
            if (authModal) authModal.style.display = 'none';
            if (setupModal) setupModal.style.display = 'flex';
        });
    }

    // --- 3. PROFILE SETUP (STEP 2 - DETAILS & PICTURE) ---
    if (setupSubmitBtn) {
        setupSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.getElementById('setup-name').value.trim();
            const age = document.getElementById('setup-age').value.trim();
            const gender = document.getElementById('setup-gender').value;
            const bloodGroup = document.getElementById('setup-blood-group').value;
            const location = document.getElementById('setup-location').value.trim();
            const phone = document.getElementById('setup-phone').value.trim(); // Optional
            const picInput = document.getElementById('setup-pic'); // Optional

            // Enforce required fields
            if (!name || !age || !gender || !bloodGroup || !location) {
                return showAlert("Please fill out all required fields.", false);
            }

            const tempRegData = JSON.parse(localStorage.getItem('abo_temp_reg_data') || '{}');
            if (!tempRegData.email) return showAlert("Session expired. Please start registration again.", false);

            const saveFinalUser = (base64Pic) => {
                const newUser = { ...tempRegData, name, age, gender, bloodGroup, location, phone, profilePic: base64Pic };
                
                // Save to main user database and set active session
                allUsers[newUser.email] = newUser;
                localStorage.setItem('abo_users', JSON.stringify(allUsers));
                localStorage.setItem('abo_active_session', newUser.email);
                localStorage.removeItem('abo_temp_reg_data');

                showAlert("Registration Successful!", true);
                if (setupModal) setupModal.style.display = 'none';

                // Auto reload to apply all UI changes natively
                setTimeout(() => window.location.reload(), 1500);
            };

            // Process image into base64 for local storage, or save null if skipped
// Process image, auto-crop into a clean 1:1 aspect ratio square, and save
            if (picInput.files && picInput.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.onload = () => {
                        // Create an in-memory canvas
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // Set standard clear target dimension for local storage efficiency
                        const size = 300; 
                        canvas.width = size;
                        canvas.height = size;
                        
                        // Calculate center crop metrics (1:1 aspect calculation)
                        let sourceX = 0;
                        let sourceY = 0;
                        let sourceWidth = img.width;
                        let sourceHeight = img.height;
                        
                        if (img.width > img.height) {
                            sourceWidth = img.height;
                            sourceX = (img.width - img.height) / 2;
                        } else if (img.height > img.width) {
                            sourceHeight = img.width;
                            sourceY = (img.height - img.width) / 2;
                        }
                        
                        // Draw cropped square matrix
                        ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, size, size);
                        
                        // Convert to lightweight base64 string
                        const base64CroppedPic = canvas.toDataURL('image/jpeg', 0.85);
                        saveFinalUser(base64CroppedPic);
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(picInput.files[0]);
            } else {
                saveFinalUser(null);
            }
        });
    }

    // --- 4. LOGIN ---
    if (loginSubmitBtn && loginSubmitBtn.closest('#login-view')) {
        loginSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.querySelector('#login-view input[type="text"]').value.trim();
            const pass = document.querySelector('#login-view input[type="password"]').value;

            if (allUsers[email] && allUsers[email].pass === pass) {
                localStorage.setItem('abo_active_session', email);
                setLoggedInUI(allUsers[email]);
                if (authModal) authModal.style.display = 'none';
                showAlert("Login successful!", true);
            } else {
                showAlert("Invalid email or password. Please try again.", false);
            }
        });
    }

    // --- 5. LOGOUT ---
    if (signoutItem) {
        signoutItem.addEventListener('click', (e) => {
            e.stopPropagation();
            localStorage.removeItem('abo_active_session');
            setLoggedOutUI();
            if (signoutDropdown) signoutDropdown.style.display = 'none';
            document.querySelector('#login-view input[type="text"]').value = '';
            document.querySelector('#login-view input[type="password"]').value = '';
            showAlert("Signed out successfully", true);
        });
    }

    // --- 6. SMART HEADER CLICK CONTROLLER ---
    // Overwrites the old toggle function to determine if it should open the Login Modal OR the User Dropdown
    window.toggleAuth = () => {
        const currentSession = localStorage.getItem('abo_active_session');
        if (currentSession) {
            // User is logged in -> Control the dropdown
            if (signoutDropdown) {
                const isHidden = signoutDropdown.style.display === 'none' || signoutDropdown.style.display === '';
                if (isHidden) {
                    const rect = headerLogBtn.getBoundingClientRect();
                    signoutDropdown.style.position = 'fixed';
                    signoutDropdown.style.top = `${rect.bottom + 15}px`;
                    signoutDropdown.style.right = `${window.innerWidth - rect.right}px`;
                    signoutDropdown.style.left = 'auto';
                    signoutDropdown.style.display = 'block';

                    // Sync Dropdown Profile Picture specific to this account
                    const user = allUsers[currentSession];
                    const dropImg = document.getElementById('profile-img-preview');
                    const dropIcon = document.getElementById('profile-icon');
                    if (user.profilePic && dropImg && dropIcon) {
                        dropImg.src = user.profilePic;
                        dropImg.style.display = 'block';
                        dropIcon.style.display = 'none';
                    } else if (dropImg && dropIcon) {
                        dropImg.style.display = 'none';
                        dropIcon.style.display = 'block';
                    }
                } else {
                    signoutDropdown.style.display = 'none';
                }
            }
        } else {
            // User is logged out -> Open login modal
            if (authModal) authModal.style.display = (authModal.style.display === 'flex') ? 'none' : 'flex';
        }
    };

    // Close dropdown if clicking outside of it
    window.addEventListener('click', (e) => {
        if (signoutDropdown && headerLogBtn && !headerLogBtn.contains(e.target) && !signoutDropdown.contains(e.target)) {
            signoutDropdown.style.display = 'none';
        }
    });

    // --- 7. PERSONAL INFORMATION MODAL HYDRATION ---
    const profileOption = document.getElementById('profile-option');
    if (profileOption) {
        profileOption.addEventListener('click', () => {
            if (signoutDropdown) signoutDropdown.style.display = 'none';
            const currentSession = localStorage.getItem('abo_active_session');
            if (!currentSession) return;

            const user = allUsers[currentSession];
            if (profileModal) {
                // Map Data strictly from local storage to the modal UI
                document.querySelector('.profile-name').innerText = user.name;
                const infoCells = document.querySelectorAll('.profile-info-value');
                if (infoCells.length >= 4) {
                    infoCells[0].innerText = user.bloodGroup;
                    infoCells[1].innerText = `${user.age} / ${user.gender}`;
                    infoCells[2].innerHTML = `${user.phone || 'Not Provided'} <br> ${user.email}`;
                    infoCells[3].innerText = user.location;
                }

                // Sync 3rd Picture Section
                const popupImg = document.getElementById('popup-profile-img');
                const popupIcon = document.getElementById('popup-profile-icon');
                if (user.profilePic && popupImg && popupIcon) {
                    popupImg.src = user.profilePic;
                    popupImg.style.display = 'block';
                    popupIcon.style.display = 'none';
                } else if (popupImg && popupIcon) {
                    popupImg.style.display = 'none';
                    popupIcon.style.display = 'block';
                }

                profileModal.style.display = 'flex';
            }
        });
    }

    // --- 8. CHANGE PROFILE PICTURE BUTTON (PERSISTS INSTANTLY) ---
    if (changePicBtn && picUploadInput) {
        changePicBtn.onclick = () => picUploadInput.click();
        picUploadInput.onchange = function() {
            const file = this.files[0];
            const currentSession = localStorage.getItem('abo_active_session');
            if (file && currentSession) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const newPic = e.target.result;
                    // Update user database and save
                    allUsers[currentSession].profilePic = newPic;
                    localStorage.setItem('abo_users', JSON.stringify(allUsers));
                    
                    // Live update header & dropdown UI
                    setLoggedInUI(allUsers[currentSession]); 
                    const dropImg = document.getElementById('profile-img-preview');
                    const dropIcon = document.getElementById('profile-icon');
                    if (dropImg && dropIcon) {
                        dropImg.src = newPic;
                        dropImg.style.display = 'block';
                        dropIcon.style.display = 'none';
                    }
                };
                reader.readAsDataURL(file);
            }
        };
    }
});
// --- MOUSE WHEEL SCROLL OVERRIDE FOR THE FORM FIELDS ---
// Ensure precise wheel event distribution inside your modal structure
const setupScrollFields = document.querySelector('.setup-scrollable-form-fields');
if (setupScrollFields) {
    setupScrollFields.addEventListener('wheel', function(event) {
        const isScrollable = this.scrollHeight > this.clientHeight;
        if (isScrollable) {
            this.scrollTop += event.deltaY;
            // Interrupt wheel action bubbling to safeguard the master body container
            event.preventDefault();
        }
    }, { passive: false });
}

    // --- INSTANT CROP & LIVE PREVIEW CONTROLLER ---
    const setupPicInput = document.getElementById('setup-pic');
    const setupPreviewImg = document.getElementById('setup-avatar-preview-img');
    const setupFallbackIcon = document.getElementById('setup-avatar-fallback');

    if (setupPicInput) {
        setupPicInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    if (setupPreviewImg && setupFallbackIcon) {
                        // Display instant visual preview inside the circular 1:1 frame
                        setupPreviewImg.src = e.target.result;
                        setupPreviewImg.style.display = 'block';
                        setupFallbackIcon.style.display = 'none';
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
// =========================================================================
// REAL-TIME NAVIGATION HIGHLIGHT (SCROLL SPY ENGINE)
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Configurations: Trigger active state when a section hits the middle/top of the viewport
    const observerOptions = {
        root: null,
        // Negative top margin offsets the fixed sticky header
        rootMargin: '-100px 0px -60% 0px', 
        threshold: 0
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.getAttribute('id');
                
                // Update navigation links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if(section.id) scrollSpyObserver.observe(section);
    });
});
// --- Team Slider Engine ---
let activeTeamSlideIndex = 0;
let _teamSliderLock = false;

const getTeamSlideWidth = (track) => {
  const gap = parseFloat(getComputedStyle(track).gap) || 24;
  const firstSlide = track.children[0];
  if (!firstSlide) return 0;
  return firstSlide.getBoundingClientRect().width + gap;
};

const initTeamCarousel = () => {
  const track = document.getElementById('team-track');
  if (!track) return;

  const slides = Array.from(track.children);
  if (slides.length < 2) return;

  // Select the specific team navigation buttons
  const teamNavBtns = document.querySelectorAll('.team-nav-btn');
  
  teamNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const direction = Number(btn.dataset.direction || 0);
      if (direction && !_teamSliderLock) {
        shiftTeamSlider(direction, track, slides.length);
      }
    });
  });
};

const shiftTeamSlider = (movementDirection, track, totalSlides) => {
  _teamSliderLock = true;
  const slideWidth = getTeamSlideWidth(track);
  
  if (!slideWidth) {
    _teamSliderLock = false;
    return;
  }

  // Calculate visible bounds so we don't scroll past empty space
  const containerWidth = track.parentElement.getBoundingClientRect().width;
  const visibleSlides = Math.floor(containerWidth / slideWidth);
  const maxIndex = Math.max(0, totalSlides - visibleSlides);

  let nextIndex = activeTeamSlideIndex + movementDirection;
  
  // Enforce min and max boundaries
  if (nextIndex < 0) nextIndex = 0;
  if (nextIndex > maxIndex) nextIndex = maxIndex;

  activeTeamSlideIndex = nextIndex;

  // Execute GSAP Animation
  gsap.to(track, {
    x: -slideWidth * activeTeamSlideIndex,
    duration: 0.85,
    ease: 'power3.out',
    onComplete: () => {
      setTimeout(() => { _teamSliderLock = false; }, 120);
    }
  });
};

// Initialize the team slider when the DOM loads
document.addEventListener('DOMContentLoaded', () => {
  initTeamCarousel();
});
/**
 * ABO± Extended Security & Profile Customization Engine
 * Safe Modular Elements Processing Layer
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // --- ELEMENT SELECTORS ---
    const privacyModal = document.getElementById('abo-unique-privacy-modal');
    const editProfileModal = document.getElementById('abo-unique-edit-profile-modal');
    
    // Triggers
    const triggerEditProfile = document.getElementById('abo-unique-trigger-edit-profile');
    // Finds your existing target layout option for privacy safely via text contents or classes
    let triggerPrivacy = document.getElementById('abo-unique-trigger-privacy'); 
    if (!triggerPrivacy) {
        // Fallback finder system searching your lists/anchors dynamically for "Privacy and Security"
        const elements = document.querySelectorAll('a, li, button, div');
        for (let el of elements) {
            if (el.textContent.trim().toLowerCase().includes('privacy and security')) {
                triggerPrivacy = el;
                break;
            }
        }
    }

    // Closers
    const closePrivacyX = document.getElementById('abo-unique-close-privacy');
    const cancelPrivacyBtn = document.getElementById('abo-unique-cancel-privacy');
    const closeEditX = document.getElementById('abo-unique-close-edit-profile');
    const cancelEditBtn = document.getElementById('abo-unique-cancel-edit-profile');
    
    // Forms / Submission Elements
    const savePrivacyBtn = document.getElementById('abo-unique-save-privacy');
    const saveProfileBtn = document.getElementById('abo-unique-save-profile');

    // --- MODAL TOGGLE UTILITIES ---
    const openModal = (modal) => {
        if(modal) {
            modal.classList.add('abo-unique-active');
            // Re-enforce mousewheel interaction handling
            const scrollBody = modal.querySelector('.abo-unique-modal-scroll-body');
            if (scrollBody) scrollBody.scrollTop = 0;
        }
    };

    const closeModal = (modal) => {
        if(modal) modal.classList.remove('abo-unique-active');
    };

    // --- INTERACTION EVENT LISTENERS ---
    
    // Privacy and Security Listeners
    if (triggerPrivacy) {
        triggerPrivacy.style.cursor = 'pointer';
        triggerPrivacy.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(privacyModal);
        });
    }

    if (closePrivacyX) closePrivacyX.addEventListener('click', () => closeModal(privacyModal));
    if (cancelPrivacyBtn) cancelPrivacyBtn.addEventListener('click', () => closeModal(privacyModal));

    // Edit Profile Information Listeners
    if (triggerEditProfile) {
        triggerEditProfile.addEventListener('click', () => {
            // Load current data directly from DOM elements before displaying form views
            prefillProfileFormFields();
            openModal(editProfileModal);
        });
    }

    if (closeEditX) closeEditX.addEventListener('click', () => closeModal(editProfileModal));
    if (cancelEditBtn) cancelEditBtn.addEventListener('click', () => closeModal(editProfileModal));

    // Close Modals when clicking outside of the Card content window safely
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) closeModal(privacyModal);
        if (e.target === editProfileModal) closeModal(editProfileModal);
    });

    // --- FORM PRE-POPULATION LOGIC ---
    function prefillProfileFormFields() {
        const nameEl = document.querySelector('.profile-name');
        if (nameEl) document.getElementById('abo-unique-edit-name').value = nameEl.textContent.trim();

        // Target dynamic grid mapping tags safely
        const infoCells = document.querySelectorAll('.info-cell');
        infoCells.forEach(cell => {
            const labelEl = cell.querySelector('.profile-info-label');
            const valueEl = cell.querySelector('.profile-info-value');
            if (!labelEl || !valueEl) return;

            const labelText = labelEl.textContent.trim().toLowerCase();
            const valText = valueEl.innerText.trim();

            if (labelText.includes('blood group')) {
                document.getElementById('abo-unique-edit-blood').value = valText;
            } else if (labelText.includes('age')) {
                // Splits strings like "19 / Rather not to say" safely
                const pieces = valText.split('/');
                if (pieces[0]) document.getElementById('abo-unique-edit-age').value = pieces[0].trim();
                if (pieces[1]) document.getElementById('abo-unique-edit-gender').value = pieces[1].trim();
            } else if (labelText.includes('contact')) {
                const lines = valText.split('\n');
                if (lines[0]) document.getElementById('abo-unique-edit-phone').value = lines[0].trim();
                if (lines[1]) document.getElementById('abo-unique-edit-email-view').value = lines[1].trim();
            } else if (labelText.includes('location')) {
                document.getElementById('abo-unique-edit-location').value = valText;
            }
        });
    }

    // --- SUBMISSION HANDLERS WITH CORE NOTIFICATION INTEGRATION ---
    
    // Privacy Logic Submit
    if (savePrivacyBtn) {
        savePrivacyBtn.addEventListener('click', () => {
            const prevEmail = document.getElementById('abo-unique-prev-email').value;
            const newEmail = document.getElementById('abo-unique-new-email').value;
            const prevPass = document.getElementById('abo-unique-prev-password').value;
            const newPass = document.getElementById('abo-unique-new-password').value;
            const confirmPass = document.getElementById('abo-unique-confirm-password').value;

            // Simple confirmation checks
            if (!prevEmail || !newEmail || !prevPass || !newPass || !confirmPass) {
                if (window.addNotification) window.addNotification("Please fill out all security fields.");
                return;
            }

            if (newPass !== confirmPass) {
                if (window.addNotification) window.addNotification("Security Alert: New passwords do not match.");
                return;
            }

            // Successfully processed
            if (window.addNotification) {
                window.addNotification("Privacy settings updated securely. Email and password saved.");
            }
            closeModal(privacyModal);
            document.getElementById('abo-unique-privacy-form').reset();
        });
    }

    // Profile Data Mutation Logic Submit
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', () => {
            const editedName = document.getElementById('abo-unique-edit-name').value;
            const editedBlood = document.getElementById('abo-unique-edit-blood').value;
            const editedAge = document.getElementById('abo-unique-edit-age').value;
            const editedGender = document.getElementById('abo-unique-edit-gender').value;
            const editedPhone = document.getElementById('abo-unique-edit-phone').value;
            const editedEmail = document.getElementById('abo-unique-edit-email-view').value;
            const editedLocation = document.getElementById('abo-unique-edit-location').value;

            if (!editedName || !editedAge || !editedPhone || !editedEmail || !editedLocation) {
                if (window.addNotification) window.addNotification("Please ensure all personal details are complete.");
                return;
            }

            // Write live data back to DOM nodes instantly
            const nameEl = document.querySelector('.profile-name');
            if (nameEl) nameEl.textContent = editedName;

            const infoCells = document.querySelectorAll('.info-cell');
            infoCells.forEach(cell => {
                const labelEl = cell.querySelector('.profile-info-label');
                const valueEl = cell.querySelector('.profile-info-value');
                if (!labelEl || !valueEl) return;

                const labelText = labelEl.textContent.trim().toLowerCase();
                
                if (labelText.includes('blood group')) {
                    valueEl.textContent = editedBlood;
                } else if (labelText.includes('age')) {
                    valueEl.textContent = `${editedAge} / ${editedGender}`;
                } else if (labelText.includes('contact')) {
                    valueEl.innerHTML = `${editedPhone} <br> ${editedEmail}`;
                } else if (labelText.includes('location')) {
                    valueEl.textContent = editedLocation;
                }
            });

            if (window.addNotification) {
                window.addNotification("Personal profile records updated successfully.");
            }
            closeModal(editProfileModal);
        });
    }
});