export default function Body({children, className, ...props} : React.ComponentProps<'body'>) {
    return (
        <body
        className={className}
        {...props}
        >
            {children}
        </body>
    )
}