import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Inline data
let config = [
  {
    id: 1,
    name: "Wireless Headphones",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTNAfetK5tQUOD3fbJsac-tSnyt2_tCgBihLjyS0E5ANabnL77pLcbxtTmKtqUgmkLNnKdU65jjIV6-uWweQlzcfFjol0MpqubgqL71EEiG-4lvfMtrQUUXA",
    price: 59.99,
    description: "High-quality wireless headphones with noise cancellation.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ923KTpj9us9cKe28bbHtxDtwI3MHFWssLb7T8MTHX2AjJsKNoan4o30hIvrOfbPnA2AEjLcLUstss8Ef3-cIXu22PejsEsofiPWrnc7jDihNhzPJGm5WP",
    price: 129.99,
    description: "Feature-rich smart watch with health tracking.",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    image: "https://m.media-amazon.com/images/I/61Ab25oO66L.jpg",
    price: 39.99,
    description: "Portable Bluetooth speaker with deep bass.",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Fitness Tracker",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqhOplcSN7O590uSPfmUjwRopsdkRPIBNVSMzkYa5pDMhy7MXUnyTh35fZgKR51zimIfb9ZJ87yOvaq4z5UKqWf2wAbRE4Q3IKoXABRCkt9RHOu9IDJFVi",
    price: 49.99,
    description: "Track your daily activity and workouts.",
    rating: 4.3,
  },
];

app.use(express.json());


app.use(cors({
  origin:"http://localhost:5173",
  methods: ["GET","POST", "DELETE", "PATCH","PUT"],
  allowedHeaders: ["Content-Type", "credentials"]
}))


app.get("/api/products", (req, res) => {
 
  res.status(200).json(config);
});

app.post("/api/products", (req, res) => {
  const newProduct = req.body;
  config.push(newProduct);

  res.status(201).json({ msg: "Product added successfully" });
});

app.delete("/api/products/:id", (req, res) => {
  const id = +req.params.id;
  config = config.filter((element) => element.id !== id);

  res.status(200).json({ msg: "Product deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

/* preflight request
app.use((req, res, next) => {
  
  res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,DELETE",
      "Access-Control-Allow-Headers": "Content-Type",
  });
  
  if(req.method === "OPTIONS")
  {
    console.log("Preflight Request");
    return res.status(200).end();
  }

  next()
});
*/
