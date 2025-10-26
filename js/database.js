/**
 * SCHOLARSHIP DATABASE
 * Contains 27+ scholarships with complete information
 */

const scholarshipDatabase = [
    {
        id: 1,
        name: "NTSE (National Talent Search Exam)",
        gradeMin: 10,
        gradeMax: 10,
        board: "Both",
        subject: "General",
        deadline: "2025-11-15",
        reward: "₹1,25,000 per year + College Fee",
        description: "Premier scholarship for talented students across India",
        tips: "Focus on Mental Ability, SAT, and previous year papers. Join coaching if possible.",
        preparationTips: [
            "Practice MAT (Mental Ability Test) daily - 50 questions minimum",
            "Cover complete NCERT syllabus thoroughly",
            "Solve at least 10 previous year question papers",
            "Time management is crucial - practice with timer",
            "Focus on Science and Social Studies equally"
        ]
    },
    {
        id: 2,
        name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
        gradeMin: 11,
        gradeMax: 12,
        board: "Both",
        subject: "Science",
        deadline: "2025-10-30",
        reward: "₹5,000-7,000/month + Research Opportunities",
        description: "For students with aptitude in basic sciences",
        tips: "Strong conceptual understanding in Physics, Chemistry, Biology, and Math required.",
        preparationTips: [
            "Build strong foundation in PCM/PCB concepts",
            "Read beyond textbooks - reference books recommended",
            "Practice aptitude and reasoning questions",
            "Understand concepts, don't memorize",
            "Prepare thoroughly for interview round"
        ]
    },
    {
        id: 3,
        name: "Indian National Olympiad (INO)",
        gradeMin: 8,
        gradeMax: 12,
        board: "Both",
        subject: "Science",
        deadline: "2025-11-20",
        reward: "International Exposure + Cash Prizes",
        description: "Five olympiads: Physics, Chemistry, Biology, Astronomy, Junior Science",
        tips: "Deep conceptual knowledge and problem-solving skills essential.",
        preparationTips: [
            "Start with NCERT, then move to advanced books",
            "Practice olympiad-level problems daily",
            "Join online forums and discussion groups",
            "Analyze solutions thoroughly",
            "Take mock tests regularly"
        ]
    },
    {
        id: 4,
        name: "Pre-RMO & RMO (Math Olympiad)",
        gradeMin: 8,
        gradeMax: 12,
        board: "Both",
        subject: "Math",
        deadline: "2025-12-01",
        reward: "International Math Olympiad Selection",
        description: "Multi-stage mathematical olympiad program",
        tips: "Focus on Number Theory, Geometry, Algebra, and Combinatorics.",
        preparationTips: [
            "Master basic mathematical proofs",
            "Practice competition mathematics books",
            "Solve Art of Problem Solving questions",
            "Focus on mathematical reasoning",
            "Study previous RMO papers thoroughly"
        ]
    },
    {
        id: 5,
        name: "National Science Olympiad (NSO)",
        gradeMin: 1,
        gradeMax: 12,
        board: "Both",
        subject: "Science",
        deadline: "2025-11-10",
        reward: "Up to ₹50,000 + Medals",
        description: "Science Foundation organized olympiad for all grades",
        tips: "Focus on NCERT + logical reasoning questions.",
        preparationTips: [
            "Complete NCERT textbooks first",
            "Practice SOF previous year papers",
            "Work on logical reasoning section",
            "Time management practice",
            "Focus on practical applications"
        ]
    },
    {
        id: 6,
        name: "International Math Olympiad (IMO)",
        gradeMin: 1,
        gradeMax: 12,
        board: "Both",
        subject: "Math",
        deadline: "2025-11-05",
        reward: "Up to ₹50,000 + International Recognition",
        description: "SOF organized mathematical olympiad",
        tips: "Practice mathematical reasoning and complex problem solving.",
        preparationTips: [
            "Strong basics in arithmetic and algebra",
            "Practice SOF sample papers",
            "Focus on mental math skills",
            "Learn shortcut techniques",
            "Regular mock tests"
        ]
    },
    {
        id: 7,
        name: "National Cyber Olympiad (NCO)",
        gradeMin: 1,
        gradeMax: 12,
        board: "Both",
        subject: "General",
        deadline: "2025-11-25",
        reward: "Up to ₹25,000 + Medals",
        description: "Computer science and cyber awareness olympiad",
        tips: "Focus on computer fundamentals, MS Office, and logical reasoning.",
        preparationTips: [
            "Learn basic computer operations",
            "Practice MS Office tools",
            "Study internet safety",
            "Solve logical reasoning puzzles",
            "Take online practice tests"
        ]
    },
    {
        id: 8,
        name: "Navodaya Vidyalaya Selection Test (JNVST)",
        gradeMin: 6,
        gradeMax: 6,
        board: "Both",
        subject: "General",
        deadline: "2025-10-31",
        reward: "Free Quality Education + Boarding",
        description: "Admission to prestigious Jawahar Navodaya Vidyalayas",
        tips: "Focus on Mental Ability, Arithmetic, and Language sections.",
        preparationTips: [
            "Practice mental ability tests extensively",
            "Strong arithmetic fundamentals needed",
            "Language comprehension practice",
            "Solve previous 10 years papers",
            "Time-bound practice essential"
        ]
    },
    {
        id: 9,
        name: "Rashtriya Avishkar Abhiyan",
        gradeMin: 6,
        gradeMax: 12,
        board: "Both",
        subject: "Science",
        deadline: "2025-12-15",
        reward: "Project Funding + Recognition",
        description: "Innovation and experimentation in science",
        tips: "Develop innovative science projects and models.",
        preparationTips: [
            "Think of unique project ideas",
            "Research thoroughly on your topic",
            "Create working models/prototypes",
            "Document your process well",
            "Practice presentation skills"
        ]
    },
    {
        id: 10,
        name: "Dr. APJ Abdul Kalam Ignite Awards",
        gradeMin: 6,
        gradeMax: 10,
        board: "Both",
        subject: "General",
        deadline: "2025-12-20",
        reward: "Up to ₹25,000 + Mentorship",
        description: "For original technological ideas and innovations",
        tips: "Submit innovative ideas solving real-world problems.",
        preparationTips: [
            "Identify problems in your community",
            "Design creative solutions",
            "Create detailed project reports",
            "Build prototypes if possible",
            "Explain social impact clearly"
        ]
    },
    {
        id: 11,
        name: "CBSE Merit Scholarship",
        gradeMin: 10,
        gradeMax: 12,
        board: "CBSE",
        subject: "General",
        deadline: "2025-08-15",
        reward: "₹500-1,000 per month",
        description: "For meritorious CBSE students",
        tips: "Focus on scoring 90%+ in board exams.",
        preparationTips: [
            "Complete NCERT textbooks thoroughly",
            "Practice previous year board papers",
            "Focus on presentation and writing skills",
            "Maintain consistent study schedule",
            "Revise regularly"
        ]
    },
    {
        id: 12,
        name: "Inspire Scholarship (DST)",
        gradeMin: 10,
        gradeMax: 12,
        board: "Both",
        subject: "Science",
        deadline: "2025-09-30",
        reward: "₹80,000 per year for B.Sc/M.Sc",
        description: "Department of Science & Technology scholarship",
        tips: "Score in top 1% in board exams with science subjects.",
        preparationTips: [
            "Aim for 95%+ in board exams",
            "Strong performance in science subjects crucial",
            "Focus on practical knowledge",
            "Develop scientific temperament",
            "Participate in science activities"
        ]
    },
    {
        id: 13,
        name: "National Means cum Merit Scholarship",
        gradeMin: 8,
        gradeMax: 8,
        board: "Both",
        subject: "General",
        deadline: "2025-11-30",
        reward: "₹12,000 per year till Class 12",
        description: "For economically weaker meritorious students",
        tips: "Prepare all subjects equally, focus on basics.",
        preparationTips: [
            "Cover complete Class 8 syllabus",
            "Practice mental ability questions",
            "Solve scholastic aptitude tests",
            "Time management practice",
            "Previous year papers essential"
        ]
    },
    {
        id: 14,
        name: "Pragnya Scholarship (ONGC)",
        gradeMin: 9,
        gradeMax: 12,
        board: "Both",
        subject: "General",
        deadline: "2025-10-15",
        reward: "₹48,000 per year",
        description: "ONGC scholarship for bright students",
        tips: "Maintain 60%+ marks and appear for selection test.",
        preparationTips: [
            "Focus on academic excellence",
            "Prepare for aptitude test",
            "General knowledge important",
            "Current affairs awareness",
            "Interview preparation"
        ]
    },
    {
        id: 15,
        name: "Sitaram Jindal Scholarship",
        gradeMin: 10,
        gradeMax: 12,
        board: "Both",
        subject: "General",
        deadline: "2025-09-20",
        reward: "Up to ₹15,000 per year",
        description: "For meritorious students from economically weaker sections",
        tips: "Good academic record and financial need required.",
        preparationTips: [
            "Maintain consistent academic performance",
            "Prepare proper documentation",
            "Focus on board exam preparation",
            "Improve all subjects equally",
            "Time management skills"
        ]
    },
    {
        id: 16,
        name: "Indian Oil Academic Scholarship",
        gradeMin: 4,
        gradeMax: 12,
        board: "Both",
        subject: "General",
        deadline: "2025-10-10",
        reward: "Up to ₹2,000 per month",
        description: "For children of Indian Oil employees and general students",
        tips: "Score 60%+ marks in previous class.",
        preparationTips: [
            "Consistent academic performance",
            "Focus on weak subjects",
            "Regular study routine",
            "Practice tests important",
            "Maintain good attendance"
        ]
    },
    {
        id: 17,
        name: "Swami Dayanand Education Foundation Merit Scholarship",
        gradeMin: 10,
        gradeMax: 12,
        board: "Both",
        subject: "General",
        deadline: "2025-08-30",
        reward: "₹3,000-6,000 per year",
        description: "Merit-based scholarship for Class 10-12",
        tips: "Score minimum 75% in previous exam.",
        preparationTips: [
            "Target 75%+ marks",
            "Focus on core subjects",
            "Regular revision",
            "Practice previous papers",
            "Improve weak areas"
        ]
    },
    {
        id: 18,
        name: "LIC Golden Jubilee Scholarship",
        gradeMin: 10,
        gradeMax: 12,
        board: "Both",
        subject: "General",
        deadline: "2025-09-15",
        reward: "₹20,000 for Class 10, ₹10,000 for Class 12",
        description: "For meritorious students from weaker sections",
        tips: "Score 60%+ and family income criteria applies.",
        preparationTips: [
            "Maintain 60%+ consistently",
            "Prepare financial documents",
            "Focus on board exam preparation",
            "Improve presentation skills",
            "Regular practice"
        ]
    },
    {
        id: 19,
        name: "MCM Scholarship Programme",
        gradeMin: 6,
        gradeMax: 12,
        board: "Both",
        subject: "General",
        deadline: "2025-11-01",
        reward: "Up to ₹10,000 per year",
        description: "Muslim Community Minority scholarship",
        tips: "Minimum 50% marks required in previous class.",
        preparationTips: [
            "Maintain 50%+ marks",
            "Focus on consistent performance",
            "Complete syllabus on time",
            "Regular assessment tests",
            "Proper documentation"
        ]
    },
    {
        id: 20,
        name: "Vahani Scholarship",
        gradeMin: 5,
        gradeMax: 7,
        board: "Both",
        subject: "General",
        deadline: "2025-10-20",
        reward: "₹10,000-15,000 per year",
        description: "For underprivileged bright students",
        tips: "Academic merit and financial need both considered.",
        preparationTips: [
            "Focus on academic excellence",
            "Prepare income certificates",
            "Maintain good academic record",
            "Complete assignments on time",
            "Regular school attendance"
        ]
    },
    {
        id: 21,
        name: "Kalpana Chawla Scholarship for Girls",
        gradeMin: 9,
        gradeMax: 12,
        board: "Both",
        subject: "Science",
        deadline: "2025-11-10",
        reward: "₹30,000 per year",
        description: "Encouraging girls in science education",
        tips: "Female students with science background preferred.",
        preparationTips: [
            "Focus on science subjects",
            "Develop interest in STEM",
            "Participate in science fairs",
            "Maintain 60%+ marks",
            "Build strong conceptual base"
        ]
    },
    {
        id: 22,
        name: "Netaji Subhas Scholarship",
        gradeMin: 10,
        gradeMax: 12,
        board: "State",
        subject: "General",
        deadline: "2025-09-10",
        reward: "₹5,000-10,000 per year",
        description: "State board merit scholarship in various states",
        tips: "Top performers in state board exams get preference.",
        preparationTips: [
            "Focus on state board syllabus",
            "Practice state board question patterns",
            "Score 75%+ minimum",
            "Study local language well",
            "Understand marking scheme"
        ]
    },
    {
        id: 23,
        name: "Pratibha Kiran Scholarship for Girls",
        gradeMin: 12,
        gradeMax: 12,
        board: "Both",
        subject: "General",
        deadline: "2025-08-25",
        reward: "₹3,000-5,000 per year",
        description: "State government scholarship for meritorious girls",
        tips: "Minimum 60% in Class 12, for girls only.",
        preparationTips: [
            "Target 60%+ in board exams",
            "Focus on core subjects",
            "Improve writing speed",
            "Practice sample papers",
            "Time-bound preparation"
        ]
    },
    {
        id: 24,
        name: "AICTE Pragati Scholarship for Girls",
        gradeMin: 10,
        gradeMax: 12,
        board: "Both",
        subject: "Science",
        deadline: "2025-10-05",
        reward: "₹30,000 per year + ₹20,000 contingency",
        description: "For girl students pursuing technical education",
        tips: "Family income less than ₹8 lakhs, girls only.",
        preparationTips: [
            "Focus on science and math",
            "Build technical aptitude",
            "Prepare income documents",
            "Score well in entrance exams",
            "Career counseling recommended"
        ]
    },
    {
        id: 25,
        name: "Young Scientist Programme (YSP)",
        gradeMin: 8,
        gradeMax: 11,
        board: "Both",
        subject: "Science",
        deadline: "2025-12-10",
        reward: "Training + Research Exposure",
        description: "Hands-on research training for young minds",
        tips: "Appear for written test and interview.",
        preparationTips: [
            "Develop scientific curiosity",
            "Read science magazines/journals",
            "Work on science projects",
            "Improve observation skills",
            "Practice interview questions"
        ]
    },
    {
        id: 26,
        name: "English Olympiad (IEO)",
        gradeMin: 1,
        gradeMax: 12,
        board: "Both",
        subject: "English",
        deadline: "2025-11-08",
        reward: "Up to ₹50,000 + Medals",
        description: "International English Olympiad by SOF",
        tips: "Focus on grammar, vocabulary, and comprehension.",
        preparationTips: [
            "Read English newspapers daily",
            "Practice grammar exercises",
            "Improve vocabulary",
            "Solve comprehension passages",
            "Work on spelling and usage"
        ]
    },
    {
        id: 27,
        name: "General Knowledge Olympiad (IGKO)",
        gradeMin: 1,
        gradeMax: 10,
        board: "Both",
        subject: "General",
        deadline: "2025-11-22",
        reward: "Up to ₹25,000 + Recognition",
        description: "International General Knowledge Olympiad",
        tips: "Stay updated with current affairs and general awareness.",
        preparationTips: [
            "Read newspapers daily",
            "Watch educational news channels",
            "Study atlas and world geography",
            "Learn about important personalities",
            "Practice quiz competitions"
        ]
    }
];
