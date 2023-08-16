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
        <p className={utilsStyles.padding8px}>
          Olá, meu nome é Igor e sou um entusiasta apaixonado por desenvolvimento. Com mais de 2 anos de experiência como Desenvolvedor, estou atualmente cursando Análise e Desenvolvimento de Sistemas na Universidade Unisinos. Além disso, possuo formação técnica em Informática pela Escola QI.
        </p>
        <p className={utilsStyles.padding8px}>
          Iniciei minha carreira como estagiário na Fundação Canoas Tec, onde tive a oportunidade de explorar minha paixão pelo desenvolvimento. Durante 1 ano e 5 meses, desempenhei diversos papéis, incluindo 6 meses como suporte técnico N2 e aproximadamente 1 ano como Desenvolvedor Fullstack, usando a tecnologia Laravel. Minha jornada continuou com uma breve passagem como Desenvolvedor Backend na empresa Multti - Relações e Integrações, consolidando ainda mais minhas habilidades.
        </p>
        <p className={utilsStyles.padding8px}>
          Minha última experiência profissional foi como Desenvolvedor Fullstack na Medialine, onde contribuí durante cerca de 10 meses para projetos desafiadores. Estou motivado a expandir minhas habilidades e agora estou em busca de uma nova oportunidade como Desenvolvedor Frontend.
        </p>
        <p className={utilsStyles.padding8px}>
          Atualmente, estou focado em aprimorar minhas habilidades em ReactJS e estou explorando o NextJS para construir interfaces mais dinâmicas e interativas. Além disso, tenho um grande interesse em aprender sobre UX/UI, pois tenho uma afinidade especial com a criação de experiências visuais envolventes.
        </p>
        <p className={utilsStyles.padding8px}>
          Estou ansioso para aplicar minha paixão e conhecimentos em um novo desafio e contribuir para o sucesso de projetos criativos e inovadores.
        </p>
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