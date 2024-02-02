export default function Card({ altname, course, pg, img ,badge}) {
    return (
        <div className="card bg-neutral-50 text-black shadow-xl mx-auto">
            <figure>
                <img className="w-full" src={img} alt={altname} />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg md:text-xl font-bold">
                    {course}
                    <div className="badge badge-secondary ml-2">NEW</div>
                </h2>
                <p className="text-sm md:text-base">
                    {pg}
                </p>
                <div className="card-actions justify-end mt-4">
                    <div className="badge badge-outline mr-2">{badge}</div> 
                </div>
            </div>
        </div>
    );
}
