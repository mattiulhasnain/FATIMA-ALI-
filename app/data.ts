export const topics = [
  { id: 'genome', title: 'Human Genome', icon: 'Dna' },
  { id: 'applications', title: 'Applications in Forensics', icon: 'Search' },
  { id: 'contamination', title: 'Avoiding Contamination', icon: 'ShieldAlert' },
  { id: 'medico-legal', title: 'Medico-Legal Guidelines', icon: 'Stethoscope' },
  { id: 'sexual-offence', title: 'Sexual Offence Samples', icon: 'UserX' },
  { id: 'materials', title: 'Biological Materials (Table I)', icon: 'TestTube' },
  { id: 'dna-content', title: 'DNA Content (Table II)', icon: 'Droplet' },
  { id: 'collection', title: 'Collection Techniques', icon: 'BriefcaseMedical' },
  { id: 'flashcards', title: 'Flashcards', icon: 'Layers' },
  { id: 'quiz', title: 'Interactive Quiz', icon: 'CheckSquare' },
  { id: 'summaries', title: 'Summaries', icon: 'FileText' },
  { id: 'ai-assistant', title: 'AI Assistant', icon: 'MessageSquare' },
];

export const humanGenome = {
  definition: "The genetic complement of a living organism.",
  size: "Approximately 3,200,000,000 base pairs (bp) of information.",
  chromosomes: [
    "Organized into 23 pairs of chromosomes (46 total).",
    "22 pairs are autosomes.",
    "The 23rd pair is the sex chromosomes (XX for females, XY for males).",
    "One version of each chromosome is inherited from each parent."
  ],
  properties: [
    "DNA is found in nearly all cell types EXCEPT red blood cells.",
    "Each person's DNA is unique, except in the case of identical twins.",
    "A person's DNA is the same in every cell in that person's body throughout life."
  ]
};

export const applications = {
  criminal: [
    "Sexual assaults, murder, accident, concealment of birth.",
    "Identification/restoration of kidnapped/exchanged babies.",
    "Identification of babies born out of wedlock or sexual assault.",
    "Identification of mutilated bodies in mass disaster cases.",
    "Identification of plant materials and microbes.",
    "Identification of species of biological evidence material in poaching cases.",
    "In linking cases e.g. different rape cases-serial rapist."
  ],
  civil: [
    "Determination of paternity/maternity.",
    "Inheritance cases.",
    "Immigration cases."
  ]
};

export const contamination = [
  "Wearing full protective suits, face masks, disposable hand gloves before touching any evidence and change the gloves between handling different items.",
  "Use disposable instruments or clean them thoroughly before and after handling each sample.",
  "Avoid touching the area where believe that DNA may exist.",
  "Avoid talking, sneezing, and coughing over evidence.",
  "Avoid touching face, nose, and mouth when collecting and packaging evidence.",
  "Air-dry the evidence thoroughly before packaging.",
  "Put evidence into new paper bags or envelopes, not into plastic bags. Do not use staples.",
  "Contact between victim and suspect samples should be avoided at all times.",
  "Each piece of evidence should be packaged separately into paper bags. Do not use plastic bags.",
  "Never re-use packaging."
];

export const medicoLegal = [
  "Soft tissue should be collected in a suitable clean plastic container and preserved in saturated salt solution. Tissues should never be preserved in Formalin.",
  "In the cases of accidents, mass disasters, burnt or mutilated bodies, 2-3 tissues like deep muscle tissue, skin, or other least affected tissue (about 5-10g) should be collected and preserve in a clean sterilized containers and be transported in refrigerated condition.",
  "In case of only skeletal remnants are available, teeth (2 to 3 entire teeth preferably molar or pre-molar and long bones (femur or humerus) should be collected. (Completely burnt/charred bone should not be sent for DNA analysis.)",
  "Foetal tissues and maternal tissues must be separated at the time of collection."
];

