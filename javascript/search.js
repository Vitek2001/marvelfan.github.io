$(document).ready(()=>{
    let arrHeroLink = document.querySelectorAll(".text-title");
  console.log(arrHeroLink)

    $(".search").on("input",(e)=>{
        htmlParse(sortHero(e.target.value, arrHeroLink));
    })
})

let htmlParse=(arr)=>{
    $(".catalog-search").html(arr)
}

let sortHero = (val, arrHero)=>{
    res = []
    arrHero.forEach(el => {   
        let hero = el.text
        // console.log()
        if(hero.includes(val)  && val != ""){
            res.push(el)
        }
    });
    return res;
}


