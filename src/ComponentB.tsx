import { useParams } from "react-router";

export default function ComponentB(){
    const params = useParams<{name: string, another:string}>();
    return <div>  
        Hello {params.name}
        {/* or as below: */}
        {/* {`Hello ${params.name}`} */}
    </div>
}