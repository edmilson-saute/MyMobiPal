

export default function List({ title, items }) {
    return (
        <div className="m-4">
            <h5 className="font-inter font-semibold">{title}</h5>
            <ul className="list-none">
                {items.map((item, index)=>(
                    <li className="font-inter text-sm font-light hover:text-blue-500 cursor-pointer" key={index}>{item}</li>
                ))}
            </ul>
        </div>

    )
}