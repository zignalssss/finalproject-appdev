export default function Cardall({ altname, courseName, pg, img, badge }) {
    return (
        <div className="card bg-neutral-50 text-black shadow-xl mx-auto">
            <figure>
                <img className= "w-full" src={img} alt={altname}  />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg md:text-xl font-bold">{courseName}
                </h2>
                <p className="text-sm md:text-base">
                    {pg}</p>
                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-outline mr-2">{badge}</button>
                </div>
            </div>
        </div>
    );
}