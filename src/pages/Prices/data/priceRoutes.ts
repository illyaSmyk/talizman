import ViennaImage from "../../../assets/images/prices/viena-airplane-ai-gpt.jpg";
import BudapestAirportImage from "../../../assets/images/prices/budapest-air.jpg";
import BratislavaAirportImage from "../../../assets/images/prices/Bratislava-ai.jpg";
import KrakowAirportImage from "../../../assets/images/prices/Krakow-ai.jpg";
import KosiceAirportImage from "../../../assets/images/prices/kosice-ai.jpg";
import PrivateTransferImage from "../../../assets/images/prices/private-transfer.jpg";
import UkraineImage from "../../../assets/images/prices/ukraine-border.jpg";
import DonovalyImage from "../../../assets/images/prices/donovaly.jpg";

export const priceRoutes = [
  {
    id: "individual",
    price: 50,
    image: PrivateTransferImage,
    variant: "individual",
  },
  {
    id: "viennaAirport",
    price: 199,
    image: ViennaImage,
  },
  {
    id: "budapestAirport",
    price: 169,
    image: BudapestAirportImage,
  },
  {
    id: "bratislavaAirport",
    price: 159,
    image: BratislavaAirportImage,
  },
  {
    id: "krakowAirport",
    price: 199,
    image: KrakowAirportImage,
  },
  {
    id: "kosiceAirport",
    price: 219,
    image: KosiceAirportImage,
  },
  {
    id: "ukraineBorder",
    price: 329,
    image: UkraineImage,
  },
  {
    id: "donovaly",
    price: 49,
    image: DonovalyImage,
  },
];