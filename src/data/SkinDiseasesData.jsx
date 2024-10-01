//for skin condition page
import acne from '../assets/images/skin-condition/acne-skin-condition.jpg'
import rosacea from '../assets/images/skin-condition/rosacea-skin-condition.jpg'
import eczema from '../assets/images/skin-condition/eczema-skin-condition.jpg'
import perioral from '../assets/images/skin-condition/perioral-skin-condition.jpg'
import seborrhoeic from '../assets/images/skin-condition/seborrhoeic-skin-condition.jpg'
import psoriasis from '../assets/images/skin-condition/psoriasis-skin-condition.jpg'
import tinea from '../assets/images/skin-condition/tinea-skin-condition.jpg'



//image for skin diseases full details
import acne1 from '../assets/images/skin-details/acne1-details.jpg'
import acne2 from '../assets/images/skin-details/acne2-details.jpg'
import rosacea1 from '../assets/images/skin-details/rosacea1-details.jpg'
import rosacea2 from '../assets/images/skin-details/rosacea2-details.jpg'
import eczema1 from '../assets/images/skin-details/eczema1-details.jpg'
import psoriasis1 from '../assets/images/skin-details/psoriasis1-details.jpg'
import psoriasis2 from '../assets/images/skin-details/psoriasis2-details.jpg'
import perioral1 from '../assets/images/skin-details/perioral1-details.jpg'
import perioral2 from '../assets/images/skin-details/perioral2-details.jpg'
import seborrhoeic1 from '../assets/images/skin-details/seborrhoeic1-details.jpg'
import seborrhoeic2 from '../assets/images/skin-details/seborrhoeic1-details.jpg'
import tinea1 from '../assets/images/skin-details/tinea1-details.jpg'
import tinea2 from '../assets/images/skin-details/tinea2-details.jpg'

export const skinConditionData = [
    {
        name: 'Acne',
        img: acne,
        img1: acne1,
        img2: acne2,
        definition: `Acne is a common chronic illness that affects the hair follicles and sebaceous glands, causing follicular growth, obstruction, and irritation. There are various variations.\n
        Acne affects men and women of all races and ethnicities. It is widespread in teenagers and young adults, affecting 85% of those aged 16 to 18. However, it can occur in children and adults of all ages.`,
        causes: `Acne is the result of a mix of causes. The specific mechanics are not completely understood..
        \t•Familia tendency 
        \t•Endogenous and exogenous androgenic hormones
        \t•Acne bacteria
        \t•Innate immune activation with inflammatory mediators
        \t•Distension and occlusion of the hair follicles\n
        Flares of acne can be provoked by:
        \t•Polycystic ovarian disease
        \t•Drugs: steroids, hormones, anticonvulsants, epidermal growth factor receptor inhibitors and others
        \t•Application of occlusivecosmetics
        \t•High environmental humidity
        \t•Diet high in dairy products and high glycaemic foods.`,
        symptops: `Acne is often confined to the face but it may involve the neck, chest, and back.\n
        It is distinguished by:
        \t•Open and closed uninflamed comedones (blackheads and whiteheads)
        \t• Inflamed papules and pustules
        \t•In severe acne, nodules and pseudocysts
        \t•Post-inflammatory erythematous or pigmented macules and scars 
        \t•Adverse social and psychological effects.\n
        Severity is classified as mild, moderate, or severe.
        \t• Mild acne: total lesion count <30
        \t•Moderate acne: total lesion count 30–125
        \t•Severe acne: total lesion count >125
        `,
        treatment:`Mild acne:
        \t•Topical anti-acne agents, such as benzoyl peroxide, azelaic acid, and tretinoin or adapalene gel and some antibiotics (clindamycin). New bioactive proteins may also prove successful.
        \t•Newer topical agents such as clascoterone
        \t•Newer topical agents such as clascoterone
        \t•Antiseptic or keratolytic washes containing salicylic acid
        \t•Light/laser therapy\n
        Moderate acne
        \t•As for mild acne plus a tetracycline such as doxycycline 50–200 mg daily for 6 months or so
        \t•Erythromycin or trimethoprim if doxycycline intolerant
        \t•Antiandrogen therapy with long-term cyproterone acetate + ethinylestradiol or spironolactone may be considered in women not responding to low-dose combined oral contraceptive, particularly for women with polycystic ovaries
        \t•Isotretinoin is often used if acne is persistent or treatment-resistant
        \t•Intralesional steroid injections can be useful for acute larger acne lesions\n
        Severe Acne
        \t•Referral to a dermatologist
        \t•If fever, arthralgia, bone pain, ulcerated or extensive skin lesions, blood count should be arranged and referral is urgent
        \t•Oral antibiotics are often used in higher doses than normal
        \t•Oral isotretinoin is usually recommended in suitable patients
        `,
        source: 'DermNet',
        link:'https://dermnetnz.org/topics/acne'
    },


    {
        name: 'Rosacea',
        img: rosacea,
        img1: rosacea1,
        img2: rosacea2,
        definition:`Rosacea is a chronic inflammatory skin condition that primarily affects the middle face and most commonly begins between the ages of 30 and 60.\n
        Rosacea is a prevalent condition defined by persistent face redness. It usually has a relapsing and remitting course, with symptoms managed with lifestyle changes, general skin care, medicines, and procedural procedures \n
        Rosacea is believed to affect approximately 5% of persons worldwide. Although rosacea is commonly assumed to affect more women than males, research have found a about equal gender distribution.\n
       Rosacea usually appears after the age of 30 and gets more common with age. However, it can occur at any age and is occasionally seen in youngsters. Although rosacea can affect anyone, it is more common in those with fair skin, blue eyes, and those of Celtic or North European descent. It may be more difficult and under-recognized in patients with colored skin.`,
        symptops:`Cutaneous characteristics include:
        \t•Transient recurrent erythema, ie, flushing
        \t•Persistent facial erythema
        \t•Inflammatory papules and pustules (papulopustular)
    `,
        causes:`The pathogenesis of rosacea is thought to be multifactorial and includes:
        \t•Genetic susceptibility
        \t\t-Association with single nucleotide polymorphisms related to the class II major histocompatibility complex.
        \t•Altered microbiome of the skin and gut
        \t\t-Bacterial overgrowth of the small intestine, Helicobacter pylori infection, and increased density of Demodex folliculorum and Staphylococcus epidermidis on the skin may play a role in skin inflammation.
        \t\t-Dysregulation of the immune response may lead to excessive inflammation, vasodilation , lymphatic dilatation, and angiogenesis.
        \t•Neurocutaneous mechanisms
        \t\t-Triggers include ultraviolet (UV) radiation, temperature change, exercise, spicy foods, alcohol, psychological stress, air pollution, and tobacco smoking. Calcitonin gene-related peptide (CGRP) may play a role in flushing and erythema.
        \t•Impaired skin barrier
        \t\t-Affected skin displays features indicating skin barrier impairment, allowing bacterial colonisation and inflammation.
        `,
        source:`DermNet`,
        treatment:`Rosacea has no known cure, however the following lifestyle choices, medications, and surgical procedures can help manage symptoms.
        \t•General measures
        \t\t-Every rosacea patient should be instructed in general skincare and lifestyle practices.
        \t•Lifestyle advice
        \t\t-To help identify triggers, encourage patients to keep a journal of their symptoms. Common triggers include spicy food, hot or cold temperatures (hot baths), exercise, sun exposure, cosmetics, medications (especially those that cause vasodilation), alcohol, fruits and vegetables, dairy, and products with marinated meat.
        \t•General skincare advice
        \t\t-Moisturise frequently
        \t\t-Use gentle over-the-counter cleansers
        \t\t-Avoid exfoliants
        \t\t-Avoid alcohol-based topical products
        \t\t-Avoid use of topical steroids as they may aggravate the condition
        \t\t-Cosmetics with a green tint are useful to minimise the appearance of redness.
        \t•Cosmetics with a green tint are useful to minimise the appearance of redness.
        \t\t-Determine the psychosocial impact of the patient's illness and, if required, suggest a referral for psychiatric assistance.
     
        `,
        link:`https://dermnetnz.org/topics/rosacea`
    },
    {
        name: 'Eczema',
        img: eczema,
        img1: eczema1,
        img2: ``,
        definition:`Eczema on your face is a skin ailment that causes itching, dryness, and flaking. Eczema hinders your skin's natural barrier from working properly, making it more vulnerable to irritants and allergies. Although there is no cure for eczema on the face, there are treatments available to alleviate symptoms.\n
        Eczema affects somewhat more than 10% of the US population, or roughly one out of every ten individuals. Eczema symptoms are unique to each individual and can occur in a variety of sites on the body, including the face.`,
    
        symptops:`Symptoms of eczema on your face range from mild to severe and include:
        \t•Swelling (inflammation).
        \t•Itchy skin.
        \t•A rash with red to purple to dark brown skin discoloration.
        \t•Dry, scaly or flaky patches of skin.
        \t•Sore feeling.
        \t•Wrinkled skin underneath your eyes.
        \t•Small bumps or blisters.`,
        causes:`Multiple factors cause eczema on your face, including:
        \t•Irritants in your surroundings: Whether you have allergies or not, there are many things in your environment that can cause skin irritation, including plants and animals, soaps and detergents, garment fibers, air pollutants such as smoking, and humidity levels.
        \t•An overactive immune system: Your immune system defends your body against foreign invaders such as germs and viruses that can make you sick. If you have eczema, your immune system may misidentify your skin cells, minor irritants, or allergens in your environment as alien invaders and fight them. This causes your skin to enlarge (inflammation) and itch.
        \t•Genetics: Your genes are the fundamental components of your body. A change in your DNA sequence (genetic mutation) might influence how proteins in your body maintain the epidermal barrier that protects you from the environment. If you have a family history of face eczema, you may be more likely to get it.
        `,
        source:`Cleaveland Clinic`,
        treatment:`Treatment for eczema on your face is unique to your skin and what caused your flare-up. Treatment could include:
        \t•Using gentle or sensitive skin moisturizers or lotions.
        \t•Light therapy to reduce the appearance of skin blemishes.
        \t•Applying anti-inflammatory medications (topical steroids or topical calcineurin inhibitors) to your skin.
        \t•Taking medications like antihistamines, corticosteroids to reduce swelling and inflammation or immunosuppressant drugs to regulate the function of your immune system.
        `,
        link:`https://my.clevelandclinic.org/health/diseases/24604-eczema-on-face`
    },


    {
        name: 'Psoriasis',
        img: psoriasis,
        img1: psoriasis1,
        img2: psoriasis2,
        definition:`Facial psoriasis is a chronic skin ailment characterized by persistent, thickened, red, and dry spots on the face.\n
        Psoriasis is a widespread chronic inflammatory skin condition that can affect any skin spot. Approximately half of persons with psoriasis get facial involvement at some point. face psoriasis is normally minor, although it can occasionally be very severe, affecting the hairline, forehead, neck, ears, and face skin.\n
        It is quite rare to have psoriasis that only affects the face. The majority of individuals have scalp psoriasis, and they may also have moderate to severe psoriasis elsewhere.\n
        Patients with facial psoriasis often experience psychosocial issues due to the development of unattractive red, scaly plaques on visible areas.`,
        symptops:`Facial psoriasis has various clinical presentations. There are three main subtypes:
        \t•Hairline psoriasis
        \t•Sebo-psoriasis
        \t•True facial psoriasis.`,
        causes:`Facial psoriasis has the same causes as other types of psoriasis. Psoriasis is related with improper immune system activation, which causes inflammation and increased skin cell proliferation. Although there is a hereditary propensity, environmental factors such as stress, infection, trauma, and some drugs have a crucial role.\n
        Facial psoriasis may also be aggravated by:
        \t•Ultraviolet radiation — some patients have photosensitivity where the psoriasis is aggravated by exposure to the sun
        \t•Skin flora, particularly the yeast Malassezia
        \t•Smoking.`,
        source:`DermnNet`,
        treatment:`While there is no cure for face psoriasis, most patients can achieve sufficient control by topical medication. General skin care can include:
        \t•Sunscreens, if required.
        \t•Gentle non-soap cleansers
        \t•Moisturisers
        `,
        link:`https://dermnetnz.org/topics/facial-psoriasis`
    },


    {
        name: 'Seborrheic Dermatitis',
        img: seborrhoeic,
        img1: seborrhoeic1,
        img2: seborrhoeic2,
        definition:`Seborrhoeic dermatitis is a chronic or relapsing eczema/dermatitis that primarily affects the scalp, face, and trunk, where sebaceous glands are concentrated.\n
        There are infantile and adult forms of seborrhoeic dermatitis. This benign inflammatory condition is sometimes associated with psoriasis and is known as sebopsoriasis. Seborrhoeic dermatitis is also known as seborrhoeic eczema (“seborrheic” in American English).`,
        symptops:`\t•Infantile seborrhoeic dermatitis
        \t\t-Infantile seborrhoeic dermatitis causes cradle cap (diffuse, greasy scaling on the scalp). The rash may spread to affect armpit and groin folds (a type of napkin dermatitis).
        \t•Adult seborrhoeic dermatitis
        \t\t-Seborrheic dermatitis commonly affects areas of the skin with high sebum production, such as the scalp, nasolabial folds, glabella, eyebrows, beard, ears, retroauricular skin, sternum, and other skin folds.
        \t•Adult seborrhoeic dermatitis
        \t\t-Seborrheic dermatitis commonly affects areas of the skin with high sebum production, such as the scalp, nasolabial folds, glabella, eyebrows, beard, ears, retroauricular skin, sternum, and other skin folds.`,
    
        causes:`Several causes contribute to the disease, including hormone imbalances, fungal infections, nutritional deficiencies, and neurogenic variables. The Malassezia yeast genus is thought to play a function. Malassezia, a saprophyte of normal skin, produces lipases and phospholipases that break down triglycerides in sebum to release free fatty acids. This may cause irritation. Individual presentations may be explained by differences in the skin barrier's lipid composition and function.`,
        source:`DermNet`,
        treatment:`\t•General measures
        \t\t-Educating the patient about the skin condition and appropriate skincare routine.
        \t\t-Identifying modifiable lifestyle factors e.g. a high fruit intake is associated with less seborrheic dermatitis whereas stress may precipitate flare-ups.
        \t•Face, ears, chest, and back
        \t\t-Cleanse the affected skin thoroughly once or twice each day using a non-soap cleanser.
        \t\t-Apply ketoconazole or ciclopirox cream once daily for 2 to 4 weeks, repeated as necessary.
        \t\t-Hydrocortisone cream can also be used, applied up to twice daily for 1 or 2 weeks. Occasionally a more potent topical steroid may be prescribed.
        \t\t-A variety of herbal remedies are commonly used, but their efficacy is uncertain.`,
        link:`https://dermnetnz.org/topics/seborrhoeic-dermatitis`
    },


    {
        name: 'Perioral Dermatitis',
        img: perioral,
        img1: perioral1,
        img2: perioral2,
        definition:`Perioral (periorificial) dermatitis (POD) is a rather frequent chronic inflammatory skin eruption. As the name implies, it preferentially targets cutaneous orifices, such as the eyes, nostrils, mouth, and, on occasion, the genitals.\n
        Periorificial dermatitis can be restricted to a single orifice, when it is more accurately termed::
        \t•Perioral dermatitis (classic site affected)
        \t•Periocular dermatitis
        \t•Perinasal dermatitis
        \t•Genital periorificial dermatitis (involving the labia majora, scrotum or anus).`,
        symptops:`Cutaneous features of periorificial dermatitis include:
        \t•An acneiform eruption
        \t•Burning sensation or skin tightness
        \t•Scaly and flaky skin surface
        \t•Itch
        \t•Surrounding skin is often dry`,
        causes:`It is unclear what caused the issue. A proposed mechanism suggests that epidermal dysfunction is the primary disruption, leading in:
        \t•Increased penetration of exogenous agents through the stratum corneum, triggering an irritation reaction
        \t•Enhancing trans-epidermal water loss resulting in tightness and dryness, causing patients to increase use of topical products, leading to further irritation.\n
        Pain is uncommon, but skin sensitivity is widespread, and patients are otherwise systemically healthy.`,
        source:`DermNet`,
        treatment:`Periorificial dermatitis is a benign, self-limiting disorder that has no systemic implications. However, the patient may find it cosmetically unappealing, resulting in a considerable illness burden and psychological suffering. Periorificial dermatitis typically responds well to therapy.\n
        The POD Severity Index (PODSI) has been used in the literature to assess disease severity and response to treatment.\n
        General measures
        \t•The zero-therapy approach should be utilised in all POD patients and may result in complete resolution of mild cases. Advise patients to:
        \t\t-Stop all facial cosmetics and topical products, including sunscreens and emollients
        \t•A bland emollient without preservatives/additives can be used for skin dryness. Avoid occlusive creams and ointments as they can worsen POD.
        \t•A gel or liquid sunscreen can be used
        \t•Specific measures
        Topical and/or systemic treatments are available; duration is usually 4–8 weeks but may require an extension. Recurrence can occur if treatment is too short. `,

        link:`https://dermnetnz.org/topics/periorificial-dermatitis`
    },


    {
        name: 'Tinea Faciei​',
        img: tinea,
        img1: tinea1,
        img2: tinea2,
        definition:`Tinea faciei refers to facial infection caused by a dermatophyte fungus. It excludes infection of the beard and mustache area, known as tinea barbae. Tinea faciei is rare and frequently misdiagnosed at first.\n
        Tinea faciei can be caused by an anthropophilic (human) fungus known as Trichophyton rubrum. Infection usually begins in the feet (tinea pedis) or nails (tinea unguium). Zoophilic (animal) fungi, such as Microsporum canis (M canis), are commonly obtained from cats and dogs, as well as T verrucosum from agricultural cattle.\n`,
        symptops:`Tinea faciei resembles tinea corporis (ringworm). The rash can be acute (onset and spread quickly) or chronic (slow progression of a mild, scarcely inflamed rash). There are round or oval red scaly patches that are usually less red and scaly in the center or have healed in the center. Lesions are frequently asymmetrical and unilateral. It is frequently worsened by sunlight. It may also appear as a kerion (fungal abscess).\n
        It is critical to seek for and treat tinea infection elsewhere (such as the feet, groins, and nails), as well as to identify, isolate, and treat the source animal if a zoophilic infection exists.\n
        Tinea faciei is often misdiagnosed as a non-fungal condition such as:
        \t•Atopic dermatitis
        \t•Seborrhoeic dermatitis
        \t•Rosacea
        \t•Perioral dermatitis
        \t•Polymorphous light eruption
        \t•Cutaneous lupus erythematosus\n
        Misdiagnosis is particularly common in those treated with topical steroids or oral steroids (tinea incognita).`,
        causes:``,
        source:`DermNet`,
        treatment:`Tinea faciei is often treated with topical antifungal drugs; however, if this is ineffective, oral antifungal medications such as terbinafine and itraconazole may be tried.\n
        In recent years, antifungal drug resistance has made treatment more challenging.`,
        link:`https://dermnetnz.org/topics/tinea-faciei`
    }
]