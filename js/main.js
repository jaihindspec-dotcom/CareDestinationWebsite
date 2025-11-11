// Hospitals data
const hospitals = [
    { name: "Apollo Hospital", location: "Hyderabad, India", type: "Multi Speciality" },
    { name: "Royal Care Super Speciality Hospital Limited", location: "Coimbatore, India", type: "Super Speciality" },
    { name: "Be Well", location: "Chennai, India", type: "Multi Speciality" },
    { name: "TX Hospitals", location: "Hyderabad, India", type: "Multi Speciality" },
    { name: "Healing Hands Clinic", location: "Hyderabad, India", type: "Super Speciality" },
    { name: "Fortis Hospital Limited", location: "Bangalore, India", type: "Super Speciality" },
    { name: "MGM HEALTHCARE", location: "Chennai, India", type: "Multi Speciality" },
    { name: "SRM INSTITUTES FOR MEDICAL SCIENCE (SIMS)", location: "Chennai, India", type: "Multi Speciality" },
    { name: "Virinchi People's Hospitals", location: "Hyderabad, India", type: "Super Speciality" },
    { name: "K.G. Hospital", location: "Coimbatore, India", type: "Multi Speciality" },
    { name: "HOSMAT Hospitals", location: "Bangalore, India", type: "Multi Speciality" },
    { name: "VGM HOSPITAL", location: "Coimbatore, India", type: "Multi Speciality" },
    { name: "KIMS HOSPITALS", location: "Hyderabad, India", type: "Multi Speciality" },
    { name: "DR Kola Epic Hospital", location: "Hyderabad, India", type: "Multi Speciality" }
];

// Doctors data
const doctors = [
    { name: "Dr. Ramesh Kumar", specialty: "Cardiology", hospital: "Apollo Hospital" },
    { name: "Dr. Priya Sharma", specialty: "Neurology", hospital: "Fortis Hospital" },
    { name: "Dr. Anil Patel", specialty: "Orthopedics", hospital: "MGM Healthcare" },
    { name: "Dr. Sunita Reddy", specialty: "Gynecology", hospital: "TX Hospitals" },
    { name: "Dr. Vikram Singh", specialty: "Oncology", hospital: "KIMS Hospitals" },
    { name: "Dr. Lakshmi Nair", specialty: "Pediatrics", hospital: "Be Well" },
    { name: "Dr. Rajesh Mehta", specialty: "Gastroenterology", hospital: "Royal Care Hospital" },
    { name: "Dr. Anjali Desai", specialty: "Dermatology", hospital: "Healing Hands Clinic" },
    { name: "Dr. Suresh Babu", specialty: "Urology", hospital: "VGM Hospital" },
    { name: "Dr. Kavita Iyer", specialty: "Endocrinology", hospital: "SRM Institutes" }
];

