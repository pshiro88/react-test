import React from 'react'
import Hero from '../components/hero'
import Insights from '../components/insights'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import NetworkPage from '../components/network'


export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Insights />
            <NetworkPage/>
            {/* <IndiaMap /> */}
            <Footer />
        </>
    )
}
