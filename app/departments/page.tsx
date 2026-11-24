import type { Metadata } from 'next';
import Image from 'next/image';
import {
    CheckCircle2,
    GraduationCap,
    UserCheck,
    Microscope,
    Building2,
    BookOpen,
    Camera,
    ArrowRight
} from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Academic Departments & Laboratories | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore the five core academic departments at JIPS: Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmacognosy, and Pharmacy Practice / Pharm.D.",
};

interface DepartmentData {
    id: string;
    index: string;
    title: string;
    hod: string;
    programmes: string;
    description: string;
    shortLine: string;
    points: string[];
    image: {
        src: string;
        caption: string;
    };
}

const departments: DepartmentData[] = [
    {
        id: 'pharmaceutics',
        index: '01',
        title: 'Department of Pharmaceutics',
        hod: 'Dr P. Durga Seshu Priya',
        programmes: 'B.Pharm, Pharm.D (subject teaching)',
        shortLine: 'Formulation science and drug delivery',
        description:
            'The Department of Pharmaceutics focuses on the science of converting a drug into a safe, effective and stable dosage form. Students learn the principles of formulation, drug delivery and pharmaceutical technology, and practise them in the laboratory.',
        points: [
            'Formulation of tablets, capsules, liquid orals, semisolids and sterile products.',
            'Training in physical pharmacy, biopharmaceutics and pharmacokinetics.',
            'Exposure to industrial pharmacy, quality standards and cGMP practices.',
        ],
        image: {
            src: '/departments/pharmaceutics.jpg',
            caption: 'Students of the Department of Pharmaceutics, JIPS',
        },
    },
    {
        id: 'pharmacology',
        index: '02',
        title: 'Department of Pharmacology',
        hod: 'Mrs K. Sushmitha',
        programmes: 'B.Pharm, Pharm.D (subject teaching)',
        shortLine: 'Drug action, safety and screening',
        description:
            'The Department of Pharmacology studies how drugs act on the body and how their safety and effectiveness are assessed. Teaching combines theory with experimental and screening-based learning.',
        points: [
            'Study of drug action, therapeutic uses, adverse effects and drug interactions.',
            'Experimental pharmacology and screening methods, following ethical guidelines.',
            'Awareness of pharmacovigilance and rational use of medicines.',
        ],
        image: {
            src: '/departments/pharmacology.jpg',
            caption: 'Experimental Pharmacology & Screening Laboratory, JIPS',
        },
    },
    {
        id: 'pharmaceutical-chemistry',
        index: '03',
        title: 'Department of Pharmaceutical Chemistry',
        hod: 'Dr S. Shobha',
        programmes: 'B.Pharm, Pharm.D (subject teaching)',
        shortLine: 'Drug design, synthesis and analysis',
        description:
            'The Department of Pharmaceutical Chemistry covers the chemistry behind medicines: how drugs are designed, synthesised and analysed. It also builds the analytical skills used to check drug quality.',
        points: [
            'Organic and medicinal chemistry, including drug synthesis and structure–activity relationships.',
            'Pharmaceutical analysis and instrumental methods such as UV-Visible spectroscopy and chromatography.',
            'Introduction to research areas such as drug discovery and computational (in silico) studies.',
        ],
        image: {
            src: '/departments/pharmaceutical-chemistry.jpg',
            caption: 'Pharmaceutical Chemistry laboratory, JIPS',
        },
    },
    {
        id: 'pharmacognosy',
        index: '04',
        title: 'Department of Pharmacognosy',
        hod: 'Dr J V Suresh (Principal)',
        programmes: 'B.Pharm, Pharm.D (subject teaching)',
        shortLine: 'Herbal drugs and natural products',
        description:
            'The Department of Pharmacognosy deals with medicinal drugs obtained from plants and other natural sources. Students learn to identify, evaluate and extract natural products, and understand their role in modern medicine.',
        points: [
            'Identification and standardisation of crude drugs and herbal products.',
            'Phytochemistry, extraction techniques and natural product research.',
            'Learning through herbal specimens and a medicinal plant garden.',
        ],
        image: {
            src: '/departments/pharmacognosy.jpg',
            caption: 'Pharmacognosy laboratory – microscopy practical, JIPS',
        },
    },
    {
        id: 'pharmacy-practice',
        index: '05',
        title: 'Department of Pharmacy Practice / Pharm.D',
        hod: 'Dr P. Narayana Swamy (Vice Principal)',
        programmes: 'Pharm.D, B.Pharm (subject teaching)',
        shortLine: 'Clinical and hospital-based pharmacy',
        description:
            'The Department of Pharmacy Practice prepares students for patient-centred roles in hospitals and the community. Its focus is clinical training, so that students can support doctors, patients and healthcare teams.',
        points: [
            'Clinical pharmacy, therapeutics and hospital pharmacy practice.',
            'Patient counselling, medication safety and pharmaceutical care.',
            'Hospital-based clerkship and ward training for Pharm.D students.',
        ],
        image: {
            src: '/departments/pharmacy-practice.jpg',
            caption: 'First Aid Room – students in patient interaction practice, JIPS',
        },
    },
];

export default function DepartmentsPage() {
    return (
        <main className={styles.pageWrapper}>
            {/* 1. Executive Hero Banner */}
            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <span className={styles.eyebrow}>SECTION 2.4 – DEPARTMENT HIGHLIGHTS SHOWCASE</span>
                    <h1 className={styles.pageTitle}>Five Core Academic Departments</h1>
                    <p className={styles.pageSubtitle}>
                        Five Departments | Learning, Research and Professional Practice
                    </p>

                    {/* Overview Box */}
                    <div className={styles.overviewCard}>
                        <div className={styles.overviewHeader}>
                            <Building2 size={18} />
                            <span>Institutional Overview</span>
                        </div>
                        <p className={styles.overviewText}>
                            JIPS offers its pharmacy programmes through five core departments. Each department combines classroom teaching with practical laboratory training, so that students gain the scientific knowledge and hands-on skills needed for industry, hospitals, research and regulatory careers.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Sticky Quick Navigation Bar */}
            <nav className={styles.stickyNav} aria-label="Department quick navigation">
                <div className={styles.navContainer}>
                    {departments.map((dept) => (
                        <a key={dept.id} href={`#${dept.id}`} className={styles.navPill}>
                            <span>{dept.index}. {dept.title.replace('Department of ', '')}</span>
                        </a>
                    ))}
                </div>
            </nav>

            {/* 3. Detailed Department Sections */}
            <div className={styles.contentContainer}>
                {departments.map((dept) => (
                    <article key={dept.id} id={dept.id} className={styles.deptSection}>
                        {/* Section Header */}
                        <div className={styles.deptHeader}>
                            <div className={styles.deptIndexRow}>
                                <span className={styles.deptIndexBadge}>
                                    <Microscope size={14} />
                                    Department {dept.index}
                                </span>
                                <span style={{ fontSize: '0.85rem', color: '#facc15', fontWeight: 700 }}>
                                    {dept.shortLine}
                                </span>
                            </div>

                            <h2 className={styles.deptTitle}>{dept.title}</h2>

                            <div className={styles.metaBadgesRow}>
                                <div className={styles.metaBadge}>
                                    <UserCheck size={15} color="#facc15" />
                                    <span>Head of Department: <strong>{dept.hod}</strong></span>
                                </div>
                                <div className={styles.metaBadge}>
                                    <GraduationCap size={15} color="#facc15" />
                                    <span>Programmes: <strong>{dept.programmes}</strong></span>
                                </div>
                            </div>
                        </div>

                        {/* Section Body */}
                        <div className={styles.deptBody}>
                            <div className={styles.deptInfoCol}>
                                <p className={styles.deptDesc}>{dept.description}</p>

                                <div className={styles.highlightsBox}>
                                    <h3 className={styles.highlightsTitle}>
                                        <BookOpen size={16} />
                                        Key Academic &amp; Laboratory Focus
                                    </h3>
                                    <ul className={styles.pointsList}>
                                        {dept.points.map((pt, i) => (
                                            <li key={i} className={styles.pointItem}>
                                                <CheckCircle2 size={18} className={styles.pointIcon} />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Laboratory Media (Exactly 1 Image per Department) */}
                            <div className={styles.deptMediaCol}>
                                <div className={styles.photoCard}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={dept.image.src}
                                            alt={dept.image.caption}
                                            fill
                                            sizes="(max-width: 992px) 100vw, 480px"
                                            className={styles.deptPhoto}
                                        />
                                    </div>
                                    <div className={styles.photoCaption}>
                                        <Camera size={15} color="#ca8a04" />
                                        <span>{dept.image.caption}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {/* 4. Institutional Roster Summary Table */}
                <section className={styles.summarySection}>
                    <div className={styles.summaryHeader}>
                        <h2 className={styles.summaryTitle}>Department Governance &amp; Academic Matrix</h2>
                        <p className={styles.summarySub}>
                            Summary directory of departmental leadership and programme alignments across Jagan&apos;s Institute of Pharmaceutical Sciences.
                        </p>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.rosterTable}>
                            <thead>
                                <tr>
                                    <th className={styles.rosterTh}>S.No</th>
                                    <th className={styles.rosterTh}>Department</th>
                                    <th className={styles.rosterTh}>Head of Department</th>
                                    <th className={styles.rosterTh}>Programmes Offered</th>
                                    <th className={styles.rosterTh}>Core Scientific Focus</th>
                                    <th className={styles.rosterTh}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {departments.map((d) => (
                                    <tr key={d.id} className={styles.rosterTr}>
                                        <td className={styles.rosterTd} style={{ fontWeight: 800, color: '#ca8a04' }}>
                                            {d.index}
                                        </td>
                                        <td className={styles.rosterTd}>
                                            <a href={`#${d.id}`} className={styles.deptNameLink}>
                                                {d.title}
                                            </a>
                                        </td>
                                        <td className={styles.rosterTd} style={{ fontWeight: 700, color: '#0b3954' }}>
                                            {d.hod}
                                        </td>
                                        <td className={styles.rosterTd}>
                                            <span style={{ fontSize: '0.8rem', background: '#eff6ff', color: '#1d4ed8', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                                                {d.programmes}
                                            </span>
                                        </td>
                                        <td className={styles.rosterTd} style={{ color: '#475569' }}>
                                            {d.shortLine}
                                        </td>
                                        <td className={styles.rosterTd}>
                                            <a href={`#${d.id}`} style={{ color: '#0b3954', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                                                View <ArrowRight size={13} />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
}
