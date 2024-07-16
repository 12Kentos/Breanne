import styles from "./page.module.scss";
import family from "./images/Family.JPG";
import Image from "next/image";
import quoteOne from "./images/Flyer Quote 2.PNG";
import quoteTwo from "./images/Flyer Quote.PNG";
import Headshot from "./images/Headshot.jpg";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <header className={styles.header}>
        <div className={styles.headerInside}>
          <h1>Breanne Dedrickson</h1>
          <h2>Candidate for Wasatch County School Board</h2>
        </div>
      </header>
      {/* <div className={styles.imagesWrapper}>
        <Image
          src={Headshot}
          className={`${styles.mainImages} ${styles.headshot}`}
        />
      </div> */}

      <h1 className={styles.mainHeading}>Who is Breanne?</h1>

      <div className={styles.familyPicWrapper}>
        <Image src={family} className={styles.familyPic} />
      </div>

      <p className={styles.breanneInfo}>
        Breanne grew up in Pleasant Grove and Holden, Utah. She loved playing
        "school" as a child and always aspired to be a teacher. An avid reader,
        Breanne combined her two great loves and chose to study English Teaching
        at Snow College and then Utah State University. Post a study abroad
        experience to Cuernavaca, Mexico and student teaching at Logan High
        School, Breanne was hired to teach 9-10th grade English, ACT Prep, and
        English Language Learner classes at Wasatch High School. After spending
        three years teaching as Ms. Davis, Breanne got set up on a blind date
        and found the true love of her life, Andrew Dedrickson. Ms. Davis became
        Mrs. Dedrickson. Fast forward 14 years, Andrew and Breanne Dedrickson
        now have four kids, two lambs, one dog, one pony, and lots of goldfish!
        Breanne loves mint Oreo ice cream, four-wheeling, pedicures, traveling
        with her family, and learning new things - which is why she attended the
        University of Utah and earned a Masters of Education degree in
        Educational Leadership and Policy.
      </p>

      <p className={styles.breanneInfo}>
        Breanne was the assistant principal at Timpanogos Intermediate School
        for two years and has been the principal at Liahona Preparatory Academy
        for the last nine years. Breanne is an involved parent who has served in
        her children's school as a School/Community Council member and Wasatch
        Parent Network volunteer. She's served at the district level as a
        committee member on the Safe Schools and Future Schools committees. She
        was also active in coordinating community efforts to support the first
        bond for the new high school. Breanne is a passionate educator and
        parent with a proven track record. She now wants to be involved as a
        policy maker to influence Wasatch County schools for good. Breanne would
        love your vote of support in November!
      </p>

      <div className={styles.contentWrapper}>
        <h3>Why</h3>
        <div className={styles.whyExperience}>
          <div>
            <Image src={quoteTwo} className={styles.firstImage} />
          </div>
          <p className={styles.whyInfo}>
            I am running for school board because I am passionate about high
            quality, comprehensive education and academic achievement – both for
            my own four children and all children in this valley. I have been
            involved in education as an educator and parent. Now, I want to be
            involved as a policymaker to ensure Wasatch County School District
            has the policies, resources, and supports in place to provide the
            best educational experience for all kids in a fiscally responsible
            and transparent way. Teacher retention and compensation,
            research-based/job- embedded professional development,
            interactive/engaging curriculum, open communication, and
            safe/appropriate school facilities are my priorities. I have a
            proven track record in this district. I have vision and the courage
            to do what is best for students, educators, and the community. I
            want to represent YOU. I’d love your vote and support.
          </p>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <h3>Experience</h3>
        <div
          className={`${styles.whyExperience} ${styles.whyExperienceReverse}`}
        >
          <ul>
            <li>Liahona Preparatory Academy Principal</li>
            <li>Timpanogos Intermediate School Vice Principal</li>
            <li>Wasatch High School (WHS) English Teacher</li>
            <li>WHS English Department Chair</li>
            <li>WHS Faculty Council Vice President</li>
            <li>
              Daniel’s Canyon Elementary School/Community Council
              President/Vice-President/Member
            </li>
            <li>Wasatch Parent Network Volunteer, Classroom Volunteer</li>
            <li>
              Wasatch County School District (WCSD) Future Schools Committee
              Member
            </li>
            <li>WCSD Safe Schools Committee Member</li>
            <li>Cognia Accreditation Evaluation Team Member</li>
          </ul>
          <div className={styles.quoteWrapper}>
            <Image src={quoteOne} className={styles.firstImage} />
          </div>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <h3>Education</h3>
        <ul>
          <li>
            Master of Education in Educational Leadership and Policy with
            Administrative License
          </li>
          <li>
            Bachelor of Science with English Teaching Emphasis (English Major
            &amp; ESL Minor)
          </li>
          <li>Reading Level 1 Endorsement</li>
          <li>Study Abroad: Cuernavaca, Mexico</li>
        </ul>
      </div>
      <div className={styles.contact}>
        <h3 className={styles.contactHeader}>Contact</h3>
        <p>
          <span>Phone</span>: 801-369-4248
        </p>
        <p>
          <span>Email</span>:{" "}
          <Link href={`mailto:votebreannededrickson@gmail.com`}>
            votebreannededrickson@gmail.com
          </Link>
        </p>
        <div className={styles.socialMedia}>
          <p>Social Media:</p>
          <Link
            href={
              "https://www.facebook.com/breanne.dedrickson.for.wasatch.county.sc/"
            }
            target="_blank"
          >
            <FaFacebookSquare className={styles.facebook} />
          </Link>
        </div>
      </div>
    </main>
  );
}
