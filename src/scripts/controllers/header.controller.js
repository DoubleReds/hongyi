const headerMb = require('../views/header.html')
const headerModel= require('../models/header.model')
const shouyeMb = require('../views/shouye_mb.html')
const shouMain = require('../views/shouye_main.html')
const searchMb = require('../views/search_mb.html')

// console.log($('.shouye_main'))

const searchController = () => {
    $('#searchBtn').on('click', async function() {
        // console.log(0)
        let keywords = $('input').val();
        // console.log(keywords)
        let sou = await headerModel.searchModel(keywords,1,4)
        console.log(sou.list)
        let html = template.render(searchMb, {
            ss: sou.list.list
        });

        $('.shouye_main').html(html)
    }) 
}

module.exports = {
    searchController
}