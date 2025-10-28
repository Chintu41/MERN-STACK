// import OpenRoles from "./components/OpenRoles/OpenRoles.jsx";
// function App(){
//     const dummyOpenRoles=["frontend engineer","backend engineer","ui/ux designer","product engineer","ceo","cto"];
//     return(
//         <div className="bg-red-200 h-screen w-screen flex items-center justify-center">
//            <OpenRoles OpenRolesData={dummyOpenRoles}/>
//         </div>
//     )
// }
// export default App;     

import Controlled from "./components/OpenRoles/forms/controlled";


//form App
function App(){
    return(
        <div className="h-screen flex items-center justify-center">
            <Controlled/>
        </div>
    )
}
export default App;