// Treatment data
const treatments = [
    {
        name: "Robotic-Assisted Hysterectomy",
        specialty: "Gynaecology",
        category: "gynaecology",
        hospitalDays: 1,
        duration: "2 to 4 hours"
    },
    {
        name: "Laparoscopic hysterectomy",
        specialty: "Gynaecology",
        category: "gynaecology",
        hospitalDays: 1,
        duration: "1–3 Hours"
    },
    {
        name: "Endometriosis excision",
        specialty: "Gynaecology",
        category: "gynaecology",
        hospitalDays: 1,
        duration: "1.5 to 3 hours"
    },
    {
        name: "Ovarian cystectomy",
        specialty: "Gynaecology",
        category: "gynaecology",
        hospitalDays: 1,
        duration: "1 – 1.5 hours"
    },
    {
        name: "Piles Treatment",
        specialty: "Proctologist",
        category: "general-surgery",
        hospitalDays: 1,
        duration: "30–60 minutes"
    },
    {
        name: "Fistula Treatment",
        specialty: "Proctologist",
        category: "general-surgery",
        hospitalDays: 0,
        duration: "30 - 60 min"
    },
    {
        name: "Pilonidal Sinus Treatment",
        specialty: "Proctologist",
        category: "general-surgery",
        hospitalDays: 1,
        duration: "30 - 60 min"
    },
    {
        name: "Colonoscopy & Endoscopy",
        specialty: "Gastroenterology",
        category: "gastroenterology",
        hospitalDays: 1,
        duration: "1 hour"
    },
    {
        name: "Liver Disease Management",
        specialty: "Gastroenterology",
        category: "gastroenterology",
        hospitalDays: 7,
        duration: "2-4 Hours"
    },
    {
        name: "Gallbladder Surgery",
        specialty: "Gastroenterology",
        category: "gastroenterology",
        hospitalDays: 3,
        duration: "1-2 Hours"
    },
    {
        name: "Ureteroscopy (URS) – For Kidney Stones",
        specialty: "Urology",
        category: "urology",
        hospitalDays: 1,
        duration: "30 minutes to 1 hour"
    },
    {
        name: "Percutaneous Nephrolithotomy (PCNL)",
        specialty: "Urology",
        category: "urology",
        hospitalDays: 2,
        duration: "3 - 6 hours"
    },
    {
        name: "Pyeloplasty",
        specialty: "Urology",
        category: "urology",
        hospitalDays: 1,
        duration: "2–3 hours"
    },
    {
        name: "Ureteral Stent Placement/Removal",
        specialty: "Urology",
        category: "urology",
        hospitalDays: 1,
        duration: "2–3 hours"
    },
    {
        name: "Open Reduction and Internal Fixation",
        specialty: "Orthopaedics",
        category: "orthopaedics",
        hospitalDays: 3,
        duration: "2 – 4 hours"
    },
    {
        name: "Intramedullary Nailing",
        specialty: "Orthopaedics",
        category: "orthopaedics",
        hospitalDays: 2,
        duration: "4 - 6 hours"
    },
    {
        name: "Hip Replacement Surgery",
        specialty: "Orthopaedics",
        category: "orthopaedics",
        hospitalDays: 3,
        duration: "2-3 hours"
    },
    {
        name: "Knee Replacement Surgery",
        specialty: "Orthopaedics",
        category: "orthopaedics",
        hospitalDays: 3,
        duration: "2-3 hours"
    },
    {
        name: "Coronary angiography",
        specialty: "Cardiology",
        category: "cardiology",
        hospitalDays: 1,
        duration: "30 minutes to 1 hour"
    },
    {
        name: "Heart Failure Management",
        specialty: "Cardiology",
        category: "cardiology",
        hospitalDays: 5,
        duration: "2-6 Hours"
    },
    {
        name: "Arrhythmia Treatment",
        specialty: "Cardiology",
        category: "cardiology",
        hospitalDays: 1,
        duration: "2-4 Hours"
    },
    {
        name: "Aortic Aneurysm Repair",
        specialty: "Cardiology",
        category: "cardiology",
        hospitalDays: 3,
        duration: "2-4 Hours"
    },
    {
        name: "Brain Tumor Surgery",
        specialty: "Neurosurgery",
        category: "neurosurgery",
        hospitalDays: 5,
        duration: "4-8 hours"
    },
    {
        name: "Spinal Surgery",
        specialty: "Neurosurgery",
        category: "neurosurgery",
        hospitalDays: 3,
        duration: "3-6 hours"
    },
    {
        name: "Stroke Treatment",
        specialty: "Neurology",
        category: "neurology",
        hospitalDays: 7,
        duration: "Varies"
    },
    {
        name: "Epilepsy Management",
        specialty: "Neurology",
        category: "neurology",
        hospitalDays: 2,
        duration: "Ongoing"
    },
    {
        name: "Liver Transplant",
        specialty: "Hepatology",
        category: "hepatology",
        hospitalDays: 14,
        duration: "6-12 hours"
    },
    {
        name: "Liver Cancer Treatment",
        specialty: "Hepatology",
        category: "hepatology",
        hospitalDays: 7,
        duration: "Varies"
    },
    {
        name: "Breast Cancer Treatment",
        specialty: "Oncology",
        category: "oncology",
        hospitalDays: 3,
        duration: "6 weeks"
    },
    {
        name: "Lymphomas Treatment",
        specialty: "Oncology",
        category: "oncology",
        hospitalDays: 1,
        duration: "4-5 weeks"
    },
    {
        name: "LASIK Eye Surgery",
        specialty: "Ophthalmology",
        category: "ophthalmology",
        hospitalDays: 0,
        duration: "15-30 minutes per eye"
    },
    {
        name: "Diabetes Treatment",
        specialty: "Endocrinology",
        category: "endocrinology",
        hospitalDays: 0,
        duration: "1-2 Hours"
    },
    {
        name: "Thyroid Disorder Treatment",
        specialty: "Endocrinology",
        category: "endocrinology",
        hospitalDays: 1,
        duration: "1-2 Hours"
    },
    {
        name: "Acne & Skin Condition Treatment",
        specialty: "Dermatology",
        category: "dermatology",
        hospitalDays: 0,
        duration: "1 Hour"
    },
    {
        name: "Laser Treatment",
        specialty: "Dermatology",
        category: "dermatology",
        hospitalDays: 0,
        duration: "1-2 Hours"
    },
    {
        name: "Asthma Management",
        specialty: "Pulmonology",
        category: "pulmonology",
        hospitalDays: 1,
        duration: "Ongoing"
    },
    {
        name: "COPD Treatment",
        specialty: "Pulmonology",
        category: "pulmonology",
        hospitalDays: 3,
        duration: "Ongoing"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Dropdown toggle for mobile
    document.querySelectorAll('.dropdown > a').forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Treatment Filtering
    renderTreatments('all');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter treatments
            const category = this.getAttribute('data-filter');
            renderTreatments(category);
        });
    });

    // Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.process-step, .treatment-card, .hospital-card, .specialization-card, .testimonial-card, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Render treatments based on category
