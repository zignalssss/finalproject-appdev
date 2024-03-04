const SettingPage = () =>{
    return(
        <div className="space-y-6 h-screen">
            <h1 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] hover:drop-shadow-[0_0_20px_rgba(0,0,255,0.6)] transition-all duration-300 hover:text-4xl">
                Glowing Shadow Text
            </h1>
            <h1 className="text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,20,147,0.6)] hover:drop-shadow-[0_0_20px_rgba(0,0,255,0.6)] transition-all duration-300">
                Pink Glowing Shadow
            </h1>
            <h1 className="text-3lxl font-bold text-white drop-shadow-[0_0_20px_rgba(0,255,0,0.5)] hover:drop-shadow-[0_0_20px_rgba(0,0,255,0.6)] transition-all duration-300">
                Green Glowing Shadow
            </h1>
        </div>
    )
}
export default SettingPage;