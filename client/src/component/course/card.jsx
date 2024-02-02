export default function Card({ altname, course, pg, img }) {
    return (
        <div className="card md:max-w-md lg:max-w-lg xl:max-w-xl bg-neutral-50 text-black shadow-xl mx-auto">
            <figure>
                <img className="w-full h-auto" src={img} alt={altname} />
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
                    <div className="badge badge-outline mr-2">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
}