function renderTreatments(category) {
    const treatmentGrid = document.getElementById('treatment-grid');
    treatmentGrid.innerHTML = '';
    
    let filteredTreatments = treatments;
    if (category !== 'all') {
        filteredTreatments = treatments.filter(treatment => treatment.category === category);
    }
    
    // Show only first 12 treatments
    const displayTreatments = filteredTreatments.slice(0, 12);
    
    displayTreatments.forEach(treatment => {
        const card = createTreatmentCard(treatment);
        treatmentGrid.appendChild(card);
    });
    
    // Re-observe new elements for animation
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.treatment-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Create treatment card element
function createTreatmentCard(treatment) {
    const card = document.createElement('div');
    card.className = 'treatment-card';
    
    // Create URL slug from treatment name
    const slug = treatment.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    
    const treatmentURL = `treatments/${slug}.html`;
    
    card.innerHTML = `
        <div class="treatment-card-header">
            <h5>${treatment.name}</h5>
            <span class="treatment-specialty">${treatment.specialty}</span>
        </div>
        <div class="treatment-info">
            <div class="treatment-detail">
                <i class="fas fa-hospital"></i>
                <span>Hospital Days: ${treatment.hospitalDays}</span>
            </div>
            <div class="treatment-detail">
                <i class="fas fa-clock"></i>
                <span>Duration: ${treatment.duration}</span>
            </div>
            <a href="${treatmentURL}" class="btn-explore">Explore</a>
        </div>
    `;
    
    return card;
}

// Form validation (if needed)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Testimonial Slider (simple auto-scroll)
let testimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    if (testimonialCards.length > 0) {
        testimonialCards.forEach((card, index) => {
            card.style.order = ((index - testimonialIndex + testimonialCards.length) % testimonialCards.length).toString();
        });
        testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    }
}

// Rotate testimonials every 5 seconds
if (testimonialCards.length > 0) {
    setInterval(rotateTestimonials, 5000);
}

// Specialization & Treatment Dropdown Functionality
const specializationSelect = document.getElementById('specialization');
const treatmentSelect = document.getElementById('treatment');

