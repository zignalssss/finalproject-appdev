export default function card({altname,course,pg,img}){
    return(
        <>
            <div className="card card-compact w-96 bg-neutral-50 shadow-xl text-black">
                <figure><img src={img} alt={altname} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{course}</h2>
                    <p>{pg}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">enroll now</button>
                    </div>
                </div>
             </div>
        </>
    )
}