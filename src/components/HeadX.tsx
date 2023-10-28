import Head from 'next/head'

import React from 'react'
export default function HeadX() {
    return (<Head>
            <title>Rune</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="description" content="Rune is a Discord bot that allows you to easily manage your server."/>
            <link rel="icon" href="/cdn/images/server/logo.png"/>
        </Head>)
}