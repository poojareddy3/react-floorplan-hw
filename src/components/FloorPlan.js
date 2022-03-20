import './floorplan.css'
import Bath from "./Bath"
import BedRoom from "./BedRoom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

function FloorPlan() {
    return(
        <div class="floorplan">
         <Kitchen title="Kitchen"/>
         <LivingRoom name="Living Room"/>
         <BedRoom id="bedroom1" bedNum="Bedroom 1"/>
         <BedRoom id="bedroom2" bedNum="Bedroom 2"/>
         <BedRoom id="bedroom3" bedNum="Bedroom 3"/>
         <Bath id="halfbath" size="Half Bath"/>
         <Bath id="fullbath" size="Full Bath"/>
        </div>
    )
}

export default FloorPlan