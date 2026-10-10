export const SITE = {
  name: "Dulaar Hospital",
  shortName: "Dulaar Hospital",
  alternateName: "Dulaar Children's Hospital",
  tagline:
    "Specialized Children's Hospital with Complete Maternity & Women's Healthcare in Bhopal",
  description:
    "Dulaar Hospital, Bhopal is a specialized children's hospital offering 24x7 pediatric and newborn care (NICU), along with complete maternity and women's healthcare (obstetrics & gynecology), general medicine and general surgery - led by experienced specialists Dr. Akhil Singh and Dr. Varun Rai.",
  url: "https://www.dulaarhospital.com",
  phone: "0755-2446809",
  phoneHref: "tel:+917552446809",
  // TODO: replace with the hospital's official WhatsApp number in
  // international format (country code + number, no symbols or spaces).
  whatsapp: "917552446809",
  whatsappMessage: "Hello Dulaar Hospital, I would like to book an appointment.",
  email: "care@dulaarhospital.com",
  addressLine1: "A-11, Surendra Garden, Bagsewaniya",
  addressLine2: "Near Police Station (Bagsewaniya Thana), Hoshangabad Road",
  city: "Bhopal",
  state: "Madhya Pradesh",
  pincode: "462043",
  fullAddress:
    "A-11, Surendra Garden, Bagsewaniya, Ahmedpur (Near Police Station / Bagsewaniya Thana), Hoshangabad Road, Bhopal, Madhya Pradesh - 462043",
  hours: "Open 24x7 - Monday to Sunday",
  hoursShort: "Mon - Sun: 24x7",
  opd: "OPD & General Consultation: All days, 24x7",
  emergency: "Emergency & NICU: Available 24x7",
  mapEmbed:
    "https://www.google.com/maps?q=Dulaar%20Hospital%20Bagsewaniya%20Hoshangabad%20Road%20Bhopal&z=15&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Dulaar+Hospital+Bagsewaniya+Hoshangabad+Road+Bhopal",
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#facilities", label: "Facilities" },
  { href: "#contact", label: "Contact" },
] as const;

export type Service = {
  title: string;
  summary: string;
  points: string[];
  icon: "baby" | "heart" | "stethoscope" | "shield";
};

export const SERVICES: Service[] = [
  {
    title: "Pediatrics & Newborn Care",
    summary:
      "Complete child healthcare from birth through adolescence, delivered by child specialists in a calm, child-friendly setup.",
    points: [
      "Immunization & vaccination",
      "Viral fever & infections",
      "Newborn jaundice care",
      "Rickets & nutrition support",
      "Growth & development assessment",
    ],
    icon: "baby",
  },
  {
    title: "Obstetrics & Gynecology",
    summary:
      "Specialized maternal and women's health support with gentle, respectful care through every stage of life.",
    points: [
      "Antenatal & postnatal care",
      "High-risk pregnancy support",
      "Women's health consultation",
      "Routine gynecological care",
    ],
    icon: "heart",
  },
  {
    title: "General Medicine & Surgery",
    summary:
      "Comprehensive family health solutions for adults and elderly - from accurate diagnosis to surgical care.",
    points: [
      "General physician consultation",
      "Chronic disease management",
      "Minor & general surgery",
      "Health check-ups",
    ],
    icon: "stethoscope",
  },
  {
    title: "Critical Care & NICU",
    summary:
      "A well-maintained NICU and emergency stabilization unit with round-the-clock monitoring by trained staff.",
    points: [
      "Neonatal Intensive Care (NICU)",
      "24x7 emergency stabilization",
      "Newborn monitoring",
      "Critical care nursing",
    ],
    icon: "shield",
  },
];