if (specializationSelect && treatmentSelect) {
    // Populate treatment dropdown when specialization is selected
    specializationSelect.addEventListener('change', function() {
        const selectedSpecialty = this.value;
        
        // Clear current treatment options
        treatmentSelect.innerHTML = '';
        
        if (!selectedSpecialty) {
            treatmentSelect.innerHTML = '<option value="">Select Specialization First</option>';
            treatmentSelect.disabled = true;
            return;
        }
        
        // Filter treatments by selected specialty
        const filteredTreatments = treatments.filter(treatment => {
            // Match specialty (case insensitive and flexible)
            const treatmentSpecialty = treatment.specialty.toLowerCase().trim();
            const selectedSpec = selectedSpecialty.toLowerCase().trim();
            
            return treatmentSpecialty === selectedSpec || 
                   treatmentSpecialty.includes(selectedSpec) ||
                   selectedSpec.includes(treatmentSpecialty);
        });
        
        // Populate treatment dropdown
        if (filteredTreatments.length > 0) {
            treatmentSelect.disabled = false;
            treatmentSelect.innerHTML = '<option value="">Select Treatment</option>';
            
            filteredTreatments.forEach(treatment => {
                const option = document.createElement('option');
                option.value = treatment.name;
                option.textContent = treatment.name;
                treatmentSelect.appendChild(option);
            });
        } else {
            treatmentSelect.disabled = true;
            treatmentSelect.innerHTML = '<option value="">No treatments available</option>';
        }
    });
    
    // Add default state on page load
    treatmentSelect.disabled = true;
}

// Language Selector Functionality
let googleTranslateReady = false;

// Wait for Google Translate to be fully initialized
function waitForGoogleTranslate(callback) {
    if (typeof google !== 'undefined' && google.translate && google.translate.TranslateElement) {
        callback();
    } else {
        setTimeout(function() {
            waitForGoogleTranslate(callback);
        }, 100);
    }
}

// Initialize after page load
setTimeout(function() {
    waitForGoogleTranslate(function() {
        googleTranslateReady = true;
        console.log('Google Translate is ready!');
    });
}, 1000);

const languageSelect = document.getElementById('languageSelect');

if (languageSelect) {
    // Add loading indicator
    languageSelect.addEventListener('change', function() {
        const selectedLang = this.value;
        
        if (selectedLang && selectedLang !== '') {
            // Show visual feedback
            this.style.opacity = '0.6';
            this.style.cursor = 'wait';
            
            console.log('Translating to:', selectedLang);
            translatePage(selectedLang);
            
            // Reset visual feedback after translation
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.cursor = 'pointer';
            }, 2000);
        }
    });
    
    // Monitor for language changes from Google Translate
    const observer = new MutationObserver(function() {
        const currentLang = getCookie('googtrans');
        if (currentLang) {
            const lang = currentLang.split('/').pop();
            if (lang && languageSelect.value !== lang) {
                languageSelect.value = lang;
            }
        }
    });
    
    // Start observing
    observer.observe(document.body, { 
        attributes: true, 
        attributeFilter: ['class'] 
    });
}

// Helper function to get cookie value
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function translatePage(langCode) {
    console.log('translatePage called with:', langCode);
    
    // Set the cookie first
    setCookie('googtrans', '/en/' + langCode, 1);
    setCookie('googtrans', '/en/' + langCode, 1, '/');
    
    // Try to find the Google Translate select element
    const checkForTranslate = setInterval(function() {
        const translateSelect = document.querySelector('.goog-te-combo');
        
        if (translateSelect) {
            console.log('Found .goog-te-combo, setting value to:', langCode);
            translateSelect.value = langCode;
            
            // Dispatch multiple events to ensure it works
            translateSelect.dispatchEvent(new Event('change', { bubbles: true }));
            translateSelect.dispatchEvent(new Event('input', { bubbles: true }));
            
            // Clear the interval
            clearInterval(checkForTranslate);
            
            console.log('Translation should be happening now...');
        }
    }, 100);
    
    // Stop checking after 5 seconds and reload if needed
    setTimeout(function() {
        clearInterval(checkForTranslate);
        
        // If translation didn't work, reload the page with cookie set
        if (!document.querySelector('.goog-te-combo')) {
            console.log('Google Translate not found, reloading page...');
            window.location.reload();
        }
    }, 5000);
}

// Helper to set cookie
function setCookie(name, value, days, path) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    const cookiePath = path || '/';
    document.cookie = name + '=' + value + expires + '; path=' + cookiePath;
    console.log('Cookie set:', name, '=', value);
}

// Search Panel Functionality
let currentSearchTab = 'treatments';

