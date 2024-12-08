"use client";
import Image from "next/image";
// import { useRouter } from "next/navigation";

const SearchBar = () => {

    // const router = useRouter();

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget); 
  //   const name = formData.get("name") as string; 

  //   if(name){
  //       router.push(`/list?name=${name}`)
  //   }
  // };

  return (
    // <form
    //   className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
    //   onSubmit={handleSearch} // Fixed: Now properly handles HTMLFormElement
    // >
    //   {/* Input for search */}
    //   <input
    //     type="text"
    //     name="name" // Fixed: Input name is critical for FormData
    //     placeholder="Search"
    //     className="flex-1 bg-transparent outline-none"
    //   />

    //   {/* Button for submitting the form */}
    //   <button type="submit" className="cursor-pointer">
    //     <Image src="/search.png" alt="Search" width={16} height={16} />
    //   </button>
    // </form>

    <div className="flex  justify-end gap-4 p-2 rounded-md flex-1">
         <button type="submit" className="cursor-pointer">
        <Image src="/search.png" alt="Search" width={16} height={16} />
      </button>
    </div>
  );
};

export default SearchBar;

