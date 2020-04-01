let url= fetch("https://coronavirus-19-api.herokuapp.com/all");

url.then((res)=>res.json()).then(d=>covidglobal(d))


// function covidglobal(data){
//     let glob=document.querySelector('div .global');
//     let div='';
//     for(let i=0;i<data.length;i++){
//         div+=` <div class="col" >
//         <div class="card bg-light mb-3" style="max-width: 18rem;">
//           <div class="card-body">
//             <h5 class="card-title">Cases</h5>
//             <p class="card-text">471820</p>
//           </div>
//         </div> 
//     </div>`
//     }
//     glob.innerHTML=div;
// }



function covidglobal(data){
    let glob=document.querySelector('div #global');

    let cases=`<div class="col" >
            <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Cases</h5>
                <p class="card-text">${data.cases}</p>
              </div>
             </div> 
         </div> `
         

         let Death=`<div class="col" >
         <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">Death</h5>
             <p class="card-text">${data.deaths}</p>
           </div>
          </div> 
      </div> `
      

      let recovered=`<div class="col" >
      <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Recovered</h5>
          <p class="card-text">${data.recovered}</p>
        </div>
       </div> 
   </div> `
   glob.innerHTML=cases+Death+recovered;

}



let url2= fetch("https://coronavirus-19-api.herokuapp.com/countries");

url2.then((res)=>res.json()).then(d=>allcountries(d))

function allcountries(d){
    let allnations=document.querySelector('div #allnation');
    let div='';
    for(let i=0;i<d.length;i++){
        div+=`
        <div class="cardmy card-2my" style="    opacity: 85%;">
        <div class="card border-light mb-3" style="max-width: 20rem; background-color: #e9e8f8;">
          <div class="card-header" style="text-align: center; text-align: center;
          font-size: larger;">${d[i].country}</div>
          <div class="card-body">

            <ul class="list-group">

              <li class="list-group-item d-flex justify-content-between align-items-center">
                Cases
                <span class="badge badge-primary badge-pill">${d[i].cases}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                TodayCases
                <span class="badge badge-primary badge-pill">${d[i].todayCases}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Deaths
                <span class="badge badge-primary badge-pill">${d[i].deaths}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                TodayDeaths
                <span class="badge badge-primary badge-pill">${d[i].todayDeaths}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Recovered
                <span class="badge badge-primary badge-pill">${d[i].recovered}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Active
                <span class="badge badge-primary badge-pill">${d[i].active}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Critical
                <span class="badge badge-primary badge-pill">${d[i].critical}</span>
              </li>

            </ul>

          </div>
        </div>
      </div>
    `
    }
    allnations.innerHTML=div;
}

// searchbar(india)
// function searchbar(){

//   // let a =document.querySelector('input #search-bar');
//   document.querySelector('div #allnation').visibility="none";
  

// }
// searchbar();