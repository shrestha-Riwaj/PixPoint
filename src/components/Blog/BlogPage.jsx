import Header from "../header/Header"
import { BlogCard } from "./BlogCard"
import { BlogHeroSection } from "./BlogHeroSection"

export const BlogPage = ()=>{

    return(
        <>

        {/* Blog Section */}
        <div className="mx-2 rounded-md">
                <Header />    
            </div>
        <section className="max-w-[1200px] m-auto">
            
            <div>
                <BlogHeroSection />
            </div>
            <div className="grid grid-cols-4">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                
            </div>
            
        </section>
        </>
    )
}