export type Doctor = {
  name: string;
  qualifications: string;
  specialty: string;
  role: string;
  bio: string;
  focus: string[];
  availability: string;
  initials: string;
  tint: string;
};

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Akhil Singh",
    qualifications: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrician & Newborn Specialist",
    role: "Consultant Pediatrician",
    bio: "Caring for children with a calm, reassuring approach - from routine immunizations and viral fever to newborn jaundice, rickets and growth monitoring.",
    focus: ["Newborn Care", "Immunization", "Child Nutrition", "Growth Assessment"],
    availability: "Available 24x7 for consultation & emergency",
    initials: "AS",
    tint: "from-brand-500 to-brand-700",
  },
  {
    name: "Dr. Varun Rai",
    qualifications: "MBBS, Pediatrician",
    specialty: "Pediatrician",
    role: "Consultant Pediatrician",
    bio: "Known for listening carefully and explaining every diagnosis clearly, ensuring parents feel confident about their child's treatment and recovery.",
    focus: ["Pediatric Care", "Viral Fever", "Newborn Care", "Family Counseling"],
    availability: "Available 24x7 for consultation & emergency",
    initials: "VR",
    tint: "from-teal-500 to-teal-700",
  },
];

export type Facility = {
  title: string;
  description: string;
  icon: "clock" | "baby" | "smile" | "sparkles" | "users" | "badge";
};

export const FACILITIES: Facility[] = [
  {
    title: "24x7 Emergency & OPD",
    description:
      "Round-the-clock doctor availability for general consultation and emergency care, every day of the week.",
    icon: "clock",
  },
  {
    title: "Well-Maintained NICU",
    description:
      "A dedicated neonatal intensive care unit for newborns needing extra monitoring and support after birth.",
    icon: "baby",
  },
  {
    title: "Child-Friendly Environment",
    description:
      "A stress-free, welcoming space designed to keep children calm and comfortable during their visit.",
    icon: "smile",
  },
  {
    title: "Clean & Hygienic Infrastructure",
    description:
      "Rigorously cleaned wards, operation areas and waiting spaces that meet strict hygiene standards.",
    icon: "sparkles",
  },
  {
    title: "Experienced Nursing Staff",
    description:
      "Polite, attentive and well-trained nurses who support patients and families at every step.",
    icon: "users",
  },
  {
    title: "Accurate Diagnosis, Fair Pricing",
    description:
      "Reliable diagnostic work and reasonable, transparent pricing without unnecessary treatments.",
    icon: "badge",
  },
];

export type Testimonial = {
  name: string;
  context: string;
  rating: number;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rakesh Sharma",
    context: "Parent, Bagsewaniya",
    rating: 5,
    quote:
      "The hospital is very clean and hygienic. My daughter was admitted for viral fever and the nursing staff took great care of her throughout the night.",
  },
  {
    name: "Pooja Verma",
    context: "Mother of a newborn",
    rating: 5,
    quote:
      "Dr. Akhil Singh explained every small doubt of mine patiently. The newborn care and follow-up were excellent, and the staff was always polite.",
  },
  {
    name: "Imran Khan",
    context: "Patient's attendant",
    rating: 5,
    quote:
      "We visited at 2 AM for an emergency and the doctor was available immediately. Quick response, accurate diagnosis and reasonable charges - truly grateful.",
  },
  {
    name: "Sunita Rathore",
    context: "Guardian, Hoshangabad Road",
    rating: 5,
    quote:
      "A very caring place for children. The doctors supervise personally and never rush you. My son recovers fast every time we visit Dulaar Hospital.",
  },
  {
    name: "Aarti Pawar",
    context: "Antenatal patient",
    rating: 5,
    quote:
      "From antenatal check-ups to delivery support, the gynecology team was supportive and kind. The hospital is spotless and the staff behaves very well.",
  },
];

export const STATS = [
  { value: "24x7", label: "Emergency & OPD" },
  { value: "2", label: "Expert Pediatricians" },
  { value: "4", label: "Care Specialties" },
  { value: "100%", label: "Family-Focused Care" },
] as const;