export const sexualOffence = {
  victims: [
    "A standard sample collection kit must be used to collect vaginal, oral and anal evidence.",
    "Blood on treated paper (FTA card/ nucleic card/blood in EDTA tube/buccal swab) as Reference DNA sample from the victim.",
    "Genital swab(s): these may contain the perpetrator DNA (such as sperm cells or penile epithelial cells).",
    "Swabbing of the breast and external genital areas: these may contain the perpetrator DNA (sperm cells, penile epithelial cells, or saliva via mouth or hands).",
    "Fingernail clippings or scrapings: It may contain skin cells or blood of the perpetrator transferred during the attack.",
    "Pubic hair combings: may be found foreign pubic hair transfer from the perpetrator.",
    "Victim's clothing: Underwear (DNA from seminal fluid or epithelial cells). Outer clothing (DNA from possible body fluids & hair of the culprit).",
    "The vaginal swabs or smear on slides in sexual assault cases should be properly dried and packed separately."
  ],
  reference: [
    "Reference samples are necessary for comparison and elimination purposes.",
    "Control biological samples like buccal swabs or blood should be collected by the doctor along with duly filled 'Biological Sample Authentication Form' in duplicate.",
    "In case of non-availability of an individual, exclusive items such as toothbrushes or razors, etc of that individuals may be sent for analysis.",
    "Otherwise, control samples of close relatives are desired.",
    "In case of blood transfusion or organ transplantation, an oral swab may be collected as a control sample."
  ]
};

export const biologicalMaterials = [
  { evidence: "Hair", location: "Root", source: "Tissue" },
  { evidence: "Clothing", location: "Surface", source: "Blood, Semen, sweat, saliva" },
  { evidence: "Head comb", location: "Surface", source: "Sweat, hair, tissue" },
  { evidence: "Consumed cigarette", location: "Cigarette butt", source: "Saliva" },
  { evidence: "Razor", location: "Blades", source: "Tissue, hair root" },
  { evidence: "Gloves", location: "Interior and exterior", source: "Sweat, tissue" },
  { evidence: "Bottle or sipper", location: "Mouthpiece", source: "Saliva" },
  { evidence: "Toothbrush", location: "Surface", source: "Buccal tissue, saliva" },
  { evidence: "Hat or mask", location: "Inner surface", source: "Sweat, hair" },
  { evidence: "Used condom", location: "Interior and exterior", source: "Semen and vaginal cell" },
  { evidence: "Knife", location: "Surface and handle", source: "Sweat, blood, tissue" },
  { evidence: "Ligature", location: "Surface", source: "Skin, tissue" },
  { evidence: "Bed sheet /blanket", location: "Surface", source: "Blood, Semen, sweat, saliva, urine" },
  { evidence: "Tooth pick", location: "Tips", source: "Saliva" },
  { evidence: "Bullet head", location: "Surface", source: "Blood" },
  { evidence: "Bite mark", location: "Person's skin", source: "Saliva" },
  { evidence: "Finger nail", location: "Scraping", source: "Blood, skin" },
  { evidence: "Dandruff", location: "Whole", source: "Cell debris" },
  { evidence: "Eye glasses", location: "Ear and nose pieces", source: "Sweat, tissue" },
  { evidence: "Used Glass/ cups", location: "Surface", source: "Saliva" },
  { evidence: "Shoes or socks", location: "Inner surface", source: "Sweat" },
  { evidence: "Chewing gum", location: "Surface", source: "Saliva" },
  { evidence: "Tobacco spits", location: "Stains", source: "Saliva" },
  { evidence: "Urine and fecal matter", location: "Whole", source: "Cell" },
  { evidence: "Bones and teeth", location: "Whole", source: "Cell" },
  { evidence: "Blood/semen/saliva and their stains on any surface.", location: "Whole", source: "Cell" },
  { evidence: "Other offending weapons", location: "Surface", source: "Blood, sweat" }
];

