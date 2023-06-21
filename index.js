const clickContainer = document.querySelector(".container");               //it is clicked{container}
const countryContainer =document.querySelector(".country_container");     //it is opened  {COUNTRY CONTAINER}
const countryList =document.querySelector(".country_list")                //IT IS LISTED {COUNTRY LIST}
const input = document.querySelector(".input")   //for input of class by searching country

    //for clicking drop logic

    clickContainer.addEventListener("click", ()=>{
        countryContainer.classList.toggle("hide");
    })

    //for putting county in list logic

    const countries =[
        {id: 1 , country : "Afghanistan"},
        {id: 2 , country : "America"},
        {id: 3 , country : "Australia"},
        {id: 4 , country : "Bangladesh"},
        {id: 5 , country : "Canada"},
        {id: 6 , country : "Denmark"},
        {id: 7 , country : "India"},
        {id: 8 , country : "Pakistan"},
        {id: 9 , country : "Russia"},
        {id: 10 , country : "Sweden"},
        {id: 11, country : "Switzerland"},
        {id: 12 , country : "Zimbabwe"}     ]



//putting all in function countries

function countryDropped(countries){       
    for(let i of countries){                // here, we can use anything for i
      const list =document.createElement("p");
      list.classList.add("list")
      list.innerText = i.country;             //changining inner text of repeated i . country that is country after repeatation is changed
      countryList.appendChild(list); }}
      countryDropped(countries) //recalling the function above
 
//for searching logic by just typing the name


//{1...} // 
input.addEventListener("keyup",handleChange)

//{2............}//
function handleChange(event){
    typedcountry =event.target.value.toLowerCase();
    const filterSearch = countries.filter(({country})=> country.toLowerCase().startsWith(typedcountry));
    countryList.innerHTML ="";
    countryDropped(filterSearch);
  }