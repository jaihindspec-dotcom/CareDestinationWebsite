// Treatment Page Generator
// This script creates URL slugs and links for all treatments

const treatmentData = [
    {
        name: "Robotic-Assisted Hysterectomy",
        specialty: "Gynaecology",
        category: "gynaecology",
        hospitalDays: 1,
        duration: "2 to 4 hours",
        slug: "robotic-assisted-hysterectomy"
    },
    {
        name: "Laparoscopic hysterectomy",
        specialty: "Gynaecology",
        category: "gynaecology",
        hospitalDays: 1,
        duration: "1–3 Hours",
        slug: "laparoscopic-hysterectomy"
    },
    {
        name: "Endometriosis excision",
        specialty: "Gynaecology",
        category: "gynaecology",
        hospitalDays: 1,
        duration: "1.5 to 3 hours",
        slug: "endometriosis-excision"
    },
    {
        name: "Ovarian cystectomy",
        specialty: "Gynaecology",
        category: "gynaecology",
        hospitalDays: 1,
        duration: "1 – 1.5 hours",
        slug: "ovarian-cystectomy"
    },
    {
        name: "Piles Treatment",
        specialty: "Proctologist",
        category: "general-surgery",
        hospitalDays: 1,
        duration: "30–60 minutes",
        slug: "piles-treatment"
    },
    {
        name: "Fistula Treatment",
        specialty: "Proctologist",
        category: "general-surgery",
        hospitalDays: 0,
        duration: "30 - 60 min",
        slug: "fistula-treatment"
    },
    {
        name: "Pilonidal Sinus Treatment",
        specialty: "Proctologist",
        category: "general-surgery",
        hospitalDays: 1,
        duration: "30 - 60 min",
        slug: "pilonidal-sinus-treatment"
    },
    {
        name: "Colonoscopy & Endoscopy",
        specialty: "Gastroenterology",
        category: "gastroenterology",
        hospitalDays: 1,
        duration: "1 hour",
        slug: "colonoscopy-endoscopy"
    },
    {
        name: "Liver Disease Management",
        specialty: "Gastroenterology",
        category: "gastroenterology",
        hospitalDays: 7,
        duration: "2-4 Hours",
        slug: "liver-disease-management"
    },
    {
        name: "Gallbladder Surgery",
        specialty: "Gastroenterology",
        category: "gastroenterology",
        hospitalDays: 3,
        duration: "1-2 Hours",
        slug: "gallbladder-surgery"
    },
    {
        name: "Ureteroscopy (URS) – For Kidney Stones",
        specialty: "Urology",
        category: "urology",
        hospitalDays: 1,
        duration: "30 minutes to 1 hour",
        slug: "ureteroscopy"
    },
    {
        name: "Percutaneous Nephrolithotomy (PCNL)",
        specialty: "Urology",
        category: "urology",
        hospitalDays: 2,
        duration: "3 - 6 hours",
        slug: "pcnl"
    },
    {
        name: "Pyeloplasty",
        specialty: "Urology",
        category: "urology",
        hospitalDays: 1,
        duration: "2–3 hours",
        slug: "pyeloplasty"
    },
    {
        name: "Ureteral Stent Placement/Removal",
        specialty: "Urology",
        category: "urology",
        hospitalDays: 1,
        duration: "2–3 hours",
        slug: "ureteral-stent"
    },
    {
        name: "Open Reduction and Internal Fixation",
        specialty: "Orthopaedics",
        category: "orthopaedics",
        hospitalDays: 3,
        duration: "2 – 4 hours",
        slug: "orif"
    },
    {
        name: "Intramedullary Nailing",
        specialty: "Orthopaedics",
        category: "orthopaedics",
        hospitalDays: 2,
        duration: "4 - 6 hours",
        slug: "intramedullary-nailing"
    },
    {
        name: "Hip Replacement Surgery",
        specialty: "Orthopaedics",
        category: "orthopaedics",
        hospitalDays: 3,
        duration: "2-3 hours",
        slug: "hip-replacement"
    },
    {
        name: "Knee Replacement Surgery",
        specialty: "Orthopaedics",
        category: "orthopaedics",
        hospitalDays: 3,
        duration: "2-3 hours",
        slug: "knee-replacement"
    },
    {
        name: "Coronary angiography",
        specialty: "Cardiology",
        category: "cardiology",
        hospitalDays: 1,
        duration: "30 minutes to 1 hour",
        slug: "coronary-angiography"
    },
    {
        name: "Heart Failure Management",
        specialty: "Cardiology",
        category: "cardiology",
        hospitalDays: 5,
        duration: "2-6 Hours",
        slug: "heart-failure-management"
    },
    {
        name: "Arrhythmia Treatment",
        specialty: "Cardiology",
        category: "cardiology",
        hospitalDays: 1,
        duration: "2-4 Hours",
        slug: "arrhythmia-treatment"
    }
];

// Function to create URL slug from treatment name
function createSlug(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

// Function to get treatment URL
function getTreatmentURL(treatmentName) {
    const treatment = treatmentData.find(t => t.name === treatmentName);
    if (treatment) {
        return `treatments/${treatment.slug}.html`;
    }
    return '#';
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { treatmentData, getTreatmentURL };
}

