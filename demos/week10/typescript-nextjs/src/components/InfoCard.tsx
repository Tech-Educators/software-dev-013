// we have to type props.
export type PropTypes = {title: string | number, paragraph: string, coolFunction: (message: string) => void}

export default function InfoCard({title, paragraph, coolFunction}:PropTypes ): JSX.Element {
    return (
        <div>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    )
}



// as a rule when doing functions in typescript 
// you have to type paramaters
// if you do :() after you tell the function explicity what to return
function sum(a: number, b:number):string {
    return 'hello'
} 