export const dnaContent = [
  { sample: "Liquid blood", content: "30-60 ng/µl" },
  { sample: "Bloodstain", content: "250-500 ng/cm²" },
  { sample: "Semen", content: "1,50,000-3,00000 ng/ml" },
  { sample: "Vaginal fluid", content: "Up to 3000 ng/ml" },
  { sample: "Saliva", content: "1000-10,000 ng/ml" },
  { sample: "Oral swab", content: "1000-1500 ng/ml" },
  { sample: "Hair root (Plucked)", content: "49-72 ng/µl" },
  { sample: "Hair (Shed)", content: "1.72-1.872 ng/µl" },
  { sample: "Dandruff", content: "0.8-16.6 ng/particle" },
  { sample: "Urine", content: "1-20 ng/ml" },
  { sample: "Bone", content: "3-10 ng/mg" },
  { sample: "Teeth", content: "21-37 µg/mg" },
  { sample: "Soft tissues", content: "3-15 µg/mg" },
  { sample: "Fibroblast cell line", content: "6.5 µg/l" }
];

export const collectionTechniques = [
  {
    title: "Liquid blood from donor",
    details: "Blood is the most suitable sample for DNA profiling. Collected from suspect(s) and victim persons. Around 2-5ml of blood sample collected in duplicates in EDTA vial/tubes. Postmortem blood collected from heart or major internal blood vessels. Reference liquid blood samples can also be collected on Whatman FTA cards (dry 2-3 minutes before packing)."
  },
  {
    title: "Liquid blood or wet bloodstains from crime scene",
    details: "Collected using a sterile syringe and transferred to a clean EDTA tube/FTA card/Whatman paper. Alternatively, clean cotton gauze/cloth by soaking. Refrigerated and sent to the laboratory earliest."
  },
  {
    title: "Dried blood stains at crime scene",
    details: "Immovable objects: collected using a sterile cotton swab moistened with saline or water, air-dry before packing. Can also be collected by scrapped on clean paper. Control sample should be collected from adjacent area. Movable objects (weapons, cloth, knife): collected and packed separately."
  },
  {
    title: "Semen or seminal stains (Sexual assault cases)",
    details: "Documented by photograph, videography, or sketching. Seminal stains air dry properly before packing. Liquid semen collected by clean cotton gauze/cloth by soaking and air dry. Vaginal swab and smear, oral swab, anal swab, breast swab collected from victims. Victim's clothes preserved."
  },
  {
    title: "Soft Tissue and organ",
    details: "Collected from crime scene using sterile forceps and preserved in a glass bottle with normal saline solution. Store at room temperature. Postmortem: deep muscle tissue with more than one organ preserved with normal saline solution and store in a refrigerator. Not to use formalin. Liver and kidney are not suitable samples."
  },
  {
    title: "Bone and teeth",
    details: "To establish identity of deceased or unidentified dead body from skeletal remains, always preferred to collect intact long bones (such as femur, humerus) and 2-3 molar or pre-molar teeth in duplicate. Store at room temperature. Completely burnt/charred bone should not be sent."
  },
  {
    title: "Hair",
    details: "Hair with a root sample can be used in nuclear DNA analysis. Collect with precaution using forceps and packed in a paper envelope. Followed by reference sample (blood/saliva) of the suspect. If found attached with dried blood or weapon etc., do not remove the hair rather entire substrate should be packed intact. Collect reference samples from the victim and suspect 50-100 standard hair."
  }
];

