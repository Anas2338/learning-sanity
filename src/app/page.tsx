import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface item {
  ProductName: string,
  ProductPrice: number,
  imageUrl: string,
  _id: string,
}

export default async function Home (){
  const data = await client.fetch(`*[_type == "product"] {
    ProductName,
    ProductPrice,
    "imageUrl": ProductImage.asset->url,
    _id,
  }`)
  return(
    <div className="flex justify-evenly mt-5">
      {
        data.map((elem:item)=>{
          return(
            <div className="flex flex-col-reverse" key={elem._id}>
              <div>
                <h1>{elem.ProductName}</h1>
                <p>{elem.ProductPrice}</p>
              </div>
              <div className="border-black border-2 rounded-md">
                <Image src={elem.imageUrl} alt={elem.ProductName} width={200} height={200} />
              </div>
            </div>
          )
        })  
      }
    </div>
  )
}