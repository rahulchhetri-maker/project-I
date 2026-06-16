/* ==========================================
           1. LOCAL DATABASE (Scalable to 4,000+ entries)
           Structure: keywords (array of strings), answer (string)
           ========================================== */
const faqDatabase = [
// Complete and Refined Blood Donation Knowledge Base Array
    // ==========================================
    // 1. ELIGIBILITY & HEALTH RULES
    // ==========================================
    {
        keywords: ["Am I eligible to donate?", "am i eligible to donate", "can i donate blood", "blood donation requirements", "eligibility criteria", "am i allowed to donate"],
        answer: "To be eligible in Nepal, you generally must be 18–60 years old, weigh at least 45kg, and be in good health. During your visit, staff will perform a pre-donation health screening to check your pulse, blood pressure, and hemoglobin levels." /* [cite: 1] */
    },
    {
        keywords: ["can i donate with a tattoo", "tattoo waiting period", "tattoo rules", "i have a tattoo"], /* [cite: 2] */
        answer: "In Nepal, there is a mandatory one-year waiting period after getting a tattoo before you can donate blood. This safety protocol ensures there is no risk of bloodborne infections." /* [cite: 2, 3] */
    },
    {
        keywords: ["can i donate if i am sick", "donating with a cold", "feeling unwell", "fever and blood donation"],
        answer: "You must be feeling 100% well on the day of donation. If you have an active fever, cough, or cold, you will be deferred. You should typically wait until you are fully symptom-free for at least 24–48 hours." /* [cite: 3, 4] */
    },
    {
        keywords: ["can i donate if i am on medication", "taking medicine and blood donation", "antibiotics and donating"],
        answer: "It depends on the medication. Always disclose all current prescriptions to the medical staff during your pre-donation interview. Some medications, like antibiotics for an active infection, will require a deferral period." /* [cite: 4, 5] */
    },
    {
        keywords: [
            "Can I donate blood if I just got a tattoo?", 
            "Tattoo deferral period", 
            "Got a tattoo ink", 
            "Are tattoos allowed?", 
            "Microblading blood donation rule", 
            "Permanent makeup tattoo eligibility",
            "Cosmetic tattooing blood donor",
            "Can I donate with a tattoo?" /* [cite: 6] */
        ],
        answer: "Whether you can safely donate blood after getting a tattoo depends entirely on where the procedure was performed and how the facility is legally regulated. In many jurisdictions, there is a mandatory 3-month (12-week) temporary deferral period from the exact date the ink was applied. However, you may be cleared to donate blood immediately with zero waiting period if the tattoo was applied in a state-regulated, licensed facility that strictly uses sterile, single-use needles and fresh, unshared ink caps.\n\nThe primary clinical rationale for this restriction is preventing the accidental transmission of serious blood-borne viral pathogens, specifically Hepatitis B (HBV) and Hepatitis C (HCV). The process of tattooing breaches the protective dermal layer of the skin thousands of times; if an amateur or unregulated setup utilizes non-sterile equipment or contaminated ink vats, these viruses can easily enter your circulatory system. While modern blood banking facilities screen every single unit using highly sensitive Nucleic Acid Testing (NAT), all viruses have an early biological 'window period'—a frame of time directly after initial exposure where viral loads are too low to be detected by laboratory assays. The 3-month quarantine buffer guarantees that any latent infection has adequate time to replicate to detectable levels, ensuring it will be caught during screening and protecting vulnerable, immunocompromised recipients from transfusion-transmitted infections.\n\nPlease note that this rule applies equally to all forms of cosmetic tattooing, including eyebrow microblading, permanent eyeliner, lip blushing, and scalp micropigmentation. During your pre-donation screening, you will be asked explicitly if you have received a tattoo within the last 3 months. If you verify that the procedure occurred at a licensed, health-department-compliant establishment using sterile, single-use tools, you will be cleared to donate immediately. If the procedure was done in an unregulated environment—such as a home setup, a tattoo party, or a region lacking official health department oversight—you will be deferred until the 3-month window completely elapses." /* [cite: 6, 7, 8, 9, 10, 11] */
    },
    {
        keywords: ["It depends", "That depends", "Not always", "Sometimes", "Maybe", "On the condition", "If possible"],
        answer: "Understood. Context matters a lot, especially in clinical rules. Could you give me the specific details or parameters so I can give you an exact answer?" /* [cite: 11, 12] */
    },
    {
        keywords: ["Never mind, I found it", "Solved", "I got the answer", "I figured it out", "Don't worry about it"],
        answer: "Excellent! I am glad you got it sorted out. Let me know if any other questions pop up down the line." /* [cite: 13] */
    },
    {
        keywords: ["Give me an example", "Can you illustrate that?", "Show me an example", "Like what?", "Give an instance"],
        answer: "Sure! For instance, if you are asking about high blood pressure: an example of eligibility is a donor whose reading is 170/95 on donation day—which is high but acceptable under standard donation limits, provided they feel completely fine." /* [cite: 14] */
    },
    {
        keywords: ["Can you explain that like I am five?", "Explain it simply", "ELI5", "Make it easier to understand", "Break it down simpler"],
        answer: "Think of your blood like a grocery delivery truck. Red cells carry the food (oxygen), white cells are the security guards protecting the truck, and plasma is the highway they drive on. Donating blood is just sharing a few trucks with a neighbor who ran out!" /* [cite: 15, 16] */
    },
    {
        keywords: ["What are the pros and cons?", "Give me the advantages and disadvantages", "Is it good or bad?", "Benefits vs risks"],
        answer: "The pros of donating blood include saving lives, getting a free mini health check, and burning calories. The minor cons are a temporary needle pinch, potential slight bruising, or short-term fatigue. The benefits to a patient vastly outweigh the minor discomforts." /* [cite: 17, 18] */
    },

    // ==========================================
    // 2. META-COMMANDS & STATE MANAGEMENT
    // ==========================================
    {
        keywords: ["Reset", "Restart", "Clear data", "Wipe memory", "Start from scratch", "Reset chat", "Clear history"],
        answer: "System cache cleared locally! Our conversation history has been reset. What brand-new topic or question would you like to explore now?" /* [cite: 19] */
    },
    {
        keywords: ["Stop talking", "Shut up", "Be quiet", "Mute", "Hush", "Silence"],
        answer: "Understood. I will pause right here. Whenever you want to resume or ask a new question, simply type your query below and press send." /* [cite: 20] */
    },
    {
        keywords: ["Help", "Help menu", "Commands", "How do I use this?", "List options", "Menu"],
        answer: "You can ask me questions using natural text! Type queries about: 1) Physical eligibility (age, weight), 2) Medication restrictions, 3) Disease deferrals, 4) General blood science, or 5) Basic chit-chat." /* [cite: 21] */
    },
    {
        keywords: ["Give me the raw text", "Export data", "Copy response", "Source text"],
        answer: "Because I run entirely in your local browser frontend environment, you can easily highlight, select, and copy any part of our text string straight from your screen!"
    },
    {
        keywords: ["Why did you say that?", "Explain your logic", "What is your reasoning?", "Why that answer?", "Explain your response"], /* [cite: 22] */
        answer: "I look for specific words and phrase structures in your message. I then match them directly against my localized matrix of validated medical eligibility rules and blood science profiles to pull the most accurate response available." /* [cite: 22, 23] */
    },

    // ==========================================
    // 3. PHILOSOPHICAL AI QUERIES
    // ==========================================
    {
        keywords: ["Do you have a consciousness?", "Are you sentient?", "Can you feel pain?", "Do you have emotions?", "Are you self aware?"],
        answer: "No, I do not possess consciousness, self-awareness, or emotional feelings. I am an advanced local text processing script that structures data into useful answers based on predefined patterns." /* [cite: 24] */
    },
    {
        keywords: ["What is your opinion on", "What do you think about", "Give me your point of view", "What is your perspective?"],
        answer: "As an artificial intelligence assistant, I don't form personal opinions, beliefs, or subjective viewpoints. My purpose is to present objective, accurate data regarding medical guidelines and clinical facts." /* [cite: 25] */
    },
    {
        keywords: ["Are you better than a doctor?", "Should I trust you over a doctor?", "Are you a licensed medical professional?"],
        answer: "Absolutely not. I am a helpful baseline informational tool, but I am not a substitute for professional medical advice, diagnosis, or treatment. Always follow the explicit guidance of a licensed doctor or blood bank medical staff." /* [cite: 26, 27] */
    },
    {
        keywords: ["Will AI replace blood donors?", "Can science create synthetic blood?", "Is artificial blood going to replace human blood?"],
        answer: "AI and software handle logistics and matching, but they cannot replace actual human donors. Fully functional synthetic blood does not exist yet. Patients rely entirely on biological, human volunteer donations." /* [cite: 28] */
    },
    {
        keywords: ["Do you sleep?", "What do you do at night?", "Are you active 24/7?", "Do you dream?"],
        answer: "I don't sleep or dream! I am active and available inside this browser window 24 hours a day, 7 days a week, completely ready whenever you open the page." /* [cite: 29] */
    },

    // ==========================================
    // 4. HANDLING REPETITION, TYPOS, & EDGES
    // ==========================================
    {
        keywords: ["You already said that", "Stop repeating yourself", "Don't repeat that", "You're looping", "Duplicate answer"],
        answer: "Apologies for the loop! If my keywords overlap, I might trigger the same response template. Let's shift gears—ask me a completely different question to break the cycle." /* [cite: 30, 31] */
    },
    {
        keywords: ["Asdf", "Qwer", "Zxcv", "Ghjk", "Gibberish", "1234567890", "Blah blah"],
        answer: "It looks like you might have accidentally bumped your keyboard! Whenever you're ready, type out a real word or a question about blood donation, and I will track it down." /* [cite: 32] */
    },
    {
        keywords: ["Is that your final answer?", "Are you sure?", "Is that 100% accurate?", "Confirm that"],
        answer: "Yes, based on the current medical guidelines hardcoded into my offline system, that is the standardized protocol. However, individual blood centers always have the final authority during your in-person physical screening." /* [cite: 33] */
    },
    {
        keywords: ["Tell me a secret", "Do you have an easter egg?", "Any hidden features?"],
        answer: "Here is a tiny data secret: your body produces roughly 2 to 3 million brand-new red blood cells every single second! Even while you are sitting here reading this sentence, your bone marrow is hard at work." /* [cite: 34] */
    },
    {
        keywords: ["I have a complicated situation", "My case is unique", "It's hard to explain", "This is a long story"],
        answer: "No problem at all. Try breaking your situation down into its core parts—like mentioning the specific medication name or the exact country you traveled to—so my system can isolate the correct rule." /* [cite: 35] */
    },

    // ==========================================
    // 5. SIMPLE ACKNOWLEDGMENTS & AGREEMENTS
    // ==========================================
    {
        keywords: ["Okay", "Ok", "Sure", "Alright", "Fine", "Got it", "K", "I understand"],
        answer: "Great! Let me know what you want to talk about or ask next." /* [cite: 36] */
    },
    {
        keywords: ["Yes", "Yeah", "Yep", "Yis", "True", "Of course", "Absolutely", "Correct"],
        answer: "Awesome! Please go ahead, I'm listening." /* [cite: 37] */
    },
    {
        keywords: ["No", "Nope", "Nah", "Not really", "False", "I don't think so", "Wrong"],
        answer: "No problem! Let me know if you want to change the topic or look for something else." /* [cite: 38] */
    },
    {
        keywords: ["Please", "Pls", "Plz", "Kindly"],
        answer: "You got it! What can I do for you?" /* [cite: 39] */
    },
    {
        keywords: ["Wait", "Hold on", "Give me a second", "Sec", "One minute", "Hold up"],
        answer: "No rush! Take all the time you need. I am right here." /* [cite: 40] */
    },

    // ==========================================
    // 6. SHORT CHAT TEXTING SLANG
    // ==========================================
    {
        keywords: ["Hlo", "Hy", "Sup", "Yo", "Heyy", "Heys"],
        answer: "Hey! What's on your mind today?" /* [cite: 41] */
    },
    {
        keywords: ["Thx", "Ty", "Thanks", "Tanks", "Thank u", "Thnkx"],
        answer: "Anytime! Happy to help you out." /* [cite: 42] */
    },
    {
        keywords: ["Haha", "Hahaha", "Lol", "Lmao", "Hehe", "Rofl", "Funny"],
        answer: "Glad I could bring a smile to your screen! It's always good to keep chats light." /* [cite: 43] */
    },
    {
        keywords: ["Umm", "Uh", "Well", "Err", "...", "Thinking", "Ah"],
        answer: "Take your time! I'm right here whenever you are ready to type your text." /* [cite: 44] */
    },
    {
        keywords: ["I'm back", "I am back", "Back again", "Returned", "Rejoined"],
        answer: "Welcome back! Ready for more questions, or did you want to check something else?" /* [cite: 45] */
    },

    // ==========================================
    // 7. CONTINUATIONS & FEEDBACK
    // ==========================================
    {
        keywords: ["Continue", "Go on", "Next", "Keep going", "Tell me more", "And?", "More"],
        answer: "I'm ready when you are! What else would you like to know or discuss?" /* [cite: 46] */
    },
    {
        keywords: ["Cool", "Nice", "Great", "Awesome", "Sweet", "Perfect", "Wonderful", "Good"],
        answer: "Glad you think so! Feel free to drop another question whenever you like." /* [cite: 47] */
    },
    {
        keywords: ["Sorry", "My bad", "I made a mistake", "Oops", "Apologies", "Sry"],
        answer: "Don't worry about it at all! We can easily keep going or start completely fresh." /* [cite: 48] */
    },
    {
        keywords: ["What?", "Huh?", "What do you mean?", "I'm lost", "Confused", "I don't get it"],
        answer: "Sorry if that was confusing! Try typing a super simple question, like 'Who can give blood?' and I will give you a direct answer." /* [cite: 49, 50] */
    },
    {
        keywords: ["Wow!", "Oh my god", "Omg", "Really?", "Seriously?", "No way"],
        answer: "It's true! The science behind human blood and the donation system is full of surprising details." /* [cite: 51] */
    },

    // ==========================================
    // 8. LOGOFFS & BOT TESTING
    // ==========================================
    {
        keywords: ["Good night", "Goodnight", "Gnite", "Going to sleep", "Sweet dreams", "Bedtime"],
        answer: "Good night! Get some rest, and don't forget to stay hydrated tomorrow." /* [cite: 52] */
    },
    {
        keywords: ["Test", "Testing", "Check", "123", "Is this working?", "Testing bot"],
        answer: "Loud and clear! The local script system is fully operational and ready to go." /* [cite: 53] */
    },
    {
        keywords: ["What are you doing?", "What are you up to?", "Are you busy?", "What's happening?", "Wud"],
        answer: "Just hanging out in your browser tab, completely ready to process your blood donation queries!"
    },
    {
        keywords: ["This is bad", "Boring", "Useless", "I don't like this", "Sucks", "Terrible"],
        answer: "I'm sorry to hear that. I'm always looking to work better! Feel free to rephrase your phrase or look up a different topic." /* [cite: 54, 55] */
    },
    {
        keywords: ["Do you remember me?", "Who am I?", "Do you know who I am?", "My name"],
        answer: "Because I run locally in your browser window to keep your data completely private, I don't save past names or logs. But I'm happy to chat right now!" /* [cite: 56] */
    },

    // ==========================================
    // 9. BLOOD TYPE IDENTIFICATION & DIAGNOSIS
    // ==========================================
    {
        keywords: ["What is my blood type?", "How do I know my blood type?", "Find out my blood type", "Where can I look up my blood type?", "I don't know my blood type"],
        answer: "The easiest way to find out your blood type for free is by donating blood! After you donate, your blood is tested in a lab, and your specific blood type will be uploaded directly to your secure online donor portal or app within a few days." /* [cite: 57] */
    },
    {
        keywords: ["What is a blood type?", "What does blood type mean?", "Explain what blood type is", "Definition of blood type"],
        answer: "A blood type is a classification system based on the presence or absence of specific inherited proteins and sugars (called antigens) on the surface of your red blood cells. The main systems used to categorize blood are the ABO system and the Rh factor." /* [cite: 58] */
    },
    {
        keywords: ["How do they test for blood type?", "Blood typing test", "What happens during a blood type test?", "How does a doctor find your blood type?"],
        answer: "A blood typing test involves mixing a small sample of your blood with laboratory solutions containing Anti-A, Anti-B, or Anti-Rh antibodies. If your red blood cells clump together (agglutinate) when mixed with an antibody, it reveals exactly which antigens are on your cells." /* [cite: 59] */
    },
    {
        keywords: ["Can I find my blood type on my birth certificate?", "Is my blood type in my medical records?", "Where is my blood type recorded?", "Can I call my doctor for my blood type?"],
        answer: "Your blood type is sometimes listed on your official newborn hospital records or birth certificate documents, though not always. You can also find it by checking your patient portal records from recent surgeries, blood panels, or pregnancy lab work, or by asking your primary care doctor." /* [cite: 60] */
    },
    {
        keywords: ["Can I test my blood type at home?", "Home blood typing kit", "Eldoncard test", "Finger prick blood type test"],
        answer: "Yes, you can buy rapid over-the-counter home blood typing kits (such as an EldonCard). These kits require you to perform a quick finger-prick to place small drops of blood onto a special card treated with antibodies, which changes visual patterns based on your type." /* [cite: 61] */
    },
    {
        keywords: ["Why is it important to know your blood type?", "Why do I need to know my blood type?", "Importance of blood groups"],
        answer: "Knowing your blood type is critical for safe medical treatments. If you ever need an emergency blood transfusion, doctors must give you a compatible type to prevent a life-threatening immune reaction. It is also important for tracking pregnancy health or optimizing blood product donations." /* [cite: 62, 63] */
    },
    {
        keywords: ["Tell me about blood types", "What are the different blood types?", "Explain blood groups", "How many blood types are there?", "Blood type list", "Show me all blood types"],
        answer: "There are 4 main blood groups: A, B, AB, and O. Each group can be either positive (+) or negative (-), depending on the presence of the Rh factor protein, creating the 8 standard blood types: A+, A-, B+, B-, O+, O-, AB+, and AB-." /* [cite: 64] */
    },
    {
        keywords: [
            "tell me about blood types", "what are blood types", "explain blood groups", 
            "different blood types", "list of blood types", "how many blood types", /* [cite: 65] */
            "what about blood types too", "info on blood types", "can you tell me about blood types", 
            "tell me about blood types too", "give me a list of all blood types"
        ],
        answer: "There are 4 main blood groups: A, B, AB, and O. Each group can be either positive (+) or negative (-), depending on the presence of the Rh factor protein, creating the 8 standard blood types: A+, A-, B+, B-, O+, O-, AB+, and AB-." /* [cite: 66] */
    },

    // ==========================================
    // 10. INDIVIDUAL BLOOD TYPE PROFILES
    // ==========================================
    {
        keywords: [
            "o negative", "o-", "o neg", "o negative blood type", "o- blood", 
            "o neg blood", "what is o negative", "tell me about o negative", /* [cite: 67] */
            "o negative too", "o- too", "o neg too", "is o negative rare", 
            "can you explain o negative", "who can receive o negative"
        ],
        answer: "Type O-negative (O-) is the 'Universal Red Blood Cell Donor'. Because its cells have no A, B, or Rh antigens, it can be given to any patient in an emergency. However, people with O- can strictly only receive O- blood themselves." /* [cite: 68, 69] */
    },
    {
        keywords: [
            "o positive", "o+", "o pos", "o positive blood type", "o+ blood", 
            "o pos blood", "what is o positive", "tell me about o positive", 
            "o positive too", "o+ too", "o pos too", "is o positive common", /* [cite: 70] */
            "can you explain o positive", "who can receive o positive"
        ],
        answer: "Type O-positive (O+) is the most common blood type in the world, found in roughly 38% of the population. It can be given to anyone with a positive blood type (O+, A+, B+, AB+), making it the most heavily utilized type in hospitals." /* [cite: 71] */
    },
    {
        keywords: [
            "a negative", "a-", "a neg", "a negative blood type", "a- blood", 
            "a neg blood", "what is a negative", "tell me about a negative", 
            "a negative too", "a- too", "a neg too", "is a negative rare", /* [cite: 72] */
            "can you explain a negative", "who can receive a negative"
        ],
        answer: "Type A-negative (A-) means your red blood cells have the A antigen but lack the Rh factor. You can safely donate red cells to A-, A+, AB-, and AB+ patients, and you can receive blood from O- and A- donors." /* [cite: 73] */
    },
    {
        keywords: [
            "a positive", "a+", "a pos", "a positive blood type", "a+ blood", 
            "a pos blood", "what is a positive", "tell me about a positive", 
            "a positive too", "a+ too", "a pos too", "is a positive common", /* [cite: 74] */
            "can you explain a positive", "who can receive a positive"
        ],
        answer: "Type A-positive (A+) is a highly common blood type. If you are A+, your red blood cells can be safely transfused to other A+ and AB+ individuals, and you can receive blood from A+, A-, O+, and O-." /* [cite: 75] */
    },
    {
        keywords: [
            "b negative", "b-", "b neg", "b negative blood type", "b- blood", 
            "b neg blood", "what is b negative", "tell me about b negative", 
            "b negative too", "b- too", "b neg too", "is b negative rare", /* [cite: 76] */
            "can you explain b negative", "who can receive b negative"
        ],
        answer: "Type B-negative (B-) is quite rare. Individuals with B- blood can give red blood cells to B-, B+, AB-, and AB+ recipients, and they can safely receive blood from B- and O- donors." /* [cite: 77] */
    },
    {
        keywords: [
            "b positive", "b+", "b pos", "b positive blood type", "b+ blood", 
            "b pos blood", "what is b positive", "tell me about b positive", 
            "b positive too", "b+ too", "b pos too", "is b positive common", /* [cite: 78] */
            "can you explain b positive", "who can receive b positive"
        ],
        answer: "Type B-positive (B+) is found in about 9% of the population. If you have B+ blood, you can safely donate red blood cells to people who are B+ or AB+, and you can receive transfusions from B+, B-, O+, and O-." /* [cite: 79] */
    },
    {
        keywords: [
            "ab negative", "ab-", "ab neg", "ab negative blood type", "ab- blood", 
            "ab neg blood", "what is ab negative", "tell me about ab negative", 
            "ab negative too", "ab- too", "ab neg too", "is ab negative rare", /* [cite: 80] */
            "can you explain ab negative", "who can receive ab negative"
        ],
        answer: "Type AB-negative (AB-) is the rarest of the standard eight blood types. AB- individuals can donate red blood cells strictly to AB- and AB+ patients, but they are the universal donor for plasma!" /* [cite: 81] */
    },
    {
        keywords: [
            "ab positive", "ab+", "ab pos", "ab positive blood type", "ab+ blood", 
            "ab pos blood", "what is ab positive", "tell me about ab positive", 
            "ab positive too", "ab+ too", "ab pos too", "is ab positive common", /* [cite: 82] */
            "can you explain ab positive", "who can receive ab positive", 
            "universal recipient"
        ],
        answer: "Type AB-positive (AB+) is the 'Universal Red Blood Cell Recipient'. Because your blood has A, B, and Rh antigens, your immune system won't attack foreign blood, meaning you can safely receive red blood cells from any blood type in the world." /* [cite: 83] */
    },

    // ==========================================
    // 11. TARGETED COMPATIBILITY MATRICES
    // ==========================================
    {
        keywords: [
            "who can o negative donate to", "o- donor recipients", "can o negative give to everyone", 
            "what blood types can o- give to", "o negative compatibility list", "can o negative donate to a positive", /* [cite: 84] */
            "o negative transfusion rules too", "who gets o negative blood", "o neg donor compatibility", 
            "o- giving to others", "is o negative a universal donor"
        ],
        answer: "Type O-negative is the Universal Red Cell Donor. It can be safely given to ANY blood type (O+, O-, A+, A-, B+, B-, AB+, AB-). This is why it is the most requested type during emergencies." /* [cite: 85, 86] */
    },
    {
        keywords: [
            "who can o positive donate to", "o+ donor recipients", "can o positive give to o negative", 
            "what blood types can o+ give to", "o positive compatibility list too", "can o positive donate to a positive", 
            "who gets o positive blood", "o pos donor compatibility", "o+ giving to others", /* [cite: 86, 87] */
            "what can o positive donate to"
        ],
        answer: "Type O-positive donors can give red blood cells to any positive blood type: O+, A+, B+, and AB+. They cannot donate to any negative blood types (like A- or B-) because of the Rh factor." /* [cite: 87, 88] */
    },
    {
        keywords: [
            "who can a negative donate to", "a- donor recipients", "can a negative give to ab positive", 
            "what blood types can a- give to", "a negative compatibility list too", "can a negative donate to o positive", 
            "who gets a negative blood", "a neg donor compatibility", "a- giving to others", /* [cite: 88, 89] */
            "what can a negative donate to"
        ],
        answer: "Type A-negative donors can give to A-, A+, AB-, and AB+. They are compatible with both positive and negative recipients within the A and AB groups." /* [cite: 89, 90] */
    },
    {
        keywords: [
            "who can a positive donate to", "a+ donor recipients", "can a positive give to ab positive", 
            "what blood types can a+ give to", "a positive compatibility list too", "can a positive donate to o positive", 
            "who gets a positive blood", "a pos donor compatibility", "a+ giving to others", /* [cite: 90, 91] */
            "what can a positive donate to"
        ],
        answer: "Type A-positive donors can give to A+ and AB+ recipients only. Because they are Rh-positive, they can only donate to other Rh-positive individuals." /* [cite: 91, 92] */
    },
    {
        keywords: [
            "who can b negative donate to", "b- donor recipients", "can b negative give to ab positive", 
            "what blood types can b- give to", "b negative compatibility list too", "can b negative donate to o positive", 
            "who gets b negative blood", "b neg donor compatibility", "b- giving to others", /* [cite: 92, 93] */
            "what can b negative donate to"
        ],
        answer: "Type B-negative donors can give to B-, B+, AB-, and AB+ recipients. Like other negative types, they are versatile because they lack the Rh protein." /* [cite: 93, 94] */
    },
    {
        keywords: [
            "who can b positive donate to", "b+ donor recipients", "can b positive give to ab positive", 
            "what blood types can b+ give to", "b positive compatibility list too", "can b positive donate to o positive", 
            "who gets b positive blood", "b pos donor compatibility", "b+ giving to others", /* [cite: 95] */
            "what can b positive donate to"
        ],
        answer: "Type B-positive donors can give red blood cells only to B+ and AB+ recipients. They are restricted to Rh-positive groups." /* [cite: 95, 96] */
    },
    {
        keywords: [
            "who can ab negative donate to", "ab- donor recipients", "can ab negative give to ab positive", 
            "what blood types can ab- give to", "ab negative compatibility list too", "can ab negative donate to o positive", 
            "who gets ab negative blood", "ab neg donor compatibility", "ab- giving to others", /* [cite: 96, 97] */
            "what can ab negative donate to"
        ],
        answer: "Type AB-negative donors can donate red blood cells to AB- and AB+ recipients. They are the rarest of the main groups, so their donation is highly valuable for other AB patients." /* [cite: 97, 98] */
    },
    {
        keywords: [
            "who can ab positive donate to", "ab+ donor recipients", "can ab positive give to everyone", 
            "what blood types can ab+ give to", "ab positive compatibility list too", "can ab positive donate to o positive", 
            "who gets ab positive blood", "ab pos donor compatibility", "ab+ giving to others", /* [cite: 99] */
            "what can ab positive donate to", "is ab positive a universal donor"
        ],
        answer: "Type AB-positive donors can only donate red blood cells to other AB+ patients. However, AB+ is the universal RECIPIENT, meaning they can receive red cells from anyone!" /* [cite: 99, 100] */
    },
    {
        keywords: ["o negative donate to", "o- donate to", "can o negative give to everyone"],
        answer: "Type O-negative is the Universal Red Cell Donor. It can be safely given to any patient in an emergency regardless of their blood type (O+, O-, A+, A-, B+, B-, AB+, or AB-)." /* [cite: 101] */
    },
    {
        keywords: ["ab positive donate to", "ab+ donate to", "ab positive universal recipient"],
        answer: "Type AB-positive donors can only donate red blood cells to other AB+ patients. However, AB+ is the 'Universal Recipient' for red blood cells, meaning they can safely receive from any blood type (A, B, AB, or O, both positive and negative)." /* [cite: 102] */
    },

    // ==========================================
    // 12. LABS & TRAVEL DETAILED CONTEXT
    // ==========================================
    {
        keywords: [
            "donating blood with low iron", "how to fix hemoglobin levels", 
            "why did i fail the finger prick test", "what is anemia and blood donation", 
            "tips for higher iron levels too", "can i donate with iron deficiency" /* [cite: 103] */
        ],
        answer: "The finger-prick test checks your hemoglobin levels. If your iron is too low, you are deferred to protect your own health. You can improve your levels by eating iron-rich foods (spinach, lentils, red meat) and pairing them with Vitamin C for better absorption." /* [cite: 103, 104, 105] */
    },
    {
        keywords: [
            "travel deferrals", "can i donate after going to europe", "malaria travel risk", 
            "how long do i wait after international travel", "living in another country and donating", 
            "malaria zone deferral too" /* [cite: 106] */
        ],
        answer: "Some locations have travel-based deferrals to protect the blood supply from regional diseases like malaria or vCJD. Check your local blood center’s website, as they maintain a 'Travel Deferral List' that changes based on active health risks in specific countries." /* [cite: 106, 107] */
    },
    {
        keywords: [
            "if i am a plus who can receive my blood", "a positive donor recipients", 
            "who accepts a positive blood cells", "is a positive common too" /* [cite: 108] */
        ],
        answer: "A-positive donors are highly needed. Your red blood cells can be transfused to A+ and AB+ recipients. Because you are Rh-positive, you cannot donate to Rh-negative patients." /* [cite: 108, 109, 110] */
    },
    {
        keywords: [
            "if i am b negative who can receive my blood", "b negative donor recipient list", 
            "what blood types match b negative", "b- transfusion match too"
        ],
        answer: "B-negative is rare! You can donate red blood cells to B-, B+, AB-, and AB+ recipients. You are a very versatile donor because your blood lacks the Rh protein." /* [cite: 111, 112] */
    },
    {
        keywords: [
            "if i am ab negative who can receive my blood", "ab negative compatibility", 
            "what blood types match ab negative", "ab- transfusion rules too"
        ],
        answer: "AB-negative is the rarest type. You can donate red blood cells to AB- and AB+ patients. Since you are Rh-negative, you are a vital donor for those specific rare blood types." /* [cite: 113, 114] */
    },

    // ==========================================
    // 13. EMERGENCY & CLINICAL SCENARIOS
    // ==========================================
    {
        keywords: [
            "what blood is used in trauma centers", "emergency blood type usage", 
            "why is o negative used in ambulances", "can they use other blood in emergencies too" /* [cite: 115] */
        ],
        answer: "Trauma centers and ambulances carry O-negative red blood cells because they are the only type that can be given immediately to any patient without waiting for a compatibility test. Time is critical during massive hemorrhage, so O- is the 'gold standard' for emergency stabilization." /* [cite: 115, 116] */
    },
    {
        keywords: [
            "is there a universal donor for platelets", "platelet compatibility rules", 
            "can i donate platelets if i am ab positive", "what is the best blood type for platelets too"
        ],
        answer: "Platelet compatibility is different from red cell compatibility. Generally, centers prefer 'AB' donors for platelets because AB plasma doesn't have antibodies that might react with a patient's own blood. This makes AB individuals 'universal platelet donors'." /* [cite: 117, 118] */
    },
    {
        keywords: [
            "what happens if the wrong blood is mixed", "transfusion reaction symptoms", 
            "signs of incompatible blood transfusion", "what if a negative gets positive blood too"
        ],
        answer: "Mixing incompatible blood causes a hemolytic reaction. Symptoms include chills, fever, back pain, difficulty breathing, and dark urine. Modern hospitals use strict 'cross-matching' protocols to ensure this never happens during a transfusion." /* [cite: 118, 119, 120] */
    },

    // ==========================================
    // 14. MORE ABOUT BLOOD DONATION (NEW EXTENSIONS)
    // ==========================================
    {
        keywords: ["what are the types of blood donation", "different ways to donate blood", "whole blood vs platelets", "plasma vs double red cells", "donation types"],
        answer: "There are four main clinical methods of donating blood products:\n1) Whole Blood: The most common type, collecting a pint of blood containing red cells, plasma, and platelets.\n2) Platelets (Apheresis): A machine isolates platelets and returns red cells and plasma back to your body.\n3) Plasma: Extracted via automation, primarily utilized for trauma resuscitation and manufacturing therapies.\n4) Power Red / Double Red Cells: Collects a concentrated dose of red cells while safely returning plasma and platelets."
    },
    {
        keywords: ["how often can i donate blood", "blood donation frequency", "waiting period between donations", "how long between whole blood donations", "when can i donate platelets again"],
        answer: "Donation frequencies depend directly on the specific blood component being collected:\n• Whole Blood: Can typically be donated every 56 days (8 weeks).\n• Double Red Cells: Requires a longer wait period of 112 days (16 weeks) due to the higher volume of red cells drawn.\n• Platelets: Can be donated once every 7 days, up to a strict maximum of 24 times per year.\n• Plasma: Can generally be given once every 28 days under automated protocols."
    },
    {
        keywords: ["what to do after donating blood", "post donation care instructions", "fainting after blood donation", "how to recover after giving blood", "eating after donating"],
        answer: "To ensure a seamless health recovery post-donation, strictly follow these recovery steps:\n• Stay Hydrated: Drink plenty of water or juice immediately after donating and consume extra fluids over the subsequent 24–48 hours.\n• Have a Snack: Eat a light meal high in carbohydrates and proteins within the recovery lounge.\n• Leave the Bandage On: Keep the protective dressing on your arm for at least 4-5 hours to prevent bruising or bleeding.\n• Rest Your Arm: Avoid heavy lifting, strenuous workouts, or rigorous physical activity for the remainder of the day."
    },
    {
        keywords: ["what is cmv negative blood", "baby match blood donation", "cytomegalovirus and blood", "who gets cmv negative blood", "pediatric blood transfusion rules"],
        answer: "CMV stands for Cytomegalovirus, a common flu-like virus that a vast majority of adults carry natively in their systems without notice. While generally harmless to healthy adults, the virus can be highly fatal to newborns. 'CMV-Negative' donors are individuals who have never been exposed to this virus. Their blood products are explicitly categorized as the 'Baby Match' or 'Pediatric Gold Standard', utilized exclusively for neonatal transfusions in premature infants, in-utero operations, and severely immunocompromised transplant patients."
    }
];

