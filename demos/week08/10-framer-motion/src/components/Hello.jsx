'use client'
export default function Hello({children}) {
    console.log(children)
    return (
        <div className="the-Hello-component-does-this">
            {children}
        </div>
    )
}