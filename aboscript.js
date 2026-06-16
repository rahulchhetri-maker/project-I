/* ============================================================
   ABO± AI — COMPLETE KNOWLEDGE ENGINE
   ============================================================ */
 
// ————————————————————————————————————————
// 1. TIME-AWARE GREETING SYSTEM
// ————————————————————————————————————————
function getTimeGreeting() {
    const h = new Date().getHours();
    if (h >= 5  && h < 12) return "Good morning";
    if (h >= 12 && h < 17) return "Good afternoon";
    if (h >= 17 && h < 21) return "Good evening";
    return "Good night";
}
 
function getWelcomeGreeting() {
    const g = getTimeGreeting();
    const lines = {
        "Good morning":   "Good morning! ☀️ Ready to answer your blood type and donation questions to start your day.",
        "Good afternoon": "Good afternoon! 🌤️ Your blood type and donation assistant is online and ready.",
        "Good evening":   "Good evening! 🌙 Happy to help with any blood type or donation questions tonight.",
        "Good night":     "Late night questions? 🌟 I'm here 24/7 to help with blood types and donation info."
    };
    return lines[g];
}
 
// Set welcome subtitle
document.getElementById('welcomeGreeting').textContent = getWelcomeGreeting();
 
 
// ————————————————————————————————————————
// 2. MASTER KNOWLEDGE BASE
// ————————————————————————————————————————
const knowledgeBase = [
 
  // ── GREETINGS (time-aware) ──────────────────────────────
  {
    id: "greet_hi",
    tags: ["hi","hello","hey","hiya","howdy","sup","yo","helo","hllo","helo","hai"],
    type: "greeting",
    respond: () => {
      const g = getTimeGreeting();
      const tails = [
        "How can I help you today? Feel free to ask about blood types, donation eligibility, or transfusion compatibility.",
        "What would you like to know about blood donation or blood types?",
        "I'm here to help with anything about blood types, donation rules, or medical compatibility."
      ];
      return `${g}! 👋 ${tails[Math.floor(Math.random()*tails.length)]}`;
    }
  },
  {
    id: "greet_morning",
    tags: ["good morning","morning","mornin","gm"],
    type: "greeting",
    respond: () => "Good morning! ☀️ Hope you're having a great start to your day. What would you like to know about blood types or donation today?"
  },
  {
    id: "greet_afternoon",
    tags: ["good afternoon","afternoon"],
    type: "greeting",
    respond: () => "Good afternoon! 🌤️ Great time to get your questions answered. Ask me anything about blood groups, eligibility, or donation procedures."
  },
  {
    id: "greet_evening",
    tags: ["good evening","evening","good night","goodnight","gn","nite","night"],
    type: "greeting",
    respond: () => {
      const h = new Date().getHours();
      if (h >= 21 || h < 5) return "Good night! 🌙 I'm still online if you need blood type info. Rest well and stay healthy!";
      return "Good evening! 🌆 I'm available whenever you're ready. Ask me about blood groups, compatibility, or donation rules.";
    }
  },
  {
    id: "greet_howareyou",
    tags: ["how are you","how r u","hows it going","how's it going","how do you do","what's up","whats up","wyd","what are you doing"],
    type: "greeting",
    respond: () => {
      const lines = [
        "I'm doing great, thanks for asking! Always ready to help with blood type and donation questions. What's on your mind?",
        "Running perfectly! I'm at full capacity to answer your blood type, eligibility, and compatibility questions. What would you like to know?",
        "All systems online! I'm here to help you navigate blood types, donation rules, and medical compatibility. What can I do for you?"
      ];
      return lines[Math.floor(Math.random()*lines.length)];
    }
  },
  {
    id: "greet_bye",
    tags: ["bye","goodbye","see you","take care","cya","later","farewell","gtg","ttyl","tata"],
    type: "greeting",
    respond: () => {
      const g = getTimeGreeting();
      return `${g}! 👋 Take care of yourself and stay healthy. Come back anytime you have questions about blood types or donation — I'm always here!`;
    }
  },
  {
    id: "greet_thanks",
    tags: ["thank you","thanks","thx","ty","thank u","thnkx","cheers"],
    type: "greeting",
    respond: () => "You're very welcome! 😊 If you have more questions about blood types or donation, don't hesitate to ask."
  },
  {
    id: "greet_ok",
    tags: ["okay","ok","alright","sure","got it","i see","understood","noted","cool","nice","great","awesome","perfect","wonderful"],
    type: "greeting",
    respond: () => "Great! Let me know if you have more questions — I'm here to help with anything blood-related. 🩸"
  },
 
  // ── BLOOD BASICS ────────────────────────────────────────
  {
    id: "what_is_blood",
    tags: ["what is blood","explain blood","tell me about blood","blood composition","what does blood contain","blood components","blood made of"],
    answer: "Blood is the life-sustaining fluid that circulates through your cardiovascular system. It is composed of four main components:\n\n🔴 Red Blood Cells (Erythrocytes) — Carry oxygen from the lungs to the body's tissues using hemoglobin protein.\n⚪ White Blood Cells (Leukocytes) — The immune system's warriors, fighting infections and foreign invaders.\n🩸 Platelets (Thrombocytes) — Tiny cell fragments that clump together to form blood clots and stop bleeding.\n💛 Plasma — The yellowish liquid matrix (about 55% of blood) that transports cells, nutrients, hormones, and waste products.\n\nAn adult human body contains approximately 4.7–5.5 liters of blood, which makes about 8% of total body weight."
  },
  {
    id: "blood_type_definition",
    tags: ["what is a blood type","what is blood type","what does blood type mean","blood type definition","explain blood type","blood group meaning","what are blood groups"],
    answer: "A blood type is a classification system based on the specific proteins and sugar molecules (called antigens) present on the surface of your red blood cells. These antigens are inherited genetically from your parents.\n\nThe two most important classification systems are:\n\n🔬 ABO System — Identifies whether you have A antigens, B antigens, both (AB), or neither (O).\n🔬 Rh Factor System — Identifies whether you have the Rh protein on your cells (positive) or not (negative).\n\nTogether, these create the 8 standard blood types: A+, A−, B+, B−, O+, O−, AB+, AB−. Blood typing is critical because transfusing the wrong type can trigger a dangerous immune reaction."
  },
  {
    id: "all_blood_types",
    tags: ["what are the blood types","list blood types","all blood types","how many blood types","blood groups list","show me blood types","different blood types","types of blood groups","eight blood types","8 blood types","blood type chart","blood group chart"],
    answer: "There are 8 main blood types, formed by combining the ABO group with the Rh factor:\n\n┌─────────┬───────────┬───────────────────┐\n│ Type    │ Rh Factor │ Rarity (approx.)  │\n├─────────┼───────────┼───────────────────┤\n│ O+      │ Positive  │ Most common (38%) │\n│ A+      │ Positive  │ Very common (34%) │\n│ B+      │ Positive  │ Common (9%)       │\n│ AB+     │ Positive  │ Less common (3%)  │\n│ O−      │ Negative  │ Uncommon (7%)     │\n│ A−      │ Negative  │ Less common (6%)  │\n│ B−      │ Negative  │ Rare (2%)         │\n│ AB−     │ Negative  │ Rarest (1%)       │\n└─────────┴───────────┴───────────────────┘\n\nO− is the Universal Red Cell Donor. AB+ is the Universal Recipient. AB− is the Universal Plasma Donor."
  },
  {
    id: "rh_factor",
    tags: ["what is rh factor","rh factor","rhesus factor","positive negative blood","rh positive","rh negative","what does positive mean in blood type","what does negative mean in blood type","rh antigen","rh protein"],
    answer: "The Rh factor (also called the Rhesus factor) is a specific protein found on the surface of red blood cells. It was named after the Rhesus monkey species in which it was first discovered.\n\n✅ Rh-Positive (+): You have the Rh protein on your red blood cells. About 85% of people worldwide are Rh-positive.\n\n❌ Rh-Negative (−): You do NOT have the Rh protein on your red blood cells. About 15% of people are Rh-negative.\n\nWhy it matters: If an Rh-negative person receives Rh-positive blood, their immune system may produce antibodies against it, which can cause a dangerous reaction, especially in future transfusions. This is also critical during pregnancy — if an Rh-negative mother carries an Rh-positive baby, the mother may need an Rh immunoglobulin injection (RhoGAM) to prevent complications."
  },
  {
    id: "determine_blood_type",
    tags: ["how to determine blood type","how is blood type determined","blood typing test","how do they test blood type","how do i know positive or negative","how to know blood group","how to find out blood type","blood type test","who determines blood group"],
    answer: "Your blood type is determined by a simple lab test called a Blood Typing Test (or Blood Grouping). Here's how it works:\n\n🧪 Forward Typing — A small blood sample is mixed with laboratory solutions containing:\n   • Anti-A antibodies (to detect A antigen)\n   • Anti-B antibodies (to detect B antigen)\n   • Anti-Rh antibodies (to detect Rh protein)\n\nIf your red blood cells clump together (agglutinate) when mixed with a specific antibody, it means your cells carry that antigen.\n\n🧪 Reverse Typing — Your plasma is also tested against known A and B red cells to confirm the result.\n\n📊 Reading Results:\n   • Clumps with Anti-A only → Blood type A\n   • Clumps with Anti-B only → Blood type B\n   • Clumps with both → Blood type AB\n   • No clumping → Blood type O\n   • Clumps with Anti-Rh → Positive; No clumping → Negative\n\nThe easiest way to know your blood type for free is by donating blood — your type is recorded and shared with you afterward!"
  },
 
  // ── INDIVIDUAL BLOOD TYPE PROFILES ─────────────────────
  {
    id: "o_negative",
    tags: ["o negative","o-","o neg","o− blood","what is o negative","tell me about o negative","o negative blood type","o neg profile"],
    answer: "🩸 Blood Type: O− (O-Negative)\n\n⭐ Special Title: UNIVERSAL RED CELL DONOR — The most critical blood type in emergency medicine.\n\n📖 What it means: O-negative red blood cells have NO A antigens, NO B antigens, and NO Rh protein. This means any patient's immune system will accept them without reaction.\n\n🏥 Can DONATE red cells to: ALL 8 blood types (O+, O−, A+, A−, B+, B−, AB+, AB−)\n\n💉 Can RECEIVE red cells from: O− only\n\n🌍 Population: Approximately 7% of people worldwide\n\n⚠️ Why it's precious: Paramedics, trauma centers, and military medics keep O− blood ready for immediate use on unidentified or unconscious patients when there is no time for blood typing tests. Every unit of O− blood donated can save up to 3 lives."
  },
  {
    id: "o_positive",
    tags: ["o positive","o+","o pos","o positive blood","what is o positive","tell me about o positive","o positive blood type","o pos profile"],
    answer: "🩸 Blood Type: O+ (O-Positive)\n\n⭐ Special Title: MOST NEEDED BLOOD TYPE in hospitals worldwide.\n\n📖 What it means: O-positive red blood cells have NO A or B antigens but DO carry the Rh protein. They are accepted by all positive blood types.\n\n🏥 Can DONATE red cells to: O+, A+, B+, AB+ (all positive types)\n\n💉 Can RECEIVE red cells from: O+ and O−\n\n🌍 Population: The most common blood type globally, found in about 38% of people.\n\n❤️ Why it matters: Because O+ is so common AND can be given to all positive types, it is the blood type in highest demand. Hospitals use O+ for the majority of emergency transfusions for patients whose type is positive or unknown-positive."
  },
  {
    id: "a_negative",
    tags: ["a negative","a-","a neg","a negative blood","what is a negative","tell me about a negative","a negative blood type","a neg profile"],
    answer: "🩸 Blood Type: A− (A-Negative)\n\n📖 What it means: Your red blood cells have the A antigen but NO Rh protein. You are considered a 'secondary universal donor' for red cells.\n\n🏥 Can DONATE red cells to: A−, A+, AB−, AB+\n\n💉 Can RECEIVE red cells from: A− and O−\n\n🌍 Population: About 6% of people worldwide.\n\n⭐ Special Note: A-negative whole blood can be given to O-negative patients in emergencies (as a backup when O-negative supply is critically low), making it extremely valuable for trauma medicine."
  },
  {
    id: "a_positive",
    tags: ["a positive","a+","a pos","a positive blood","what is a positive","tell me about a positive","a positive blood type","a pos profile"],
    answer: "🩸 Blood Type: A+ (A-Positive)\n\n📖 What it means: Your red blood cells carry the A antigen AND the Rh protein.\n\n🏥 Can DONATE red cells to: A+ and AB+ only\n\n💉 Can RECEIVE red cells from: A+, A−, O+, O−\n\n🌍 Population: About 34% of people — the second most common type globally.\n\n❤️ Note: A+ donors are very valuable because AB+ patients (universal recipients) can receive their blood, and A+ is one of the most frequently needed types in blood banks."
  },
  {
    id: "b_negative",
    tags: ["b negative","b-","b neg","b negative blood","what is b negative","tell me about b negative","b negative blood type","b neg profile"],
    answer: "🩸 Blood Type: B− (B-Negative)\n\n📖 What it means: Your red blood cells carry the B antigen but NO Rh protein.\n\n🏥 Can DONATE red cells to: B−, B+, AB−, AB+\n\n💉 Can RECEIVE red cells from: B− and O−\n\n🌍 Population: Approximately 2% of people — one of the rarer blood types.\n\n⭐ Because B-negative is rare yet can serve all B and AB patients, B-negative donors are urgently needed."
  },
  {
    id: "b_positive",
    tags: ["b positive","b+","b pos","b positive blood","what is b positive","tell me about b positive","b positive blood type","b pos profile"],
    answer: "🩸 Blood Type: B+ (B-Positive)\n\n📖 What it means: Your red blood cells carry the B antigen AND the Rh protein.\n\n🏥 Can DONATE red cells to: B+ and AB+ only\n\n💉 Can RECEIVE red cells from: B+, B−, O+, O−\n\n🌍 Population: About 9% of people worldwide.\n\n❤️ B+ is more common in South and East Asian populations. Regular B+ donors are essential for maintaining adequate blood supply in these communities."
  },
  {
    id: "ab_negative",
    tags: ["ab negative","ab-","ab neg","ab negative blood","what is ab negative","tell me about ab negative","ab negative blood type","ab neg profile"],
    answer: "🩸 Blood Type: AB− (AB-Negative)\n\n⭐ Special Title: UNIVERSAL PLASMA DONOR\n\n📖 What it means: Your red blood cells carry BOTH A and B antigens but NO Rh protein. AB− is the rarest of the 8 main blood types.\n\n🏥 Can DONATE red cells to: AB− and AB+ only\n🏥 Can DONATE PLASMA to: ALL 8 blood types (because AB plasma has no antibodies)\n\n💉 Can RECEIVE red cells from: Any Rh-negative type (O−, A−, B−, AB−)\n\n🌍 Population: Only about 1% of people — the rarest standard blood type.\n\n⭐ AB-negative plasma is used in burn treatment, liver disease therapy, and large-scale trauma surgery for any patient, making AB-negative donors incredibly important."
  },
  {
    id: "ab_positive",
    tags: ["ab positive","ab+","ab pos","ab positive blood","what is ab positive","tell me about ab positive","ab positive blood type","ab pos profile","universal recipient","universal receiver"],
    answer: "🩸 Blood Type: AB+ (AB-Positive)\n\n⭐ Special Title: UNIVERSAL RED CELL RECIPIENT\n\n📖 What it means: Your red blood cells carry A antigens, B antigens, AND the Rh protein. Because you have all antigens, your immune system tolerates any incoming red blood cells.\n\n🏥 Can DONATE red cells to: AB+ only\n🏥 Can DONATE PLASMA to: All types (AB plasma has no anti-A or anti-B antibodies)\n\n💉 Can RECEIVE red cells from: ALL 8 blood types — the true universal recipient!\n\n🌍 Population: About 3% of people worldwide.\n\n❤️ AB+ individuals are also the best platelet donors because their platelets can be given to virtually any patient."
  },
 
  // ── COMPATIBILITY MATRICES ──────────────────────────────
  {
    id: "compat_o_neg_donate",
    tags: ["who can o negative donate to","o negative donate to","o- donate to","o neg donate to","o negative compatibility","can o negative give to everyone","what types can o negative give to","o negative universal donor","whom can we transfer o negative blood","o neg give"],
    answer: "🩸 O-Negative Donation Compatibility:\n\nO-negative is the UNIVERSAL RED CELL DONOR. It can be safely given to:\n\n✅ O+ (Yes)\n✅ O− (Yes)\n✅ A+ (Yes)\n✅ A− (Yes)\n✅ B+ (Yes)\n✅ B− (Yes)\n✅ AB+ (Yes)\n✅ AB− (Yes)\n\n🎯 Summary: O-negative can donate to EVERYONE — all 8 blood types without restriction. This is why O-negative is used in every emergency room, ambulance, and battlefield when there is no time for blood typing."
  },
  {
    id: "compat_o_pos_donate",
    tags: ["who can o positive donate to","o positive donate to","o+ donate to","o pos donate to","o positive compatibility","what types can o positive give to","whom can we transfer o positive blood","o pos give"],
    answer: "🩸 O-Positive Donation Compatibility:\n\nO-positive can donate red blood cells to all POSITIVE blood types:\n\n✅ O+ (Yes)\n✅ A+ (Yes)\n✅ B+ (Yes)\n✅ AB+ (Yes)\n❌ O− (No — they would react to the Rh protein)\n❌ A− (No)\n❌ B− (No)\n❌ AB− (No)\n\n🎯 Summary: O-positive is the most needed blood type globally. Since ~85% of the population is Rh-positive, O+ donations serve the vast majority of patients."
  },
  {
    id: "compat_a_neg_donate",
    tags: ["who can a negative donate to","a negative donate to","a- donate to","a neg donate to","a negative compatibility","what types can a negative give to","whom can we transfer a negative blood"],
    answer: "🩸 A-Negative Donation Compatibility:\n\nA-negative can donate red blood cells to:\n\n✅ A− (Yes)\n✅ A+ (Yes)\n✅ AB− (Yes)\n✅ AB+ (Yes)\n❌ O+, O−, B+, B− (No — incompatible ABO antigens)\n\n🎯 Summary: A-negative donors can give to both A and AB patients — both positive and negative — making them very valuable, especially as a backup for emergency situations when O-negative supply is low."
  },
  {
    id: "compat_a_pos_donate",
    tags: ["who can a positive donate to","a positive donate to","a+ donate to","a pos donate to","a positive compatibility","what types can a positive give to","whom can we transfer a positive blood"],
    answer: "🩸 A-Positive Donation Compatibility:\n\nA-positive can donate red blood cells to:\n\n✅ A+ (Yes)\n✅ AB+ (Yes)\n❌ A−, AB−, O+, O−, B+, B− (No)\n\n🎯 Summary: A-positive is restricted to Rh-positive recipients only (A+ and AB+). However, because A+ is the second most common blood type and AB+ patients need universal supply, A+ donors are among the most needed."
  },
  {
    id: "compat_b_neg_donate",
    tags: ["who can b negative donate to","b negative donate to","b- donate to","b neg donate to","b negative compatibility","what types can b negative give to","whom can we transfer b negative blood"],
    answer: "🩸 B-Negative Donation Compatibility:\n\nB-negative can donate red blood cells to:\n\n✅ B− (Yes)\n✅ B+ (Yes)\n✅ AB− (Yes)\n✅ AB+ (Yes)\n❌ O+, O−, A+, A− (No — incompatible ABO)\n\n🎯 Summary: B-negative donors serve all B and AB patients. Since B-negative is rare (only ~2% of people), B-negative donors are especially sought after by blood banks."
  },
  {
    id: "compat_b_pos_donate",
    tags: ["who can b positive donate to","b positive donate to","b+ donate to","b pos donate to","b positive compatibility","what types can b positive give to","whom can we transfer b positive blood"],
    answer: "🩸 B-Positive Donation Compatibility:\n\nB-positive can donate red blood cells to:\n\n✅ B+ (Yes)\n✅ AB+ (Yes)\n❌ All other types (No)\n\n🎯 Summary: B-positive donors are restricted to Rh-positive B and AB patients. B+ is more common in South Asian and East Asian populations, so B+ donors play a vital community health role in those demographics."
  },
  {
    id: "compat_ab_neg_donate",
    tags: ["who can ab negative donate to","ab negative donate to","ab- donate to","ab neg donate to","ab negative compatibility","what types can ab negative give to","whom can we transfer ab negative blood"],
    answer: "🩸 AB-Negative Donation Compatibility:\n\nAB-negative red cells can be donated to:\n✅ AB− (Yes)\n✅ AB+ (Yes)\n❌ All others (No — A and B antigens would cause reactions)\n\n🏥 AB-negative PLASMA can be donated to: ALL 8 types (universal plasma donor!)\n\n🎯 Summary: As the rarest blood type, AB-negative donors primarily benefit AB patients for red cells, but their plasma is invaluable for trauma patients of any blood type worldwide."
  },
  {
    id: "compat_ab_pos_donate",
    tags: ["who can ab positive donate to","ab positive donate to","ab+ donate to","ab pos donate to","ab positive compatibility","what types can ab positive give to","whom can we transfer ab positive blood"],
    answer: "🩸 AB-Positive Donation Compatibility:\n\nAB-positive red cells can only be donated to:\n✅ AB+ (Yes — only)\n❌ All other types (No)\n\n🏥 However, AB+ individuals are the UNIVERSAL RECIPIENT — they can receive red cells from ALL 8 blood types!\n\n🏥 AB+ can also donate platelets to all patients (universal platelet donor).\n\n🎯 Summary: While AB+ red cell donation is limited to AB+ patients, AB+ individuals contribute enormously through platelet donation, which saves cancer patients, surgical patients, and trauma victims of any blood type."
  },
 
  // ── FULL COMPATIBILITY TABLE ─────────────────────────────
  {
    id: "full_compat_table",
    tags: ["blood type compatibility chart","full compatibility","all blood type compatibility","blood transfusion compatibility","who can give to whom","blood type matching","compatibility table","full chart","all compatibility","blood group compatibility"],
    answer: "🩸 COMPLETE BLOOD TYPE COMPATIBILITY — RED CELLS\n\n┌──────────┬─────────────────────────────────┐\n│ Donor    │ Can Give To                     │\n├──────────┼─────────────────────────────────┤\n│ O−       │ O−, O+, A−, A+, B−, B+, AB−, AB+│\n│ O+       │ O+, A+, B+, AB+                 │\n│ A−       │ A−, A+, AB−, AB+                │\n│ A+       │ A+, AB+                         │\n│ B−       │ B−, B+, AB−, AB+                │\n│ B+       │ B+, AB+                         │\n│ AB−      │ AB−, AB+                        │\n│ AB+      │ AB+ only                        │\n└──────────┴─────────────────────────────────┘\n\n⭐ UNIVERSAL DONOR (Red Cells): O−\n⭐ UNIVERSAL RECIPIENT (Red Cells): AB+\n⭐ UNIVERSAL PLASMA DONOR: AB−\n\n💡 Tip: Negative blood types can donate to both + and − of compatible groups. Positive types can only donate to + recipients."
  },
 
  // ── RARE & SPECIAL BLOOD TYPES ──────────────────────────
  {
    id: "rarest_blood_type",
    tags: ["rarest blood type","most rare blood","rare blood types","rarest blood group","what is the rarest blood","bombay blood","golden blood","hh blood type","rare profiles"],
    answer: "🔬 RARE BLOOD TYPES\n\n1️⃣ Among the 8 standard types:\n   • AB− is the rarest — only about 1% of people have it.\n   • B− is also very rare at about 2%.\n\n2️⃣ Bombay Blood Group (hh phenotype):\n   A ultra-rare condition where red cells lack the H antigen — the building block for A and B antigens. People with Bombay blood can ONLY receive blood from other Bombay blood donors. It occurs in roughly 1 in 10,000 people in India and 1 in 1,000,000 people elsewhere.\n\n3️⃣ Golden Blood (Rhnull):\n   The rarest blood type ever discovered. Rhnull individuals have NO Rh proteins at all on their red cells. Only about 43 people in the world have been confirmed to have it. People with Rhnull can donate to ANY Rh-negative patient, making their blood extraordinarily valuable.\n\n4️⃣ Other Rare Systems: Kell, Duffy, Kidd, and MNS systems can also create rare compatibility challenges requiring special cross-matching for chronically transfused patients."
  },
 
  // ── DONATION ELIGIBILITY ────────────────────────────────
  {
    id: "eligibility_general",
    tags: ["am i eligible to donate","can i donate blood","blood donation eligibility","who can donate blood","donation requirements","donate blood rules","eligible for blood donation","donation criteria","can i give blood"],
    answer: "🩸 BLOOD DONATION ELIGIBILITY\n\nGeneral requirements in Nepal and most countries:\n\n✅ Age: 18–60 years old\n✅ Weight: At least 45 kg (99 lbs)\n✅ Health: Generally healthy on the day of donation\n✅ Hemoglobin: Minimum 12.5 g/dL for women, 13.5 g/dL for men\n✅ Blood Pressure: 90/60 to 180/100 mmHg\n✅ Pulse: 60–100 beats/minute (regular)\n✅ Temperature: Normal (under 37.5°C)\n✅ Frequency: Whole blood — maximum every 3 months (56–90 days)\n\n❌ Temporary disqualifications:\n   • Active cold, flu, or fever\n   • Antibiotics for active infection\n   • Tattoo or piercing (wait 1 year in Nepal)\n   • Recent surgery (varies by procedure)\n   • Pregnancy or recent childbirth\n   • Malaria risk travel (check with center)\n\n❌ Permanent disqualifications:\n   • HIV, Hepatitis B, or Hepatitis C\n   • Heart disease, severe diabetes, cancer history (varies)\n\n💡 When in doubt, attend a pre-donation screening — medical staff make the final call."
  },
  {
    id: "tattoo_rule",
    tags: ["tattoo","tattoo donation","can i donate after tattoo","tattoo waiting period","i have a tattoo","tattoo rules","piercing donation","microblading donation","permanent makeup donation"],
    answer: "🎨 TATTOO & PIERCING RULES FOR BLOOD DONATION\n\n🇳🇵 In Nepal:\nThe standard deferral period is 1 year (12 months) after getting a tattoo or body piercing before you can donate blood.\n\n🌍 In other countries (e.g., USA, UK):\nMany countries have a 3-month (12-week) deferral, or no deferral at all if the tattoo was done at a licensed, state-regulated facility using sterile, single-use needles.\n\n🔬 Why the waiting period exists:\nTattooing punctures the skin thousands of times, creating potential entry points for bloodborne viruses — particularly Hepatitis B (HBV) and Hepatitis C (HCV). These viruses have a 'window period' where they are too new to be detected by lab tests, even with modern Nucleic Acid Testing (NAT). The waiting period ensures any infection would be at detectable levels.\n\n📌 This rule applies equally to:\n   • Standard tattoos\n   • Eyebrow microblading\n   • Permanent eyeliner\n   • Lip blushing\n   • Scalp micropigmentation\n   • Ear piercings and body piercings"
  },
  {
    id: "donation_sick",
    tags: ["can i donate if sick","donating with cold","donating with fever","donating with flu","feeling unwell donation","sick and donating","cough donation"],
    answer: "🤒 DONATING WHILE SICK\n\nYou must be 100% well on the day of donation.\n\n❌ Do NOT donate if you have:\n   • Fever above 37.5°C\n   • Active cold or runny nose\n   • Flu symptoms\n   • Active cough\n   • Sore throat\n   • Diarrhea or vomiting\n   • Any active infection requiring antibiotics\n\n✅ When can you donate again?\n   Wait until you are fully symptom-free. Generally at least 24–48 hours after all symptoms have cleared and you're off any antibiotics (typically 7 days after finishing a course).\n\n💡 Why it matters: Donating while ill reduces the quality and safety of the blood, potentially harms you, and exposes staff to illness. Always reschedule if you're not feeling well."
  },
  {
    id: "donation_frequency",
    tags: ["how often donate","donation frequency","how many times donate","when can i donate again","waiting period between donations","how long between donations","donate every how many days","donate twice"],
    answer: "📅 HOW OFTEN CAN YOU DONATE?\n\nDifferent blood products have different recovery timelines:\n\n🔴 Whole Blood:        Every 56–90 days (8–12 weeks)\n   → Most common type; allows your red cells to regenerate\n\n🟡 Plasma:             Every 28 days (4 weeks)\n   → Plasma is mostly water and proteins — it replenishes quickly\n\n🟠 Platelets:          Every 7 days (up to 24 times/year)\n   → Platelets regenerate very quickly\n\n🔴 Double Red Cells:   Every 112 days (16 weeks)\n   → Takes longer as more red cells are collected\n\n💡 Your body replaces the plasma from a whole blood donation within 24–48 hours. Red blood cells take 4–6 weeks to fully regenerate. The waiting periods ensure you donate safely without risk to your own health."
  },
  {
    id: "post_donation",
    tags: ["after donating blood","after donation care","what to do after donation","post donation","recovery after blood donation","fainting after donation","eating after donating","rest after blood donation"],
    answer: "🩹 AFTER DONATING BLOOD — RECOVERY GUIDE\n\nImmediate steps (next 30 minutes):\n   • Stay seated in the recovery area for 10–15 minutes\n   • Drink water, juice, or a recovery drink provided by the center\n   • Eat the snack offered — usually biscuits or a light meal\n   • Keep the bandage firmly on for at least 4–5 hours\n\nSame-day care:\n   • Drink an extra 4–6 glasses of water or juice\n   • Avoid alcohol, smoking, or stimulants for 24 hours\n   • Avoid heavy lifting with the arm used for donation\n   • Skip strenuous exercise for the rest of the day\n   • If you feel lightheaded, sit or lie down immediately\n\nNext 24–48 hours:\n   • Eat iron-rich foods: spinach, lentils, red meat, beans, tofu\n   • Take it easy — avoid intense physical activity\n   • If bruising occurs, apply a cold pack for 20 minutes\n\n⚠️ When to call a doctor:\n   • Prolonged dizziness or fainting\n   • Persistent bleeding from the needle site\n   • Arm pain, numbness, or significant swelling"
  },
  {
    id: "iron_hemoglobin",
    tags: ["low iron donation","hemoglobin donation","finger prick test","anemia donation","can i donate with low iron","iron deficiency donation","hemoglobin level","failed iron test","iron rich food"],
    answer: "🔬 IRON & HEMOGLOBIN FOR BLOOD DONATION\n\nBefore you donate, staff will do a quick finger-prick hemoglobin check:\n   • Women need: ≥ 12.5 g/dL\n   • Men need: ≥ 13.5 g/dL\n\nIf your levels are too low (a condition called anemia), you'll be temporarily deferred — this protects your own health, not just the recipient's.\n\n🥗 How to boost your iron levels:\n\n🔴 Heme Iron (best absorbed — from animal sources):\n   • Red meat, liver, chicken, fish, eggs\n\n🟢 Non-Heme Iron (plant-based):\n   • Lentils, chickpeas, spinach, tofu, fortified cereals\n\n💡 Vitamin C trick: Eating vitamin C-rich foods (oranges, tomatoes, peppers) at the same meal dramatically increases iron absorption.\n\n⛔ Avoid calcium (milk, cheese) and tea or coffee near iron-rich meals — they block absorption.\n\nTypically it takes 2–4 weeks of iron-rich eating to raise your hemoglobin enough to donate. If you're consistently low, a doctor may recommend iron supplements."
  },
  {
    id: "donation_types",
    tags: ["types of donation","different ways to donate","whole blood donation","platelet donation","plasma donation","double red cells","apheresis","what can i donate","blood donation methods"],
    answer: "🩸 TYPES OF BLOOD DONATION\n\n1️⃣ Whole Blood Donation\n   The standard donation — one pint (~450ml) of blood containing red cells, white cells, platelets, and plasma. Takes about 8–10 minutes. Separated into components in the lab.\n\n2️⃣ Platelet Donation (Apheresis)\n   A machine draws your blood, extracts only the platelets, and returns your red cells and plasma. Takes 2–3 hours. Platelets are critical for cancer patients and surgery.\n\n3️⃣ Plasma Donation\n   Extracts only the plasma portion. Used for burn victims, liver disease, and manufacturing therapeutic proteins. Takes 1–2 hours.\n\n4️⃣ Double Red Cell Donation (Power Red)\n   Collects a double dose of red blood cells while returning plasma and platelets. Takes about 30 minutes. Most beneficial for trauma patients.\n\n🏆 Which is best? Every type saves lives in different ways. Your blood center will advise which is most needed based on current supply demands."
  },
 
  // ── EMERGENCY & CLINICAL ────────────────────────────────
  {
    id: "emergency_blood",
    tags: ["emergency blood","trauma blood","ambulance blood","what blood do hospitals use","o negative emergency","why o negative in ambulance","emergency transfusion","emergency blood type","icu blood"],
    answer: "🚨 BLOOD IN EMERGENCY MEDICINE\n\nIn trauma scenarios where there is no time to test a patient's blood type, medical teams immediately reach for:\n\n🔴 O-Negative Red Blood Cells — Compatible with everyone (no ABO or Rh antigens to cause reactions). Used in:\n   • Ambulances and paramedic packs\n   • Emergency rooms for unidentified patients\n   • Military field hospitals and combat zones\n   • Obstetric emergencies (hemorrhage during childbirth)\n\nOnce a patient is stabilized, a proper cross-match test is run to find their exact blood type, and they are switched to fully matched blood to conserve the O-negative supply.\n\n💉 AB Plasma is also kept as a universal emergency — AB plasma has no antibodies that react with any patient's red cells.\n\n⚠️ O-negative supply is critically limited — only 7% of people have it, but demand is enormous. O-negative donors are among the most urgently needed in every country."
  },
  {
    id: "transfusion_reaction",
    tags: ["wrong blood","blood reaction","transfusion reaction","incompatible blood","mismatched blood","what happens wrong blood type","blood type mismatch","hemolytic reaction"],
    answer: "⚠️ BLOOD TRANSFUSION REACTIONS\n\nIf a patient receives incompatible blood (wrong ABO or Rh type), the immune system immediately attacks the foreign red blood cells. This is called a Hemolytic Transfusion Reaction.\n\n🔴 Acute symptoms:\n   • Sudden chills and shaking\n   • Fever\n   • Back or flank pain\n   • Chest tightness\n   • Drop in blood pressure\n   • Dark-colored urine (from destroyed red cells)\n   • Rapid pulse and difficulty breathing\n\n⚫ Severe cases can cause:\n   • Kidney failure\n   • Disseminated Intravascular Coagulation (DIC)\n   • Shock and death\n\n🛡️ How hospitals prevent this:\n   • ABO/Rh typing of every patient\n   • Cross-matching (testing donor cells against patient serum)\n   • Barcode scanning systems to verify the right bag to the right patient\n   • A second nurse verification before transfusion\n\nModern protocols make transfusion reactions extremely rare — they occur in about 1 in 38,000 transfusions."
  },
  {
    id: "platelets_plasma",
    tags: ["platelet compatibility","universal platelet donor","plasma donor","ab plasma","who donates plasma to everyone","platelet transfusion","plasma transfusion","platelet blood type"],
    answer: "🧬 PLATELETS & PLASMA COMPATIBILITY\n\n🟠 Platelets:\n   • Ideally ABO-matched, but AB+ individuals are the 'universal platelet donor'\n   • AB platelets have no antibodies that react with other blood types\n   • Platelets are critical for cancer patients on chemotherapy, surgical patients, and bleeding disorders\n   • Shelf life: only 5–7 days (unlike red cells which last 42 days) — so continuous donors are vital\n\n💛 Plasma:\n   • AB plasma is the universal plasma — it contains no anti-A or anti-B antibodies\n   • AB− individuals are especially prized plasma donors\n   • Plasma is used for burn victims, liver failure, and clotting disorder treatment\n   • Fresh Frozen Plasma (FFP) can be stored for up to 1 year when frozen\n\n💡 Key point: For red cells, O-negative is the universal donor. For plasma, AB-negative is the universal donor. These two types are the most critically needed in any blood bank."
  },
 
  // ── AI IDENTITY ──────────────────────────────────────────
  {
    id: "ai_identity",
    tags: ["who are you","what are you","are you ai","are you human","are you a robot","are you real","what is abo ai","tell me about yourself","about this app"],
    answer: "🤖 I am ABO± AI — a specialized blood type and donation intelligence assistant.\n\nI am designed specifically to help you with:\n   🩸 Blood type identification and profiles\n   💉 Donation eligibility and deferral rules\n   🔬 Transfusion compatibility matrices\n   🏥 Emergency blood medicine facts\n   ❤️ Post-donation care and iron nutrition\n\nI am not a licensed medical professional. While I provide medically grounded information based on standard hematology guidelines, you should always consult qualified healthcare staff at your blood bank or hospital for personalized medical decisions.\n\nBuilt for blood banks and donation centers in Nepal and worldwide. 🌍"
  },
  {
    id: "not_doctor",
    tags: ["are you a doctor","medical advice","should i trust you","are you licensed","are you better than doctor","should i see a doctor"],
    answer: "No, I am not a doctor or licensed medical professional. 🩺\n\nI provide medically informed general information based on standard blood banking and hematology guidelines. However, every individual's health situation is unique.\n\nFor decisions about your specific health, eligibility to donate, or medical treatment — always consult:\n   • A licensed physician or hematologist\n   • Your local blood bank's medical team\n   • A hospital specialist\n\nI can prepare you with knowledge before those conversations, but the qualified professionals always have the final say. 🏥"
  },
  {
    id: "fun_blood_facts",
    tags: ["fun fact","interesting fact","blood fact","blood science","did you know","cool blood fact","tell me something interesting","facts about blood","easter egg","secret"],
    answer: "🔬 FASCINATING BLOOD FACTS:\n\n• Your body produces approximately 2–3 million red blood cells every single second from your bone marrow.\n\n• A single unit of donated blood can save up to 3 different patients.\n\n• Red blood cells live for only about 120 days before they are recycled by the spleen.\n\n• If you laid out all your blood vessels end to end, they would stretch about 100,000 km — enough to circle the Earth 2.5 times.\n\n• The rarest blood type in the world (Rhnull or 'Golden Blood') has only been found in 43 people ever recorded.\n\n• Horseshoe crabs have bright blue blood (using copper instead of iron) that is used to test medical equipment for bacterial contamination.\n\n• Blood makes up about 7–8% of your total body weight.\n\n• Your immune system's antibodies in plasma are so specific they can detect a single bacterium among millions of your own cells. 🧬"
  },
 
  // ── MISC / FALLBACK SLANG ──────────────────────────────
  {
    id: "slang_laughing",
    tags: ["lol","haha","hahaha","lmao","rofl","hehe","funny","😂","🤣"],
    answer: "😄 Glad I could bring a smile! Blood science has some genuinely surprising facts. Feel free to ask anything more!"
  },
  {
    id: "misc_yes",
    tags: ["yes","yeah","yep","yep","correct","right","exactly","true","absolutely","definitely"],
    answer: "Great! What else would you like to know about blood types or donation?"
  },
  {
    id: "misc_no",
    tags: ["no","nope","nah","not really","never mind","forget it"],
    answer: "No problem at all! Let me know if you'd like to explore a different topic or ask anything else. 😊"
  },
  {
    id: "misc_wait",
    tags: ["wait","hold on","one second","sec","just a minute","brb"],
    answer: "No rush! Take your time — I'll be right here whenever you're ready. 🩸"
  },
  {
    id: "misc_sorry",
    tags: ["sorry","my bad","oops","apologies","sry","i made a mistake"],
    answer: "No worries at all! We can keep going or start fresh. What would you like to know? 😊"
  },
 
];
 
 
// ————————————————————————————————————————
// 3. SMART MATCHING ENGINE
// ————————————————————————————————————————
function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9\s+\-]/gi, ' ').trim();
}
 
function findAnswer(userInput) {
    const input = normalize(userInput);
    const words = input.split(/\s+/).filter(w => w.length > 1);
 
    let bestScore = 0;
    let bestEntry = null;
 
    for (const entry of knowledgeBase) {
        let score = 0;
 
        // Full phrase matching (highest weight)
        for (const tag of entry.tags) {
            if (input.includes(tag)) {
                score += tag.split(' ').length * 4; // Multi-word = higher score
            }
        }
 
        // Word-level matching
        for (const word of words) {
            for (const tag of entry.tags) {
                if (tag === word || tag.includes(word) || word.includes(tag)) {
                    score += 1;
                }
            }
        }
 
        if (score > bestScore) {
            bestScore = score;
            bestEntry = entry;
        }
    }
 
    if (bestScore >= 1 && bestEntry) {
        // Handle dynamic responses
        if (typeof bestEntry.respond === 'function') {
            return bestEntry.respond();
        }
        return bestEntry.answer;
    }
 
    // Fallback
    return "I couldn't find a specific answer to that in my database. 🩸\n\nTry asking about:\n• 'What are the blood types?'\n• 'Who can O negative donate to?'\n• 'Am I eligible to donate?'\n• 'What is the rarest blood type?'\n\nOr visit your nearest blood bank for personalized guidance!";
}
 
 
// ————————————————————————————————————————
// 4. STATE & SESSION MANAGEMENT
// ————————————————————————————————————————
const chatWindow    = document.getElementById('chatWindow');
const userInput     = document.getElementById('userInput');
const historyContainer = document.getElementById('historyContainer');
const historyEmpty  = document.getElementById('historyEmpty');
const welcomeScreen = document.getElementById('welcomeScreen');
 
