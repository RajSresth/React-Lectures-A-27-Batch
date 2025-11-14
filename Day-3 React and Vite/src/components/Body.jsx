import Card from "./Card"


const config = [
        {
                id: 1,
                name: "Wireless Headphones",
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTNAfetK5tQUOD3fbJsac-tSnyt2_tCgBihLjyS0E5ANabnL77pLcbxtTmKtqUgmkLNnKdU65jjIV6-uWweQlzcfFjol0MpqubgqL71EEiG-4lvfMtrQUUXA",
                price: 59.99,
                description: "High-quality wireless headphones with noise cancellation.",
                rating: 4.5
        },
        {
                id: 2,
                name: "Smart Watch",
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ923KTpj9us9cKe28bbHtxDtwI3MHFWssLb7T8MTHX2AjJsKNoan4o30hIvrOfbPnA2AEjLcLUstss8Ef3-cIXu22PejsEsofiPWrnc7jDihNhzPJGm5WP",
                price: 129.99,
                description: "Feature-rich smart watch with health tracking.",
                rating: 4.2
        },
        {
                id: 3,
                name: "Bluetooth Speaker",
                image: "https://m.media-amazon.com/images/I/61Ab25oO66L.jpg",
                price: 39.99,
                description: "Portable Bluetooth speaker with deep bass.",
                rating: 4.7
        },
        {
                id: 4,
                name: "Fitness Tracker",
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqhOplcSN7O590uSPfmUjwRopsdkRPIBNVSMzkYa5pDMhy7MXUnyTh35fZgKR51zimIfb9ZJ87yOvaq4z5UKqWf2wAbRE4Q3IKoXABRCkt9RHOu9IDJFVi",
                price: 49.99,
                description: "Track your daily activity and workouts.",
                rating: 4.3
        },
        
]

const Body = () =>{
    return <div>
                <div className="center-container" >
                       
                       {
                            config.map(element =>{
                                return <Card  item={element} />
                            })
                       }
                </div>
        </div>
}

export default Body;


//  { item: [{}, {}, {}, {}]}

//   <Card  item={config[0]}/>
