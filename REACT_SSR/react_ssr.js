//npm i react express @babel/register @babel/preset-env @babel/preset-react ignore-styles  

//index.js
require('ignore-styles')

require("@babel/register")({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    ignore: [/(node_module)/]
})

require('./server')

//server.js
const express = require('express')
const fs = require('fs')
const path = require('path')

import react from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'

const app = express()

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.get('/', (req, res, next)=>{
    fs.readFile(path.resolve(__dirname, '../build/index.html'), 'utf-8', (err, data)=>{
        if(err){
            return res.send(500).json(err.message)
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`))
    })
})

const port = 4000
app.listen(port, ()=>{
    console.log('Working 4000')
})
