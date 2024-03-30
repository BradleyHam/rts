import acidWashingImage from '@/assets/images/acidWashing.jpg';
import efflorescenseRemovalImage from '@/assets/images/efflorescenceRemoval.jpg';
import waterBlastingImage from '@/assets/images/waterBlastingAndSteamCleaning.jpg';
import waterproofCoatingsImage from '@/assets/images/waterproofCoatings.jpg';
import masonrySealingImage from '@/assets/images/masonrySealing.jpg';

import industrialCoatingsImage from '@/assets/images/industrialCoatings.jpg';

const serviceData = {
    efflorescenceRemoval: {
        id: 1,
        serviceName: 'efflorescence removal',
        serviceNameCamelCase: 'efflorescenceRemoval',
        image: efflorescenseRemovalImage,
        bulletPoints: [
            {
                bulletHeading: 'Expert Evaluation',
                bulletDescription: 'Tailored assessments in Queenstown to identify the most effective efflorescence treatment for your property.'
            },
            {
                bulletHeading: 'Advanced Cleaning',
                bulletDescription: 'Our local experts use cutting-edge techniques to remove efflorescence without damaging your masonry.'
            },
            {
                bulletHeading: 'Future Protection',
                bulletDescription: "Optional sealing services to shield against water and prevent efflorescence reoccurrence, preserving your property's integrity.",
            }
        ]
    },
    acidWashing: {
        id: 2,
        serviceName: 'acid washing',
        serviceNameCamelCase: 'acidWashing',
        image: acidWashingImage,
        bulletPoints: [
            {
                bulletHeading: 'Safety First',
                bulletDescription: 'Our Queenstown team conducts detailed assessments to guarantee the safe application of acid washing, prioritizing both site and material integrity.'
            },
            {
                bulletHeading: 'Precision Application',
                bulletDescription: 'Careful application of eco-friendly acidic solutions, specifically chosen for your masonry type to avoid any damage.'
            },
            {
                bulletHeading: 'Expert Cleaning',
                bulletDescription: "Detailed cleaning process using controlled acid washing methods to effectively remove unwanted residues and stains.",
            },{
                bulletHeading: 'Neutralization and Rinse',
                bulletDescription: "Thorough neutralization of the acid followed by a meticulous rinse to ensure a clean, safe, and residue-free surface.",
            }
        ]
    },
    waterBlasting: {
        id: 3,
        serviceName: 'water blasting and steam cleaning',
        serviceNameCamelCase: 'waterBlasting',
        image: waterBlastingImage,
        bulletPoints: [
            {
                bulletHeading: 'Initial Assessment',
                bulletDescription: `Expert evaluation in Queenstown to tailor the cleaning strategy to your property's unique requirements.`
            },
            {
                bulletHeading: 'Dual Cleaning Techniques',
                bulletDescription: 'Strategic use of water blasting for heavy dirt and grime, followed by steam cleaning for delicate areas or tougher stains.'
            },
            {
                bulletHeading: 'Quality Finish',
                bulletDescription: "Detailed attention to ensure all areas are pristine, with a final inspection to guarantee client satisfaction.",
            }
        ]
    },
    waterproofCoatings: {
        id: 4,
        serviceName: 'waterproof coatings',
        serviceNameCamelCase: 'waterproofCoatings',
        image: waterproofCoatingsImage,
        bulletPoints: [
            {
                bulletHeading: 'Surface Assessment',
                bulletDescription: `Our Queenstown experts conduct a detailed evaluation to pinpoint any issues and select the ideal waterproof coating for your specific surface, ensuring a tailored solution.`
            },
            {
                bulletHeading: 'Surface Preparation',
                bulletDescription: 'Cleaning and preparing the surface to ensure optimal adhesion of the waterproof coating, including the removal of any dirt, debris, or existing damaged coatings.'
            },
            {
                bulletHeading: 'Precision Application',
                bulletDescription: "Careful application of the waterproof coating using professional-grade equipment to ensure even coverage and maximum protection",
            },
            {
                bulletHeading: 'Maintenance Guidance',
                bulletDescription: "Providing expert advice on how to care for your newly coated surfaces to maximize the longevity and effectiveness of the waterproof barrier.",
            }
        ]
    },
    masonrySealing: {
        id: 5,
        serviceName: 'Concrete and Masonry Sealing',
        serviceNameCamelCase: 'masonrySealing',
        image: masonrySealingImage,
        bulletPoints: [
            {
                bulletHeading: 'Comprehensive Sealing Solutions',
                bulletDescription: 'Protect and prolong the life of your concrete and masonry in Queenstown with our superior sealing solutions. Ensure durability and resistance against environmental damage for driveways, patios, and more.'
            },
            {
                bulletHeading: 'Customized Protection Plans',
                bulletDescription: 'Offering customized protection plans tailored to your property’s needs. Our experts provide effective strategies for long-lasting durability and aesthetic preservation of your surfaces.'
            },
            {
                bulletHeading: 'Advanced Sealant Application',
                bulletDescription: 'Our Queenstown team uses eco-friendly sealants for deep protection against moisture and stains. Benefit from the latest technology for a barrier that keeps your concrete and masonry looking new.'
            },
            {
                bulletHeading: 'Satisfaction Guaranteed',
                bulletDescription: 'We prioritize your satisfaction with a commitment to excellence and meticulous attention to detail. Experience seamless service and lasting results. Contact us to safeguard your property.'
            }
        ]
    },
    industrialCoatings: {
        id: 6,
        serviceName: 'industrial coatings',
        serviceNameCamelCase: 'industrialCoatings',
        image: industrialCoatingsImage,
        bulletPoints: [
            {
                bulletHeading: 'Detailed Site Assessment',
                bulletDescription: 'Comprehensive examination of your facility to identify specific environmental challenges and surface requirements.'
            },
            {
                bulletHeading: 'Custom Coating Selection',
                bulletDescription: 'Based on the assessment, we select the most appropriate high-performance coatings to meet your operational needs, considering factors such as chemical exposure, abrasion resistance, and temperature fluctuations.'
            },
            {
                bulletHeading: 'Professional Preparation and Application',
                bulletDescription: `Thorough surface preparation to ensure optimal adhesion, followed by precise application of the industrial coatings using advanced techniques for a uniform and durable finish.`
            },
            {
                bulletHeading: 'Stringent Quality Control',
                bulletDescription: `Continuous monitoring and inspection throughout the application process to ensure the highest standards of quality and performance.
                `
            }
        ]
    }
}

export default serviceData;