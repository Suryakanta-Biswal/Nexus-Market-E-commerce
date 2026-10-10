export default function Footer () {
    return (
        <div className=" h-[100px] w-full bg-blue-950  flex justify-center items-center">
            <div className=" text-gray-200 gap-1 flex justify-center items-center ">
                <span className=" hidden sm:block">Privacy Policy</span>|
                <span className=" hidden sm:block">Terms of Service</span>|
                <span>&copy;</span>
                <span>2026 Nexus Market Inc.</span>
            </div>
        </div>
    )
};