let activeChatId = null;
let chatHistory  = [];
 
try {
    const stored = localStorage.getItem('aboai_chat_v2');
    if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) chatHistory = parsed;
    }
} catch(e) { chatHistory = []; }
 
updateHistoryUI();
if (chatHistory.length > 0) {
    loadChatSession(chatHistory[0].id);
}
 
function handleEnter(e) { if (e.key === 'Enter') processUserInput(); }
function sendQuickMessage(text) { userInput.value = text; processUserInput(); }
 
function processUserInput() {
    const text = userInput.value.trim();
    if (!text) return;
 
    // Hide welcome screen on first message
    if (welcomeScreen) welcomeScreen.style.display = 'none';
 
    // Create session if none active
    if (activeChatId === null) {
        const newSession = {
            id: Date.now(),
            title: text.length > 30 ? text.substring(0, 27) + '…' : text,
            messages: [],
            pinned: false
        };
        chatHistory.unshift(newSession);
        activeChatId = newSession.id;
    }
 
    const session = chatHistory.find(i => i.id === activeChatId);
 
    // Show user message
    addMessage(text, 'msg-user');
    if (session) session.messages.push({ text, cls: 'msg-user' });
    userInput.value = '';
    saveHistory();
 
    // Show typing indicator
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.id = 'typingIndicator';
    typing.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    chatWindow.appendChild(typing);
    chatWindow.scrollTop = chatWindow.scrollHeight;
 
    // Simulate response with natural delay
    const delay = 400 + Math.random() * 400;
    setTimeout(() => {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) indicator.remove();
 
        const answer = findAnswer(text);
        addMessage(answer, 'msg-ai');
 
        if (session) {
            session.messages.push({ text: answer, cls: 'msg-ai' });
            saveHistory();
        }
    }, delay);
}
 