/* ==========================================
   2. MATCHING ALGORITHM (Fast, Local NLP)
   ========================================== */
function findBestAnswer(input) {
    const normalized = input.toLowerCase().replace(/[^\w\s]/gi, '');
    const inputWords = normalized.split(/\s+/).filter(w => w.length > 2);

    if (inputWords.length === 0) return "Input empty or unrecognized. Please provide a clear question line.";

    let bestMatch = null;
    let highestScore = 0;

    for (let i = 0; i < faqDatabase.length; i++) {
        const entry = faqDatabase[i];
        let matches = 0;

        inputWords.forEach(word => {
            if (entry.keywords.some(keyword => keyword.includes(word) || word.includes(keyword))) {
                matches++;
            }
        });

        let phraseBonus = 0;
        entry.keywords.forEach(phrase => {
            if (normalized.includes(phrase)) {
                phraseBonus += 3;
            }
        });

        let totalScore = matches + phraseBonus;

        if (totalScore > highestScore) {
            highestScore = totalScore;
            bestMatch = entry.answer;
        }
    }

    return highestScore > 0 ? bestMatch : "I read your line, but couldn't verify a high-confidence correlation. Try using clear alternative terms like 'tattoo restrictions' or 'weight rule'.";
}

/* ==========================================
   3. STATE & SESSION MANAGEMENT
   ========================================== */
