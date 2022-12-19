import Head from 'next/head'
import Header from '../components/Header'
import LotteryEntrance from '../components/LotteryEntrance'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Lottery Smart Contract</title>
                <meta
                    name="description"
                    content="Decentralized lottery platform running over goerli testnet of ethereum"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <LotteryEntrance/>
        </>
    )
}
