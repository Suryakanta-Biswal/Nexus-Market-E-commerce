import SearchIcon from '@mui/icons-material/Search';


export default function SearchFilter ({searchItem, setSearchItem}) {
    return (
        <>
            <div className="m-2  border-2 border-blue-950 rounded-full">
                <div className="p-3 flex relative items-center">
                    <SearchIcon className=" flex absolute ml-3 text-gray-400"/>
                    <input
                     value={searchItem}
                     onChange={(e) => setSearchItem(e.target.value)}
                     className="form-control rounded-full  pl-12 text-lg" type="search" placeholder="Search Product" aria-label="Search"/>
                </div>
            </div>
            <hr className='text-gray-300 mt-6 mx-3 lg:hidden'/>
        </>
    )
};