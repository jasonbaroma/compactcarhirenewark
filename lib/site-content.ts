export type Vehicle = {
  title: string
  body: string
  image: string
  alt: string
}

export type Faq = {
  question: string
  answer: string
}

export type WhyChooseItem = {
  title: string
  body: string
}

export type LocalRelevanceBlock = {
  title: string
  body: string
}

export type ServicePageContent = {
  metadata: {
    title: string
    description: string
  }
  currentLocationName?: string
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel?: string
  inventorySectionId?: string
  mainServiceKicker?: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: Vehicle[]
  mainVehicleAction: boolean
  whyChooseKicker?: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseItem[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: Vehicle[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker?: string
  serviceAreasTitle?: string
  serviceAreasDescription?: string
  localRelevanceKicker?: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalRelevanceBlock[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker?: string
  faqTitle?: string
  faqs: Faq[]
}

type VehicleText = {
  body: string
  alt: string
}

type WhyChooseText = {
  title: string
  body: string
}

type LocalBlockText = {
  title: string
  body: string
}

type FaqText = {
  question: string
  answer: string
}

type ContentTokenSet = {
  metadata: {
    title: string
    description: string
  }
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel: string
  mainServiceKicker: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: VehicleText[]
  whyChooseKicker: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseText[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: VehicleText[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker: string
  serviceAreasTitle: string
  serviceAreasDescription: string
  localRelevanceKicker: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalBlockText[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker: string
  faqTitle: string
  faqs: FaqText[]
}

export type ServiceSlug =
  | "compact-car"
  | "van-hire"
  | "truck-hire"
  | "minibus-hire"

function isTemplateToken(value: string) {
  return value.startsWith("{{") && value.endsWith("}}")
}

const compactCarMainImages = [
  "/compact-car/Fiat500.png",
  "/compact-car/Hyundai-i10Auto.png",
  "/compact-car/VWGolf.png",
  "/compact-car/FocusAuto.png",
] as const

const compactCarAdditionalImages = [
  "/compact-car/FocusEstate.png",
  "/compact-car/Mondeo.png",
  "/compact-car/MondeoAuto.png",
  "/compact-car/MondeoEstate.png",
  "/compact-car/RAV4Auto.png",
  "/compact-car/CClassAuto.png",
  "/compact-car/EClassAuto.png",
  "/compact-car/RangeRover.png",
] as const

const vanMainImages = [
  "/van/CaddyVan.png",
  "/van/FordTransitSWB.png",
  "/van/VWTransporterAutomatic.png",
  "/van/FordTransitMWB.png",
  "/van/FordTransitLWB.png",
  "/van/4MTRSprinter.png",
  "/van/FordLutonBoxTailLift.png",
  "/van/FordTransitDropsideVan.png",
  "/van/3.5TonneTipperTransit.png",
  "/van/RecoveryVanTruck.png",
  "/van/VWCampervan.png",
  "/van/12.5MCherryPicker3.5T.png",
] as const

const minibusMainImages = [
  "/minibus/VauxhallZafira5plus2.png",
  "/minibus/Galaxy7SeaterManual.png",
  "/minibus/Galaxy7SeaterAutomatic.png",
  "/minibus/9SeaterManual.png",
  "/minibus/9SeaterAutomatic.png",
  "/minibus/FordMinibus12Seater.png",
  "/minibus/FordMinibus15Seater.png",
  "/minibus/FordMinibusLITE 17Seater(no D1).png",
  "/minibus/FordMinibus17Seater.png",
] as const

const truckMainImages = [
  "/truck/FordLuton3.5TonTailBoxLiftTruck.png",
  "/truck/3.5TonneTipperTransitTruck.png",
  "/truck/3.5TonneRecoveryTruck.png",
  "/truck/7.5TonneBoxTruckWithTailLift.png",
  "/truck/7.5TonneCurtainSideTruck.png",
  "/truck/7.5TonneDropsideTruck.png",
  "/truck/7.5TonneTipperTruck.png",
  "/truck/7.5TonneSleeperTailLiftTruck.png",
  "/truck/18TonneBoxTruck.png",
  "/truck/18TonneCurtainsideTruck.png",
  "/truck/26TonneCurtainSideTruck.png",
  "/truck/44TonneSleeperTruck.png",
] as const

const compactCarMainNames = [
  "Fiat 500",
  "Hyundai i10 Auto",
  "VW Golf",
  "Focus Auto",
] as const

const compactCarAdditionalNames = [
  "Focus Estate",
  "Mondeo",
  "Mondeo Auto",
  "Mondeo Estate",
  "RAV4 Auto",
  "C Class Auto",
  "E Class Auto",
  "Range Rover",
] as const

const vanMainNames = [
  "Caddy Van",
  "Ford Transit SWB",
  "VW Transporter Automatic",
  "Ford Transit MWB",
  "Ford Transit LWB",
  "4 MTR Sprinter",
  "Ford Luton Box Tail Lift",
  "Ford Transit Dropside Van",
  "3.5 Tonne Tipper Transit",
  "Recovery Van",
  "VW Campervan",
  "12.5M Cherry Picker 3.5T",
] as const

const minibusMainNames = [
  "Vauxhall Zafira 5 + 2",
  "Galaxy 7 Seater Manual",
  "Galaxy 7 Seater Automatic",
  "9 Seater Manual",
  "9 Seater Automatic",
  "Ford Minibus 12 Seater",
  "Ford Minibus 15 Seater",
  "Ford Minibus LITE 17 Seater (no D1)",
  "Ford Minibus 17 Seater",
] as const

const truckMainNames = [
  "Ford Luton 3.5 ton Tail Box Lift Truck",
  "3.5 Tonne Tipper Transit Truck",
  "3.5 Tonne Recovery Truck",
  "7.5 Tonne Box Truck With Tail Lift",
  "7.5 Tonne Curtain Side Truck",
  "7.5 Tonne Dropside Truck",
  "7.5 Tonne Tipper Truck",
  "7.5 Tonne Sleeper Tail Lift Truck",
  "18 Tonne Box Truck",
  "18 Tonne Curtain Side Truck",
  "26 Tonne Curtain Side Truck",
  "44 Tonne Sleeper Truck",
] as const

export const siteConfig = {
  businessName: "Compact Car Hire Newark",
  companyTagline: "Practical self-drive hire across Newark and nearby Nottinghamshire and Lincolnshire routes",
  legalBusinessName: "Compact Car Hire Newark",
  locationName: "Newark",
  siteUrl: "https://compactcarhirenewark.co.uk",
  phone: "+442039099745",
  displayPhone: "0203 909 9745",
  ui: {
    navLocationsLabel: "Locations",
    navServicesLabel: "Services",
    navCallToBookLabel: "Call to Book",
    navCallShortLabel: "Call",
    bookNowLabel: "Call to Book",
    footerCopyrightLabel: "© 2026 Compact Car Hire Newark. All rights reserved.",
  },
} as const

export function getMetadataBase() {
  const rawSiteUrl = siteConfig.siteUrl

  if (isTemplateToken(rawSiteUrl)) {
    return new URL("https://example.com")
  }

  return new URL(rawSiteUrl)
}

export function withCanonicalPath(
  metadata: ServicePageContent["metadata"],
  canonicalPath: string,
) {
  return {
    ...metadata,
    alternates: {
      canonical: canonicalPath,
    },
  }
}

export const serviceNavigation: Array<{
  label: string
  route: string
}> = [
  { label: "Compact Car Hire", route: "/" },
  { label: "Van Hire", route: "/van-hire" },
  { label: "Minibus Hire", route: "/minibus-hire" },
  { label: "Truck Hire", route: "/truck-hire" },
]

function createVehicles(
  names: readonly string[],
  images: readonly string[],
  vehicleText: VehicleText[],
): Vehicle[] {
  return names.map((name, index) => ({
    title: name,
    body: vehicleText[index].body,
    image: images[index],
    alt: vehicleText[index].alt,
  }))
}

function createContentSet(args: {
  tokens: ContentTokenSet
  mainVehicleNames: readonly string[]
  mainVehicleImages: readonly string[]
  inventorySectionId: string
  currentLocationName?: string
  mainVehicleAction?: boolean
  additionalVehicleNames?: readonly string[]
  additionalVehicleImages?: readonly string[]
}): ServicePageContent {
  const {
    tokens,
    mainVehicleNames,
    mainVehicleImages,
    inventorySectionId,
    currentLocationName,
    mainVehicleAction = false,
    additionalVehicleNames,
    additionalVehicleImages,
  } = args

  return {
    metadata: {
      title: tokens.metadata.title,
      description: tokens.metadata.description,
    },
    currentLocationName,
    heroImage: tokens.heroImage,
    heroAlt: tokens.heroAlt,
    heroTitle: tokens.heroTitle,
    heroDescription: tokens.heroDescription,
    heroSecondaryActionLabel: tokens.heroSecondaryActionLabel,
    inventorySectionId,
    mainServiceKicker: tokens.mainServiceKicker,
    mainServiceTitle: tokens.mainServiceTitle,
    mainServiceDescription: tokens.mainServiceDescription,
    mainVehicles: createVehicles(
      mainVehicleNames,
      mainVehicleImages,
      tokens.mainVehicles,
    ),
    mainVehicleAction,
    whyChooseKicker: tokens.whyChooseKicker,
    whyChooseTitle: tokens.whyChooseTitle,
    whyChooseDescription: tokens.whyChooseDescription,
    whyChooseItems: tokens.whyChooseItems,
    additionalServicesKicker: tokens.additionalServicesKicker,
    additionalServicesTitle: tokens.additionalServicesTitle,
    additionalServicesDescription: tokens.additionalServicesDescription,
    additionalVehicles:
      additionalVehicleNames &&
      additionalVehicleImages &&
      tokens.additionalVehicles
        ? createVehicles(
            additionalVehicleNames,
            additionalVehicleImages,
            tokens.additionalVehicles,
          )
        : undefined,
    featureCtaTitle: tokens.featureCtaTitle,
    featureCtaDescription: tokens.featureCtaDescription,
    serviceAreasKicker: tokens.serviceAreasKicker,
    serviceAreasTitle: tokens.serviceAreasTitle,
    serviceAreasDescription: tokens.serviceAreasDescription,
    localRelevanceKicker: tokens.localRelevanceKicker,
    localRelevanceTitle: tokens.localRelevanceTitle,
    localRelevanceDescription: tokens.localRelevanceDescription,
    localRelevanceBlocks: tokens.localRelevanceBlocks,
    bottomCtaTitle: tokens.bottomCtaTitle,
    bottomCtaDescription: tokens.bottomCtaDescription,
    faqKicker: tokens.faqKicker,
    faqTitle: tokens.faqTitle,
    faqs: tokens.faqs,
  }
}

function createCompactMainVehicleTexts(location: string): VehicleText[] {
  return [
    {
      body: `The Fiat 500 is ideal for short ${location} trips where easy parking, simple handling and a small footprint matter most.`,
      alt: `Fiat 500 compact hire car for easy local driving in ${location}`,
    },
    {
      body: `The Hyundai i10 Auto suits drivers who want relaxed automatic driving for errands, station collections and everyday travel around ${location}.`,
      alt: `Hyundai i10 automatic compact hire car in ${location}`,
    },
    {
      body: `The VW Golf adds extra comfort and luggage space while keeping the practical feel that works well for mixed local and regional mileage from ${location}.`,
      alt: `Volkswagen Golf hatchback available for hire in ${location}`,
    },
    {
      body: `The Focus Auto is a useful all-rounder when your ${location} journey mixes town driving with longer runs on faster roads.`,
      alt: `Ford Focus automatic available for self-drive hire in ${location}`,
    },
  ]
}

function createCompactAdditionalVehicleTexts(location: string): VehicleText[] {
  return [
    {
      body: `The Focus Estate gives ${location} drivers extra boot space without stepping too far away from the feel of a normal everyday car.`,
      alt: `Ford Focus Estate available for practical luggage space in ${location}`,
    },
    {
      body: `The Mondeo is a sensible step up when comfort matters more, especially for longer journeys starting or ending in ${location}.`,
      alt: `Ford Mondeo saloon for longer road journeys from ${location}`,
    },
    {
      body: `The Mondeo Auto suits ${location} customers who want easier traffic driving while keeping the cabin comfort of a larger saloon.`,
      alt: `Ford Mondeo automatic for comfortable self-drive hire in ${location}`,
    },
    {
      body: `The Mondeo Estate works well when ${location} travel needs more luggage room for family visits, airport runs or longer stays away.`,
      alt: `Ford Mondeo Estate with extended luggage room for ${location} hires`,
    },
    {
      body: `The RAV4 Auto is a practical SUV option for ${location} journeys that need extra cabin flexibility and a higher driving position.`,
      alt: `Toyota RAV4 automatic SUV for flexible travel around ${location}`,
    },
    {
      body: `The C Class Auto gives ${location} customers a more refined option for business travel, client meetings and longer personal trips.`,
      alt: `Mercedes C Class automatic for executive car hire in ${location}`,
    },
    {
      body: `The E Class Auto is well suited to longer mileage from ${location} where extra cabin space and motorway comfort make a difference.`,
      alt: `Mercedes E Class automatic executive vehicle hire in ${location}`,
    },
    {
      body: `The Range Rover is there when a ${location} booking needs premium comfort, stronger road presence and more flexible luggage space.`,
      alt: `Range Rover SUV hire for premium travel in ${location}`,
    },
  ]
}

function createNearbyWhyChooseItems(location: string): WhyChooseText[] {
  return [
    {
      title: "Useful compact fleet",
      body: `Our compact line-up suits ${location} travel that calls for easy parking, light everyday driving and sensible motorway comfort.`,
    },
    {
      title: "Manual and automatic options",
      body: `Whether you want a simple city car or an automatic hatchback for ${location} traffic, we keep the choice practical.`,
    },
    {
      title: "Straightforward booking support",
      body: `We focus on helping ${location} customers choose a vehicle that fits the actual trip rather than overcomplicating the booking.`,
    },
    {
      title: "Good fit for mixed routes",
      body: `A compact car is often the most practical option when ${location} driving mixes residential roads, station access and quicker regional links.`,
    },
    {
      title: "Wider fleet available",
      body: `If your ${location} journey needs more than a compact car, we can also help with larger cars, vans, minibuses and trucks.`,
    },
    {
      title: "Built around real local use",
      body: `Our service is shaped around the kind of everyday driving ${location} customers actually need to do.`,
    },
  ]
}

type NearbyLocationProfile = {
  location: string
  heroImage: string
  heroAlt: string
  metadataDescription: string
  heroDescription: string
  serviceDescription: string
  whyChooseDescription: string
  serviceAreasDescription: string
  localRelevanceDescription: string
  localBlocks: LocalBlockText[]
  faqs: FaqText[]
}

function createNearbyLocationTokens(profile: NearbyLocationProfile): ContentTokenSet {
  return {
    metadata: {
      title: `Compact Car Hire ${profile.location} | Self-Drive Small Cars`,
      description: profile.metadataDescription,
    },
    heroImage: profile.heroImage,
    heroAlt: profile.heroAlt,
    heroTitle: `Compact Car Hire in ${profile.location}`,
    heroDescription: profile.heroDescription,
    heroSecondaryActionLabel: "View vehicle options",
    mainServiceKicker: `${profile.location} compact car hire`,
    mainServiceTitle: `Easy self-drive compact car hire in ${profile.location}`,
    mainServiceDescription: profile.serviceDescription,
    mainVehicles: createCompactMainVehicleTexts(profile.location),
    whyChooseKicker: "Why choose us",
    whyChooseTitle: `Why compact car hire works well for ${profile.location} drivers`,
    whyChooseDescription: profile.whyChooseDescription,
    whyChooseItems: createNearbyWhyChooseItems(profile.location),
    additionalServicesKicker: "More vehicle options",
    additionalServicesTitle: `Need more than a compact car in ${profile.location}?`,
    additionalServicesDescription: `Alongside compact car hire in ${profile.location}, we can also help with estates, larger saloons, SUVs and the wider fleet of vans, minibuses and trucks when the journey needs more room.`,
    additionalVehicles: createCompactAdditionalVehicleTexts(profile.location),
    featureCtaTitle: `Check compact car availability in ${profile.location}`,
    featureCtaDescription: `Tell us what sort of ${profile.location} driving you have planned and we will help you line up a practical compact car quickly.`,
    serviceAreasKicker: "Areas we cover",
    serviceAreasTitle: `Vehicle hire for ${profile.location} and nearby routes`,
    serviceAreasDescription: profile.serviceAreasDescription,
    localRelevanceKicker: "Local driving guide",
    localRelevanceTitle: `Why compact car hire makes sense in ${profile.location}`,
    localRelevanceDescription: profile.localRelevanceDescription,
    localRelevanceBlocks: profile.localBlocks,
    bottomCtaTitle: `Book compact car hire in ${profile.location}`,
    bottomCtaDescription: `If you need a small self-drive car in ${profile.location} for local travel, work appointments or a wider regional journey, get in touch and we will help you choose the right vehicle.`,
    faqKicker: `${profile.location} hire FAQs`,
    faqTitle: `Common questions about compact car hire in ${profile.location}`,
    faqs: profile.faqs,
  }
}

const homepageTokens: ContentTokenSet = {
  metadata: {
    title: "Compact Car Hire Newark | Self-Drive Vehicle Hire",
    description: "Compact car hire in Newark for town driving, station access and regional travel, with vans, minibuses and trucks also available when you need more room.",
  },
  heroImage: "/images/compactcarhirenewark-co-uk-homepage-compact-car-fleet.png",
  heroAlt: "Compact hire cars prepared for everyday driving in Newark-on-Trent",
  heroTitle: "Compact car hire in Newark made practical",
  heroDescription: "Compact car hire in Newark for local driving, station pickups, business mileage and wider trips using the A46, A17 and A1, backed by a broader self-drive fleet when you need extra space.",
  heroSecondaryActionLabel: "View vehicle options",
  mainServiceKicker: "Compact car hire",
  mainServiceTitle: "Self-drive compact cars for everyday Newark journeys",
  mainServiceDescription: `Our Newark compact car hire service is built around the sort of journeys people actually make from town. Some bookings are mainly local and need a car that stays easy around the town centre, residential streets and ordinary car parks. Others mix a station collection at Newark North Gate or Newark Castle with onward mileage on the A46, A17 or A1. A compact hatchback usually handles that balance well because it feels manageable on local roads without becoming tiring on the wider drive.

That makes compact cars a sensible fit for business appointments, temporary replacement transport, family visits and short-notice regional travel from Newark. If the plan grows beyond what a small car should reasonably carry, we can also help with larger cars, estates, SUVs and the wider fleet of vans, minibuses and trucks.`,
  mainVehicles: createCompactMainVehicleTexts("Newark"),
  whyChooseKicker: "Why choose us",
  whyChooseTitle: "A practical approach to self-drive hire in Newark",
  whyChooseDescription: "We keep compact car hire straightforward for Newark customers by focusing on useful vehicles, clear support and the sort of routes people are really covering between town driving and larger road links.",
  whyChooseItems: [
    { title: "Cars that suit real journeys", body: "Our compact range is chosen around everyday usability, with smaller cars that feel comfortable both in town and on wider A-road mileage." },
    { title: "Straightforward vehicle choice", body: "If you need an easy local hatchback, an automatic or something with a little more luggage room, we keep the choices practical rather than confusing." },
    { title: "Useful local fit", body: "Newark bookings often combine station access, short urban stops and quick links onto the A46, A17 or A1, so the fleet is shaped around that kind of use." },
    { title: "Support beyond compact cars", body: "If the journey changes, we can also help with larger cars, vans, minibuses and trucks without sending you elsewhere." },
    { title: "Clear booking help", body: "The focus is on what the vehicle needs to do in practice, not on vague wording or complicated booking language." },
    { title: "Flexible around changing plans", body: "Replacement transport, mixed local-regional journeys and short-notice bookings are common, and we keep the hire useful around that." },
  ],
  additionalServicesKicker: "Wider fleet options",
  additionalServicesTitle: "More vehicle choice when your Newark trip needs extra room",
  additionalServicesDescription: "If a compact hatchback is not the right fit, we can also help with larger cars, estates, SUVs and executive automatics. The wider self-drive fleet also includes vans, minibuses and trucks for bigger transport jobs.",
  additionalVehicles: createCompactAdditionalVehicleTexts("Newark"),
  featureCtaTitle: "Looking for the right vehicle in Newark?",
  featureCtaDescription: "Tell us what sort of driving you have planned and we will help you choose a compact car or a larger vehicle that makes practical sense.",
  serviceAreasKicker: "Areas we cover",
  serviceAreasTitle: "Vehicle hire around Newark and surrounding towns",
  serviceAreasDescription: "We support customers in Newark and across nearby Nottinghamshire and Lincolnshire routes, with compact car hire backed by the wider self-drive fleet when extra space is needed.",
  localRelevanceKicker: "Driving in Newark",
  localRelevanceTitle: "Why compact car hire works well in Newark",
  localRelevanceDescription: `Newark is the sort of place where a compact car often feels like the sensible middle ground. Local journeys can involve town-centre turns, station access and ordinary parking, while wider routes quickly open out onto the A46, A17 and A1. A smaller hatchback keeps the local part straightforward without feeling underdone once the booking widens into regional mileage.

That balance is useful for everyday appointments, business travel, family visits and replacement transport. Newark North Gate access, retail stops and practical onward travel all reward a vehicle that is easy to place, easy to park and still settled enough for the larger road section of the day.`,
  localRelevanceBlocks: [
    {
      title: "A sensible fit for mixed Newark journeys",
      body: `Many Newark bookings combine local movement with a quick change onto larger roads. A compact hatchback keeps the town-centre part of the trip simple while still being comfortable enough once the route widens towards the A46, A17 or A1.

That matters when the day includes several short stops rather than one long uninterrupted drive. A smaller car takes the pressure out of repeated parking and route changes.`,
    },
    {
      title: "Useful around stations, appointments and ordinary parking",
      body: `Compact cars work particularly well for station access, business visits and day-to-day appointments around Newark. They are easier to slot into ordinary car parks and less awkward in busier local traffic than something larger.

For customers covering replacement transport, that simplicity is often exactly what they want: a clean, manageable vehicle that does not make a normal day harder than it needs to be.`,
    },
    {
      title: "Easy to step up when the plan changes",
      body: `Sometimes a booking starts as a compact-car job but later needs more carrying room or more passenger comfort. That is one reason we keep the wider fleet in view, from estates and SUVs through to vans, minibuses and trucks.

You can start with the right car for a simple Newark trip and still have a clear route to something larger if the journey grows.`,
    },
  ],
  bottomCtaTitle: "Book compact car hire in Newark with practical support",
  bottomCtaDescription: "If you need a compact car in Newark for local driving, business mileage or short regional travel, get in touch and we will help you line up a suitable vehicle.",
  faqKicker: "Common questions",
  faqTitle: "Compact car hire FAQs for Newark",
  faqs: [
    { question: "Why choose compact car hire in Newark?", answer: "Compact cars make sense in Newark because they are easier to park, easy to drive around town and still comfortable enough for A-road and A1 mileage." },
    { question: "Can I arrange compact car hire in Newark at short notice?", answer: "Yes, subject to availability. If you need a compact car quickly in Newark, call us and we will talk through what is ready for the timing you need." },
    { question: "Do you only offer small cars in Newark?", answer: "No. Compact cars are the core offer on this page, but we also provide larger cars, estates, SUVs, vans, minibuses and trucks when the journey needs more room." },
    { question: "What are compact hire cars in Newark commonly used for?", answer: "Common uses include station runs, business visits, shopping trips, family travel, temporary replacement transport and short regional journeys." },
    { question: "Are automatic compact cars available in Newark?", answer: "Yes, subject to availability. If you prefer an automatic for easier local traffic or more relaxed regional driving, ask us when you book." },
    { question: "What should I tell you when booking in Newark?", answer: "The most useful details are the dates, expected route, whether you want manual or automatic driving, and whether there is any chance you will need more space than a compact hatchback." },
  ],
}

const vanHireTokens: ContentTokenSet = {
  metadata: {
    title: "Van Hire Newark | Practical Vans for Moves, Deliveries and Trade",
    description: "Van hire in Newark for home moves, deliveries, trade work and specialist transport, with compact vans, Transits, Lutons and more available.",
  },
  heroImage: "/images/compactcarhirenewark-co-uk-van-hire-main-fleet.png",
  heroAlt: "Modern self-drive rental van ready for loading in Newark",
  heroTitle: "Van hire in Newark for moves, work and collections",
  heroDescription: "Practical van hire in Newark for home moves, deliveries, trade jobs, stock collections and specialist transport when a standard car is not enough.",
  heroSecondaryActionLabel: "View van options",
  mainServiceKicker: "Newark van fleet",
  mainServiceTitle: "Van hire for practical jobs across Newark and beyond",
  mainServiceDescription: `Our van hire service in Newark is built around jobs that need useful carrying space without overcomplicating the booking. Some customers only need a compact van for boxes, tools or a quick furniture pickup. Others need a larger panel van, a Luton with tail lift or a more specialist vehicle for site work, access jobs or vehicle transport. The important part is matching the van to the load, the loading point and the route rather than guessing.

Newark works well for van hire because local jobs often move between residential streets, business units and quicker A-road links. Routes using the A46, A17, Brunel Drive, Northern Road and the wider A1 corridor can all feel different depending on the size of the vehicle and the type of load. We keep the choice practical so customers can line up a van that fits the day rather than making the day fit the wrong van.`,
  mainVehicles: [
    { body: "A compact Caddy van that suits smaller deliveries, toolbox transport, parcel runs and local collections where simple parking matters.", alt: "Caddy van for compact cargo and local deliveries in Newark" },
    { body: "The short wheelbase Transit is a solid all-rounder for furniture pickups, trade materials and stock movement without stepping into a larger footprint.", alt: "Ford Transit SWB van for everyday transport jobs in Newark" },
    { body: "The automatic VW Transporter is useful for drivers who want smoother stop-start driving around town and easier day-to-day van use.", alt: "VW Transporter automatic van for easy driving in Newark" },
    { body: "The medium wheelbase Transit adds carrying length for larger deliveries, event kit, business stock and longer multi-stop jobs.", alt: "Ford Transit MWB van for medium load transport in Newark" },
    { body: "The long wheelbase Transit works well for larger move days, awkward furniture and bulkier loads that need more internal space.", alt: "Ford Transit LWB van for bulky loads and moves in Newark" },
    { body: "The 4 metre Sprinter is useful for extended loads and bigger carrying jobs where avoiding repeat trips saves real time.", alt: "4 metre Sprinter van for long items and larger loads in Newark" },
    { body: "A Luton box van with tail lift that is ideal for removals, appliances and heavier loads where easier loading makes the whole day smoother.", alt: "Ford Luton box van with tail lift for removals in Newark" },
    { body: "The dropside Transit is a practical choice for timber, landscaping materials and awkward open loads that are easier to secure from the side.", alt: "Ford Transit dropside van for open load carrying in Newark" },
    { body: "The 3.5 tonne tipper is well suited to builders, landscapers and site teams moving waste, loose materials and heavier working loads.", alt: "3.5 tonne tipper Transit for site and waste jobs in Newark" },
    { body: "The recovery van is there for planned vehicle transport and collection work that needs a proper carrying setup.", alt: "Recovery van for vehicle transport in Newark" },
    { body: "A VW campervan for leisure travel, touring breaks and flexible road-trip bookings starting from Newark.", alt: "VW campervan for touring and leisure travel from Newark" },
    { body: "The cherry picker suits access work such as maintenance, inspections and signage where safe reach matters as much as mobility.", alt: "12.5 metre cherry picker van for access work in Newark" },
  ],
  whyChooseKicker: "Why hire from us",
  whyChooseTitle: "A practical van hire service for real work",
  whyChooseDescription: "Van hire is rarely about getting just any vehicle. It is about getting one that actually works for the route, the load and the pace of the day. That is the approach we keep in mind for Newark van bookings.",
  whyChooseItems: [
    { title: "Useful fleet coverage", body: "From compact vans to larger Transits and specialist bodies, the fleet covers routine transport jobs as well as more demanding work." },
    { title: "Job-led advice", body: "We focus on what you are moving, how it will load and where it needs to go, rather than forcing a one-size-fits-all choice." },
    { title: "Specialist options available", body: "Lutons, dropsides, tippers, recovery vehicles and a cherry picker are available when a standard panel van is not enough." },
    { title: "Practical route matching", body: "The right van for town-centre collections may not be the right van for a wider A1 run with bulky stock, so we keep that distinction in view." },
    { title: "Good local positioning", body: "Newark is well placed for short local transport as well as wider Nottinghamshire and Lincolnshire journeys." },
    { title: "Straightforward booking support", body: "The aim is to keep the hire useful and clear so you can get on with the move, delivery or job." },
  ],
  featureCtaTitle: "Need van hire in Newark?",
  featureCtaDescription: "If you need a van for moving, deliveries, site work or stock transport, get in touch and we will help you choose a practical vehicle.",
  serviceAreasKicker: "Areas we cover",
  serviceAreasTitle: "Van hire in Newark and surrounding routes",
  serviceAreasDescription: "We support van hire from Newark across nearby towns and key Nottinghamshire and Lincolnshire routes, making it easier to cover local jobs and wider carrying work.",
  localRelevanceKicker: "Local van hire guidance",
  localRelevanceTitle: "Van hire that fits the way Newark jobs actually run",
  localRelevanceDescription: `Van hire in Newark is usually about practical movement rather than one long uninterrupted drive. A day might include a collection on one side of town, a stop at a storage unit, a run towards a business park and then a stretch on the A46, A17 or A1. That mix is why choosing the right van matters so much.

Smaller vans are often the better choice when parking space is tighter or loading points are awkward. Larger panel vans, Lutons and specialist vehicles come into their own when the load is bulky, heavy or irregular. Around Newark, where Brunel Drive, Northern Road and wider route connections can all form part of the same day, it helps to choose the van with the route in mind.`,
  localRelevanceBlocks: [
    {
      title: "Planning loads around local roads and industrial areas",
      body: `Newark van jobs often move between residential addresses, storage facilities and business areas such as Brunel Drive or Northern Road. That means the van needs to work in both tighter urban spots and more open loading areas.

A smaller van may be the smartest choice if access is awkward or parking is limited. When the load is bulkier, stepping up to a longer wheelbase or Luton usually saves time overall.`,
    },
    {
      title: "Choosing well for A-road and A1 mileage",
      body: `If the job uses the A46, A17 or heads on towards the A1, the carrying layout matters just as much as the route. Loads that shift around or need repeated handling can make the whole day slower than it needs to be.

A van that fits the load properly is often more useful than simply choosing the largest one available. That is especially true on mixed local and regional journeys from Newark.`,
    },
    {
      title: "Useful specialist options when the work changes",
      body: `Not every job is a panel-van job. Landscaping work, waste, access tasks and vehicle transport all call for something more specific, which is why we keep tippers, dropsides, recovery vehicles and a cherry picker in the wider line-up.

If the day has a specialist requirement, it is usually easier to set up the right vehicle from the start than to make a standard van work around it.`,
    },
  ],
  bottomCtaTitle: "Book van hire in Newark with practical guidance",
  bottomCtaDescription: "Tell us what needs moving, where it is going and what kind of route you expect to cover, and we will help you line up a van that fits the job.",
  faqKicker: "Van hire FAQs",
  faqTitle: "Common questions about van hire in Newark",
  faqs: [
    { question: "What kind of van hire jobs are common in Newark?", answer: "Common Newark van bookings include home moves, furniture pickups, stock transport, trade work, storage runs, site jobs and one-off deliveries." },
    { question: "How do I choose the right van size in Newark?", answer: "The key things are the size and shape of the load, the loading point, and whether the route includes tighter local access or mostly larger roads. We can help you work through that." },
    { question: "Do you offer specialist vans in Newark?", answer: "Yes. Alongside standard panel vans we can also help with Lutons, dropsides, tippers, a recovery vehicle, a campervan and a cherry picker." },
    { question: "Is van hire in Newark useful for business work?", answer: "Yes. Many business customers use Newark van hire for tools, materials, event equipment, stock movement and short-notice transport between sites." },
    { question: "Can I arrange Newark van hire at short notice?", answer: "Yes, subject to availability. If you need a van quickly, call us and we will talk through what is available for the timing and load you have in mind." },
    { question: "What should I tell you when booking a van in Newark?", answer: "The most useful details are what you are moving, how bulky it is, where you are loading and unloading, and whether the route is mostly local or includes longer regional mileage." },
  ],
}

const minibusHireTokens: ContentTokenSet = {
  metadata: {
    title: "Minibus Hire Newark | Self-Drive Group Travel",
    description: "Minibus hire in Newark for family travel, airport runs, group outings, sports fixtures and wider regional transport.",
  },
  heroImage: "/images/compactcarhirenewark-co-uk-minibus-hire-main-fleet.png",
  heroAlt: "Modern self-drive minibus ready for group travel from Newark",
  heroTitle: "Minibus hire in Newark for group trips and planned travel",
  heroDescription: "Self-drive minibus hire in Newark for airport runs, family events, sports travel, work groups and days out when keeping everyone together is easier than using multiple cars.",
  heroSecondaryActionLabel: "View minibus options",
  mainServiceKicker: "Newark minibus fleet",
  mainServiceTitle: "Group-friendly vehicle hire for Newark journeys",
  mainServiceDescription: `Our minibus hire service in Newark is there for journeys where keeping passengers together makes the day easier. That might mean a family trip with luggage, a sports team moving equipment, an airport run, a work group heading to an event or a larger social plan where separate cars would only complicate the timing. We offer a range that starts with people carriers and extends through larger self-drive minibuses.

Newark is a practical base for group travel because local pickups can quickly turn into A-road or A1 mileage towards Nottinghamshire, Lincolnshire and wider regional destinations. A well-matched minibus keeps luggage space, seating and comfort in balance, which is especially important when the trip includes multiple pickup points or a long return leg at the end of the day.`,
  mainVehicles: [
    { body: "A compact 5 plus 2 people carrier that suits lighter group travel where easy local driving matters just as much as seating flexibility.", alt: "Vauxhall Zafira 5 plus 2 available for self-drive hire in Newark" },
    { body: "The manual Galaxy works well for family trips, station pickups and airport travel when you need seven seats without stepping up to a full minibus.", alt: "Galaxy 7 seater manual available for hire in Newark" },
    { body: "The automatic Galaxy keeps group travel easier in traffic while giving you the comfort and seat flexibility needed for longer runs.", alt: "Galaxy 7 seater automatic for group travel in Newark" },
    { body: "A practical 9 seater for larger families, event groups and sports trips where everyone needs to stay together.", alt: "9 seater manual minibus available for hire in Newark" },
    { body: "The 9 seater automatic suits groups who want the same capacity with less work for the driver in heavier traffic or longer mileage.", alt: "9 seater automatic minibus hire in Newark" },
    { body: "The 12 seater Ford minibus is useful for organised group travel, community use and event transport with a clear passenger layout.", alt: "Ford 12 seater minibus for self-drive hire in Newark" },
    { body: "The 15 seater model adds more capacity for schools, clubs and teams travelling together from Newark.", alt: "Ford 15 seater minibus for larger group bookings in Newark" },
    { body: "A 17 seater LITE option for larger bookings where no D1 entitlement is required, making it practical for more drivers.", alt: "Ford LITE 17 seater minibus available in Newark" },
    { body: "The full 17 seater model is there for larger organised groups that need maximum passenger space from one vehicle.", alt: "Ford 17 seater minibus for high-capacity travel from Newark" },
  ],
  whyChooseKicker: "Why hire from us",
  whyChooseTitle: "A practical minibus service for real group travel",
  whyChooseDescription: "Group travel only feels straightforward when the vehicle suits the luggage, the route and the number of passengers. We keep minibus hire practical for Newark customers by focusing on what the day actually needs.",
  whyChooseItems: [
    { title: "Flexible seating options", body: "From people carriers to larger self-drive minibuses, the range covers smaller family travel as well as bigger organised groups." },
    { title: "Useful for mixed routes", body: "Many Newark group journeys combine local pickups with longer A-road or A1 mileage, so the vehicles are chosen around that balance." },
    { title: "Practical luggage planning", body: "Passenger numbers matter, but so does luggage, kit and how many pickup points are involved. We keep that in view when helping customers choose." },
    { title: "Suitable for leisure and work", body: "The fleet supports family events, airport runs, sports travel, work trips and organised outings without overcomplicating the booking." },
    { title: "Easier route planning", body: "Keeping everyone in one vehicle can simplify timing, pickups and luggage handling on Newark journeys." },
    { title: "Regional travel ready", body: "The vehicles are suited to the kind of A-road and motorway mileage common on Newark group trips." },
  ],
  featureCtaTitle: "Need minibus hire in Newark?",
  featureCtaDescription: "If you are planning group travel from Newark, tell us how many passengers you have and where the trip is heading and we will help you choose the right vehicle.",
  serviceAreasKicker: "Areas we cover",
  serviceAreasTitle: "Minibus hire from Newark and nearby routes",
  serviceAreasDescription: "We support minibus hire from Newark across nearby towns and wider regional routes, making group travel easier to organise from one practical base.",
  localRelevanceKicker: "Local minibus hire guidance",
  localRelevanceTitle: "Why minibus hire works well from Newark",
  localRelevanceDescription: `Newark is a strong base for minibus hire because local pickups often lead quickly onto wider routes. A booking might begin with family or group collections around town, continue via Newark North Gate or Newark Castle, and then widen onto the A46, A17 or A1 for the main stretch of the trip. That is exactly the kind of travel where keeping everyone together becomes easier than splitting passengers between several vehicles.

The key is choosing a minibus that balances seating, luggage and driving comfort properly. Around Newark, where group journeys often mix local access with longer regional mileage, that balance makes a visible difference to how smooth the day feels.`,
  localRelevanceBlocks: [
    {
      title: "Useful for town pickups and onward A-road travel",
      body: `A lot of Newark minibus bookings start with several local pickups before the main journey even begins. That could mean collecting family, a club group or work passengers before heading onto the A46, A17 or A1.

A well-sized minibus keeps that process simpler because everyone stays together from the start and the driver does not need to coordinate multiple cars.`,
    },
    {
      title: "A practical fit for luggage and organised group plans",
      body: `Group travel is not only about passenger numbers. Luggage, sports kit, event equipment and airport bags all change what the right vehicle looks like.

Choosing the right minibus from the start is usually what keeps the day comfortable rather than cramped, especially on longer return journeys from Newark.`,
    },
    {
      title: "Good for family, sports and community travel",
      body: `Newark minibus hire is commonly useful for family functions, sports teams, work groups and other organised journeys where keeping everyone on one schedule matters.

Instead of managing several drivers and several arrival times, one suitable vehicle often makes the plan far easier to run.`,
    },
  ],
  bottomCtaTitle: "Book minibus hire in Newark with practical support",
  bottomCtaDescription: "Tell us how many passengers you need to move, what luggage is involved and where the trip is going, and we will help you line up a suitable minibus.",
  faqKicker: "Minibus hire FAQs",
  faqTitle: "Common questions about minibus hire in Newark",
  faqs: [
    { question: "What is Newark minibus hire commonly used for?", answer: "Common uses include airport runs, family events, sports fixtures, group outings, work travel and other organised journeys where keeping passengers together is easier." },
    { question: "How do I choose the right minibus size in Newark?", answer: "The most useful starting points are passenger numbers, luggage, how many pickup points are involved and whether the route is mainly local or includes longer regional mileage." },
    { question: "Do you only offer large minibuses in Newark?", answer: "No. We offer people carriers and smaller group vehicles as well as larger minibuses, so the booking can be matched to the group rather than over-sized by default." },
    { question: "Is minibus hire in Newark useful for airport travel?", answer: "Yes. Newark minibus hire is a practical option for airport runs because it keeps passengers and luggage together in one vehicle." },
    { question: "Can I arrange minibus hire in Newark at short notice?", answer: "Yes, subject to availability. If the trip is coming up soon, call us and we will talk through the options that fit your group." },
    { question: "What should I tell you when booking a minibus in Newark?", answer: "The most useful details are the number of passengers, the amount of luggage, the route, the pickup pattern and whether the group has any specific seating or access requirements." },
  ],
}

const truckHireTokens: ContentTokenSet = {
  metadata: {
    title: "Truck Hire Newark | Box, Tail Lift and Specialist Trucks",
    description: "Truck hire in Newark for removals, site work, business transport and specialist carrying jobs using practical self-drive vehicles.",
  },
  heroImage: "/images/compactcarhirenewark-co-uk-truck-hire-main-fleet.png",
  heroAlt: "Self-drive truck prepared for heavier transport work in Newark",
  heroTitle: "Truck hire in Newark for heavy loads and specialist jobs",
  heroDescription: "Self-drive truck hire in Newark for removals, site support, stock movement, heavier transport work and jobs that need more than a van can comfortably handle.",
  heroSecondaryActionLabel: "View truck options",
  mainServiceKicker: "Newark truck fleet",
  mainServiceTitle: "Truck hire for serious carrying work from Newark",
  mainServiceDescription: `Our truck hire service in Newark is designed for jobs that need more carrying capacity, easier loading or a more specialised body type than a standard van can offer. That can mean removals with heavier furniture, business stock movement, site materials, open-load transport or work that needs a tail lift, dropside or tipper setup. The point is to match the vehicle to the job rather than forcing the job into the wrong format.

Newark is well placed for this sort of work because local carrying jobs often connect quickly to the A46, A17 and A1. A truck that feels manageable from the loading point but still useful once the route widens out can make the whole job easier to run. We keep the range practical so the booking stays focused on what the load actually needs.`,
  mainVehicles: [
    { body: "A practical Luton-style truck with tail lift that suits removals support, furniture movement and larger boxed loads.", alt: "Ford Luton tail-lift truck for self-drive hire in Newark" },
    { body: "The 3.5 tonne tipper is useful for site materials, waste, landscaping jobs and heavier loose loads that need an open body.", alt: "3.5 tonne tipper truck for working hires in Newark" },
    { body: "A 3.5 tonne recovery truck for planned vehicle movement and specialist carrying work that needs a dedicated setup.", alt: "3.5 tonne recovery truck available in Newark" },
    { body: "The 7.5 tonne box truck with tail lift gives you more carrying space for commercial loads, event stock and heavier removals support.", alt: "7.5 tonne box truck with tail lift for hire in Newark" },
    { body: "A 7.5 tonne curtain-side truck that works well for palletised or side-loaded goods where faster access helps.", alt: "7.5 tonne curtain-side truck for commercial transport in Newark" },
    { body: "The 7.5 tonne dropside is useful for awkward materials and open loading jobs that do not suit an enclosed body.", alt: "7.5 tonne dropside truck available for hire in Newark" },
    { body: "A 7.5 tonne tipper for heavier site and waste work where loose load handling matters as much as overall carrying capacity.", alt: "7.5 tonne tipper truck for site jobs in Newark" },
    { body: "The sleeper tail-lift option is there for longer-distance or more demanding carrying jobs that need a more substantial setup.", alt: "7.5 tonne sleeper tail-lift truck for longer transport work in Newark" },
    { body: "An 18 tonne box truck for larger commercial movements, stock transfers and substantial enclosed loads.", alt: "18 tonne box truck for self-drive commercial hire in Newark" },
    { body: "An 18 tonne curtain-side truck for easier side access on larger carrying jobs and pallet work.", alt: "18 tonne curtain-side truck available for hire in Newark" },
    { body: "The 26 tonne curtain-side is suited to bigger distribution-style jobs where capacity and side loading both matter.", alt: "26 tonne curtain-side truck for larger commercial transport in Newark" },
    { body: "A 44 tonne sleeper truck for specialist heavy transport work where a much larger road-going vehicle is required.", alt: "44 tonne sleeper truck for specialist heavy transport from Newark" },
  ],
  whyChooseKicker: "Why hire from us",
  whyChooseTitle: "A practical truck-hire service for demanding work",
  whyChooseDescription: "Truck hire only works well when the vehicle actually suits the load, the access points and the route. We keep Newark truck bookings practical by focusing on those real details from the start.",
  whyChooseItems: [
    { title: "Useful specialist options", body: "Tail lifts, dropsides, tippers and recovery transport are available when a normal van setup is not enough for the job." },
    { title: "Load-led vehicle choice", body: "We focus on the shape, weight and handling of the load, not just on booking the biggest vehicle available." },
    { title: "Practical route matching", body: "A truck that works well for local loading still needs to feel sensible once the route opens onto the A46, A17 or A1." },
    { title: "Support for commercial and one-off work", body: "The fleet is useful for both business transport and one-off practical jobs such as moves, collections and specialist carrying work." },
    { title: "Good local positioning", body: "Newark is well placed for local transport, construction support and wider Nottinghamshire or Lincolnshire carrying work." },
    { title: "Straightforward booking support", body: "We aim to keep the hire clear and useful so you can focus on the transport job itself rather than untangling vague options." },
  ],
  featureCtaTitle: "Need truck hire in Newark?",
  featureCtaDescription: "Tell us what needs moving, how it loads and what route is involved and we will help you choose a practical truck for the job.",
  serviceAreasKicker: "Areas we cover",
  serviceAreasTitle: "Truck hire from Newark and surrounding routes",
  serviceAreasDescription: "We support truck hire from Newark across nearby towns and wider regional routes, making it easier to cover heavier transport jobs from one practical base.",
  localRelevanceKicker: "Local truck hire guidance",
  localRelevanceTitle: "Why truck hire works well from Newark",
  localRelevanceDescription: `Truck hire in Newark is usually about practical load movement rather than distance alone. A day might begin with awkward loading at a property, business unit or site entrance, then widen quickly onto the A46, A17 or A1 for the main carrying leg. That is why the body type matters just as much as the route.

A tail lift can make removals and appliance movement more manageable. A dropside helps with access to building and landscaping materials. A tipper saves time on loose loads and waste. Around Newark, where local and regional carrying often happen in the same booking, the right truck choice keeps the day running more smoothly.`,
  localRelevanceBlocks: [
    {
      title: "Choosing the right truck for local loading points",
      body: `Many Newark truck bookings start at locations where access and loading are not especially generous. That could be a residential move, a business unit collection or a site job with awkward approach angles.

Choosing the right body type from the start is often what makes the load manageable rather than frustrating.`,
    },
    {
      title: "A practical fit for A46, A17 and A1 carrying work",
      body: `Once the route leaves Newark itself, the A46, A17 and A1 often become part of the job. The vehicle therefore needs to feel workable not just at the loading point but across the full carrying route.

That is why we keep the fleet focused on practical specialist options rather than generic oversized answers.`,
    },
    {
      title: "Useful for removals, site work and specialist transport",
      body: `Newark truck hire is commonly used for moves, heavier deliveries, building materials, waste, site support and vehicle transport. Those jobs all demand slightly different truck setups.

Matching the truck properly from the start usually saves far more time than trying to make one body type cover every kind of load.`,
    },
  ],
  bottomCtaTitle: "Book truck hire in Newark with practical guidance",
  bottomCtaDescription: "If you need a truck in Newark for heavier transport, removals or site work, get in touch and we will help you line up a vehicle that fits the job properly.",
  faqKicker: "Truck hire FAQs",
  faqTitle: "Common questions about truck hire in Newark",
  faqs: [
    { question: "What kinds of jobs is truck hire in Newark useful for?", answer: "Common Newark truck bookings include removals, heavier deliveries, site materials, waste movement, open loads and planned vehicle transport." },
    { question: "How do I choose the right truck in Newark?", answer: "The key details are what you are moving, how the load needs to be handled, what the loading point is like and whether the route is mainly local or includes larger road mileage." },
    { question: "Do you offer tail-lift and specialist truck options in Newark?", answer: "Yes. Depending on availability we can help with tail-lift trucks, dropsides, tippers and recovery-style vehicle transport options." },
    { question: "Is truck hire in Newark useful for business work?", answer: "Yes. Many Newark truck bookings are for commercial transport, stock movement, building materials, site support and other practical business loads." },
    { question: "Can I arrange truck hire in Newark at short notice?", answer: "Yes, subject to availability. If the job is coming up soon, call us and we will talk through the vehicle options that best fit the load." },
    { question: "What should I tell you when booking a truck in Newark?", answer: "The most useful details are the type of load, the loading method, whether access is awkward, the route involved and whether a specialist body such as a tail lift or tipper would make the job easier." },
  ],
}

const location1Tokens = createNearbyLocationTokens({
  location: "Lincoln",
  heroImage: "/images/compactcarhirenewark-co-uk-nearby-location-fleet-a.png",
  heroAlt: "Compact hire car prepared for city and regional travel in Lincoln",
  metadataDescription: "Compact car hire in Lincoln for city driving, station access and regional mileage using the A46, A15 and Lincoln ring-road links.",
  heroDescription: "Compact car hire in Lincoln for city-centre driving, station collections, business mileage and practical regional travel when you want something easy to manage.",
  serviceDescription: `Compact car hire in Lincoln is often the practical answer when the journey includes city traffic, ordinary parking and repeated short stops. A smaller vehicle keeps those everyday pressures easier to manage while still being comfortable enough for wider mileage using routes such as the A46 and A15.

That balance is useful across a city like Lincoln where the booking may start around the station, the city centre or a business visit, then widen out into regional travel. Compact cars stay flexible without feeling larger than the job really needs.`,
  whyChooseDescription: "Lincoln compact car hire works best when the vehicle stays easy to place in busier city traffic but still comfortable enough once the route opens up. That is the balance we keep in view.",
  serviceAreasDescription: "We support compact car hire in Lincoln and across nearby city and regional routes, including station access, city-centre driving and onward A46 or A15 travel.",
  localRelevanceDescription: `Lincoln is exactly the sort of city where compact cars make everyday sense. Busier urban roads, station access, tighter parking and repeated short stops all favour a smaller vehicle that is easy to slot into the flow of the day.

At the same time, a Lincoln booking does not always stay local. Routes can widen quickly onto the A46, A15 and broader county links, so the vehicle still needs to feel settled once the city-centre stage is over. Compact hatchbacks usually strike that balance well.`,
  localBlocks: [
    { title: "Useful in busier city traffic", body: `Compact cars help take the pressure out of Lincoln city driving because they are easier to position in traffic and easier to park when the day involves several short stops.

That can make a noticeable difference on ordinary bookings such as meetings, station access and replacement use.` },
    { title: "A practical fit for station and onward travel", body: `Lincoln bookings often mix urban pickups with wider journeys towards other parts of the county or beyond. Compact cars stay useful in both parts of that day.

They are small enough for the city element and still comfortable enough once the trip opens out.` },
    { title: "Easy to keep practical when plans change", body: `In a city like Lincoln, plans can change quickly between traffic, timing and destination updates. A compact hatchback gives you a practical base that stays easy to manage when that happens.

If the journey later calls for more room, the wider fleet is still available.` },
  ],
  faqs: [
    { question: "Why choose compact car hire in Lincoln?", answer: "Compact cars are well suited to Lincoln because they are easier in city traffic, simpler to park and still comfortable enough for wider regional mileage." },
    { question: "Is compact car hire in Lincoln useful for station access?", answer: "Yes. Station collections and onward travel are a common reason customers choose a compact car in Lincoln." },
    { question: "Do you offer automatic compact cars in Lincoln?", answer: "Yes, subject to availability. If you prefer an automatic for city driving or longer regional routes from Lincoln, ask when booking." },
    { question: "Are compact hire cars suitable for business travel in Lincoln?", answer: "Yes. Compact cars work well for meetings, visits, local appointments and practical day-to-day business mileage around Lincoln." },
    { question: "Can I use a compact hire car for longer trips from Lincoln?", answer: "Yes. Compact hatchbacks remain a sensible option when the route mixes Lincoln city driving with regional travel and you do not need a larger vehicle." },
    { question: "What if I later need more space than a compact car?", answer: "Larger cars, vans, minibuses and trucks are also available if the Lincoln booking grows beyond a compact hatchback." },
  ],
})

const location2Tokens = createNearbyLocationTokens({
  location: "Mansfield",
  heroImage: "/images/compactcarhirenewark-co-uk-nearby-location-fleet-b.png",
  heroAlt: "Compact hire cars lined up for everyday driving in Mansfield",
  metadataDescription: "Compact car hire in Mansfield for everyday local travel, station runs and regional driving, with practical access to wider Nottinghamshire routes.",
  heroDescription: "Compact car hire in Mansfield for everyday driving, station collections, business mileage and practical regional trips when you want something easy to place and easy to park.",
  serviceDescription: `Compact car hire in Mansfield is built around practical local use. Many customers want a vehicle that is easy to park, easy to live with and comfortable enough for a mix of town driving and short motorway mileage. That could mean getting across town for appointments, collecting someone from Mansfield station or heading out towards wider Nottinghamshire routes on a short-notice trip.

Compact cars are often the right answer because they stay manageable in busier traffic while still being perfectly useful on faster roads such as the A60, A617 and the wider M1 corridor. The result is a hire option that feels sensible rather than oversized.`,
  whyChooseDescription: "We keep compact car hire straightforward for Mansfield customers by focusing on useful vehicles, clear support and everyday local practicality.",
  serviceAreasDescription: "We support compact car hire in Mansfield and across nearby Nottinghamshire and Derbyshire routes, with compact options that stay easy locally and comfortable on wider mileage.",
  localRelevanceDescription: `Mansfield is the kind of place where compact car hire feels practical from the first mile. A lot of local driving involves switching between town-centre roads, retail parking, residential streets and quick onward links such as the A60, A617 and the M1 corridor.

Compact models also suit the stop-start reality of local movement around station access, shopping areas and short business trips. If you want a vehicle that is simple to park, easy to place in traffic and not oversized for everyday use, a compact car is often the sensible choice.`,
  localBlocks: [
    { title: "A sensible fit for mixed Mansfield journeys", body: `Many Mansfield bookings combine local town driving with a short stretch on larger roads. A compact hatchback keeps the town-centre part of the trip straightforward while still handling A-road or motorway mileage comfortably enough when the route opens out.

That matters if the day includes several small stops rather than one long drive.` },
    { title: "Useful around stations, retail areas and appointments", body: `Compact cars work particularly well for station access, business visits, healthcare appointments and everyday retail trips around Mansfield. They are easy to slot into ordinary car parks and less awkward in busy local traffic than something larger.

For customers covering temporary replacement transport, that simplicity is often exactly what they want.` },
    { title: "Easy to step up when the plan changes", body: `Sometimes a booking starts as a compact-car job but later needs more carrying room or more passenger comfort. That is one reason we keep the wider fleet in view, from estates and SUVs through to vans, minibuses and trucks.

You can start with the right car for a simple Mansfield trip and still have a clear route to something larger if the journey grows.` },
  ],
  faqs: [
    { question: "Why choose compact car hire in Mansfield?", answer: "Compact cars make sense in Mansfield because they are easier to park, easy to drive around town and still comfortable enough for short motorway and A-road mileage." },
    { question: "Can I arrange compact car hire in Mansfield at short notice?", answer: "Yes, subject to availability. If you need a compact car quickly in Mansfield, call us and we will talk through what is ready for the timing you need." },
    { question: "Do you only offer small cars in Mansfield?", answer: "No. Compact cars are the core offer on this page, but larger cars, estates, SUVs, vans, minibuses and trucks are also available if the journey needs more room." },
    { question: "What are compact hire cars in Mansfield commonly used for?", answer: "Common uses include station runs, business visits, shopping trips, family travel, temporary replacement transport and short regional journeys." },
    { question: "Are automatic compact cars available in Mansfield?", answer: "Yes, subject to availability. If you prefer an automatic for easier local traffic or more relaxed regional driving, ask when booking." },
    { question: "What should I tell you when booking in Mansfield?", answer: "The most useful details are the dates, expected route, whether you want manual or automatic driving, and whether there is any chance you will need more space than a compact hatchback." },
  ],
})

const location3Tokens = createNearbyLocationTokens({
  location: "Nottingham",
  heroImage: "/images/compactcarhirenewark-co-uk-nearby-location-fleet-a.png",
  heroAlt: "Compact hire car lined up for city and regional travel in Nottingham",
  metadataDescription: "Compact car hire in Nottingham for city-centre driving, station access, business travel and regional routes using the A52 and A60.",
  heroDescription: "Compact car hire in Nottingham for city-centre driving, station collections, business mileage and practical regional journeys from a busy urban base.",
  serviceDescription: "Compact car hire in Nottingham is often the practical answer when the journey includes dense city traffic, controlled parking and regular short stops. A smaller vehicle keeps those everyday pressures easier to manage while still being comfortable enough for wider runs using routes such as the A52 and A60.\n\nThat balance is useful across a city like Nottingham where the booking may start around the station, NG2 or an urban neighbourhood, then widen out into business travel or a regional return trip. Compact cars stay flexible without feeling larger than the job really needs.",
  whyChooseDescription: "Nottingham compact car hire works best when the vehicle stays easy to place in city traffic but still comfortable enough once the route opens up. That is the balance we keep in view.",
  serviceAreasDescription: "We support compact car hire in Nottingham and across nearby city and regional routes, including journeys around Nottingham station, NG2 and onward A52 or A60 travel.",
  localRelevanceDescription: "Nottingham is exactly the sort of city where compact cars make everyday sense. Busy urban roads, station access, tighter parking and repeated short stops all favour a smaller vehicle that is easy to slot into the flow of the day.\n\nAt the same time, a Nottingham booking does not always stay local. Routes can widen quickly onto the A52, A60 and broader regional links, so the vehicle still needs to feel settled once the city-centre stage is over. Compact hatchbacks usually strike that balance well.",
  localBlocks: [
    { title: "Useful in busier city traffic", body: "Compact cars help take the pressure out of Nottingham city-centre driving because they are easier to position in traffic and easier to park when the day involves several short stops.\n\nThat can make a noticeable difference on ordinary bookings such as meetings, station access and replacement use." },
    { title: "A practical fit for NG2, station and onward travel", body: "Nottingham bookings often mix urban pickups with wider journeys towards other parts of the county or beyond. Compact cars stay useful in both parts of that day.\n\nThey are small enough for the city element and still comfortable enough once the trip opens out." },
    { title: "Easy to keep practical when plans change", body: "In a city like Nottingham, plans can change quickly between traffic, timing and destination updates. A compact hatchback gives you a practical base that stays easy to manage when that happens.\n\nIf the journey later calls for more room, the wider fleet is still available." },
  ],
  faqs: [
    { question: "Why choose compact car hire in Nottingham?", answer: "Compact cars are well suited to Nottingham because they are easier in city traffic, simpler to park and still comfortable enough for wider regional mileage." },
    { question: "Is compact car hire in Nottingham useful for station access?", answer: "Yes. Station collections and onward travel are a common reason customers choose a compact car in Nottingham." },
    { question: "Do you offer automatic compact cars in Nottingham?", answer: "Yes, subject to availability. If you prefer an automatic for city driving or longer regional routes from Nottingham, ask when booking." },
    { question: "Are compact hire cars suitable for business travel in Nottingham?", answer: "Yes. Compact cars work well for meetings, visits, local appointments and practical day-to-day business mileage around Nottingham." },
    { question: "Can I use a compact hire car for longer trips from Nottingham?", answer: "Yes. Compact hatchbacks remain a sensible option when the route mixes Nottingham city driving with regional travel and you do not need a larger vehicle." },
    { question: "What if I later need more space than a compact car?", answer: "Larger cars, vans, minibuses and trucks are also available if the Nottingham booking grows beyond a compact hatchback." },
  ],
})

const location4Tokens = createNearbyLocationTokens({
  location: "Grantham",
  heroImage: "/images/compactcarhirenewark-co-uk-nearby-location-fleet-b.png",
  heroAlt: "Compact hire car prepared for local and regional travel in Grantham",
  metadataDescription: "Compact car hire in Grantham for station access, town driving and regional mileage using the A1 and A52.",
  heroDescription: "Compact car hire in Grantham for everyday local travel, station access, business mileage and practical regional driving around the A1 and A52.",
  serviceDescription: `Compact car hire in Grantham works well when the booking needs to stay easy in town but still comfortable enough for wider road use. A smaller vehicle helps with ordinary parking, station access and business stops, then remains practical once the route uses the A1 or A52.

That balance suits a lot of Grantham travel, from work appointments and family visits through to replacement transport and short regional journeys where a larger car would simply be more vehicle than the day requires.`,
  whyChooseDescription: "We keep Grantham compact car hire practical for everyday local driving first while still making sure the vehicle feels useful once the route widens beyond town.",
  serviceAreasDescription: "We support compact car hire in Grantham and nearby Lincolnshire routes, including station access, town-centre travel and onward journeys using the A1 and A52.",
  localRelevanceDescription: `Grantham is well suited to compact car hire because many bookings combine ordinary town movement with quick onward mileage. A smaller car feels more manageable in routine parking and station access, while still remaining comfortable once the trip heads onto the A1 or A52.

That practicality makes compact hatchbacks a sensible option for mixed local and regional travel from Grantham. They stay easy to live with without making the wider road section feel compromised.`,
  localBlocks: [
    { title: "Useful for everyday Grantham driving", body: `Compact cars help take the pressure out of ordinary town-centre travel, station pickups and everyday parking in Grantham. For many customers, that simplicity is exactly what matters most.

A smaller hatchback stays easy to live with throughout a normal working or personal day.` },
    { title: "A practical fit for A1 and A52 mileage", body: `Grantham journeys do not always stay local. Routes using the A1 or A52 can quickly turn a town booking into wider regional travel.

A compact car remains a sensible choice there because it balances easy local use with enough comfort for the larger-road part of the trip.` },
    { title: "Good for replacement transport and business use", body: `Grantham customers often need a straightforward vehicle for local travel, work appointments or family visits while their own car is unavailable. Compact cars are strong in those situations because they stay practical and uncomplicated.

If more room is needed later, the wider fleet remains available.` },
  ],
  faqs: [
    { question: "Why choose compact car hire in Grantham?", answer: "Compact cars are a practical fit in Grantham because they are easy around town and station areas while still being comfortable enough for A1 and A52 mileage." },
    { question: "Is compact car hire in Grantham useful for station access?", answer: "Yes. Compact cars are well suited to station pickups and onward travel because they keep local manoeuvring and parking easier." },
    { question: "Do you offer automatic compact cars in Grantham?", answer: "Yes, subject to availability. If you prefer automatic driving for local Grantham use or wider road travel, ask when booking." },
    { question: "Can I use a compact hire car for business trips in Grantham?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Grantham." },
    { question: "Can Grantham compact car hire also suit longer journeys?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
    { question: "What if I later need more space?", answer: "If the Grantham booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
  ],
})

const location5Tokens = createNearbyLocationTokens({
  location: "Retford",
  heroImage: "/images/compactcarhirenewark-co-uk-nearby-location-fleet-a.png",
  heroAlt: "Compact hire car prepared for everyday travel around Retford",
  metadataDescription: "Compact car hire in Retford for station access, business travel and regional journeys using the A1 and A620 links.",
  heroDescription: "Compact car hire in Retford for local driving, station pickups, business mileage and practical regional travel using the A1 and A620.",
  serviceDescription: `Compact car hire in Retford is useful when the booking needs to stay easy around town while still being comfortable enough for wider road mileage. A smaller vehicle helps with routine parking, local movements and station access, then remains practical once the route uses the A620 or heads towards the A1.

That makes compact cars a sensible fit for many Retford journeys, whether the booking is for everyday local use, replacement transport or a short-notice regional run.`,
  whyChooseDescription: "Retford compact car hire should feel practical from the first local stop to the wider A1 or A620 mileage that often follows it, and that is the balance we keep in view.",
  serviceAreasDescription: "We support compact car hire in Retford and nearby Nottinghamshire routes, including town-centre travel, station access and wider journeys using the A1 and A620.",
  localRelevanceDescription: `Retford is well suited to compact car hire because many bookings combine local movement with quicker onward travel. A compact hatchback keeps ordinary town-centre use and station access simple while still being capable enough once the trip heads towards the A1 or along the A620.

That practicality is one reason smaller cars work so well here. They suit everyday use without making the wider journey feel compromised.`,
  localBlocks: [
    { title: "Useful around Retford station and local roads", body: `Compact cars help take the pressure out of station collections, local appointments and everyday town-centre parking in Retford. For many customers, that simplicity is exactly what matters most.

A smaller hatchback stays easy to live with throughout an ordinary working or personal day.` },
    { title: "A practical fit for A1 and A620 mileage", body: `Retford bookings do not always stay local. Routes towards the A1 or across the A620 can quickly turn a short town booking into wider regional travel.

A compact car remains a sensible choice there because it balances easy local use with enough comfort for the wider drive.` },
    { title: "Good for replacement transport and business use", body: `Retford customers often need a straightforward vehicle for a few days of local travel, business appointments or family visits. Compact cars are strong in those situations because they stay practical and uncomplicated.

If more room is needed later, the wider fleet remains available.` },
  ],
  faqs: [
    { question: "Why choose compact car hire in Retford?", answer: "Compact cars are a practical fit in Retford because they are easy around town and station areas while still being comfortable enough for A1 and A620 mileage." },
    { question: "Is compact car hire in Retford useful for station access?", answer: "Yes. Compact cars are well suited to station pickups and onward travel because they keep local manoeuvring and parking easier." },
    { question: "Do you offer automatic compact cars in Retford?", answer: "Yes, subject to availability. If you prefer automatic driving for local Retford use or wider road travel, ask when booking." },
    { question: "Can I use a compact hire car for business trips in Retford?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Retford." },
    { question: "Can Retford compact car hire also suit longer journeys?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
    { question: "What if I later need more space?", answer: "If the Retford booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
  ],
})

const location6Tokens = createNearbyLocationTokens({
  location: "Southwell",
  heroImage: "/images/compactcarhirenewark-co-uk-nearby-location-fleet-b.png",
  heroAlt: "Compact hire car ready for practical travel around Southwell",
  metadataDescription: "Compact car hire in Southwell for local travel, Newark connections and everyday regional driving using the A612 and nearby A46 links.",
  heroDescription: "Compact car hire in Southwell for everyday driving, town-centre trips, Newark connections and practical regional mileage when you want something easy to manage.",
  serviceDescription: `Compact car hire in Southwell works well because the town often needs a vehicle that stays simple locally but still useful for regular travel in and out of Newark and the wider county. A smaller car is easy around local streets, ordinary parking and quick runs towards the A612, while still being comfortable enough for wider trips when the booking stretches further.

That makes compact hatchbacks a sensible option for Southwell customers who want a clean, manageable self-drive car for everyday use, work appointments, family visits and short regional driving without stepping up to something larger than the journey really needs.`,
  whyChooseDescription: "We keep Southwell compact car hire practical for the sort of everyday travel that mixes local roads, town-centre access and regular onward mileage towards Newark and nearby areas.",
  serviceAreasDescription: "We support compact car hire in Southwell and nearby routes, including journeys around the Minster area, local Nottinghamshire roads and onward regional travel.",
  localRelevanceDescription: `Southwell is a strong fit for compact car hire because so much everyday travel here is about keeping things easy rather than carrying extra bulk. A smaller car is useful for local streets, ordinary parking and practical access around town, while still being comfortable enough once the route heads wider.

That balance helps on bookings that combine town movement with trips into Newark or around nearby parts of Nottinghamshire. Compact hatchbacks stay practical in both halves of the journey.`,
  localBlocks: [
    { title: "Useful around local roads and the town centre", body: `Compact cars are a sensible choice in Southwell when the journey includes ordinary local stops, routine parking and everyday movements around town. They stay easy to position and easier to live with throughout the day.

That simplicity is often exactly what customers want from a local self-drive car.` },
    { title: "A good fit for Southwell to Newark and wider travel", body: `Many Southwell trips combine town-centre movement with onward mileage towards Newark or wider nearby routes. A compact hatchback handles that shift well without feeling too large for the local part of the booking.

It is a useful middle ground for mixed day-to-day travel.` },
    { title: "Practical for work, visits and replacement use", body: `Southwell compact car hire often suits customers who need a manageable vehicle for appointments, family visits or a short replacement period while their own car is unavailable.

If the trip later grows beyond that, the wider fleet is still available.` },
  ],
  faqs: [
    { question: "Why choose compact car hire in Southwell?", answer: "Compact cars work well in Southwell because they are easy for local roads and town-centre parking while still comfortable enough for wider Nottinghamshire travel." },
    { question: "Is compact car hire in Southwell useful for Newark connections?", answer: "Yes. Compact cars are a practical fit when the booking includes local Southwell driving with onward travel towards Newark and nearby routes." },
    { question: "Do you offer automatic compact cars in Southwell?", answer: "Yes, subject to availability. If you prefer automatic driving for Southwell traffic or wider local mileage, ask when booking." },
    { question: "Can I use a compact hire car for business travel in Southwell?", answer: "Yes. Compact cars are commonly used for work appointments, practical visits and everyday professional mileage in and around Southwell." },
    { question: "Can Southwell compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks stay useful when the route mixes local Southwell driving with wider Nottinghamshire or regional travel." },
    { question: "What if I later need more room?", answer: "If the Southwell booking later needs more space, the wider fleet includes larger cars, vans, minibuses and trucks." },
  ],
})

const location7Tokens = createNearbyLocationTokens({
  location: "Gainsborough",
  heroImage: "/images/compactcarhirenewark-co-uk-nearby-location-fleet-a.png",
  heroAlt: "Compact hire car ready for practical travel around Gainsborough",
  metadataDescription: "Compact car hire in Gainsborough for town driving, station access and regional mileage using the A159 and A631 links.",
  heroDescription: "Compact car hire in Gainsborough for everyday local travel, station access, business mileage and practical regional driving around the A159 and A631.",
  serviceDescription: `Compact car hire in Gainsborough makes sense when the booking mixes local roads with wider routes beyond town. A smaller vehicle is easy to place around ordinary parking, station stops and retail visits, while still being comfortable enough for A159 or A631 mileage and the wider regional network.

That practicality suits a lot of Gainsborough travel, from family visits and work appointments through to replacement transport and short-notice regional journeys. You get the convenience of a compact hatchback without giving up the comfort needed for the wider drive.`,
  whyChooseDescription: "We keep Gainsborough compact car hire practical for everyday driving first, while still making sure the vehicle feels useful once the route stretches beyond town.",
  serviceAreasDescription: "We support compact car hire in Gainsborough and nearby Lincolnshire routes, including everyday town travel and wider journeys using the A159 and A631.",
  localRelevanceDescription: `Gainsborough is a good match for compact car hire because many journeys here blend ordinary local driving with quick access to wider routes. A smaller vehicle is easier in routine parking and short local stops, but it still remains comfortable enough when the trip widens beyond town.

That balance matters on bookings that combine shopping, station access, family visits and regional travel in one day. Compact hatchbacks stay practical in both parts of the journey.`,
  localBlocks: [
    { title: "A sensible fit for everyday Gainsborough driving", body: `Compact cars are useful in Gainsborough because they keep local manoeuvring, short stops and everyday parking simpler. That is often the main thing customers want from a hire car.

A smaller hatchback also tends to feel less cumbersome on routine town-centre movements than a larger vehicle.` },
    { title: "Useful once the route opens onto the A159 or A631", body: `Gainsborough bookings often widen beyond local roads quite quickly. The A159 and A631 both make it easy for trips to move into longer regional mileage.

A compact car gives you a sensible middle ground: easy enough for town use, but still useful once the route becomes faster and more open.` },
    { title: "Good for mixed personal and business use", body: `Many Gainsborough customers want one vehicle that can cover errands, appointments, family visits and occasional work mileage without feeling like more car than they need.

That is one of the clearest strengths of compact car hire in Gainsborough.` },
  ],
  faqs: [
    { question: "Why choose compact car hire in Gainsborough?", answer: "Compact cars are a practical option in Gainsborough because they are easy for local driving and parking while still staying comfortable enough for A159 and A631 mileage." },
    { question: "Is compact car hire in Gainsborough useful for station and town travel?", answer: "Yes. Compact cars are well suited to the kind of station access, retail stops and local appointments that make up many Gainsborough journeys." },
    { question: "Do you offer automatic compact cars in Gainsborough?", answer: "Yes, subject to availability. If you prefer automatic driving for Gainsborough traffic or wider regional mileage, ask when booking." },
    { question: "Can I use a compact car for business travel in Gainsborough?", answer: "Yes. Compact cars are commonly used for work appointments, visits and straightforward professional mileage in and around Gainsborough." },
    { question: "Can Gainsborough compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain practical for mixed local and regional driving when you do not need extra carrying space." },
    { question: "What if I later need more room than a compact car?", answer: "The wider fleet includes larger cars, vans, minibuses and trucks if the Gainsborough booking later needs more capacity." },
  ],
})

const location8Tokens = createNearbyLocationTokens({
  location: "Worksop",
  heroImage: "/images/compactcarhirenewark-co-uk-nearby-location-fleet-b.png",
  heroAlt: "Compact hire car ready for practical driving around Worksop",
  metadataDescription: "Compact car hire in Worksop for town driving, station access and regional mileage using the A57, A60 and nearby motorway links.",
  heroDescription: "Compact car hire in Worksop for everyday town travel, station trips, business mileage and practical regional driving around the A57 and A60.",
  serviceDescription: `Compact car hire in Worksop makes sense when the booking mixes local roads with wider routes beyond town. A smaller vehicle is easy to place around ordinary parking and shopping stops, while still being comfortable enough for A57 or A60 mileage and the wider regional network.

That practicality suits a lot of Worksop travel, from family visits and work appointments through to replacement transport and short notice regional journeys. You get the convenience of a compact hatchback without giving up the comfort needed for the wider drive.`,
  whyChooseDescription: "We keep Worksop compact car hire practical for everyday driving first, while still making sure the vehicle feels useful once the route stretches beyond town.",
  serviceAreasDescription: "We support compact car hire in Worksop and nearby Nottinghamshire and South Yorkshire routes, including everyday town travel and wider journeys using the A57 and A60.",
  localRelevanceDescription: `Worksop is a good match for compact car hire because many journeys here blend ordinary local driving with quick access to wider routes. A smaller vehicle is easier in routine parking and short local stops, but it still remains comfortable enough when the trip widens beyond town.

That balance matters on bookings that combine shopping, station access, family visits and regional travel in one day. Compact hatchbacks stay practical in both parts of the journey.`,
  localBlocks: [
    { title: "A sensible fit for everyday Worksop driving", body: `Compact cars are useful in Worksop because they keep local manoeuvring, short stops and everyday parking simpler. That is often the main thing customers want from a hire car.

A smaller hatchback also tends to feel less cumbersome on routine town-centre movements than a larger vehicle.` },
    { title: "Useful once the route opens onto the A57 or A60", body: `Worksop bookings often widen beyond local roads quite quickly. The A57 and A60 both make it easy for trips to move into longer regional mileage.

A compact car gives you a sensible middle ground: easy enough for town use, but still useful once the route becomes faster and more open.` },
    { title: "Good for mixed personal and business use", body: `Many Worksop customers want one vehicle that can cover errands, appointments, family visits and occasional work mileage without feeling like more car than they need.

That is one of the clearest strengths of compact car hire in Worksop.` },
  ],
  faqs: [
    { question: "Why choose compact car hire in Worksop?", answer: "Compact cars are a practical option in Worksop because they are easy for local driving and parking while still staying comfortable enough for A57 and A60 mileage." },
    { question: "Is compact car hire in Worksop useful for station and town travel?", answer: "Yes. Compact cars are well suited to the kind of station access, retail stops and local appointments that make up many Worksop journeys." },
    { question: "Do you offer automatic compact cars in Worksop?", answer: "Yes, subject to availability. If you prefer automatic driving for Worksop traffic or wider regional mileage, ask when booking." },
    { question: "Can I use a compact car for business travel in Worksop?", answer: "Yes. Compact cars are commonly used for work appointments, visits and straightforward professional mileage in and around Worksop." },
    { question: "Can Worksop compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain practical for mixed local and regional driving when you do not need extra carrying space." },
    { question: "What if I later need more room than a compact car?", answer: "The wider fleet includes larger cars, vans, minibuses and trucks if the Worksop booking later needs more capacity." },
  ],
})

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "compact-car": createContentSet({
    tokens: homepageTokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "main-flow-vehicles",
    currentLocationName: siteConfig.locationName,
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  "van-hire": createContentSet({
    tokens: vanHireTokens,
    mainVehicleNames: vanMainNames,
    mainVehicleImages: vanMainImages,
    inventorySectionId: "van-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "truck-hire": createContentSet({
    tokens: truckHireTokens,
    mainVehicleNames: truckMainNames,
    mainVehicleImages: truckMainImages,
    inventorySectionId: "truck-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "minibus-hire": createContentSet({
    tokens: minibusHireTokens,
    mainVehicleNames: minibusMainNames,
    mainVehicleImages: minibusMainImages,
    inventorySectionId: "minibus-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
}

export const locationPageContents: Record<number, ServicePageContent> = {
  1: createContentSet({
    tokens: location1Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location1-vehicles",
    currentLocationName: "Lincoln",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  2: createContentSet({
    tokens: location2Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location2-vehicles",
    currentLocationName: "Mansfield",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  3: createContentSet({
    tokens: location3Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location3-vehicles",
    currentLocationName: "Nottingham",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  4: createContentSet({
    tokens: location4Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location4-vehicles",
    currentLocationName: "Grantham",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  5: createContentSet({
    tokens: location5Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location5-vehicles",
    currentLocationName: "Retford",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  6: createContentSet({
    tokens: location6Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location6-vehicles",
    currentLocationName: "Southwell",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  7: createContentSet({
    tokens: location7Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location7-vehicles",
    currentLocationName: "Gainsborough",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  8: createContentSet({
    tokens: location8Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location8-vehicles",
    currentLocationName: "Worksop",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
}