export const flashcards = [
  { q: "What is the size of the human genome?", a: "Approximately 3,200,000,000 base pairs (bp)." },
  { q: "How many chromosomes do humans have?", a: "23 pairs (46 total). 22 pairs are autosomes, 1 pair is sex chromosomes." },
  { q: "Which human cell type does NOT contain DNA?", a: "Red blood cells." },
  { q: "Name 3 criminal applications of DNA analysis.", a: "Sexual assaults, murder, identification of mutilated bodies." },
  { q: "Name 3 civil applications of DNA analysis.", a: "Paternity/maternity, inheritance, immigration." },
  { q: "Why should evidence NOT be put in plastic bags?", a: "To avoid contamination and moisture. Use paper bags or envelopes instead." },
  { q: "How should soft tissue be preserved?", a: "In saturated salt solution. NEVER in Formalin." },
  { q: "What are the preferred bone samples for DNA analysis?", a: "Intact long bones (femur, humerus) and 2-3 molar/pre-molar teeth." },
  { q: "What is the approximate DNA content in a bloodstain?", a: "250-500 ng/cm²." },
  { q: "What is the approximate DNA content in semen?", a: "1,50,000-3,00000 ng/ml." }
];

export const quizzes = [
  {
    question: "Which of the following cells do NOT contain DNA?",
    options: ["White blood cells", "Red blood cells", "Skin cells", "Sperm cells"],
    answer: 1
  },
  {
    question: "How should biological evidence be packaged?",
    options: ["In plastic bags", "In airtight containers", "In paper bags or envelopes", "In glass jars"],
    answer: 2
  },
  {
    question: "What should NEVER be used to preserve soft tissue for DNA analysis?",
    options: ["Saturated salt solution", "Refrigeration", "Formalin", "Sterile containers"],
    answer: 2
  },
  {
    question: "What is the approximate size of the human genome?",
    options: ["3.2 million bp", "3.2 billion bp", "3.2 trillion bp", "320,000 bp"],
    answer: 1
  },
  {
    question: "Which bones are preferred for DNA analysis from skeletal remains?",
    options: ["Ribs and sternum", "Skull fragments", "Intact long bones (femur/humerus)", "Vertebrae"],
    answer: 2
  }
];

export const summaries = [
  {
    title: "Human Genome",
    content: "The human genome consists of 3.2 billion base pairs organized into 23 pairs of chromosomes. DNA is unique to each individual (except identical twins) and is found in all cells except red blood cells."
  },
  {
    title: "Applications in Forensics",
    content: "DNA analysis is used in criminal cases (murder, sexual assault, identification of bodies) and civil cases (paternity, inheritance, immigration)."
  },
  {
    title: "Avoiding Contamination",
    content: "Extreme care must be taken to avoid contamination. Use protective gear, avoid talking/sneezing over evidence, air-dry evidence, and package in paper bags, not plastic."
  },
  {
    title: "Medico-Legal Guidelines",
    content: "Soft tissue should be preserved in saturated salt solution, never formalin. In mass disasters, deep muscle or skin is preferred. For skeletal remains, long bones and teeth are best."
  },
  {
    title: "Sample Collection",
    content: "Collect vaginal, oral, and anal evidence using standard kits. Reference samples (blood/buccal swabs) are crucial for comparison. Blood is the most suitable sample for DNA profiling."
  }
];

