import GoodBye from "@/components/Goodbye"
import Hello from "@/components/Hello"

export default function Page() {
    return (
        <div>
            <p>Helllooo!</p>
            
            <Hello>
                <h1>This is an h1!</h1>
            </Hello>
            <br/>

            <Hello>
                <p>This is a different child!</p>
            </Hello>

            <GoodBye>
                <h3>This is child to goodbye!</h3>
            </GoodBye>
        </div>
    )
}