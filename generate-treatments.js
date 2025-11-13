#!/usr/bin/env node

/**
 * Treatment Page Generator
 * Generates individual HTML pages for all treatments
 */

const fs = require('fs');
const path = require('path');

// Treatment data
const treatments = [
    {
        name: "Robotic-Assisted Hysterectomy",
        specialty: "Gynaecology",
        hospitalDays: 1,
        duration: "2 to 4 hours",
        estimatedCost: "$4,500 - $8,000",
        description: "Advanced minimally invasive hysterectomy using robotic surgical systems"
    },
    {
        name: "Laparoscopic Hysterectomy",
        specialty: "Gynaecology",
        hospitalDays: 1,
        duration: "1–3 Hours",
        estimatedCost: "$3,000 - $6,000",
        description: "Minimally invasive removal of the uterus through small incisions"
    },
    {
        name: "Hip Replacement Surgery",
        specialty: "Orthopaedics",
        hospitalDays: 3,
        duration: "2-3 hours",
        estimatedCost: "$7,000 - $12,000",
        description: "Surgical procedure to replace a damaged hip joint with a prosthetic implant"
    },
    {
        name: "Knee Replacement Surgery",
        specialty: "Orthopaedics",
        hospitalDays: 3,
        duration: "2-3 hours",
        estimatedCost: "$6,500 - $11,000",
        description: "Total or partial knee replacement to relieve pain and restore mobility"
    },
     {
        name: "Root canal Treatment",
        specialty: "Dental",
        hospitalDays: 3,
        duration: "2-3 hours",
        estimatedCost: "$6,500 - $11,000",
        description: "Total or partial knee replacement to relieve pain and restore mobility"
    },
    {
        name: "Piles Treatment",
        specialty: "Proctologist",
        hospitalDays: 1,
        duration: "30–60 minutes",
        estimatedCost: "$800 - $2,500",
        description: "Modern laser or surgical treatment for hemorrhoids"
    },
    {
        name: "Ureteroscopy (URS) – For Kidney Stones",
        specialty: "Urology",
        hospitalDays: 1,
        duration: "30 minutes to 1 hour",
        estimatedCost: "$2,500 - $5,000",
        description: "Minimally invasive procedure to remove kidney or ureter stones using a thin scope"
    },
    {
        name: "Percutaneous Nephrolithotomy (PCNL)",
        specialty: "Urology",
        hospitalDays: 2,
        duration: "3 - 6 hours",
        estimatedCost: "$3,500 - $7,000",
        description: "Surgical procedure for removing large or complex kidney stones"
    },
    {
        name: "Coronary Angiography",
        specialty: "Cardiology",
        hospitalDays: 1,
        duration: "30 minutes to 1 hour",
        estimatedCost: "$1,000 - $3,000",
        description: "Diagnostic procedure to visualize blood flow in coronary arteries"
    },
    {
        name: "Gallbladder Surgery",
        specialty: "Gastroenterology",
        hospitalDays: 3,
        duration: "1-2 Hours",
        estimatedCost: "$3,000 - $6,000",
        description: "Laparoscopic cholecystectomy to remove the gallbladder"
    },
    {
        name: "Colonoscopy & Endoscopy",
        specialty: "Gastroenterology",
        hospitalDays: 1,
        duration: "1 hour",
        estimatedCost: "$800 - $2,000",
        description: "Diagnostic procedures to examine the digestive tract"
    }
];

