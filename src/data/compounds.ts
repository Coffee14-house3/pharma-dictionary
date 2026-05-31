import { ChemicalCompound } from "../types/chemical";

export const compounds: ChemicalCompound[] = [
  {
    id: 1,
    name: "Water",
    formula: "H₂O",
    category: "Inorganic",
    molarMass: "18.015",
    meltingPoint: "0°C",
    boilingPoint: "100°C",
    density: "1.000 g/cm³",
    solubility: "Miscible",
    description: "Water is an inorganic compound with the chemical formula H₂O. It is a transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's hydrosphere and the fluids of all known living organisms.",
    applications: [
      "Universal solvent in pharmaceutical preparations",
      "Hydration therapy",
      "Solvent for injectable medications",
      "Cleaning and sterilization processes"
    ],
    hazards: "Generally safe, but excessive consumption can lead to water intoxication",
    precautions: "Ensure pharmaceutical grade purity for medical applications"
  },
  {
    id: 2,
    name: "Sodium chloride",
    formula: "NaCl",
    category: "Inorganic",
    molarMass: "58.44",
    meltingPoint: "801°C",
    boilingPoint: "1465°C",
    density: "2.165 g/cm³",
    solubility: "359 g/L",
    description: "Sodium chloride, also known as salt or halite, is an ionic compound with the chemical formula NaCl representing a 1:1 ratio of sodium and chloride ions.",
    applications: [
      "Electrolyte replacement therapy",
      "Saline solutions for IV drips",
      "Preservative in pharmaceutical formulations",
      "Buffer component in medications"
    ],
    hazards: "Excessive consumption can lead to hypertension",
    precautions: "Monitor sodium intake in patients with cardiovascular conditions"
  },
  {
    id: 3,
    name: "Carbon dioxide",
    formula: "CO₂",
    category: "Inorganic",
    molarMass: "44.01",
    meltingPoint: "-78.5°C (sublimes)",
    boilingPoint: "-78.5°C",
    density: "1.977 g/L",
    solubility: "1.45 g/L",
    description: "Carbon dioxide is a chemical compound consisting of a carbon atom double bonded to two oxygen atoms. It occurs naturally in Earth's atmosphere as a trace gas.",
    applications: [
      "Carbonation of beverages",
      "Respiratory stimulant in medical applications",
      "Pneumoperitoneum during laparoscopic surgery",
      "Supercritical CO₂ extraction in pharmaceutical manufacturing"
    ],
    hazards: "Asphyxiant in high concentrations",
    precautions: "Ensure adequate ventilation in enclosed spaces"
  },
  {
    id: 4,
    name: "Methane",
    formula: "CH₄",
    category: "Organic",
    molarMass: "16.04",
    meltingPoint: "-182.5°C",
    boilingPoint: "-161.5°C",
    density: "0.717 g/L",
    solubility: "22.7 mg/L",
    description: "Methane is a chemical compound with the chemical formula CH₄. It is a group-14 hydride, the simplest alkane, and the main constituent of natural gas.",
    applications: [
      "Fuel for heating and electricity generation",
      "Production of hydrogen for pharmaceutical synthesis",
      "Manufacturing of methanol and other chemicals"
    ],
    hazards: "Highly flammable, asphyxiant",
    precautions: "Store away from ignition sources, ensure adequate ventilation"
  },
  {
    id: 5,
    name: "Ethanol",
    formula: "C₂H₅OH",
    category: "Organic",
    molarMass: "46.07",
    meltingPoint: "-114.1°C",
    boilingPoint: "78.37°C",
    density: "0.789 g/cm³",
    solubility: "Miscible",
    description: "Ethanol is an organic chemical compound with the formula C₂H₅OH. It is a volatile, flammable, colorless liquid with a characteristic taste and odor.",
    applications: [
      "Antiseptic and disinfectant",
      "Solvent in pharmaceutical preparations",
      "Active ingredient in alcoholic beverages",
      "Fuel additive (gasohol)"
    ],
    hazards: "Flammable, intoxicant, harmful if swallowed",
    precautions: "Store in tightly closed containers away from heat sources"
  },
  {
    id: 6,
    name: "Glucose",
    formula: "C₆H₁₂O₆",
    category: "Carbohydrate",
    molarMass: "180.16",
    meltingPoint: "146°C",
    boilingPoint: "Decomposes",
    density: "1.54 g/cm³",
    solubility: "910 g/L",
    description: "Glucose is a simple sugar with the molecular formula C₆H₁₂O₆. It is the most abundant monosaccharide and is the main source of energy for living organisms.",
    applications: [
      "Intravenous energy source",
      "Treatment of hypoglycemia",
      "Component in total parenteral nutrition",
      "Excipient in tablet formulations"
    ],
    hazards: "Generally safe, but excessive consumption can lead to hyperglycemia",
    precautions: "Monitor blood glucose levels in diabetic patients"
  },
  {
    id: 7,
    name: "Sucrose",
    formula: "C₁₂H₂₂O₁₁",
    category: "Carbohydrate",
    molarMass: "342.30",
    meltingPoint: "186°C",
    boilingPoint: "Decomposes",
    density: "1.587 g/cm³",
    solubility: "2000 g/L",
    description: "Sucrose is a disaccharide composed of glucose and fructose subunits. It is commonly extracted from sugarcane or sugar beet and used as table sugar.",
    applications: [
      "Sweetening agent in pharmaceuticals",
      "Excipient in solid dosage forms",
      "Flavoring agent in liquid medications",
      "Energy source in nutritional supplements"
    ],
    hazards: "Contributes to dental caries, caloric intake",
    precautions: "Limit use in diabetic patients, consider dental health"
  },
  {
    id: 8,
    name: "Ammonia",
    formula: "NH₃",
    category: "Inorganic",
    molarMass: "17.03",
    meltingPoint: "-77.73°C",
    boilingPoint: "-33.34°C",
    density: "0.769 g/L",
    solubility: "Miscible",
    description: "Ammonia is a compound of nitrogen and hydrogen with the formula NH₃. It is a colorless gas with a characteristic pungent smell and is a common nitrogenous waste.",
    applications: [
      "Production of fertilizers and pharmaceuticals",
      "Cleaning agent in pharmaceutical facilities",
      "Buffer component in some medications",
      "Precursor to nitrogen-containing compounds"
    ],
    hazards: "Corrosive to eyes and respiratory tract, toxic in high concentrations",
    precautions: "Ensure adequate ventilation, use protective equipment"
  },
  {
    id: 9,
    name: "Sulfuric acid",
    formula: "H₂SO₄",
    category: "Inorganic",
    molarMass: "98.08",
    meltingPoint: "10°C",
    boilingPoint: "337°C",
    density: "1.84 g/cm³",
    solubility: "Miscible",
    description: "Sulfuric acid is a mineral acid composed of the elements sulfur, oxygen and hydrogen. It is a highly corrosive strong mineral acid with the molecular formula H₂SO₄.",
    applications: [
      "Manufacturing of pharmaceuticals and intermediates",
      "pH adjustment in formulations",
      "Catalyst in chemical reactions",
      "Battery electrolyte in medical devices"
    ],
    hazards: "Highly corrosive, causes severe burns",
    precautions: "Handle with extreme care, use appropriate PPE, store separately"
  },
  {
    id: 10,
    name: "Hydrochloric acid",
    formula: "HCl",
    category: "Inorganic",
    molarMass: "36.46",
    meltingPoint: "-114.2°C",
    boilingPoint: "-85.1°C",
    density: "1.18 g/cm³",
    solubility: "Miscible",
    description: "Hydrochloric acid is an aqueous solution of hydrogen chloride. It is a colorless solution with a distinctive pungent smell and is classified as a strong acid.",
    applications: [
      "pH adjustment in pharmaceutical solutions",
      "Hydrolysis of proteins in digestive aids",
      "Production of various pharmaceutical compounds",
      "Cleaning and descaling in pharmaceutical equipment"
    ],
    hazards: "Corrosive, causes severe burns",
    precautions: "Handle with care, use protective equipment, store properly"
  },
  {
    id: 11,
    name: "Acetylsalicylic acid",
    formula: "C₉H₈O₄",
    category: "Analgesic",
    molarMass: "180.16",
    meltingPoint: "135°C",
    boilingPoint: "140°C (decomposes)",
    density: "1.40 g/cm³",
    solubility: "3 mg/mL (water)",
    description: "Acetylsalicylic acid, widely known as Aspirin, is a medication used to reduce pain, fever, or inflammation. It is a non-steroidal anti-inflammatory drug (NSAID).",
    applications: [
      "Pain relief (analgesic)",
      "Anti-inflammatory agent",
      "Antiplatelet therapy for cardiovascular prevention",
      "Fever reduction (antipyretic)"
    ],
    hazards: "Stomach bleeding, Reye's syndrome in children",
    precautions: "Take with food to minimize gastric irritation; contraindicated in children with viral infections"
  },
  {
    id: 12,
    name: "Paracetamol",
    formula: "C₈H₉NO₂",
    category: "Analgesic",
    molarMass: "151.16",
    meltingPoint: "169°C",
    boilingPoint: "420°C",
    density: "1.263 g/cm³",
    solubility: "14 mg/mL",
    description: "Paracetamol (Acetaminophen) is a medication used to treat pain and fever. It is typically used for mild to moderate pain relief.",
    applications: [
      "Treatment of mild to moderate pain",
      "Reduction of fever",
      "Alternative for patients allergic to aspirin",
      "Common ingredient in cold and flu remedies"
    ],
    hazards: "Liver toxicity in overdose",
    precautions: "Do not exceed recommended daily dose; avoid alcohol consumption while taking"
  },
  {
    id: 13,
    name: "Ibuprofen",
    formula: "C₁₃H₁₈O₂",
    category: "NSAID",
    molarMass: "206.29",
    meltingPoint: "76°C",
    boilingPoint: "157°C",
    density: "1.03 g/cm³",
    solubility: "21 mg/L",
    description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) derived from propionic acid. It is used for treating pain, fever, and inflammation.",
    applications: [
      "Relief of rheumatoid arthritis",
      "Treatment of osteoarthritis",
      "Menstrual pain relief",
      "Reduction of fever and mild pain"
    ],
    hazards: "Increased risk of heart attack, stroke, and gastrointestinal bleeding",
    precautions: "Use lowest effective dose for shortest duration; avoid in late pregnancy"
  },
  {
    id: 14,
    name: "Caffeine",
    formula: "C₈H₁₀N₄O₂",
    category: "Stimulant",
    molarMass: "194.19",
    meltingPoint: "235°C",
    boilingPoint: "178°C (sublimes)",
    density: "1.23 g/cm³",
    solubility: "2.17 g/100 mL",
    description: "Caffeine is a central nervous system (CNS) stimulant of the methylxanthine class. It is the world's most widely consumed psychoactive drug.",
    applications: [
      "Enhancing alertness and wakefulness",
      "Treatment of neonatal apnea",
      "Analgesic adjuvant in headache medications",
      "Restoring mental alertness in fatigue"
    ],
    hazards: "Insomnia, nervousness, restlessness, tachycardia",
    precautions: "Limit intake to avoid dependence; avoid close to bedtime"
  },
  {
    id: 15,
    name: "Sodium hydroxide",
    formula: "NaOH",
    category: "Inorganic",
    molarMass: "39.997",
    meltingPoint: "318°C",
    boilingPoint: "1388°C",
    density: "2.13 g/cm³",
    solubility: "418 g/100 mL",
    description: "Sodium hydroxide, also known as lye and caustic soda, is an inorganic compound. It is a white solid ionic compound consisting of sodium cations and hydroxide anions.",
    applications: [
      "Manufacturing of soaps and detergents",
      "pH adjustment in chemical processes",
      "Biofuel production",
      "Paper making"
    ],
    hazards: "Corrosive, causes severe skin burns and eye damage",
    precautions: "Always wear PPE including gloves and goggles; handle in well-ventilated areas"
  },
  {
    id: 16,
    name: "Acetone",
    formula: "C₃H₆O",
    category: "Solvent",
    molarMass: "58.08",
    meltingPoint: "-95°C",
    boilingPoint: "56°C",
    density: "0.784 g/cm³",
    solubility: "Miscible",
    description: "Acetone is a colorless, volatile, flammable liquid. It is the simplest and smallest ketone. It is miscible with water and serves as an important solvent.",
    applications: [
      "Solvent for plastics and synthetic fibers",
      "Cleaning agent in laboratories",
      "Nail polish remover",
      "Active ingredient in some paint thinners"
    ],
    hazards: "Highly flammable, irritant",
    precautions: "Keep away from open flames and heat sources; use with ventilation"
  },
  {
    id: 17,
    name: "Glycerol",
    formula: "C₃H₈O₃",
    category: "Organic",
    molarMass: "92.09",
    meltingPoint: "17.8°C",
    boilingPoint: "290°C",
    density: "1.26 g/cm³",
    solubility: "Miscible",
    description: "Glycerol is a simple polyol compound. It is a colorless, odorless, viscous liquid that is sweet-tasting and non-toxic.",
    applications: [
      "Humectant in food and pharmaceuticals",
      "Solvent for flavorings and food coloring",
      "Treatment of glaucoma (osmotic agent)",
      "Laxative"
    ],
    hazards: "Generally recognized as safe",
    precautions: "May cause gastrointestinal discomfort if ingested in large quantities"
  },
  {
    id: 18,
    name: "Ascorbic acid",
    formula: "C₆H₈O₆",
    category: "Vitamin",
    molarMass: "176.12",
    meltingPoint: "190°C",
    boilingPoint: "553°C",
    density: "1.65 g/cm³",
    solubility: "33 g/100 mL",
    description: "Ascorbic acid, also known as Vitamin C, is an essential nutrient involved in the repair of tissue and the enzymatic production of certain neurotransmitters.",
    applications: [
      "Prevention and treatment of scurvy",
      "Antioxidant in food preservation",
      "Immune system support supplement",
      "Improving iron absorption"
    ],
    hazards: "Generally safe, high doses may cause kidney stones",
    precautions: "Consult physician if taking anticoagulants or undergoing chemotherapy"
  },
  {
    id: 19,
    name: "Lidocaine",
    formula: "C₁₄H₂₂N₂O",
    category: "Anesthetic",
    molarMass: "234.34",
    meltingPoint: "68°C",
    boilingPoint: "350-360°C",
    density: "1.028 g/cm³",
    solubility: "0.4 mg/mL",
    description: "Lidocaine is a local anesthetic and antiarrhythmic drug. It works by blocking nerve signals in your body, providing numbness to a specific area.",
    applications: [
      "Local numbing for minor surgery",
      "Treatment of ventricular arrhythmias",
      "Nerve block anesthesia",
      "Topical treatment for itching and pain"
    ],
    hazards: "Cardiovascular collapse, CNS toxicity",
    precautions: "Use with caution in patients with liver disease or heart failure"
  },
  {
    id: 20,
    name: "Calcium carbonate",
    formula: "CaCO₃",
    category: "Supplement",
    molarMass: "100.09",
    meltingPoint: "825°C",
    boilingPoint: "Decomposes",
    density: "2.71 g/cm³",
    solubility: "0.013 g/L",
    description: "Calcium carbonate is a chemical compound with the formula CaCO₃. It is a common substance found in rocks as the minerals calcite and aragonite.",
    applications: [
      "Dietary calcium supplement",
      "Antacid for heartburn",
      "Phosphate binder in kidney failure",
      "Filler in tablets and capsules"
    ],
    hazards: "Constipation, hypercalcemia with excessive use",
    precautions: "Do not take high doses for long periods without medical supervision"
  },
  {
    id: 21,
    name: "Hydrogen peroxide",
    formula: "H₂O₂",
    category: "Antiseptic",
    molarMass: "34.01",
    meltingPoint: "-0.43°C",
    boilingPoint: "150.2°C",
    density: "1.45 g/cm³",
    solubility: "Miscible",
    description: "Hydrogen peroxide is a chemical compound with the formula H₂O₂. In its pure form, it is a very pale blue liquid that is slightly more viscous than water.",
    applications: [
      "Antiseptic for cleaning minor cuts",
      "Mouthwash and oral debriding agent",
      "Bleaching agent in textiles",
      "Propellant in rocketry"
    ],
    hazards: "Oxidizer, causes skin irritation",
    precautions: "Dilute before application to skin; do not use deep in wounds"
  },
  {
    id: 22,
    name: "Potassium chloride",
    formula: "KCl",
    category: "Inorganic",
    molarMass: "74.55",
    meltingPoint: "770°C",
    boilingPoint: "1420°C",
    density: "1.98 g/cm³",
    solubility: "340 g/L",
    description: "Potassium chloride is a metal halide salt composed of potassium and chlorine. It is odorless and has a white or colorless vitreous crystal appearance.",
    applications: [
      "Treatment of hypokalemia (low potassium)",
      "Electrolyte replenishment",
      "Salt substitute for low-sodium diets",
      "Fertilizer component"
    ],
    hazards: "Hyperkalemia (excess potassium) can be fatal",
    precautions: "Monitor kidney function; patients with renal impairment require adjusted dosing"
  },
  {
    id: 23,
    name: "Diazepam",
    formula: "C₁₆H₁₃ClN₂O",
    category: "Benzodiazepine",
    molarMass: "284.74",
    meltingPoint: "131-135°C",
    boilingPoint: "586°C",
    density: "1.3 g/cm³",
    solubility: "0.05 mg/mL",
    description: "Diazepam, first marketed as Valium, is a medicine of the benzodiazepine family that acts as an anxiolytic. It is commonly used to treat anxiety, seizures, and muscle spasms.",
    applications: [
      "Anxiety disorder treatment",
      "Management of alcohol withdrawal symptoms",
      "Preoperative sedation",
      "Muscle spasm relief"
    ],
    hazards: "Physical dependence, withdrawal symptoms, respiratory depression",
    precautions: "Avoid abrupt discontinuation; do not combine with alcohol or opioids"
  },
  {
    id: 24,
    name: "Magnesium stearate",
    formula: "Mg(C₁₈H₃₅O₂)₂",
    category: "Excipient",
    molarMass: "591.24",
    meltingPoint: "88°C (approx)",
    boilingPoint: "Decomposes",
    density: "1.028 g/cm³",
    solubility: "Insoluble",
    description: "Magnesium stearate is a white substance that is solid at room temperature. It is a salt containing two equivalents of stearate and one magnesium cation.",
    applications: [
      "Flow agent in powder processing",
      "Lubricant in tablet manufacturing",
      "Binder/capsule filler",
      "Anti-caking agent in food"
    ],
    hazards: "Generally regarded as safe (GRAS)",
    precautions: "May decrease drug dissolution rate at high concentrations"
  },
  {
    id: 25,
    name: "Amoxicillin",
    formula: "C₁₆H₁₉N₃O₅S",
    category: "Antibiotic",
    molarMass: "365.40",
    meltingPoint: "194°C",
    boilingPoint: "Decomposes",
    density: "1.5 g/cm³",
    solubility: "3.4 mg/mL",
    description: "Amoxicillin is a penicillin derivative used to treat a wide range of bacterial infections. It works by stopping the growth of bacteria.",
    applications: [
      "Treatment of ear infections",
      "Pneumonia and bronchitis",
      "Urinary tract infections",
      "Skin infections"
    ],
    hazards: "Allergic reactions (anaphylaxis), diarrhea",
    precautions: "Contraindicated in patients with penicillin allergy; complete full prescribed course"
  },
  {
    id: 26,
    name: "Metformin",
    formula: "C₄H₁₁N₅",
    category: "Antidiabetic",
    molarMass: "129.16",
    meltingPoint: "222°C",
    boilingPoint: "Decomposes",
    density: "1.25 g/cm³",
    solubility: "300 mg/mL",
    description: "Metformin is the first-line medication for the treatment of type 2 diabetes. It helps control blood sugar levels by improving insulin sensitivity.",
    applications: [
      "First-line treatment for Type 2 Diabetes",
      "Polycystic ovary syndrome (PCOS) management",
      "Weight management in diabetes",
      "Gestational diabetes (off-label use)"
    ],
    hazards: "Lactic acidosis (rare but serious)",
    precautions: "Discontinue before iodinated contrast imaging; monitor kidney function"
  },
  {
    id: 27,
    name: "Omeprazole",
    formula: "C₁₇H₁₉N₃O₃S",
    category: "PPI",
    molarMass: "345.42",
    meltingPoint: "156°C",
    boilingPoint: "600°C",
    density: "1.37 g/cm³",
    solubility: "0.5 mg/mL",
    description: "Omeprazole is a proton pump inhibitor that reduces stomach acid production. It is used to treat GERD, ulcers, and Zollinger-Ellison syndrome.",
    applications: [
      "Treatment of GERD (gastroesophageal reflux disease)",
      "Healing of duodenal ulcers",
      "Eradication of H. pylori bacteria",
      "Prevention of NSAID-induced ulcers"
    ],
    hazards: "Long-term use may lead to vitamin B12 deficiency",
    precautions: "Do not crush delayed-release tablets; short-term use preferred"
  },
  {
    id: 28,
    name: "Nitric acid",
    formula: "HNO₃",
    category: "Inorganic",
    molarMass: "63.01",
    meltingPoint: "-42°C",
    boilingPoint: "83°C",
    density: "1.51 g/cm³",
    solubility: "Miscible",
    description: "Nitric acid is a highly corrosive mineral acid. The pure compound is colorless, but older samples tend to acquire a yellow cast due to decomposition into nitrogen oxides.",
    applications: [
      "Production of fertilizers (ammonium nitrate)",
      "Precursor to organic nitrates (explosives)",
      "Etching metals in industrial processes",
      "Rocket propellant"
    ],
    hazards: "Corrosive, strong oxidizer, causes severe burns",
    precautions: "Store in glass containers away from organic materials; use fume hood"
  },
  {
    id: 29,
    name: "Diphenhydramine",
    formula: "C₁₇H₂₁NO",
    category: "Antihistamine",
    molarMass: "255.35",
    meltingPoint: "167°C",
    boilingPoint: "471°C",
    density: "0.95 g/cm³",
    solubility: "5.4 mg/mL",
    description: "Diphenhydramine is a first-generation antihistamine mainly used to treat allergies. It is also used as a sleep aid and for motion sickness.",
    applications: [
      "Relief of allergy symptoms (runny nose, sneezing)",
      "Treatment of common cold symptoms",
      "Short-term treatment of insomnia",
      "Prevention of motion sickness"
    ],
    hazards: "Drowsiness, dizziness, blurred vision",
    precautions: "Avoid driving or operating machinery after use; caution in elderly patients"
  },
  {
    id: 30,
    name: "Lactose",
    formula: "C₁₂H₂₂O₁₁",
    category: "Excipient",
    molarMass: "342.30",
    meltingPoint: "202°C",
    boilingPoint: "Decomposes",
    density: "1.52 g/cm³",
    solubility: "215 g/L",
    description: "Lactose is a disaccharide sugar derived from galactose and glucose. In pharmaceuticals, it is widely used as a filler or diluent in tablets and capsules.",
    applications: [
      "Diluent/Filler in tablets and capsules",
      "Lyophilization medium",
      "Carrier for dry powder inhalers",
      "Growth medium for fermentation"
    ],
    hazards: "Intolerable for individuals with lactose intolerance",
    precautions: "Label products containing lactose for consumer safety"
  },
  {
    id: 31,
    name: "Atorvastatin",
    formula: "C₃₃H₃₅FN₂O₅",
    category: "Statin",
    molarMass: "558.65",
    meltingPoint: "158-160°C",
    boilingPoint: "Decomposes",
    density: "1.24 g/cm³",
    solubility: "0.039 mg/mL",
    description: "Atorvastatin, sold under the trade name Lipitor among others, is a statin medication used to prevent cardiovascular disease in those at high risk and to treat abnormal lipid levels.",
    applications: [
      "Lowering LDL cholesterol",
      "Prevention of coronary heart disease",
      "Management of hyperlipidemia",
      "Stabilization of atherosclerotic plaques"
    ],
    hazards: "Muscle pain (myopathy), liver enzyme elevation",
    precautions: "Regular liver function tests recommended; avoid grapefruit juice"
  },
  {
    id: 32,
    name: "Lisinopril",
    formula: "C₂₁H₃₁N₃O₅",
    category: "ACE Inhibitor",
    molarMass: "405.49",
    meltingPoint: "80-84°C (decomposes)",
    boilingPoint: "Decomposes",
    density: "1.39 g/cm³",
    solubility: "300 mg/mL",
    description: "Lisinopril is a medication of the angiotensin-converting enzyme (ACE) inhibitor class used to treat high blood pressure, heart failure, and after heart attacks.",
    applications: [
      "Treatment of hypertension",
      "Management of heart failure",
      "Post-myocardial infarction improvement",
      "Diabetic nephropathy protection"
    ],
    hazards: "Hyperkalemia, dry cough, angioedema",
    precautions: "Monitor potassium levels; avoid in pregnancy (teratogenic)"
  },
  {
    id: 33,
    name: "Levothyroxine",
    formula: "C₁₅H₁₁I₄NO₄",
    category: "Hormone",
    molarMass: "776.87",
    meltingPoint: "235°C (decomposes)",
    boilingPoint: "Decomposes",
    density: "2.88 g/cm³",
    solubility: "Insoluble in water",
    description: "Levothyroxine is a manufactured form of the thyroid hormone thyroxine (T4). It is used to treat thyroid hormone deficiency, including the severe form known as myxedema coma.",
    applications: [
      "Treatment of hypothyroidism",
      "Thyroid hormone replacement therapy",
      "Suppression of thyroid-stimulating hormone (TSH) in goiters",
      "Management of thyroid cancer"
    ],
    hazards: "Symptoms of hyperthyroidism if dosed too high",
    precautions: "Take on empty stomach; monitor TSH levels regularly"
  },
  {
    id: 34,
    name: "Furosemide",
    formula: "C₁₂H₁₁ClN₂O₅S",
    category: "Diuretic",
    molarMass: "330.74",
    meltingPoint: "206°C",
    boilingPoint: "Decomposes",
    density: "1.45 g/cm³",
    solubility: "1 mg/mL",
    description: "Furosemide, sold under the brand name Lasix among others, is a loop diuretic medication used to treat fluid build-up due to heart failure, liver scarring, or kidney disease.",
    applications: [
      "Treatment of edema associated with heart failure",
      "Management of hypertension",
      "Treatment of pulmonary edema",
      "Control of hypercalcemia"
    ],
    hazards: "Hypokalemia, hypotension, ototoxicity",
    precautions: "Monitor electrolyte levels frequently; dose adjustment in renal impairment"
  },
  {
    id: 35,
    name: "Gabapentin",
    formula: "C₉H₁₇NO₂",
    category: "Anticonvulsant",
    molarMass: "171.24",
    meltingPoint: "162°C",
    boilingPoint: "N/A",
    density: "1.13 g/cm³",
    solubility: "100 mg/mL",
    description: "Gabapentin, sold under the brand name Neurontin among others, is an anticonvulsant medication used to treat partial seizures, neuropathic pain, hot flashes, and restless legs syndrome.",
    applications: [
      "Treatment of postherpetic neuralgia",
      "Adjunct therapy for partial seizures",
      "Management of restless legs syndrome",
      "Off-label use for anxiety disorders"
    ],
    hazards: "Drowsiness, dizziness, coordination problems",
    precautions: "Do not discontinue abruptly; caution in patients with depression"
  },
  {
    id: 36,
    name: "Azithromycin",
    formula: "C₃₈H₇₂N₂O₁₂",
    category: "Antibiotic",
    molarMass: "748.98",
    meltingPoint: "113-115°C",
    boilingPoint: "Decomposes",
    density: "1.26 g/cm³",
    solubility: "Insoluble in water",
    description: "Azithromycin is an antibiotic medication used for the treatment of a number of bacterial infections. This includes middle ear infections, strep throat, pneumonia, traveler's diarrhea, and certain other intestinal infections.",
    applications: [
      "Treatment of respiratory infections (bronchitis, pneumonia)",
      "Chlamydia treatment",
      "Traveler's diarrhea",
      "COPD exacerbations"
    ],
    hazards: "QT prolongation, liver damage, severe diarrhea",
    precautions: "Do not take with antacids containing aluminum or magnesium"
  },
  {
    id: 37,
    name: "Calcium hydroxide",
    formula: "Ca(OH)₂",
    category: "Inorganic",
    molarMass: "74.09",
    meltingPoint: "580°C (decomposes)",
    boilingPoint: "Decomposes",
    density: "2.21 g/cm³",
    solubility: "1.73 g/L",
    description: "Calcium hydroxide is an inorganic compound with the chemical formula Ca(OH)₂. It is a colorless crystal or white powder and is obtained when calcium oxide is mixed with water.",
    applications: [
      "Component of dental lining materials",
      "Water softening agent",
      "Ingredient in some antacids",
      "Food additive (pickling lime)"
    ],
    hazards: "Skin and eye irritant; chemical burns",
    precautions: "Use PPE to avoid contact with skin or eyes"
  },
  {
    id: 38,
    name: "Citric acid",
    formula: "C₆H₈O₇",
    category: "Organic",
    molarMass: "192.12",
    meltingPoint: "156°C",
    boilingPoint: "310°C",
    density: "1.66 g/cm³",
    solubility: "730 g/L",
    description: "Citric acid is a weak organic acid that has the chemical formula C₆H₈O₇. It occurs naturally in citrus fruits. In biochemistry, it is an intermediate in the citric acid cycle.",
    applications: [
      "Acidulant in foods and beverages",
      "Preservative in pharmaceuticals",
      "Chelating agent to improve stability",
      "Kidney stone prevention (alkalinizing agent)"
    ],
    hazards: "Tooth enamel erosion with prolonged exposure",
    precautions: "Dilute before use as a disinfectant"
  },
  {
    id: 39,
    name: "Montelukast",
    formula: "C₃₅H₃₆ClNO₃S",
    category: "Leukotriene antagonist",
    molarMass: "586.18",
    meltingPoint: "125-126°C",
    boilingPoint: "N/A",
    density: "1.30 g/cm³",
    solubility: "Insoluble in water",
    description: "Montelukast, sold under the trade name Singulair, is a medication used in the maintenance treatment of asthma. It is generally less preferred for this use than inhaled corticosteroids.",
    applications: [
      "Asthma maintenance therapy",
      "Allergic rhinitis relief",
      "Prevention of exercise-induced bronchospasm",
      "Management of urticaria"
    ],
    hazards: "Neuropsychiatric events (mood changes), liver injury",
    precautions: "Monitor for behavioral changes; not for acute asthma attacks"
  },
  {
    id: 40,
    name: "Phenylephrine",
    formula: "C₉H₁₃NO₂",
    category: "Decongestant",
    molarMass: "167.20",
    meltingPoint: "140-145°C",
    boilingPoint: "Decomposes",
    density: "1.13 g/cm³",
    solubility: "10 g/L",
    description: "Phenylephrine is a medication used as a decongestant for dilated pupils, to increase blood pressure in people with hypotension, and to treat hemorrhoids.",
    applications: [
      "Nasal decongestant",
      "Mydriatic agent in eye exams",
      "Treatment of hypotension during anesthesia",
      "Preparation for rectal surgery (hemorrhoids)"
    ],
    hazards: "Hypertension, bradycardia (reflex)",
    precautions: "Use with caution in hypertension and heart disease"
  },
  {
    id: 41,
    name: "Chlorhexidine",
    formula: "C₂₂H₃₀Cl₂N₁₀",
    category: "Antiseptic",
    molarMass: "505.45",
    meltingPoint: "134-136°C",
    boilingPoint: "Decomposes",
    density: "1.06 g/cm³",
    solubility: "0.8 g/L",
    description: "Chlorhexidine is a disinfectant and antiseptic that is used for skin disinfection before surgery and to sterilize surgical instruments. It may be used both to disinfect the skin of the patient and the hands of the healthcare providers.",
    applications: [
      "Oral antiseptic (mouthwash)",
      "Skin disinfectant before surgery",
      "Catheter site cleaning",
      "Hand sanitizer in hospitals"
    ],
    hazards: "Skin irritation, anaphylaxis (rare), tooth staining",
    precautions: "Avoid contact with eyes, ears, and meninges; do not swallow"
  },
  {
    id: 42,
    name: "Sorbic acid",
    formula: "C₆H₈O₂",
    category: "Preservative",
    molarMass: "112.13",
    meltingPoint: "135°C (decomposes)",
    boilingPoint: "228°C",
    density: "1.20 g/cm³",
    solubility: "1.6 g/L",
    description: "Sorbic acid, or 2,4-hexadienoic acid, is a natural organic compound used as a food preservative. It has the chemical formula C6H8O2.",
    applications: [
      "Food preservation (cheese, wine, yogurt)",
      "Antifungal agent in topical creams",
      "Preservative in pharmaceutical syrups",
      "Wine making"
    ],
    hazards: "Generally regarded as safe",
    precautions: "May cause skin irritation at high concentrations"
  },
  {
    id: 43,
    name: "Menthol",
    formula: "C₁₀H₂₀O",
    category: "Organic",
    molarMass: "156.27",
    meltingPoint: "36-38°C",
    boilingPoint: "212°C",
    density: "0.89 g/cm³",
    solubility: "0.5 g/L",
    description: "Menthol is an organic compound made synthetically or obtained from the oils of corn mint, peppermint, or other mints. It is a waxy, crystalline substance, clear or white in color.",
    applications: [
      "Flavoring agent in oral hygiene products",
      "Cooling agent in topical analgesics",
      "Decongestant in inhalers",
      "Treatment of minor skin irritation"
    ],
    hazards: "Skin or eye irritation; hypersensitivity",
    precautions: "Do not apply to broken skin; avoid ingestion of pure menthol"
  },
  {
    id: 44,
    name: "Boric acid",
    formula: "H₃BO₃",
    category: "Antiseptic",
    molarMass: "61.83",
    meltingPoint: "171°C",
    boilingPoint: "300°C",
    density: "1.44 g/cm³",
    solubility: "52 g/L",
    description: "Boric acid, also called hydrogen borate, exists in the form of colorless crystals or a white powder that dissolves in water. It acts as a mild antiseptic.",
    applications: [
      "Eyewash for minor eye irritations",
      "Antifungal agent for yeast infections",
      "Insecticide (cockroaches, ants)",
      "Nuclear power plant coolant"
    ],
    hazards: "Acute toxicity if swallowed, especially in children",
    precautions: "Do not use on open wounds; keep away from children and pets"
  },
  {
    id: 45,
    name: "Mannitol",
    formula: "C₆H₁₄O₆",
    category: "Carbohydrate",
    molarMass: "182.17",
    meltingPoint: "166°C",
    boilingPoint: "290-295°C",
    density: "1.52 g/cm³",
    solubility: "220 g/L",
    description: "Mannitol is a type of sugar alcohol which is used as a sweetener and medication. It is used as a low calorie sweetener but is also used to treat increased pressure in the eyes (glaucoma).",
    applications: [
      "Osmotic diuretic for cerebral edema",
      "Diagnostic aid for kidney function",
      "Sweetener for diabetics",
      "Excipient in chewable tablets"
    ],
    hazards: "Pulmonary congestion, nausea",
    precautions: "Monitor patients with heart failure"
  },
  {
    id: 46,
    name: "Magnesium hydroxide",
    formula: "Mg(OH)₂",
    category: "Antacid",
    molarMass: "58.32",
    meltingPoint: "350°C",
    boilingPoint: "Decomposes",
    density: "2.34 g/cm³",
    solubility: "0.009 g/L",
    description: "Magnesium hydroxide is an inorganic compound with the chemical formula Mg(OH)₂. It occurs in nature as the mineral brucite. It is a white solid with low solubility in water.",
    applications: [
      "Antacid for heartburn and indigestion",
      "Laxative for constipation",
      "Wastewater treatment",
      "Flame retardant additive"
    ],
    hazards: "Electrolyte imbalance, diarrhea",
    precautions: "Avoid prolonged use; may interact with antibiotics"
  },
  {
    id: 47,
    name: "Simvastatin",
    formula: "C₂₅H₃₈O₅",
    category: "Statin",
    molarMass: "418.57",
    meltingPoint: "135-138°C",
    boilingPoint: "N/A",
    density: "0.99 g/cm³",
    solubility: "0.03 mg/mL",
    description: "Simvastatin, sold under the trade name Zocor among others, is a lipid-lowering medication. It is used along with diet, exercise, and weight loss to decrease elevated lipids.",
    applications: [
      "Lowering cholesterol",
      "Prevention of cardiovascular events",
      "Treatment of hyperlipidemia",
      "Management of dyslipidemia"
    ],
    hazards: "Muscle pain, liver damage",
    precautions: "Avoid grapefruit juice; take in evening"
  },
  {
    id: 48,
    name: "Lactic acid",
    formula: "C₃H₆O₃",
    category: "Alpha hydroxy acid",
    molarMass: "90.08",
    meltingPoint: "18°C",
    boilingPoint: "122°C at 15 mmHg",
    density: "1.21 g/cm³",
    solubility: "Miscible",
    description: "Lactic acid is an organic acid. It is white in the solid state and it is miscible with water. When in the dissolved state, it forms a colorless solution.",
    applications: [
      "Exfoliant in skincare products",
      "pH adjuster in cosmetics",
      "Food preservative (E270)",
      "Treatment of dry skin (Ichthyosis)"
    ],
    hazards: "Skin irritation at high concentrations",
    precautions: "Use sunscreen when applying lactic acid topically"
  },
  {
    id: 49,
    name: "Codeine",
    formula: "C₁₈H₂₁NO₃",
    category: "Opioid",
    molarMass: "299.36",
    meltingPoint: "154-158°C",
    boilingPoint: "272°C",
    density: "1.22 g/cm³",
    solubility: "9 mg/L",
    description: "Codeine is an opiate used to treat pain, coughing, and diarrhea. It is typically used to treat mild to moderate degrees of pain.",
    applications: [
      "Moderate pain relief",
      "Cough suppressant (antitussive)",
      "Diarrhea treatment",
      "Analgesic component in combination drugs"
    ],
    hazards: "Addiction potential, respiratory depression, constipation",
    precautions: "Do not use with alcohol; can cause drowsiness"
  },
  {
    id: 50,
    name: "Benzocaine",
    formula: "C₉H₁₁NO₂",
    category: "Anesthetic",
    molarMass: "165.19",
    meltingPoint: "88-90°C",
    boilingPoint: "310°C",
    density: "1.17 g/cm³",
    solubility: "0.4 g/L",
    description: "Benzocaine is a local anesthetic commonly used as a topical pain reliever or in cough drops. It is the active ingredient in many over-the-counter anesthetic ointments.",
    applications: [
      "Topical pain relief for minor burns",
      "Sore throat relief (lozenges)",
      "Numbing agent for dental procedures",
      "Hemorrhoid treatment"
    ],
    hazards: "Methemoglobinemia (rare but serious)",
    precautions: "Do not use on large areas of skin or deep wounds; not for infants under 2"
  },
  {
    id: 51,
    name: "Methanol",
    formula: "CH₃OH",
    category: "Organic",
    molarMass: "32.04",
    meltingPoint: "-97.6°C",
    boilingPoint: "64.7°C",
    density: "0.791 g/cm³",
    solubility: "Miscible",
    description: "Methanol, also known as methyl alcohol, is a light, volatile, colorless, flammable liquid with a distinctive alcoholic odor similar to that of ethanol.",
    applications: [
      "Solvent in industrial chemical synthesis",
      "Production of acetic acid and formaldehyde",
      "Fuel additive or fuel source",
      "Denaturant for ethanol"
    ],
    hazards: "Highly toxic; can cause blindness or death if ingested",
    precautions: "Never ingest; use in well-ventilated areas; store away from flames"
  },
  {
    id: 52,
    name: "Isopropyl alcohol",
    formula: "C₃H₈O",
    category: "Solvent",
    molarMass: "60.10",
    meltingPoint: "-89°C",
    boilingPoint: "82.6°C",
    density: "0.786 g/cm³",
    solubility: "Miscible",
    description: "Isopropyl alcohol is a compound with the chemical formula C₃H₈O. It is a colorless, flammable chemical compound with a strong odor.",
    applications: [
      "Rubbing alcohol for disinfection",
      "Solvent for oils and gums",
      "Cleaning agent for electronics",
      "Swabbing agent before injections"
    ],
    hazards: "Flammable, dries skin, toxic if ingested",
    precautions: "Do not use open flame nearby; keep out of reach of children"
  },
  {
    id: 53,
    name: "Vitamin B1 (Thiamine)",
    formula: "C₁₂H₁₇ClN₄OS",
    category: "Vitamin",
    molarMass: "265.36",
    meltingPoint: "252°C (decomposes)",
    boilingPoint: "N/A",
    density: "N/A",
    solubility: "100 g/L (as hydrochloride)",
    description: "Thiamine, also known as thiamin or vitamin B1, is a vitamin of the B complex. It is essential in glucose metabolism and neural function.",
    applications: [
      "Treatment of beriberi and Wernicke-Korsakoff syndrome",
      "Prevention of deficiency in alcoholism",
      "Metabolic supplement",
      "Additive in fortified foods"
    ],
    hazards: "Anaphylaxis with parenteral use (rare)",
    precautions: "Avoid large doses in pregnancy unless needed"
  },
  {
    id: 54,
    name: "Vitamin B2 (Riboflavin)",
    formula: "C₁₇H₂₀N₄O₆",
    category: "Vitamin",
    molarMass: "376.37",
    meltingPoint: "280°C",
    boilingPoint: "N/A",
    density: "1.65 g/cm³",
    solubility: "0.1 g/L",
    description: "Riboflavin, also known as vitamin B2, is a vitamin found in food and used as a dietary supplement. It causes urine to turn bright yellow.",
    applications: [
      "Treatment of riboflavin deficiency",
      "Prevention of migraines (prophylactic)",
      "Food colorant (E101)",
      "Fortification of flour and cereals"
    ],
    hazards: "Generally non-toxic, harmless yellow discoloration of urine",
    precautions: "None significant at recommended doses"
  },
  {
    id: 55,
    name: "Vitamin B3 (Niacin)",
    formula: "C₆H₅NO₂",
    category: "Vitamin",
    molarMass: "123.11",
    meltingPoint: "236°C",
    boilingPoint: "N/A",
    density: "1.473 g/cm³",
    solubility: "10 g/L",
    description: "Niacin, also known as vitamin B3 and nicotinic acid, is an organic compound with the formula C₆H₅NO₂ and, depending on the definition used, one of the 20 to 80 essential human nutrients.",
    applications: [
      "Treatment of pellagra",
      "Cholesterol management (niacin flush effect)",
      "Food fortification",
      "Skin care products (anti-aging)"
    ],
    hazards: "Flushing, itching, liver toxicity at high doses",
    precautions: "Monitor liver function in long-term high-dose therapy"
  },
  {
    id: 56,
    name: "Vitamin B6 (Pyridoxine)",
    formula: "C₈H₁₁NO₃",
    category: "Vitamin",
    molarMass: "169.18",
    meltingPoint: "205°C (decomposes)",
    boilingPoint: "N/A",
    density: "1.39 g/cm³",
    solubility: "52 g/L",
    description: "Vitamin B6 refers to a group of chemically similar compounds which can be interconverted in biological systems. Its active form, pyridoxal 5'-phosphate, is a cofactor in many enzymatic reactions.",
    applications: [
      "Treatment of vitamin B6 deficiency",
      "Management of sideroblastic anemia",
      "Prevention of peripheral neuropathy in Isoniazid therapy",
      "Morning sickness relief (off-label)"
    ],
    hazards: "Sensory neuropathy with high doses over long periods",
    precautions: "Do not exceed 100mg/day for extended periods without medical advice"
  },
  {
    id: 57,
    name: "Vitamin B12 (Cobalamin)",
    formula: "C₆₃H₈₈CoN₁₄O₁₄P",
    category: "Vitamin",
    molarMass: "1355.37",
    meltingPoint: ">300°C",
    boilingPoint: "N/A",
    density: "N/A",
    solubility: "Insoluble in water (requires intrinsic factor)",
    description: "Vitamin B12, also known as cobalamin, is a water-soluble vitamin involved in the metabolism of every cell of the human body. It is one of eight B vitamins.",
    applications: [
      "Treatment of pernicious anemia",
      "Management of B12 deficiency",
      "Energy metabolism support",
      "Cyanide poisoning treatment (hydroxocobalamin)"
    ],
    hazards: "Generally safe",
    precautions: "May interact with certain medications like metformin or PPIs"
  },
  {
    id: 58,
    name: "Vitamin K1 (Phytonadione)",
    formula: "C₃₁H₄₆O₂",
    category: "Vitamin",
    molarMass: "450.70",
    meltingPoint: "20-25°C",
    boilingPoint: "N/A",
    density: "0.97 g/cm³",
    solubility: "Insoluble in water",
    description: "Phytonadione is a synthetic form of vitamin K. It is used to treat vitamin K deficiency and certain bleeding problems.",
    applications: [
      "Reversal of warfarin anticoagulation",
      "Treatment of hemorrhagic disease of the newborn",
      "Correction of vitamin K deficiency",
      "Bone health support (co-factor for osteocalcin)"
    ],
    hazards: "Anaphylaxis with rapid IV injection",
    precautions: "Administer slowly via IV; avoid in pregnancy unless necessary"
  },
  {
    id: 59,
    name: "Vitamin A (Retinol)",
    formula: "C₂₀H₃₀O",
    category: "Vitamin",
    molarMass: "286.46",
    meltingPoint: "62-64°C",
    boilingPoint: "N/A",
    density: "0.99 g/cm³",
    solubility: "Insoluble in water",
    description: "Vitamin A is a group of unsaturated nutritional organic compounds that includes retinol, retinal, retinoic acid, and several provitamin A carotenoids.",
    applications: [
      "Treatment of vitamin A deficiency",
      "Topical acne treatment (retinoids)",
      "Support for vision and immune system",
      "Anti-aging skincare"
    ],
    hazards: "Hypervitaminosis A (toxicity), teratogenic in high doses",
    precautions: "Pregnant women should limit intake; avoid excessive supplementation"
  },
  {
    id: 60,
    name: "Vitamin E (Tocopherol)",
    formula: "C₂₉H₅₀O₂",
    category: "Vitamin",
    molarMass: "430.71",
    meltingPoint: "2.5-3.5°C",
    boilingPoint: "N/A",
    density: "0.95 g/cm³",
    solubility: "Insoluble in water",
    description: "Vitamin E is a group of eight fat-soluble compounds that include four tocopherols and four tocotrienols. Vitamin E deficiency, which is rare and usually due to an underlying problem with digesting dietary fat rather than from a diet low in vitamin E.",
    applications: [
      "Antioxidant supplement",
      "Skin conditioning agent",
      "Protection of cells from oxidative stress",
      "Treatment of vitamin E deficiency"
    ],
    hazards: "Bleeding risk with high doses",
    precautions: "Stop use before surgery; caution with anticoagulants"
  },
  {
    id: 61,
    name: "Toluene",
    formula: "C₇H₈",
    category: "Solvent",
    molarMass: "92.14",
    meltingPoint: "-95°C",
    boilingPoint: "110.6°C",
    density: "0.867 g/cm³",
    solubility: "0.52 g/L",
    description: "Toluene, also known as toluol, is an aromatic hydrocarbon. It is a colorless, water-insoluble liquid with the smell associated with paint thinners.",
    applications: [
      "Solvent for paints, coatings, and inks",
      "Precursor to trinitrotoluene (TNT) and benzoic acid",
      "Adhesive component",
      "Industrial chemical synthesis"
    ],
    hazards: "Neurotoxic, hepatotoxic, teratogenic",
    precautions: "Strict ventilation required; avoid inhalation; use PPE"
  },
  {
    id: 62,
    name: "Acetonitrile",
    formula: "C₂H₃N",
    category: "Solvent",
    molarMass: "41.05",
    meltingPoint: "-45.7°C",
    boilingPoint: "81.6°C",
    density: "0.786 g/cm³",
    solubility: "Miscible",
    description: "Acetonitrile is a colorless liquid with a slightly sweet odor. It is a byproduct of acrylonitrile production and is commonly used as a solvent.",
    applications: [
      "HPLC mobile phase",
      "Solvent for organic synthesis",
      "Nail polish remover",
      "Battery electrolyte"
    ],
    hazards: "Metabolized to hydrogen cyanide in the body",
    precautions: "Use in fume hood; avoid skin contact and ingestion"
  },
  {
    id: 63,
    name: "Dimethyl sulfoxide (DMSO)",
    formula: "C₂H₆OS",
    category: "Solvent",
    molarMass: "78.13",
    meltingPoint: "18.5°C",
    boilingPoint: "189°C",
    density: "1.10 g/cm³",
    solubility: "Miscible",
    description: "Dimethyl sulfoxide is an organosulfur compound with the formula (CH₃)₂SO. This colorless liquid is an important polar aprotic solvent that dissolves both polar and nonpolar compounds and is miscible in a wide range of organic solvents as well as water.",
    applications: [
      "Solvent for chemical reactions",
      "Transdermal drug delivery agent",
      "Cryoprotectant for cell preservation",
      "Treatment of interstitial cystitis (bladder instillation)"
    ],
    hazards: "Skin absorption (carries other chemicals with it), garlic-like breath odor",
    precautions: "Ensure skin is clean before application; use only as directed"
  },
  {
    id: 64,
    name: "Propylene glycol",
    formula: "C₃H₈O₂",
    category: "Organic",
    molarMass: "76.10",
    meltingPoint: "-59°C",
    boilingPoint: "188.2°C",
    density: "1.036 g/cm³",
    solubility: "Miscible",
    description: "Propylene glycol is a synthetic liquid substance that absorbs water. It is generally recognized as safe for use in food, cosmetics, and medicines.",
    applications: [
      "Solvent for oral and injectable drugs",
      "Humectant in food and cosmetics",
      "Cooling agent in smoke machines",
      "Antifreeze (non-toxic alternative to ethylene glycol)"
    ],
    hazards: "Rare allergic skin reactions; toxicity in high doses for infants",
    precautions: "Generally safe; monitor patients with kidney impairment"
  },
  {
    id: 65,
    name: "Sodium benzoate",
    formula: "C₇H₅NaO₂",
    category: "Preservative",
    molarMass: "144.11",
    meltingPoint: ">300°C",
    boilingPoint: "N/A",
    density: "1.44 g/cm³",
    solubility: "660 g/L",
    description: "Sodium benzoate is a substance which has the chemical formula NaC₇H₅O₂. It is a widely used food preservative, with an E number of E211.",
    applications: [
      "Preservative in acidic foods (sodas, pickles)",
      "Antifungal in pharmaceutical preparations",
      "Corrosion inhibitor in coolants",
      "Fireworks fuel"
    ],
    hazards: "Can form benzene with Vitamin C/Ascorbic acid in high heat",
    precautions: "Limit intake in sensitive populations; monitor benzene levels in products"
  },
  {
    id: 66,
    name: "Potassium permanganate",
    formula: "KMnO₄",
    category: "Inorganic",
    molarMass: "158.03",
    meltingPoint: "240°C (decomposes)",
    boilingPoint: "N/A",
    density: "2.70 g/cm³",
    solubility: "76 g/L",
    description: "Potassium permanganate is an inorganic compound with the chemical formula KMnO₄. It is a purplish-black crystalline salt, that dissolves in water to give intensely pink or purple solutions.",
    applications: [
      "Disinfectant for water treatment",
      "Treatment of fungal infections of the foot",
      "Component in survival kits (fire starter, water purification)",
      "Wound debridement"
    ],
    hazards: "Oxidizer; stains skin/clothes brown; caustic",
    precautions: "Dilute before application; avoid contact with eyes"
  },
  {
    id: 67,
    name: "Silver nitrate",
    formula: "AgNO₃",
    category: "Inorganic",
    molarMass: "169.87",
    meltingPoint: "212°C",
    boilingPoint: "440°C (decomposes)",
    density: "4.35 g/cm³",
    solubility: "220 g/L",
    description: "Silver nitrate is an inorganic compound with chemical formula AgNO₃. This compound is a versatile precursor to many other silver compounds, such as those used in photography.",
    applications: [
      "Cauterization agent for minor wounds (silver nitrate sticks)",
      "Eye drops for neonatal conjunctivitis prevention",
      "Staining agent in histology",
      "Electroplating and photography"
    ],
    hazards: "Corrosive, causes permanent staining of skin",
    precautions: "Handle with gloves; avoid contact with organic materials"
  },
  {
    id: 68,
    name: "Doxycycline",
    formula: "C₂₂H₂₄N₂O₈",
    category: "Antibiotic",
    molarMass: "444.44",
    meltingPoint: "200°C (decomposes)",
    boilingPoint: "N/A",
    density: "1.51 g/cm³",
    solubility: "0.5 g/L",
    description: "Doxycycline is a tetracycline antibiotic which is used to treat a number of types of infections. It is a second-generation tetracycline.",
    applications: [
      "Treatment of respiratory tract infections",
      "Malaria prophylaxis",
      "Treatment of acne and rosacea",
      "Anthrax exposure treatment"
    ],
    hazards: "Photosensitivity, esophageal irritation, tooth discoloration",
    precautions: "Take with plenty of water; avoid sun exposure; contraindicated in children under 8"
  },
  {
    id: 69,
    name: "Ciprofloxacin",
    formula: "C₁₇H₁₈FN₃O₃",
    category: "Antibiotic",
    molarMass: "331.32",
    meltingPoint: "255°C",
    boilingPoint: "N/A",
    density: "1.51 g/cm³",
    solubility: "0.1 g/L",
    description: "Ciprofloxacin is an antibiotic used to treat a number of bacterial infections. This includes bone and joint infections, intra-abdominal infections, certain type of infectious diarrhea, respiratory tract infections, skin infections, typhoid fever, and urinary tract infections.",
    applications: [
      "Treatment of urinary tract infections",
      "Anthrax prophylaxis",
      "Bone and joint infections",
      "Infectious diarrhea"
    ],
    hazards: "Tendon rupture, nerve damage, QT prolongation",
    precautions: "Stop at first sign of tendon pain; avoid in pregnancy/children unless necessary"
  },
  {
    id: 70,
    name: "Fluconazole",
    formula: "C₁₃H₁₂F₂N₆O",
    category: "Antifungal",
    molarMass: "306.27",
    meltingPoint: "139-140°C",
    boilingPoint: "N/A",
    density: "1.37 g/cm³",
    solubility: "10 g/L",
    description: "Fluconazole is a triazole antifungal drug used in the treatment and prevention of superficial and systemic fungal infections.",
    applications: [
      "Treatment of vaginal yeast infections",
      "Candidemia (systemic candida)",
      "Cryptococcal meningitis",
      "Onychomycosis (nail fungus)"
    ],
    hazards: "Liver damage, QT prolongation, drug interactions",
    precautions: "Monitor liver function; adjust dose in kidney failure"
  },
  {
    id: 71,
    name: "Acyclovir",
    formula: "C₈H₁₁N₅O₃",
    category: "Antiviral",
    molarMass: "225.21",
    meltingPoint: "256-257°C",
    boilingPoint: "N/A",
    density: "1.48 g/cm³",
    solubility: "2.5 mg/mL",
    description: "Acyclovir is an antiviral medication. It is primarily used for the treatment of herpes simplex virus infections, chickenpox, and shingles.",
    applications: [
      "Treatment of genital herpes",
      "Herpes zoster (shingles) management",
      "Chickenpox treatment",
      "Prophylaxis of herpes recurrences"
    ],
    hazards: "Nephrotoxicity (kidney failure)",
    precautions: "Hydrate well during therapy; adjust dose for renal impairment"
  },
  {
    id: 72,
    name: "Warfarin",
    formula: "C₁₉H₁₆O₄",
    category: "Anticoagulant",
    molarMass: "308.33",
    meltingPoint: "161-162°C",
    boilingPoint: "N/A",
    density: "1.31 g/cm³",
    solubility: "3 mg/L",
    description: "Warfarin, sold under the brand name Coumadin among others, is a medication that is used as an anticoagulant (blood thinner). It is commonly used to treat blood clots such as deep vein thrombosis and pulmonary embolism and to prevent stroke in people who have atrial fibrillation, valvular heart disease or artificial heart valves.",
    applications: [
      "Prevention of stroke in atrial fibrillation",
      "Treatment of DVT and PE",
      "Prevention of blood clots in heart valve patients",
      "Thromboprophylaxis"
    ],
    hazards: "Major bleeding, skin necrosis, purple toe syndrome",
    precautions: "Requires frequent blood monitoring (INR); interacts with many foods and drugs"
  },
  {
    id: 73,
    name: "Clopidogrel",
    formula: "C₁₆H₁₆ClNO₂S",
    category: "Antiplatelet",
    molarMass: "321.82",
    meltingPoint: "183-184°C",
    boilingPoint: "N/A",
    density: "1.32 g/cm³",
    solubility: "Insoluble in water",
    description: "Clopidogrel, sold under the brand name Plavix among others, is an antiplatelet medication used to reduce the risk of heart disease and stroke in those at high risk. It is also used together with aspirin in heart attacks and following the placement of a coronary artery stent.",
    applications: [
      "Prevention of stroke and MI",
      "Peripheral artery disease management",
      "Post-stent placement therapy",
      "ACS (Acute Coronary Syndrome) treatment"
    ],
    hazards: "Bleeding, ulcers, blood disorders",
    precautions: "Monitor for bleeding; caution in patients with liver disease"
  },
  {
    id: 74,
    name: "Amlodipine",
    formula: "C₂₀H₂₅ClN₂O₅",
    category: "Calcium channel blocker",
    molarMass: "408.88",
    meltingPoint: "178-179°C",
    boilingPoint: "N/A",
    density: "1.25 g/cm³",
    solubility: "0.1 g/L",
    description: "Amlodipine, sold under the brand name Norvasc among others, is a calcium channel blocker medication used to treat high blood pressure and coronary artery disease.",
    applications: [
      "Treatment of hypertension",
      "Stable angina pectoris",
      "Coronary artery disease",
      "Vasospastic angina"
    ],
    hazards: "Peripheral edema, palpitations, hypotension",
    precautions: "Use caution in severe aortic stenosis; monitor liver function"
  },
  {
    id: 75,
    name: "Atenolol",
    formula: "C₁₄H₂₂N₂O₃",
    category: "Beta blocker",
    molarMass: "266.34",
    meltingPoint: "155-156°C",
    boilingPoint: "N/A",
    density: "1.05 g/cm³",
    solubility: "26 mg/mL",
    description: "Atenolol is a selective β1 receptor antagonist, a drug belonging to the group of beta blockers, a class of drugs used primarily in cardiovascular diseases.",
    applications: [
      "Treatment of hypertension",
      "Management of angina pectoris",
      "Post-MI (myocardial infarction) therapy",
      "Arrhythmia control"
    ],
    hazards: "Bradycardia, hypotension, bronchospasm (in asthmatics)",
    precautions: "Do not stop abruptly; caution in asthma and diabetes"
  },
  {
    id: 76,
    name: "Digoxin",
    formula: "C₄₁H₆₄O₁₄",
    category: "Cardiac glycoside",
    molarMass: "780.95",
    meltingPoint: "252-255°C (decomposes)",
    boilingPoint: "N/A",
    density: "1.36 g/cm³",
    solubility: "0.01 g/L",
    description: "Digoxin, sold under the brand name Lanoxin among others, is a medication used to treat various heart conditions. Most frequently it is used for atrial fibrillation, atrial flutter, and heart failure.",
    applications: [
      "Treatment of heart failure (improves ejection fraction)",
      "Control of ventricular rate in atrial fibrillation",
      "Anti-arrhythmic agent",
      "PDE inhibitor"
    ],
    hazards: "Digoxin toxicity (nausea, visual halos, arrhythmias)",
    precautions: "Narrow therapeutic window; monitor blood levels closely"
  },
  {
    id: 77,
    name: "Alprazolam",
    formula: "C₁₇H₁₃ClN₄",
    category: "Benzodiazepine",
    molarMass: "308.77",
    meltingPoint: "228-229°C",
    boilingPoint: "N/A",
    density: "1.22 g/cm³",
    solubility: "Insoluble in water",
    description: "Alprazolam, sold under the trade name Xanax, among others, is a short-acting benzodiazepine. It is most commonly used in short-term management of anxiety disorders.",
    applications: [
      "Treatment of panic disorder",
      "Anxiety disorder relief",
      "Insomnia (short-term)",
      "Premenstrual syndrome relief"
    ],
    hazards: "Dependence, respiratory depression, withdrawal seizures",
    precautions: "Avoid alcohol; do not exceed recommended dose; do not stop abruptly"
  },
  {
    id: 78,
    name: "Sertraline",
    formula: "C₁₇H₁₈Cl₂N",
    category: "Antidepressant",
    molarMass: "306.23",
    meltingPoint: "243-244°C",
    boilingPoint: "N/A",
    density: "1.29 g/cm³",
    solubility: "3.8 mg/mL",
    description: "Sertraline, sold under the trade name Zoloft among others, is an antidepressant of the selective serotonin reuptake inhibitor (SSRI) class.",
    applications: [
      "Major depressive disorder",
      "Social anxiety disorder",
      "Obsessive-compulsive disorder (OCD)",
      "Post-traumatic stress disorder (PTSD)"
    ],
    hazards: "Suicidal thoughts (initial), serotonin syndrome, GI upset",
    precautions: "Monitor for worsening mood; avoid MAO inhibitors"
  },
  {
    id: 79,
    name: "Fluoxetine",
    formula: "C₁₇H₁₈F₃NO",
    category: "Antidepressant",
    molarMass: "309.33",
    meltingPoint: "158-159°C",
    boilingPoint: "N/A",
    density: "1.24 g/cm³",
    solubility: "14 mg/L",
    description: "Fluoxetine, sold under the brand names Prozac and Sarafem among others, is an antidepressant of the selective serotonin reuptake inhibitor (SSRI) class. It is one of the world's most prescribed psychiatric medications.",
    applications: [
      "Major depressive disorder",
      "Bulimia nervosa",
      "Panic disorder",
      "Premenstrual dysphoric disorder (PMDD)"
    ],
    hazards: "Insomnia, sexual dysfunction, serotonin syndrome",
    precautions: "Washout period needed before starting MAOIs"
  },
  {
    id: 80,
    name: "Zolpidem",
    formula: "C₁₉H₂₁N₃O",
    category: "Hypnotic",
    molarMass: "307.39",
    meltingPoint: "194-196°C",
    boilingPoint: "N/A",
    density: "1.23 g/cm³",
    solubility: "2.7 mg/L",
    description: "Zolpidem, sold under the brand name Ambien among others, is a medication primarily used for the short-term treatment of sleeping problems.",
    applications: [
      "Short-term treatment of insomnia",
      "Sleep onset latency reduction",
      "Maintenance of sleep (extended-release formulation)",
      "Circadian rhythm sleep disorders"
    ],
    hazards: "Complex sleep behaviors (sleep-walking, driving), dependency",
    precautions: "Take immediately before bed; avoid alcohol; caution in elderly"
  },
  {
    id: 81,
    name: "Methylphenidate",
    formula: "C₁₄H₁₉NO₂",
    category: "Stimulant",
    molarMass: "233.31",
    meltingPoint: "224-226°C",
    boilingPoint: "N/A",
    density: "1.16 g/cm³",
    solubility: "10 mg/mL",
    description: "Methylphenidate, sold under various trade names, Ritalin being one of the most commonly known, is a central nervous system (CNS) stimulant of the phenethylamine and piperidine classes.",
    applications: [
      "Treatment of ADHD (Attention Deficit Hyperactivity Disorder)",
      "Narcolepsy treatment",
      "Off-label: Treatment-resistant depression",
      "Cognitive enhancement (medical use)"
    ],
    hazards: "Insomnia, appetite suppression, cardiovascular side effects",
    precautions: "Cardiovascular screening recommended before starting"
  },
  {
    id: 82,
    name: "Risperidone",
    formula: "C₂₃H₂₇FN₄O₂",
    category: "Antipsychotic",
    molarMass: "410.40",
    meltingPoint: "170-171°C",
    boilingPoint: "N/A",
    density: "1.19 g/cm³",
    solubility: "0.1 g/L",
    description: "Risperidone, sold under the trade name Risperdal among others, is an atypical antipsychotic. It is used to treat schizophrenia, bipolar disorder, and irritability associated with autism.",
    applications: [
      "Schizophrenia treatment",
      "Bipolar mania",
      "Irritability in autism spectrum disorder",
      "Agitation in dementia (short-term, with caution)"
    ],
    hazards: "Weight gain, metabolic syndrome, tardive dyskinesia",
    precautions: "Monitor blood sugar and lipids; caution in dementia-related psychosis"
  },
  {
    id: 83,
    name: "Quetiapine",
    formula: "C₂₁H₂₅N₃O₂S",
    category: "Antipsychotic",
    molarMass: "383.50",
    meltingPoint: "172-173°C",
    boilingPoint: "N/A",
    density: "1.15 g/cm³",
    solubility: "0.1 g/L",
    description: "Quetiapine, sold under the trade name Seroquel among others, is an atypical antipsychotic medication used for the treatment of schizophrenia, bipolar disorder, and major depressive disorder.",
    applications: [
      "Schizophrenia",
      "Bipolar disorder (manic and depressive episodes)",
      "Adjunct therapy for major depression",
      "Insomnia (off-label, low dose)"
    ],
    hazards: "Sedation, orthostatic hypotension, cataracts",
    precautions: "Monitor for metabolic changes; caution in cardiovascular disease"
  },
  {
    id: 84,
    name: "Ondansetron",
    formula: "C₁₈H₁₉N₃O",
    category: "Antiemetic",
    molarMass: "293.37",
    meltingPoint: "178-179°C",
    boilingPoint: "N/A",
    density: "1.10 g/cm³",
    solubility: "3 mg/mL",
    description: "Ondansetron, sold under the brand name Zofran, is a medication used to prevent nausea and vomiting caused by cancer chemotherapy, radiation therapy, or surgery.",
    applications: [
      "Prevention of chemotherapy-induced nausea",
      "Post-operative nausea and vomiting (PONV)",
      "Radiation sickness",
      "Severe gastroenteritis in children"
    ],
    hazards: "QT prolongation (arrhythmia risk), headache",
    precautions: "Avoid in patients with Long QT syndrome"
  },
  {
    id: 85,
    name: "Tramadol",
    formula: "C₁₆H₂₅NO₂",
    category: "Opioid",
    molarMass: "263.38",
    meltingPoint: "180-181°C",
    boilingPoint: "301°C",
    density: "1.08 g/cm³",
    solubility: "16 g/L",
    description: "Tramadol, sold under the trade name Ultram among others, is an opioid pain medication used to treat moderate to moderately severe pain.",
    applications: [
      "Treatment of moderate to severe pain",
      "Chronic pain management (e.g., osteoarthritis)",
      "Neuropathic pain (off-label)",
      "Post-surgical pain"
    ],
    hazards: "Seizure risk, serotonin syndrome, dependence",
    precautions: "Lower dose in liver/kidney impairment; avoid in epilepsy"
  },
  {
    id: 86,
    name: "Sumatriptan",
    formula: "C₁₄H₂₁N₃O₂",
    category: "Triptan",
    molarMass: "295.37",
    meltingPoint: "167-168°C",
    boilingPoint: "N/A",
    density: "1.16 g/cm³",
    solubility: "Insoluble in water",
    description: "Sumatriptan, sold under the brand name Imitrex among others, is a medication used to treat migraine headaches. It is effective in ending or relieving the intensity of migraine and cluster headaches.",
    applications: [
      "Acute migraine attacks",
      "Cluster headache treatment",
      "Migraine aura relief",
      "Migraine-associated nausea"
    ],
    hazards: "Chest tightness, serotonin syndrome, dizziness",
    precautions: "Do not use within 24 hours of other triptans or ergot alkaloids"
  },
  {
    id: 87,
    name: "Hydrochlorothiazide",
    formula: "C₇H₈ClN₃O₄S₂",
    category: "Diuretic",
    molarMass: "297.74",
    meltingPoint: "273°C (decomposes)",
    boilingPoint: "N/A",
    density: "1.53 g/cm³",
    solubility: "0.7 g/L",
    description: "Hydrochlorothiazide, abbreviated HCTZ, HCT, or HZT, is a diuretic medication often used to treat high blood pressure and swelling due to fluid build-up.",
    applications: [
      "First-line treatment of hypertension",
      "Treatment of edema (fluid retention)",
      "Nephrolithiasis (kidney stones) prevention",
      "Diabetes insipidus"
    ],
    hazards: "Electrolyte imbalance (hyponatremia), hyperglycemia, gout",
    precautions: "Monitor electrolytes; caution in renal impairment"
  },
  {
    id: 88,
    name: "Spironolactone",
    formula: "C₂₄H₃₂O₄S",
    category: "Diuretic",
    molarMass: "416.57",
    meltingPoint: "203-207°C",
    boilingPoint: "N/A",
    density: "1.21 g/cm³",
    solubility: "0.03 g/L",
    description: "Spironolactone, sold under the brand name Aldactone among others, is a medication that is primarily used to treat fluid build-up due to heart failure, liver scarring, or kidney disease.",
    applications: [
      "Treatment of hypertension (as add-on)",
      "Management of edema in heart failure",
      "Hormonal acne (off-label)",
      "Hirsutism in women (off-label)"
    ],
    hazards: "Hyperkalemia (high potassium), gynecomastia (breast enlargement)",
    precautions: "Monitor potassium levels strictly; avoid potassium supplements"
  },
  {
    id: 89,
    name: "Glipizide",
    formula: "C₂₁H₂₇N₅O₄S",
    category: "Antidiabetic",
    molarMass: "445.54",
    meltingPoint: "208-209°C",
    boilingPoint: "N/A",
    density: "1.32 g/cm³",
    solubility: "Insoluble in water",
    description: "Glipizide is an oral rapid- and short-acting anti-diabetic medication from the sulfonylurea class. It is classified as a second-generation sulfonylurea.",
    applications: [
      "Adjunct treatment of Type 2 Diabetes",
      "Blood glucose control",
      "Stimulation of insulin release",
      "Glycemic control in adult patients"
    ],
    hazards: "Hypoglycemia, photosensitivity, hematologic effects",
    precautions: "Consistent meal timing required; monitor blood sugar"
  },
  {
    id: 90,
    name: "Pioglitazone",
    formula: "C₁₉H₂₀N₂O₃S",
    category: "Antidiabetic",
    molarMass: "356.44",
    meltingPoint: "193-194°C",
    boilingPoint: "N/A",
    density: "1.32 g/cm³",
    solubility: "Insoluble in water",
    description: "Pioglitazone, sold under the brand name Actos among others, is a medication used to treat type 2 diabetes. It is a thiazolidinedione (TZD) and works by increasing the body's sensitivity to insulin.",
    applications: [
      "Improvement of glycemic control in Type 2 Diabetes",
      "Insulin sensitizer",
      "Reduction of triglyceride levels",
      "Adjunct therapy with metformin"
    ],
    hazards: "Heart failure risk, bladder cancer risk, weight gain",
    precautions: "Contraindicated in heart failure; monitor for bladder issues"
  },
  {
    id: 91,
    name: "Sitagliptin",
    formula: "C₁₆H₁₅F₆N₅O",
    category: "Antidiabetic",
    molarMass: "407.31",
    meltingPoint: "153-155°C",
    boilingPoint: "N/A",
    density: "1.39 g/cm³",
    solubility: "Insoluble in water",
    description: "Sitagliptin, sold under the brand name Januvia among others, is an anti-diabetic medication used to treat type 2 diabetes. It works by inhibiting the enzyme DPP-4.",
    applications: [
      "Type 2 Diabetes management",
      "Incretin mimetic",
      "Improving postprandial glucose control",
      "Combination therapy with metformin"
    ],
    hazards: "Pancreatitis, joint pain",
    precautions: "Monitor for symptoms of pancreatitis (severe abdominal pain)"
  },
  {
    id: 92,
    name: "Finasteride",
    formula: "C₂₃H₃₆N₂O₂",
    category: "5-alpha reductase inhibitor",
    molarMass: "372.55",
    meltingPoint: "252-254°C",
    boilingPoint: "N/A",
    density: "1.07 g/cm³",
    solubility: "Insoluble in water",
    description: "Finasteride, sold under the brand names Proscar and Propecia among others, is a medication mainly used to treat an enlarged prostate or scalp hair loss in men.",
    applications: [
      "Treatment of benign prostatic hyperplasia (BPH)",
      "Male pattern baldness treatment",
      "Prostate cancer prevention (off-label)",
      "Reduction of prostate size"
    ],
    hazards: "Sexual dysfunction (decreased libido), depression",
    precautions: "Pregnant women should not handle broken tablets (teratogenic risk)"
  },
  {
    id: 93,
    name: "Tadalafil",
    formula: "C₂₂H₁₉N₃O₄",
    category: "PDE5 inhibitor",
    molarMass: "389.40",
    meltingPoint: "298-300°C",
    boilingPoint: "N/A",
    density: "1.25 g/cm³",
    solubility: "Insoluble in water",
    description: "Tadalafil, sold under the brand name Cialis among others, is a medication used to treat erectile dysfunction (ED), benign prostatic hyperplasia (BPH), and pulmonary arterial hypertension.",
    applications: [
      "Treatment of erectile dysfunction (as needed)",
      "Benign prostatic hyperplasia (daily)",
      "Pulmonary arterial hypertension (Adcirca)",
      "Improving exercise capacity"
    ],
    hazards: "Priapism (prolonged erection), sudden hearing loss, hypotension",
    precautions: "Avoid with nitrates (alpha blockers); seek medical help if erection lasts >4 hours"
  },
  {
    id: 94,
    name: "Sildenafil",
    formula: "C₂₂H₃₀N₆O₄S",
    category: "PDE5 inhibitor",
    molarMass: "474.58",
    meltingPoint: "187-189°C",
    boilingPoint: "N/A",
    density: "1.39 g/cm³",
    solubility: "3.5 mg/L",
    description: "Sildenafil, sold as the brand name Viagra among others, is a medication used to treat erectile dysfunction and pulmonary arterial hypertension.",
    applications: [
      "Erectile dysfunction treatment",
      "Pulmonary arterial hypertension",
      "Raynaud's phenomenon (off-label)",
      "Altitude sickness prevention"
    ],
    hazards: "Cardiovascular events in high-risk patients, vision changes",
    precautions: "Do not take with nitrates; caution in cardiovascular disease"
  },
  {
    id: 95,
    name: "Ammonium nitrate",
    formula: "NH₄NO₃",
    category: "Inorganic",
    molarMass: "80.04",
    meltingPoint: "169.6°C",
    boilingPoint: "210°C (decomposes)",
    density: "1.73 g/cm³",
    solubility: "1.9 g/mL",
    description: "Ammonium nitrate is a chemical compound with the chemical formula NH₄NO₃. It is a white crystalline solid consisting of ions of ammonium and nitrate.",
    applications: [
      "High-nitrogen fertilizer",
      "Component of mining explosives",
      "Cold packs (endothermic dissolution)",
      "Nutritional supplement (very high iron)"
    ],
    hazards: "Oxidizer, explosive potential when contaminated",
    precautions: "Store away from fuels and reducing agents"
  },
  {
    id: 96,
    name: "Calcium chloride",
    formula: "CaCl₂",
    category: "Inorganic",
    molarMass: "110.98",
    meltingPoint: "772°C",
    boilingPoint: "1,935°C",
    density: "2.15 g/cm³",
    solubility: "740 g/L",
    description: "Calcium chloride is an inorganic compound, a salt with the chemical formula CaCl₂. It is a white coloured crystalline solid at room temperature, highly soluble in water.",
    applications: [
      "Road de-icing",
      "Calcium channel blocker antidote",
      "Electrolyte supplement in IV solutions",
      "Preservative in food"
    ],
    hazards: "Corrosive, exothermic reaction with water (generates heat)",
    precautions: "Handle dry pellets with gloves; store in dry place"
  },
  {
    id: 97,
    name: "Sodium bicarbonate",
    formula: "NaHCO₃",
    category: "Inorganic",
    molarMass: "84.01",
    meltingPoint: "50°C (decomposes)",
    boilingPoint: "851°C (decomposes)",
    density: "2.20 g/cm³",
    solubility: "96 g/L",
    description: "Sodium bicarbonate, commonly known as baking soda, is a chemical compound with the formula NaHCO₃. It is a salt composed of a sodium cation and a bicarbonate anion.",
    applications: [
      "Antacid for heartburn",
      "Alkalinizing agent for metabolic acidosis",
      "Mouthwash for oral hygiene",
      "Leavening agent in baking"
    ],
    hazards: "Gas formation in stomach, alkalosis with excessive use",
    precautions: "Do not use for more than 2 weeks for heartburn without consulting a doctor"
  },
  {
    id: 98,
    name: "Sodium lauryl sulfate",
    formula: "C₁₂H₂₅SO₄Na",
    category: "Surfactant",
    molarMass: "288.38",
    meltingPoint: "206°C",
    boilingPoint: "N/A",
    density: "1.01 g/cm³",
    solubility: "150 g/L",
    description: "Sodium dodecyl sulfate, abbreviated as SDS or NaDS, is an organic compound with the formula C₁₂H₂₅SO₄Na. It is an anionic surfactant used in many cleaning and hygiene products.",
    applications: [
      "Toothpaste foaming agent",
      "Detergent in shampoos and soaps",
      "Laboratory lysis buffer (for DNA extraction)",
      "Food emulsifier"
    ],
    hazards: "Skin and eye irritant",
    precautions: "Rinse thoroughly if contact with eyes"
  },
  {
    id: 99,
    name: "Talc",
    formula: "Mg₃Si₄O₁₀(OH)₂",
    category: "Mineral",
    molarMass: "379.27",
    meltingPoint: "950°C",
    boilingPoint: "N/A",
    density: "2.75 g/cm³",
    solubility: "Insoluble",
    description: "Talc is a clay mineral composed of hydrated magnesium silicate with the chemical formula Mg₃Si₄O₁₀(OH)₂. In powdered form, it is often used in cosmetic products.",
    applications: [
      "Lubricant in tablet manufacturing",
      "Body powder and cosmetic absorbent",
      "Ceramic industry",
      "Paper coating"
    ],
    hazards: "Respiratory irritation (talcum powder); contamination risks with asbestos in unrefined forms",
    precautions: "Avoid inhalation of powder; use only pharmaceutical/food grade"
  },
  {
    id: 100,
    name: "Iodine",
    formula: "I₂",
    category: "Halogen",
    molarMass: "253.81",
    meltingPoint: "113.7°C",
    boilingPoint: "184.3°C",
    density: "4.93 g/cm³",
    solubility: "0.03 g/L (soluble in KI solution)",
    description: "Iodine is a chemical element with the symbol I and atomic number 53. It is a trace element used in the body for the synthesis of thyroid hormones.",
    applications: [
      "Disinfectant (povidone-iodine) for skin",
      "Treatment of iodine deficiency (goiter)",
      "Radiographic contrast agent (radioactive isotopes)",
      "Water purification tablets"
    ],
    hazards: "Thyroid dysfunction with excess, allergic reactions",
    precautions: "Do not use on deep wounds or for extended periods"
  }
];