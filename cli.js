#!/usr/bin/env node 

const {mdLinks} = require('./index.js')
const {stats, statsPlusBroken} = require('./functionsCLI.js')


const route= process.argv[2];
const options= process.argv;

function cli(route, options){
    if(!options.includes('--validate') && !options.includes('--stats')){
        mdLinks(route, {validate:false})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }else if(options.includes('--validate') && options.includes('--stats')){
        mdLinks(route, {validate:true})
        .then(res => console.log(statsPlusBroken(res)))
        .catch(err => console.log(err))
    }else if(options.includes('--validate')){
        mdLinks(route, {validate:true})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }else if(options.includes('--stats')){
        mdLinks(route, {validate:true})
        .then(res => console.log(stats(res)))
        .catch(err => console.log(err))
    }else{
       console.log('Comando invalido!')
    }
}

cli(route,options);