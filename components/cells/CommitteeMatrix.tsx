'use client';

import React, { useState, useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
    type Variants,
} from 'framer-motion';
import {
    ShieldCheck,
    CheckCircle2,
    Calendar,
    ArrowUpRight,
    Scale,
    Users,
    Phone,
    ChevronDown,
    ChevronUp,
} from 'lucide-react';
import styles from './CommitteeMatrix.module.css';

export interface CellMember {
    name: string;
    role: string;
    designation: string;
    contact?: string;
}

export interface StatutoryCell {
    id: string;
    code: string;
    title: string;
    category: 'quality' | 'safety' | 'equity';
    statutoryBasis: string;
    leadDescription: string;
    functions: string[];
    cadence: string;
    accentColor: string;
    members: CellMember[];
}

const statutoryCells: StatutoryCell[] = [
    {
        id: 'iqac',
        code: 'IQAC',
        title: 'Internal Quality Assurance Cell',
        category: 'quality',
        statutoryBasis: 'NAAC & UGC Quality Mandate',
        leadDescription:
            'Established to continuously enhance academic standards and administrative efficiency through quality benchmarks and institutional best practices.',
        functions: [
            'Develops and applies measurable quality benchmarks for academic, clinical, and administrative processes.',
            'Facilitates a learner-centric environment and participatory teaching-learning mechanisms.',
            'Collects and analyzes structured feedback from students, parents, alumni, and pharmaceutical employers.',
            'Organizes quality theme seminars, faculty workshops, and prepares the Annual Quality Assurance Report (AQAR).',
        ],
        cadence: 'Quarterly Academic Audit & Annual AQAR',
        accentColor: '#0b3954',
        members: [
            { name: 'Dr. J. Venkata Suresh', role: 'Chairman', designation: 'Principal & Professor', contact: '9866882091' },
            { name: 'Dr. Seelam Sharath Chandra', role: 'Convener', designation: 'Professor (Faculty Rep.)', contact: '9703652565' },
            { name: 'Dr. B. Srujan Reddy', role: 'Co-Convener', designation: 'Professor (Faculty Rep.)', contact: '8500180042' },
            { name: 'Mr. D. Naveen Kumar', role: 'Member', designation: 'Management Representative', contact: '9248089801' },
            { name: 'Mrs. Ashwini Masapeta', role: 'Member', designation: 'Assistant Professor (Female Faculty Rep.)', contact: '9247269962' },
            { name: 'Mr. J. Gopala Krishna', role: 'Member', designation: 'Student Co-ordinator', contact: '9000962105' },
        ],
    },
    {
        id: 'anti-ragging',
        code: 'ARC',
        title: 'Anti-Ragging Committee & Squad',
        category: 'safety',
        statutoryBasis: 'Supreme Court Directives & PCI Regulations',
        leadDescription:
            'Enforces a strict zero-tolerance policy against any form of ragging, physical intimidation, or harassment across campus and hostel facilities.',
        functions: [
            'Meets regularly prior to semester commencement and monthly thereafter to audit anti-ragging compliance.',
            'Dedicated Anti-Ragging Squad conducts continuous surprise inspections across labs, corridors, and hostels.',
            'Collects mandatory anti-ragging affidavits from scholars and parents during admissions.',
            'Executes immediate, time-bound investigations and coordinates with local law enforcement for student safety.',
        ],
        cadence: 'Monthly Review & Continuous Squad Patrols',
        accentColor: '#b91c1c',
        members: [
            { name: 'Dr. Venkata Suresh Jilakara', role: 'Chairman', designation: 'Principal & Professor', contact: '9866882091' },
            { name: 'Mr. V. Santhosh Kumar', role: 'Member', designation: 'Sub Inspector of Police', contact: '8712662472' },
            { name: 'Mr. D. Praveen Kumar', role: 'Member', designation: 'Social Worker (Civil Society)', contact: '9246969401' },
            { name: 'Dr. Seelam Sharath Chandra', role: 'Member', designation: 'Professor (Faculty Mentors)', contact: '9703652565' },
            { name: 'Dr. B. Srujan', role: 'Member', designation: 'Professor (Chairman, Anti-Ragging Squad)', contact: '8500180042' },
            { name: 'Dr. Kappala Soujanya', role: 'Member', designation: 'Assistant Professor', contact: '9542019790' },
            { name: 'Mr. Jugguru Surendra', role: 'Member', designation: 'Assistant Professor (Anti-Ragging Squad)', contact: '9948994916' },
            { name: 'Mr. N. Vinod', role: 'Member', designation: 'Assistant Professor (Anti-Ragging Squad)', contact: '9966990963' },
            { name: 'Mr. B. Chandrasekhar', role: 'Member', designation: 'Hostel Warden', contact: '9618497939' },
            { name: 'Mrs. S. Uma Devi', role: 'Member', designation: 'College Librarian', contact: '6302095208' },
        ],
    },
    {
        id: 'women-protection',
        code: 'WPC',
        title: 'Women Protection Cell',
        category: 'safety',
        statutoryBasis: 'AICTE & UGC Safety Mandates for Women',
        leadDescription:
            'Dedicated to ensuring female students and women staff feel completely secure, dignified, and supported with confidential grievance resolution.',
        functions: [
            'Addresses grievances involving female students, teaching faculty, and non-teaching staff with strict confidentiality.',
            'Maintains over 50% women representation on the committee, supported by legal advisory guidance.',
            'Establishes preventive measures across departments and hostels against gender discrimination.',
            'Periodically audits institutional redressal policies in accordance with Supreme Court guidelines.',
        ],
        cadence: 'Periodic Audits & Immediate Grievance Redressal',
        accentColor: '#0284c7',
        members: [
            { name: 'Dr. Venkata Suresh', role: 'Chairman', designation: 'Professor & Principal', contact: '9866882091' },
            { name: 'Dr. Kappala Soujanya', role: 'Convener', designation: 'Assistant Professor', contact: '9542019790' },
            { name: 'Mrs. Balla Bhavani', role: 'Member', designation: 'Assistant Professor', contact: '9848218278' },
            { name: 'Mrs. D. Parvathi', role: 'Member', designation: 'Assistant Professor', contact: '7901251059' },
            { name: 'Mrs. Sri Latha Danda', role: 'Member', designation: 'Assistant Professor', contact: '9948715879' },
            { name: 'Mrs. Ashwini Masapeta', role: 'Member', designation: 'Assistant Professor', contact: '9247269962' },
            { name: 'Mrs. Sunitha Konreddy', role: 'Member', designation: 'Assistant Professor', contact: '8328185662' },
            { name: 'Mrs. Thara Guguloth', role: 'Member', designation: 'Assistant Professor', contact: '8500180042' },
        ],
    },
    {
        id: 'icc-posh',
        code: 'ICC',
        title: 'Internal Complaints Committee (ICC) & POSH Cell',
        category: 'safety',
        statutoryBasis: 'POSH Act 2013 & Vishaka Judgment Directives',
        leadDescription:
            'Constituted under the Sexual Harassment of Women at Workplace Act, 2013, providing time-bound, confidential inquiry and support mechanisms.',
        functions: [
            'Takes proactive action for the prevention, prohibition, and redressal of workplace harassment complaints.',
            'Conducts impartial, time-bound confidential inquiries ensuring psychological and administrative support.',
            'Maintains accessible, confidential complaint drop-boxes at prominent campus locations.',
            'Organizes legal awareness sessions and self-defense workshops for students and staff.',
        ],
        cadence: 'Time-Bound Inquiry (Within 48–72 Hours)',
        accentColor: '#7c3aed',
        members: [
            { name: 'Dr. J. Venkata Suresh', role: 'Chairman', designation: 'Professor & Principal', contact: '9866882091' },
            { name: 'Dr. Seelam Sharath Chandra', role: 'Convener', designation: 'Professor', contact: '9703652565' },
            { name: 'Dr. B. Srujan Reddy', role: 'Co-Convener', designation: 'Professor', contact: '8500180042' },
            { name: 'Dr. Kappala Soujanya', role: 'Member', designation: 'Associate Professor', contact: '9542019790' },
            { name: 'Mrs. Spandana Velpula', role: 'Member', designation: 'Assistant Professor', contact: '7093118624' },
            { name: 'Mrs. Balla Bhavani', role: 'Member', designation: 'Assistant Professor', contact: '9848218278' },
            { name: 'Mrs. Ashwini Masapeta', role: 'Member', designation: 'Assistant Professor', contact: '9247269962' },
            { name: 'Ms. K. Divya Sri', role: 'Member', designation: 'Senior Student (4th Year B.Pharm)', contact: '8374593581' },
            { name: 'Ms. P. Harini', role: 'Member', designation: 'Senior Student (3rd Year B.Pharm)', contact: '9392465961' },
        ],
    },
    {
        id: 'gender-sensitization',
        code: 'GSC',
        title: 'Gender Sensitization Cell',
        category: 'equity',
        statutoryBasis: 'Ministry of Education & UGC Equity Framework',
        leadDescription:
            'Fosters mutual respect, prevents gender bias, and guarantees safe, equitable participation across student councils and research teams.',
        functions: [
            'Convenes quarterly review meetings to assess campus gender equity initiatives.',
            'Conducts orientation workshops and interactive seminars on gender equality and inclusivity.',
            'Monitors campus facilities to ensure safe and dignified study environments for all genders.',
            'Provides a consultative forum for students to discuss peer dynamics and equity concerns.',
        ],
        cadence: 'Meets Quarterly (Every 3 Months)',
        accentColor: '#059669',
        members: [
            { name: 'Dr. Venkata Suresh Jilakara', role: 'Chairman', designation: 'Principal & Professor', contact: '9866882091' },
            { name: 'Mrs. B. Bhavani', role: 'Member', designation: 'Assistant Professor', contact: '9848218278' },
            { name: 'Mrs. C. Prashanthi', role: 'Member', designation: 'Assistant Professor', contact: '7702752361' },
            { name: 'Mrs. D. Swathi', role: 'Member', designation: 'Assistant Professor', contact: '8121120485' },
            { name: 'Dr. K. Soujanya', role: 'Member', designation: 'Assistant Professor', contact: '9542019790' },
            { name: 'Ms. K. Divya Sri', role: 'Member', designation: 'Student Representative', contact: '8374593581' },
            { name: 'Ms. Ch. Supraja', role: 'Member', designation: 'Student Representative', contact: '7780604176' },
        ],
    },
    {
        id: 'anti-discrimination',
        code: 'ADC',
        title: 'Anti-Discrimination Cell',
        category: 'equity',
        statutoryBasis: 'UGC Promotion of Equity in HEIs Directives',
        leadDescription:
            'Safeguards students and staff against any prejudice or discrimination based on caste, creed, language, ethnicity, gender, or differing ability.',
        functions: [
            'Convenes mandatory quarterly review meetings to audit campus equity safeguards.',
            'Investigates reported issues of prejudice or exclusion with strict neutrality and confidentiality.',
            'Guarantees equal access to laboratories, library resources, placements, and campus amenities.',
            'Provides customized academic support and inclusive facilities for differently-abled individuals.',
        ],
        cadence: 'Meets Quarterly (Every 3 Months)',
        accentColor: '#ea580c',
        members: [
            { name: 'Dr. Venkata Suresh Jilakara', role: 'Chairman', designation: 'Principal & Professor', contact: '9866882091' },
            { name: 'Dr. Kappala Soujanya', role: 'Convenor', designation: 'Assistant Professor', contact: '9542019790' },
            { name: 'Mrs. R. Sumalatha', role: 'Member', designation: 'Faculty Representative', contact: '9533164587' },
            { name: 'Mr. Yesu Babu', role: 'Member', designation: 'Assistant Professor', contact: '8985431023' },
            { name: 'Shri. Santhosh', role: 'Member', designation: 'Sub Inspector of Police', contact: '8712662472' },
        ],
    },
    {
        id: 'sc-st',
        code: 'SC/ST',
        title: 'SC / ST Welfare Cell',
        category: 'equity',
        statutoryBasis: 'Constitution of India & UGC Equal Opportunity Norms',
        leadDescription:
            'Counsels, empowers, and supports students from SC/ST communities by facilitating government scholarships, remedial mentoring, and career guidance.',
        functions: [
            'Guides SC/ST scholars in navigating academic, personal, and career milestones effectively.',
            'Facilitates access to State Government and UGC scholarship schemes and fee reimbursements.',
            'Organizes specialized remedial classes, soft-skill workshops, and competitive exam mentoring.',
            'Maintains a transparent grievance redressal channel adhering to constitutional protection norms.',
        ],
        cadence: 'Continuous Counseling & Semester Welfare Review',
        accentColor: '#ca8a04',
        members: [
            { name: 'Dr. J. Venkata Suresh', role: 'Chairman', designation: 'Professor & Principal', contact: '9866882091' },
            { name: 'Mrs. R. Shayamala', role: 'Convener', designation: 'Associate Professor', contact: '8333846184' },
            { name: 'Mrs. G. Parvathi', role: 'Member', designation: 'Assistant Professor', contact: '7901251059' },
            { name: 'Mr. J. Gopala Krishna', role: 'Member', designation: 'Student Co-ordinator', contact: '9000962105' },
            { name: 'Mr. R. Srinivas', role: 'Member', designation: 'Senior Student (4th Year B.Pharm)', contact: '9392605662' },
            { name: 'Ms. B. Anjali', role: 'Member', designation: 'Senior Student (3rd Year B.Pharm)', contact: '9182066281' },
            { name: 'Ms. K. Sai Shivani', role: 'Member', designation: 'Senior Student (2nd Year B.Pharm)', contact: '7601026246' },
            { name: 'Ms. Sai Sri', role: 'Member', designation: 'Junior Student (1st Year B.Pharm)', contact: '8341915300' },
        ],
    },
    {
        id: 'placement-cell',
        code: 'TPC',
        title: 'Training & Placement Cell',
        category: 'quality',
        statutoryBasis: 'Institutional Placement & Career Council',
        leadDescription:
            'Coordinates end-to-end pharmaceutical industry interfaces, campus recruitment drives, mock interviews, and clinical career preparation.',
        functions: [
            'Coordinates with pharmaceutical enterprises for on-campus and virtual hiring drives.',
            'Trains scholars in professional resume curation, technical portfolios, and interview readiness.',
            'Conducts mock technical and HR panels with individualized diagnostic feedback.',
            'Facilitates industrial internships, hospital clerkships, and regulatory compliance workshops.',
        ],
        cadence: 'Weekly Training Modules & Year-Round Drives',
        accentColor: '#2563eb',
        members: [
            { name: 'Dr. Seelam Sharath Chandra', role: 'Chief Placement Officer', designation: 'Professor', contact: '9703652565' },
            { name: 'Dr. B. Srujan', role: 'Additional Placement Officer', designation: 'Professor', contact: '8500180042' },
            { name: 'Mr. Jugguru Surendra', role: 'Additional Placement Officer', designation: 'Assistant Professor', contact: '9948994916' },
            { name: 'Mrs. C. Prashanthi', role: 'Additional Placement Officer', designation: 'Assistant Professor', contact: '7702752361' },
        ],
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
    }),
};

