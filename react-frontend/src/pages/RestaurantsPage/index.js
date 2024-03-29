import { SupplierCard } from "../../components";
import './index.css'
const RestaurantsPage = () => {
    return ( <>
    <div class="restaurants">
        <div class="restaurants-header">
            <h2>Here is a list of our local sustainable restaurants:</h2>
            <p>Please <a href="/contact">get in touch</a> if you are a restaurant who wants to kickstart your journey to Net Zero.</p>
        </div>
        <SupplierCard name={"Kai Mayfair"} desc={"One Michelin Star Chinese Restaurant in the heart of Mayfair. Experience the best of Chinese cuisine in a modern and elegant setting."} website={"https://www.kaimayfair.co.uk/"}/>
    </div>
    </> );
}
 
export default RestaurantsPage;
