import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return <footer 
    className="py-8 px-4 bg-card relative border-t border-border mt-12 pt-4 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground"> 
            &copy; {new Date().getFullYear()} Ingrid Duggan, no rights reserved tbh
        </p>
        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:pg-primary/20 text-primary position-colors">
            <ArrowUp size={20}/>
        </a>
    </footer>
}