/**
 * Individual Committee Card with Scroll-Linked Parallax & Re-triggering Entrance
 */
function CommitteeCard({
    cell,
    idx,
    isExpanded,
    onToggle,
}: {
    cell: StatutoryCell;
    idx: number;
    isExpanded: boolean;
    onToggle: (id: string) => void;
}) {
    const cardRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'end start'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 110,
        damping: 26,
        restDelta: 0.001,
    });

    const y = useTransform(smoothProgress, [0, 1], [14, -14]);

    return (
        <motion.article
            ref={cardRef}
            className={styles.cellCard}
            style={{
                borderLeftColor: cell.accentColor,
                y: shouldReduceMotion ? 0 : y,
            }}
            variants={riseVariants}
            custom={idx}
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
        >
            {/* Top Identity Row */}
            <div className={styles.cardTopRow}>
                <div className={styles.titleBlock}>
                    <div className={styles.codeBadgeRow}>
                        <span
                            className={styles.codePill}
                            style={{
                                backgroundColor: `${cell.accentColor}14`,
                                color: cell.accentColor,
                                borderColor: `${cell.accentColor}40`,
                            }}
                        >
                            {cell.code}
                        </span>
                        <span className={styles.basisBadge}>
                            <ShieldCheck size={13} />
                            <span>{cell.statutoryBasis}</span>
                        </span>
                    </div>
                    <h3 className={styles.cellTitle}>{cell.title}</h3>
                </div>

                <div className={styles.cardTopActions}>
                    <div className={styles.cadenceTag}>
                        <Calendar size={13} className={styles.cadenceIcon} />
                        <span>{cell.cadence}</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className={styles.leadDesc}>{cell.leadDescription}</p>

            {/* Key Functions Box */}
            <div className={styles.functionsBlock}>
                <span className={styles.functionsSubhead}>Key Mandate &amp; Functions</span>
                <ul className={styles.functionsList}>
                    {cell.functions.map((fn, fIdx) => (
                        <li key={fIdx} className={styles.functionItem}>
                            <CheckCircle2 size={15} className={styles.checkIcon} />
                            <span>{fn}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Constituted Committee Roster */}
            <div className={styles.membersSection}>
                <div className={styles.membersHeaderRow}>
                    <div className={styles.membersHeaderLeft}>
                        <Users size={15} className={styles.usersIcon} />
                        <h4 className={styles.membersSectionTitle}>
                            Constituted Committee Members
                            <span className={styles.memberCountBadge}>{cell.members.length}</span>
                        </h4>
                    </div>

                    <button
                        type="button"
                        onClick={() => onToggle(cell.id)}
                        className={styles.toggleMembersBtn}
                        aria-expanded={isExpanded}
                    >
                        <span>{isExpanded ? 'Hide Roster' : 'Show Roster'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>
                </div>

                {isExpanded && (
                    <div className={styles.membersTableWrap}>
                        <table className={styles.membersTable}>
                            <thead>
                                <tr>
                                    <th>Member Name</th>
                                    <th>Role</th>
                                    <th>Designation</th>
                                    <th>Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cell.members.map((member, mIdx) => {
                                    const roleLower = member.role.toLowerCase();
                                    const isChair = roleLower.includes('chair');
                                    const isConvener =
                                        roleLower.includes('conven') || roleLower.includes('chief');

                                    return (
                                        <tr key={mIdx}>
                                            <td className={styles.colName} data-label="Member Name">
                                                <strong>{member.name}</strong>
                                            </td>
                                            <td className={styles.colRole} data-label="Role">
                                                <span
                                                    className={`${styles.rolePill} ${isChair
                                                            ? styles.roleChair
                                                            : isConvener
                                                                ? styles.roleConvener
                                                                : styles.roleMember
                                                        }`}
                                                >
                                                    {member.role}
                                                </span>
                                            </td>
                                            <td className={styles.colDesig} data-label="Designation">
                                                {member.designation}
                                            </td>
                                            <td className={styles.colContact} data-label="Contact">
                                                {member.contact ? (
                                                    <a
                                                        href={`tel:${member.contact.replace(/\s+/g, '')}`}
                                                        className={styles.contactLink}
                                                    >
                                                        <Phone size={12} />
                                                        <span>{member.contact}</span>
                                                    </a>
                                                ) : (
                                                    <span className={styles.dashMuted}>—</span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Card Footer */}
            <div className={styles.cardFooter}>
                <span className={styles.footerHelpText}>
                    Need assistance or wish to report an issue to {cell.code}?
                </span>
                <a href="#lodge-grievance" className={styles.actionBtn}>
                    <span>Lodge Grievance</span>
                    <ArrowUpRight size={14} />
                </a>
            </div>
        </motion.article>
    );
}

export default function CommitteeMatrix() {
    const shouldReduceMotion = useReducedMotion();
    const [filterCategory, setFilterCategory] = useState<'all' | 'quality' | 'safety' | 'equity'>('all');
    const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
        iqac: true,
        'anti-ragging': true,
        'women-protection': false,
        'icc-posh': false,
        'gender-sensitization': false,
        'anti-discrimination': false,
        'sc-st': false,
        'placement-cell': false,
    });

    const toggleCard = (id: string) => {
        setExpandedCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const toggleAll = (expand: boolean) => {
        const nextState: Record<string, boolean> = {};
        statutoryCells.forEach((cell) => {
            nextState[cell.id] = expand;
        });
        setExpandedCards(nextState);
    };

    const allExpanded = statutoryCells.every((cell) => expandedCards[cell.id]);

    const filteredCells =
        filterCategory === 'all'
            ? statutoryCells
            : statutoryCells.filter((cell) => cell.category === filterCategory);

    return (
        <section className={styles.sectionWrap} id="committees-directory" aria-label="Statutory Cells Directory">
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? 'visible' : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className={styles.eyebrow}>
                        <Scale size={13} className={styles.eyebrowIcon} />
                        <span>STATUTORY GOVERNANCE</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Institutional Statutory Cells &amp; Committees</h2>
                    <p className={styles.sectionSubtext}>
                        Constituted in strict accordance with UGC, PCI, AICTE, and Supreme Court directives to ensure academic quality, student safety, and campus equity.
                    </p>
                </motion.div>

                {/* Filter & Roster Control Bar */}
                <div className={styles.controlBar}>
                    <div className={styles.filterPillsRow}>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${filterCategory === 'all' ? styles.activeFilterBtn : ''}`}
                            onClick={() => setFilterCategory('all')}
                        >
                            All Cells ({statutoryCells.length})
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${filterCategory === 'quality' ? styles.activeFilterBtn : ''}`}
                            onClick={() => setFilterCategory('quality')}
                        >
                            Academic &amp; Quality (2)
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${filterCategory === 'safety' ? styles.activeFilterBtn : ''}`}
                            onClick={() => setFilterCategory('safety')}
                        >
                            Safety &amp; Welfare (3)
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${filterCategory === 'equity' ? styles.activeFilterBtn : ''}`}
                            onClick={() => setFilterCategory('equity')}
                        >
                            Equity &amp; Inclusion (3)
                        </button>
                    </div>

                    <button
                        type="button"
                        className={styles.globalToggleBtn}
                        onClick={() => toggleAll(!allExpanded)}
                    >
                        <Users size={14} />
                        <span>{allExpanded ? 'Collapse All Rosters' : 'Expand All Rosters'}</span>
                    </button>
                </div>

                {/* Single-Column Committee Stack (1 Card Per Row) */}
                <div className={styles.cellsStack}>
                    {filteredCells.map((cell, idx) => (
                        <CommitteeCard
                            key={cell.id}
                            cell={cell}
                            idx={idx}
                            isExpanded={!!expandedCards[cell.id]}
                            onToggle={toggleCard}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}