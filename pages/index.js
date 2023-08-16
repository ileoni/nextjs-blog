import Head from "next/head";
import Layout, {siteTitle} from "../components/layouts";
import utilsStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <p>Olá me chamo Igor e estou buscando um oportunidade como desenvolvedor front-end</p>
        <p>
          (
            Este é um exemplo de site - você criará um site como este em {' '}
            <a href="https://nextjs.org/learn">nosso tutorial Next.js</a>.
          )  
        </p>
      </section>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={`${utilsStyles.headingLg}`}>Blog</h2>
        <ul className={`${utilsStyles.list}`}>
          {
            allPostsData?.map(({id, date, title}) => (
              <li className={`${utilsStyles.listItem}`} key={id}>
                <Link href={`/posts/${id}`}>{ title }</Link>
                <br />
                <small className={utilsStyles.ligthText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}