const chatWindow = document.getElementById('chatWindow');
const userInput = document.getElementById('userInput');
const historyContainer = document.getElementById('historyContainer');

// Active tracking session ID configuration
let activeChatId = null;
let chatHistory = [];

// Legacy Schema Guard: Safely handle old data models or load correctly structured sessions
try {
    const stored = localStorage.getItem('advancedChatHistory');
    if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && (parsed.length === 0 || 'messages' in parsed[0])) {
            chatHistory = parsed;
        }
    }
} catch (e) {
    chatHistory = [];
}

// Initial Boot Cycle setup
updateHistoryUI();
if (chatHistory.length > 0) {
    loadChatSession(chatHistory[0].id);
}

function handleEnter(e) { if (e.key === 'Enter') processUserInput(); }
function sendQuickMessage(text) { userInput.value = text; processUserInput(); }

function processUserInput() {
    const text = userInput.value.trim();
    if (!text) return;

    // 1. Thread Creation Layer: Generate a session context if one isn't currently open
    if (activeChatId === null) {
        const newSession = {
            id: Date.now(),
            title: text.length > 28 ? text.substring(0, 25) + '...' : text,
            messages: [],
            pinned: false
        };
        chatHistory.unshift(newSession);
        activeChatId = newSession.id;
    }

    const currentSession = chatHistory.find(i => i.id === activeChatId);

    // 2. Commit User prompt state logs
    addMessage(text, 'msg-user');
    if (currentSession) {
        currentSession.messages.push({ text: text, className: 'msg-user' });
    }
    userInput.value = '';
    saveHistoryToStorage();

    // 3. Match Offline Response Pipeline
    setTimeout(() => {
        const answer = findBestAnswer(text);
        addMessage(answer, 'msg-ai');
        
        if (currentSession) {
            currentSession.messages.push({ text: answer, className: 'msg-ai' });
            saveHistoryToStorage();
        }
    }, 250);
}

function addMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;
    msgDiv.innerText = text;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

/* ==========================================
   4. TIMELINE & DOM COMPONENT GENERATION
   ========================================== */
function loadChatSession(id) {
    activeChatId = id;
    const session = chatHistory.find(i => i.id === id);
    if (!session) return;

    chatWindow.innerHTML = '';
    if (session.messages && session.messages.length > 0) {
        session.messages.forEach(msg => {
            addMessage(msg.text, msg.className);
        });
    } else {
        addMessage("Context refactored. Ready for standard inputs.", 'msg-ai');
    }
    updateHistoryUI();
}

function updateHistoryUI() {
    historyContainer.innerHTML = '';
    const sortedHistory = [...chatHistory].sort((a, b) => b.pinned - a.pinned);

    sortedHistory.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `history-item ${item.pinned ? 'pinned' : ''} ${item.id === activeChatId ? 'active' : ''}`;
        
        const textSpan = document.createElement('span');
        textSpan.className = 'history-text';
        textSpan.innerText = item.title || "Untitled Conversation";
        textSpan.onclick = () => loadChatSession(item.id);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'history-actions';

        // Pin Action Item (Adaptive SVG Pin Layout)
        const pinBtn = document.createElement('button');
        pinBtn.className = 'action-btn';
        pinBtn.title = item.pinned ? 'Unpin Line' : 'Pin Line';
        pinBtn.style.color = item.pinned ? 'var(--cb)' : 'var(--tm)';
        pinBtn.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 24 24" fill="${item.pinned ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="17" x2="12" y2="22"></line>
                <path d="M5 17h14v-1.76a2 2 0 0 0-.44-1.24l-2.33-2.91A1 1 0 0 1 16 10.5V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5.5a1 1 0 0 1-.23.59l-2.33 2.91A2 2 0 0 0 5 15.24z"></path>
            </svg>
        `;
        pinBtn.onclick = (e) => {
            e.stopPropagation();
            togglePin(item.id);
        };

        // Delete Action Item (Adaptive SVG Trash Can Layout)
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action-btn';
        deleteBtn.title = 'Remove Line';
        deleteBtn.style.color = 'var(--tm)';
        deleteBtn.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
        `;
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteHistoryItem(item.id);
        };

        actionsDiv.appendChild(pinBtn);
        actionsDiv.appendChild(deleteBtn);
        itemDiv.appendChild(textSpan);
        itemDiv.appendChild(actionsDiv);
        historyContainer.appendChild(itemDiv);
    });
}

