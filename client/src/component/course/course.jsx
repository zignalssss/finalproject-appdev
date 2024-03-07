import { Link } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

export default function Card({ course_id, altname, courseName, pg, img, point_enroll, usercourse, userpoint, user_id }) {
    const navigate = useNavigate();

    // Check if the course_id is in usercourse array
    const isEnrolled = usercourse.includes(course_id);

    const handleViewClick = () => {
        navigate(`/video/${course_id}`);
    };
    const handleEnrollClick = async () => {
        if (userpoint >= point_enroll) {
            const Point_Update = {
                _id: user_id,
                point_enroll: point_enroll
            };

            const AddCourseForUser = {
                _id: user_id,
                course_id: course_id
            };

            try {
                await axiosInstance.post("api/user/updatepoint", Point_Update);
                await axiosInstance.post("api/user/adduserCourse", AddCourseForUser);
                document.getElementById('my_modal_1').showModal();
            } catch (error) {
                console.error("Error enrolling:", error);
            }
        } else {
            document.getElementById('my_modal_2').showModal();
        }
    };

    const handleCloseModal = () => {
        window.location.reload();
    };
    return (
        <div className="card bg-[#2d313b] text-wihte  shadow-xl shadow-zinc-700 mx-auto max-w-md">
            <figure>
                <img className="w-full " src={img} alt={altname} />
            </figure>
            <div className="card-body p-3 ml-2">
                <h2 className="card-title text-lg md:text-xl font-bold ">{courseName}</h2>
                <p className="text-sm md:text-base">{pg}</p>
                <div className="card-actions justify-end mb-2">
                    {!isEnrolled ? (
                        <div>
                            <button className="btn w-24 mr-4 bg-cyan-500 shadow-md shadow-cyan-500/50 border-none transition-all duration-200 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:text-base/[5px]" onClick={handleEnrollClick}>
                                <h3 className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Enroll</h3>
                            </button>
                            {/* if ok to enroll */}
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box rounded-3xl bg-zinc-600 bg-opacity-60 shadow-5xl border-white border-t-2 border-l-2 border-opacity-20 backdrop-filter backdrop-blur-sm">
                                    <h3 className="font-bold text-lg">Enroll Successfully!</h3>
                                    <p className="py-4">Thank you for enrolling!</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn" onClick={handleCloseModal}>Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            {/* if not enough point to enroll */}
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box rounded-3xl bg-zinc-600 bg-opacity-60 shadow-5xl border-white border-t-2 border-l-2 border-opacity-20 backdrop-filter backdrop-blur-sm">
                                    <h3 className="font-bold text-lg">Enroll Failed!</h3>
                                    <p className="py-4">Your points are not enough</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    ) : (
                        <button className="btn w-24 mr-4 bg-green-700 shadow-md shadow-green-700/50 border-none transition-all duration-200 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:text-base/[5px]" onClick={handleViewClick}>
                            <h3 className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">View</h3>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