// Toggle search panel
const searchToggle = document.getElementById('searchToggle');
const searchPanel = document.getElementById('searchPanel');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchToggle && searchPanel) {
    searchToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        searchPanel.classList.toggle('active');
        if (searchPanel.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Close search panel when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchPanel.contains(e.target) && !searchToggle.contains(e.target)) {
            searchPanel.classList.remove('active');
        }
    });

    // Prevent closing when clicking inside panel
    searchPanel.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Search tabs functionality
const searchTabs = document.querySelectorAll('.search-tab');
searchTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        searchTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Update current search tab
        currentSearchTab = this.getAttribute('data-tab');
        
        // Update placeholder
        const placeholders = {
            'treatments': 'Search treatments...',
            'hospitals': 'Search hospitals...',
            'doctors': 'Search doctors...'
        };
        searchInput.placeholder = placeholders[currentSearchTab];
        
        // Clear and trigger search with current input
        const currentValue = searchInput.value;
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchInput.value = currentValue;
        if (currentValue.trim()) {
            performSearch(currentValue);
        }
    });
});

// Search input functionality
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length > 0) {
            performSearch(query);
        } else {
            searchResults.innerHTML = '';
        }
    });
}

// Perform search based on current tab
function performSearch(query) {
    const lowerQuery = query.toLowerCase();
    let results = [];
    
    switch(currentSearchTab) {
        case 'treatments':
            results = treatments.filter(item => 
                item.name.toLowerCase().includes(lowerQuery) || 
                item.specialty.toLowerCase().includes(lowerQuery)
            ).slice(0, 8);
            displayTreatmentResults(results);
            break;
            
        case 'hospitals':
            results = hospitals.filter(item => 
                item.name.toLowerCase().includes(lowerQuery) || 
                item.location.toLowerCase().includes(lowerQuery) ||
                item.type.toLowerCase().includes(lowerQuery)
            ).slice(0, 8);
            displayHospitalResults(results);
            break;
            
        case 'doctors':
            results = doctors.filter(item => 
                item.name.toLowerCase().includes(lowerQuery) || 
                item.specialty.toLowerCase().includes(lowerQuery) ||
                item.hospital.toLowerCase().includes(lowerQuery)
            ).slice(0, 8);
            displayDoctorResults(results);
            break;
    }
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><p>No results found</p></div>';
    }
}

// Display treatment search results
function displayTreatmentResults(results) {
    searchResults.innerHTML = '';
    results.forEach(treatment => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <div class="search-result-title">${treatment.name}</div>
            <div class="search-result-meta">
                <i class="fas fa-stethoscope"></i> ${treatment.specialty} • 
                <i class="fas fa-clock"></i> ${treatment.duration}
            </div>
        `;
        div.addEventListener('click', function() {
            searchPanel.classList.remove('active');
            // Scroll to treatments section
            document.querySelector('#treatments').scrollIntoView({ behavior: 'smooth' });
        });
        searchResults.appendChild(div);
    });
}

// Display hospital search results
function displayHospitalResults(results) {
    searchResults.innerHTML = '';
    results.forEach(hospital => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <div class="search-result-title">${hospital.name}</div>
            <div class="search-result-meta">
                <i class="fas fa-map-marker-alt"></i> ${hospital.location} • 
                <i class="fas fa-hospital"></i> ${hospital.type}
            </div>
        `;
        div.addEventListener('click', function() {
            searchPanel.classList.remove('active');
            // Scroll to hospitals section
            document.querySelector('#hospitals').scrollIntoView({ behavior: 'smooth' });
        });
        searchResults.appendChild(div);
    });
}

// Display doctor search results
function displayDoctorResults(results) {
    searchResults.innerHTML = '';
    results.forEach(doctor => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <div class="search-result-title">${doctor.name}</div>
            <div class="search-result-meta">
                <i class="fas fa-user-md"></i> ${doctor.specialty} • 
                <i class="fas fa-hospital"></i> ${doctor.hospital}
            </div>
        `;
        div.addEventListener('click', function() {
            searchPanel.classList.remove('active');
            // Scroll to doctors section or show doctor details
            document.querySelector('#doctors').scrollIntoView({ behavior: 'smooth' });
        });
        searchResults.appendChild(div);
    });
}

