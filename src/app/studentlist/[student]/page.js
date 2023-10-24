'use client'
export default function Student({params}){
    console.log(params);
    return(
        <div>
            <h1>
                Student Details
            </h1>
            <br/>
            <br/>
            <br/>
            <ul>
                <li>Name: {params.student}</li>
            </ul>

        </div>
    )
}