// Template function
function generateTreatmentHTML(treatment) {
    const slug = treatment.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${treatment.name} | CareDestinations</title>
    <meta name="description" content="${treatment.description}">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/treatment-detail.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="container nav-container">
            <div class="logo">
                <a href="../index.html">
                    <img src="../logo.png" alt="CareDestinations Logo">
                </a>
            </div>
            <ul class="nav-menu" id="nav-menu">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../index.html#speciality">Speciality</a></li>
                <li><a href="../index.html#wellness">Wellness & Ayurvedic</a></li>
                <li><a href="../index.html#hospitals">Hospitals</a></li>
                <li><a href="../index.html#doctors">Doctors</a></li>
                <li><a href="../index.html#contact">Contact Us</a></li>
                <li><a href="../index.html#news">News</a></li>
                <li><a href="../be-a-partner.html" class="btn-partner">Be a Partner</a></li>
            </ul>
            <div class="nav-right-actions">
                <div class="search-dropdown">
                    <button class="search-btn" id="searchToggle">
                        <i class="fas fa-search"></i>
                    </button>
                    <div class="search-panel" id="searchPanel">
                        <div class="search-tabs">
                            <button class="search-tab active" data-tab="treatments">Treatments</button>
                            <button class="search-tab" data-tab="hospitals">Hospitals</button>
                            <button class="search-tab" data-tab="doctors">Doctors</button>
                        </div>
                        <div class="search-content">
                            <input type="text" id="searchInput" placeholder="Search treatments..." class="search-input">
                            <div class="search-results" id="searchResults"></div>
                        </div>
                    </div>
                </div>
                <div class="language-selector">
                    <select id="languageSelect" class="language-dropdown">
                        <option value="">Select Language</option>
                        <option value="en">English</option>
                        <option value="es">Español (Spanish)</option>
                        <option value="fr">Français (French)</option>
                        <option value="de">Deutsch (German)</option>
                        <option value="it">Italiano (Italian)</option>
                        <option value="pt">Português (Portuguese)</option>
                        <option value="ru">Русский (Russian)</option>
                        <option value="zh-CN">简体中文 (Chinese Simplified)</option>
                        <option value="zh-TW">繁體中文 (Chinese Traditional)</option>
                        <option value="ja">日本語 (Japanese)</option>
                        <option value="ko">한국어 (Korean)</option>
                        <option value="ar">العربية (Arabic)</option>
                        <option value="hi">हिन्दी (Hindi)</option>
                        <option value="bn">বাংলা (Bengali)</option>
                        <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
                        <option value="te">తెలుగు (Telugu)</option>
                        <option value="mr">मराठी (Marathi)</option>
                        <option value="ta">தமிழ் (Tamil)</option>
                        <option value="ur">اردو (Urdu)</option>
                        <option value="gu">ગુજરાતી (Gujarati)</option>
                        <option value="kn">ಕನ್ನಡ (Kannada)</option>
                        <option value="ml">മലയാളം (Malayalam)</option>
                        <option value="or">ଓଡ଼ିଆ (Oriya)</option>
                    </select>
                    <div id="google_translate_element" style="display: none;"></div>
                </div>
            </div>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Treatment Hero -->
    <section class="treatment-hero">
        <div class="container">
            <h1>${treatment.name}</h1>
            <p class="treatment-subtitle">Department: ${treatment.specialty}</p>
            <div class="treatment-meta">
                <div class="meta-item">
                    <i class="fas fa-hospital"></i>
                    <span>${treatment.hospitalDays} ${treatment.hospitalDays === 1 ? 'Day' : 'Days'} Hospital Stay</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${treatment.duration} Duration</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-dollar-sign"></i>
                    <span>${treatment.estimatedCost}</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Treatment Content -->
    <section class="treatment-content">
        <div class="container">
            <div class="treatment-layout">
                <!-- Main Content -->
                <div class="treatment-main">
                    <h2>About ${treatment.name}</h2>
                    <p>${treatment.description}</p>

                    <h2>Why Choose This Treatment?</h2>
                    <ul>
                        <li>Experienced medical professionals</li>
                        <li>State-of-the-art facilities</li>
                        <li>Comprehensive pre and post-operative care</li>
                        <li>Affordable pricing with transparent costs</li>
                        <li>International patient support</li>
                    </ul>

                    <h2>Treatment Process</h2>
                    <p>Our team of specialists will guide you through every step of the treatment process, from initial consultation to post-operative care and recovery.</p>

                    <div class="info-box success">
                        <h4><i class="fas fa-check-circle"></i> Quality Care</h4>
                        <p>We are committed to providing world-class healthcare services with personalized attention to each patient.</p>
                    </div>

                    <h2>What to Expect</h2>
                    <h3>Before the Procedure</h3>
                    <ul>
                        <li>Comprehensive medical evaluation</li>
                        <li>Pre-operative tests and consultations</li>
                        <li>Detailed treatment plan discussion</li>
                        <li>Preparation guidelines</li>
                    </ul>

                    <h3>During the Procedure</h3>
                    <ul>
                        <li>Modern surgical techniques</li>
                        <li>Advanced monitoring systems</li>
                        <li>Experienced surgical team</li>
                        <li>Patient safety protocols</li>
                    </ul>

                    <h3>After the Procedure</h3>
                    <ul>
                        <li>Post-operative monitoring</li>
                        <li>Pain management</li>
                        <li>Recovery guidance</li>
                        <li>Follow-up appointments</li>
                    </ul>

                    <h2>Recovery Time</h2>
                    <p>Recovery time varies based on individual factors and the specific procedure. Our medical team will provide personalized recovery guidelines and support throughout your healing journey.</p>

                    <h2>Frequently Asked Questions</h2>
                    <div class="faq-section">
                        <div class="faq-item">
                            <div class="faq-question">How long does the procedure take?</div>
                            <div class="faq-answer">The procedure typically takes ${treatment.duration}, though this can vary based on individual circumstances.</div>
                        </div>
                        <div class="faq-item">
                            <div class="faq-question">What is the hospital stay duration?</div>
                            <div class="faq-answer">Most patients stay in the hospital for ${treatment.hospitalDays} ${treatment.hospitalDays === 1 ? 'day' : 'days'}, depending on their recovery progress.</div>
                        </div>
                        <div class="faq-item">
                            <div class="faq-question">Is this treatment covered by insurance?</div>
                            <div class="faq-answer">Coverage varies by insurance provider. We recommend checking with your insurance company for specific details about your policy.</div>
                        </div>
                        <div class="faq-item">
                            <div class="faq-question">What are the success rates?</div>
                            <div class="faq-answer">Our medical facilities maintain high success rates. Your doctor will discuss specific success rates and outcomes during your consultation.</div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <aside class="treatment-sidebar">
                    <!-- Hospitals -->
                    <div class="sidebar-card">
                        <h3>Available Hospitals</h3>
                        <div class="mini-card">
                            <h4>TX Hospitals</h4>
                            <p><i class="fas fa-map-marker-alt"></i> Hyderabad, India</p>
                            <span class="badge">Multi Speciality</span>
                            <a href="../index.html#hospitals" class="btn-small">Read More</a>
                        </div>
                    </div>

                    <!-- Doctors -->
                    <div class="sidebar-card">
                        <h3>Expert Doctors</h3>
                        <div class="mini-card">
                            <h4>Our Specialists</h4>
                            <p><i class="fas fa-user-md"></i> ${treatment.specialty}</p>
                            <a href="../index.html#doctors" class="btn-small">View Doctors</a>
                        </div>
                    </div>

                    <!-- CTA -->
                    <div class="cta-box">
                        <h3>Get an Opinion</h3>
                        <p>Reach out to our experts for personalized advice</p>
                        <a href="../index.html#contact" class="btn-cta">Contact Us!</a>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="treatment-contact">
        <div class="container">
            <h2>Your Journey to Health Starts Here</h2>
            <p>Reach out to our experts for personalized advice and tailored solutions today.</p>
            <div class="contact-buttons">
                <a href="mailto:info@caredestinations.com" class="btn-contact btn-contact-primary">
                    <i class="fas fa-envelope"></i> Email Us
                </a>
                <a href="tel:+919281111724" class="btn-contact btn-contact-secondary">
                    <i class="fas fa-phone"></i> +91 92811 11724
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <img src="../logo.png" alt="CareDestinations" class="footer-logo">
                    <p>CareDestinations connects you with leading hospitals, doctors, experts, and cosmetic specialists.</p>
                </div>
                <div class="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../index.html#hospitals">Hospitals</a></li>
                        <li><a href="../index.html#doctors">Doctors</a></li>
                        <li><a href="../index.html#speciality">Treatments</a></li>
                        <li><a href="../be-a-partner.html">Be a Partner</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Contact Us</h4>
                    <ul class="contact-info">
                        <li><i class="fas fa-map-marker-alt"></i> CareDestinations Solutions Pvt Ltd<br>Hyderabad, Telangana - 500072, India</li>
                        <li><i class="fas fa-envelope"></i> info@caredestinations.com</li>
                        <li><i class="fas fa-phone"></i> +91 92811 11724</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy;2025 CareDestinations Solutions Pvt Ltd. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button class="scroll-top" id="scrollTop">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Google Translate Script -->
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,es,fr,de,it,pt,ru,zh-CN,zh-TW,ja,ko,ar,hi,bn,pa,te,mr,ta,ur,gu,kn,ml,or',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            }, 'google_translate_element');
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

    <script src="../js/main.js"></script>
</body>
</html>`;
}

// Create treatments directory if it doesn't exist
const treatmentsDir = path.join(__dirname, 'treatments');
if (!fs.existsSync(treatmentsDir)) {
    fs.mkdirSync(treatmentsDir, { recursive: true });
}

// Generate all treatment pages
console.log('🏥 Generating treatment pages...\n');

treatments.forEach(treatment => {
    const slug = treatment.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    
    const filename = `${slug}.html`;
    const filepath = path.join(treatmentsDir, filename);
    
    const html = generateTreatmentHTML(treatment);
    
    fs.writeFileSync(filepath, html, 'utf8');
    console.log(`✅ Created: treatments/${filename}`);
});

console.log(`\n🎉 Successfully generated ${treatments.length} treatment pages!`);
console.log('\n📋 Generated pages:');
treatments.forEach(t => {
    const slug = t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    console.log(`   - ${t.name} → treatments/${slug}.html`);
});

