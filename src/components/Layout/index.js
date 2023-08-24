

export default function Layout({children}){
    return(
        <div className="overflow-y-hidden">

            <main>{children}</main>
        </div>
    )
}