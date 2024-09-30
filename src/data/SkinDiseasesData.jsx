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
//to ensure that \n works as a br tag in the full description


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
        img1: acne1,
        img2: acne2,
        definition:``,
        symptops:``,
        causes:``,
        source:``,
        treatment:``,
        link:``
    },


    {
        name: 'Psoriasis',
        img: psoriasis,
        img1: acne1,
        img2: acne2,
        definition:``,
        symptops:``,
        causes:``,
        source:``,
        treatment:``,
        link:``
    },


    {
        name: 'Seborrheic Dermatitis',
        img: seborrhoeic,
        img1: acne1,
        img2: acne2,
        definition:``,
        symptops:``,
        causes:``,
        source:``,
        treatment:``,
        link:``
    },


    {
        name: 'Perioral Dermatitis',
        img: perioral,
        img1: acne1,
        img2: acne2,
        definition:``,
        symptops:``,
        causes:``,
        source:``,
        treatment:``,
        link:``
    },


    {
        name: 'Tinea Faciei​',
        img: tinea,
        img1: acne1,
        img2: acne2,
        definition:``,
        symptops:``,
        causes:``,
        source:``,
        treatment:``,
        link:``
    }
]