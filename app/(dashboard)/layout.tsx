const DashboardLayout = ({children}:{children:React.ReactNode})=>{
    return(
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <div>Hello Sidebar</div>
            </div>
{/* The width of the sidebar is moved 
back to ensure that the content is not
 covered by the sidebar*/}
        
            <main className="md:pl-72">
                Hello Content
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout;