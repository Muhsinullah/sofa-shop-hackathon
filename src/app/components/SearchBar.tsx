// "use client";
// import Image from "next/image";

// const SearchBar = () => {
//   const handleSearch = (e: React.FormEvent<HTMLElement>) => {
//     e.preventDefault();
//     // Ensure currentTarget is an HTMLFormElement
//     const formData = new FormData(e.currentTarget); // e.currentTarget is now properly typed
//     const name = formData.get("name") as string;

    
//   };

//   return (
//     <form
//       className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
//       onSubmit={handleSearch}
//     >
//       <input
//         type="text"
//         name="name"
//         placeholder="Search"
//         className="flex-1 bg-transparent outline-none"
//       />
//       <button className="cursor-pointer">
//         <Image src="/search.png" alt="" width={16} height={16} />
//       </button>
//     </form>
//   );
// };

// export default SearchBar;



"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {

    const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); 
    const name = formData.get("name") as string; 

    if(name){
        router.push(`/list?name=${name}`)
    }
  };

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

