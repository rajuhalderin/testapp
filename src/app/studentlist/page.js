'use client'

import Link from "next/link"

export default function StudentsList() {

    let data = [
        {
            id: 1,
            name: "Raju Halder",
            age: 24,
            sex: "Male"
        },
        {
            id: 2,
            name: "Puja Sarkar",
            age: 22,
            sex: "Female"
        },
        {
            id: 3,
            name: "Suman Saha",
            age: 25,
            sex: "Male"
        },
        {
            id: 4,
            name: "Rakesh Sarkar",
            age: 27,
            sex: "Male"
        },
        {
            id: 5,
            name: "Ankita Saha",
            age: 23,
            sex: "Female"
        }]

    let seasonsList = [];

    data.forEach((season, index) => {
        seasonsList.push(<li><Link href={"/studentlist/"+season.name}>{season.name}</Link></li>);
    });

    return (
        <div>
            <ul>
                {seasonsList}
            </ul>
        </div>
    )
}