function addMessage(text, cls) {
    const div = document.createElement('div');
    div.className = `message ${cls}`;
    div.textContent = text;
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
 
 
// ————————————————————————————————————————
// 5. HISTORY MANAGEMENT
// ————————————————————————————————————————
function saveHistory() {
    try { localStorage.setItem('aboai_chat_v2', JSON.stringify(chatHistory)); } catch(e) {}
    updateHistoryUI();
}
 
function startNewChat() {
    activeChatId = null;
    chatWindow.innerHTML = '';
 
    // Re-show welcome screen
    const ws = document.createElement('div');
    ws.className = 'welcome-screen';
    ws.id = 'welcomeScreen';
    ws.innerHTML = `
        <div class="welcome-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2C12 2 5 9.5 5 14.5C5 18.09 8.13 21 12 21C15.87 21 19 18.09 19 14.5C19 9.5 12 2 12 2Z"/></svg>
        </div>
        <div class="welcome-title">ABO± AI Assistant</div>
        <div class="welcome-sub">${getWelcomeGreeting()}</div>
        <div class="welcome-chips">
            <div class="welcome-chip" onclick="sendQuickMessage('What are the blood types?')">Blood Types</div>
            <div class="welcome-chip" onclick="sendQuickMessage('Who can O negative donate to?')">O− Compatibility</div>
            <div class="welcome-chip" onclick="sendQuickMessage('Am I eligible to donate blood?')">Eligibility Check</div>
            <div class="welcome-chip" onclick="sendQuickMessage('What is the rarest blood type?')">Rarest Type</div>
        </div>
    `;
    chatWindow.appendChild(ws);
    closeSidebar();
    updateHistoryUI();
}
 
function loadChatSession(id) {
    activeChatId = id;
    const session = chatHistory.find(i => i.id === id);
    if (!session) return;
 
    chatWindow.innerHTML = '';
    if (session.messages && session.messages.length > 0) {
        session.messages.forEach(m => addMessage(m.text, m.cls));
    } else {
        addMessage("Session loaded. Ask me anything about blood types or donation!", 'msg-ai');
    }
    updateHistoryUI();
    closeSidebar();
}
 
function togglePin(id) {
    const i = chatHistory.findIndex(x => x.id === id);
    if (i !== -1) { chatHistory[i].pinned = !chatHistory[i].pinned; saveHistory(); }
}
 
function deleteHistoryItem(id) {
    chatHistory = chatHistory.filter(i => i.id !== id);
    if (activeChatId === id) {
        if (chatHistory.length > 0) loadChatSession(chatHistory[0].id);
        else startNewChat();
    }
    saveHistory();
}
 
function clearAllHistory() {
    chatHistory = [];
    try { localStorage.removeItem('aboai_chat_v2'); } catch(e) {}
    startNewChat();
}
 
function updateHistoryUI() {
    historyContainer.innerHTML = '';
    if (chatHistory.length === 0) {
        historyContainer.innerHTML = '<div class="history-empty">No conversations yet.<br>Start chatting below.</div>';
        return;
    }
 
    const sorted = [...chatHistory].sort((a, b) => b.pinned - a.pinned);
    sorted.forEach(item => {
        const div = document.createElement('div');
        div.className = `history-item ${item.pinned ? 'pinned' : ''} ${item.id === activeChatId ? 'active' : ''}`;
 
        const text = document.createElement('span');
        text.className = 'history-text';
        text.textContent = item.title || 'Untitled';
        text.onclick = () => loadChatSession(item.id);
 
        const actions = document.createElement('div');
        actions.className = 'history-actions';
 
        const pinBtn = document.createElement('button');
        pinBtn.className = 'action-btn';
        pinBtn.title = item.pinned ? 'Unpin' : 'Pin';
        pinBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="${item.pinned ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-.44-1.24l-2.33-2.91A1 1 0 0 1 16 10.5V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5.5a1 1 0 0 1-.23.59l-2.33 2.91A2 2 0 0 0 5 15.24z"/></svg>`;
        pinBtn.style.color = item.pinned ? 'var(--cb)' : 'var(--tm)';
        pinBtn.onclick = e => { e.stopPropagation(); togglePin(item.id); };
 
        const delBtn = document.createElement('button');
        delBtn.className = 'action-btn';
        delBtn.title = 'Delete';
        delBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
        delBtn.style.color = 'var(--tm)';
        delBtn.onclick = e => { e.stopPropagation(); deleteHistoryItem(item.id); };
 
        actions.appendChild(pinBtn);
        actions.appendChild(delBtn);
        div.appendChild(text);
        div.appendChild(actions);
        historyContainer.appendChild(div);
    });
}
 
 
// ————————————————————————————————————————
// 6. THEME TOGGLE
// ————————————————————————————————————————
function toggleTheme() {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch(e) {}
}
 
 
// ————————————————————————————————————————
// 7. MOBILE SIDEBAR
// ————————————————————————————————————————
function toggleMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (!sidebar || !overlay) return;
 
    const isOpening = sidebar.classList.toggle('open');
    if (isOpening) {
        overlay.style.display = 'block';
        requestAnimationFrame(() => overlay.classList.add('show'));
    } else {
        overlay.classList.remove('show');
        setTimeout(() => { if (!sidebar.classList.contains('open')) overlay.style.display = 'none'; }, 300);
    }
}
 
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) { overlay.classList.remove('show'); setTimeout(() => overlay.style.display = 'none', 300); }
}
 
document.addEventListener('DOMContentLoaded', () => {
    const toggle  = document.getElementById('menuToggle');
    const overlay = document.getElementById('sidebarOverlay');
    if (toggle)  toggle.addEventListener('click', toggleMobileSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);
 
    // Swipe to close sidebar on mobile
    let touchStartX = 0;
    document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    document.addEventListener('touchend', e => {
        const dx = touchStartX - e.changedTouches[0].clientX;
        const sidebar = document.getElementById('sidebar');
        if (dx > 60 && sidebar && sidebar.classList.contains('open')) closeSidebar();
    }, { passive: true });
});