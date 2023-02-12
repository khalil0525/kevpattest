import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import Layout from '@/components/layouts/Layout';
import AnimatedTextTech from "../components/AnimatedText/AnimatedTextTech"
import AnimatedTextConnecting from "../components/AnimatedText/AnimatedTextConnecting"
const inter = Inter({ subsets: ['latin'] })
const homeData = {
  firstName: "Health",
  lastName: "Tech",
  skills: ["Tech", "Designer", "Developer", "Freelancer"],
};
export default function Home() {
  return (
    <>
      <Head>
      <title>HERMTAC</title>
      </Head>
      <Layout>
        <div className="edrea_tm_section animated" id="home">
          <div className="section_inner">
              <div className="edrea_tm_home">
                  <AnimatedTextTech />
                <h3 className="job">
                  <AnimatedTextConnecting/>
                </h3>
                <div className="edrea_tm_button transition_link">
                  <Link href="/contact">
                    Get in Touch 
                  </Link>
                </div>
            </div>
          </div>
      </div>
    </Layout>
    
    </>
  )
}