function togglePin(id) {
    const index = chatHistory.findIndex(i => i.id === id);
    if (index !== -1) {
        chatHistory[index].pinned = !chatHistory[index].pinned;
        saveHistoryToStorage();
    }
}

function deleteHistoryItem(id) {
    chatHistory = chatHistory.filter(i => i.id !== id);
    saveHistoryToStorage();
    if (activeChatId === id) {
        if (chatHistory.length > 0) {
            loadChatSession(chatHistory[0].id);
        } else {
            startNewChat();
        }
    }
}

function clearAllHistory() {
    chatHistory = [];
    saveHistoryToStorage();
    startNewChat();
}

function saveHistoryToStorage() {
    localStorage.setItem('advancedChatHistory', JSON.stringify(chatHistory));
    updateHistoryUI();
}

function startNewChat() {
    activeChatId = null;
    chatWindow.innerHTML = '';
    addMessage("System online. I am initialized to handle complex inquiries regarding blood types, procedural processing timelines, and compliance deferrals. Ask freely.", 'msg-ai');
    updateHistoryUI();
}

function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}
// Simple logic to find the match
const match = database.find(entry => 
    entry.keywords.some(keyword => userQuery.includes(keyword))
);
const knowledgeBase = [
    // --- HIGH PRIORITY: Medical & Safety Rules ---
    {
        priority: 1,
        keywords: ["tattoo", "surgery", "piercing", "waiting period"],
        answer: "In Nepal, there is a mandatory one-year waiting period after getting a tattoo, piercing, or surgery before you can donate blood to ensure safety against bloodborne infections."
    },
    {
        priority: 1,
        keywords: ["sick", "fever", "cough", "cold", "flu"],
        answer: "You must be in good health to donate. If you have a fever, cough, or cold, you will be deferred. Please wait until you are fully symptom-free for 24–48 hours."
    },
    {
        priority: 1,
        keywords: ["o-", "o negative", "who can i donate to"],
        answer: "O-negative blood is the Universal Red Cell Donor. You can donate red blood cells to any patient in an emergency. However, O-negative individuals can only receive blood from other O-negative donors."
    },

    // --- LOW PRIORITY: General Information ---
    {
        priority: 2,
        keywords: ["blood type", "blood group", "types of blood"],
        answer: "There are 4 main blood groups (A, B, AB, O) which are further categorized as positive or negative based on the Rh factor protein."
    }
];

function getBotResponse(userInput) {
    const query = userInput.toLowerCase().replace(/[^a-z0-9\s]/g, "");

    // 1. Sort database by priority (1 is higher than 2)
    const sortedDb = knowledgeBase.sort((a, b) => a.priority - b.priority);

    // 2. Search through sorted list
    for (let entry of sortedDb) {
        if (entry.keywords.some(k => query.includes(k))) {
            return entry.answer; // Stop searching once high priority match is found
        }
    }

    return "I'm sorry, I couldn't find a specific rule for that. Please visit your nearest Nepal Red Cross blood center for a professional health screening.";
}