export const fullDocumentContext = `
HUMAN GENOME
The genome can be defined as the genetic complement of a living organism. The human genome contains approximately 3,200,000,000 bp of information which is organized onto 23 chromosomes. A base pair (bp) is the basic unit of measurement for the size of a fragment of DNA. Humans contain two sets of chromosomes. One version of each chromosome is inherited from each parent, giving a total of 46 chromosomes. Twenty-two pairs of chromosomes are autosomes and the 23rd pair is the (X and Y) sex chromosomes. Females have two X chromosomes, whereas males have one X and one Y chromosome. DNA is found in nearly all cell types except red blood cells. One chromosome from each pair is contributed by an individual's mother and the other by an individual's father. Each person's DNA is unique, except in the case of identical twins. Identical twins will have exactly the same DNA sequence. Another property of DNA that is important to forensic analysis is that a person's DNA is the same in every cell in that person's body throughout life.

APPLICATION OF DNA ANALYSIS IN FORENSICS SCIENCE
(a) Criminal cases: Sexual assaults, murder, accident, concealment of birth. Identification/restoration of kidnapped/exchanged babies. Identification of babies born out of wedlock or sexual assault. Identification of mutilated bodies in mass disaster cases. Identification of plant materials and microbes. Identification of species of biological evidence material in poaching cases. In linking cases e.g. different rape cases-serial rapist.
(b) Civil cases: Determination of paternity/maternity. Inheritance cases. Immigration cases.

AVOID CONTAMINATION OF EVIDENCE
Very small amount of DNA sample can be used as evidence. So, in the matter of contamination issues, greater attention is essential when collecting, and preserving the DNA evidence for analysis. The integrity of the biological sample is very important in forensic casework. Biological contamination of evidence from another source is a very real possibility, especially when dealing with trace evidence. Following precautions should be taken to avoid contamination of evidence during sample collection for DNA analysis.
i) Wearing full protective suits, face masks, disposable hand gloves before touching any evidence and change the gloves between handling different items.
ii) Use disposable instruments or clean them thoroughly before and after handling each sample.
iii) Avoid touching the area where believe that DNA may exist.
iv) Avoid talking, sneezing, and coughing over evidence.
v) Avoid touching face, nose, and mouth when collecting and packaging evidence.
vi) Air-dry the evidence thoroughly before packaging.
vii) Put evidence into new paper bags or envelopes, not into plastic bags. Do not use staples.
viii) Contact between victim and suspect samples should be avoided at all times.
ix) Each piece of evidence should be packaged separately into paper bags. Do not use plastic bags.
x) Never re-use packaging.

FOR MEDICO-LEGAL EXPERTS
Following precautions should be taken by the medico-legal experts during the collection and preservation of biological evidence for forensic DNA analysis.
i) Soft tissue should be collected in a suitable clean plastic container and preserved in saturated salt solution. Tissues should never be preserved in Formalin.
ii) In the cases of accidents, mass disasters, burnt or mutilated bodies, 2-3 tissues like deep muscle tissue, skin, or other least affected tissue (about 5-10g) should be collected and preserve in a clean sterilized containers and be transported in refrigerated condition.
iii) In case of only skeletal remnants are available, teeth (2 to 3 entire teeth preferably molar or pre-molar and long bones (femur or humerus) should be collected. (Completely burnt/charred bone should not be sent for DNA analysis.)
iv) Foetal tissues and maternal tissues must be separated at the time of collection.

Sample collection from sexual offence victims
i) A standard sample collection kit must be used to collect vaginal, oral and anal evidence from sexual offence victims.
ii) Potential evidence from the victim's body would include:
a. Blood on treated paper (FTA card/ nucleic card/blood in EDTA tube/buccal swab) as Reference DNA sample from the victim.
b. Genital swab(s): these may contain the perpetrator DNA (such as sperm cells or penile epithelial cells)
c. Swabbing of the breast and external genital areas: these may contain the perpetrator DNA (such as sperm cells or penile epithelial cells or saliva via mouth or hands).
d. Fingernail clippings or scrapings: It may contain skin cells or blood of the perpetrator transferred during the attack.
e. Pubic hair combings: may be found foreign pubic hair transfer from the perpetrator.
f. Victim's clothing: Underwear: DNA from seminal fluid or epithelial cells. Outer clothing: DNA from possible body fluids & hair of the culprit.
iii) The vaginal swabs or smear on slides in sexual assault cases should be properly dried and packed separately.

Collection of reference (control) sample
Reference samples are the samples that are necessary for comparison and elimination purposes. The Source of a biological clue material can be identified only by analysis of the authenticated control sample of that individual. Control biological samples like buccal swabs or blood should be collected by the doctor along with duly filled "Biological Sample Authentication Form" in duplicate. Control samples of individuals should forward whose biological clue material is suspected to be present on the exhibits. In case of non-availability of an individual, the exclusive items such as toothbrushes or razors, etc of that individuals may be sent for analysis. Otherwise, control samples of close relatives are desired. In case of blood transfusion or organ transplantation, an oral swab may be collected as a control sample.
`;
