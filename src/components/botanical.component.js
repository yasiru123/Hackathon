import React, {Component} from 'react';
import peradeniya from './pera.jpg';
import hakgala from './hakgala.jpg';
import gampaha from './gampaha.jpg';

export default class Botanical extends Component {
    render() {
        return (
            <div>

                <table>

                    <td align="left">
                        <h2>Botanical Gardens in Sri Lanka</h2>

                        <h4>Peradeniya</h4>
                        <tr>
                            <p><b>the many Beautiful avenues will lead one to sections which provide a burst of tropical color.
                                The great lawns highlight huge tropical trees. Then, while you will be surprised at the variety
                                of bamboo that can be found in one place.
                                Actually, the best Know Attraction of the garden is the Orchid House, Which has more than 300
                                varieties of exquisite Orchids from the rare indigenous foxtail and Vesak Orchids to many natural
                                and hybrid species which have made this one of the best knows of the world. The Spice garden gives
                                you a first-hand introduction to the trees, Plants, and flowers.
                                While the Peradeniya Botanical Garden may receive more attention for its Orchid house is located.
                                Peradeniya Botanical garden famous for Flowers. Indeed, all around the world foreigners and local
                                visitors mostly like to that. This is one of the oldest botanic gardens in the country.
                            </b></p>
                        </tr>

                        <td><img src={peradeniya}/> </td>

                    </td>

                    <table>

                        <td align="left">
                            <h4>Hakgala</h4>
                            <tr>
                                <p><b>
                                    Hakgala Botanical Garden is situated on the Nuwara Eliya-Badulla main road,
                                    16 km from Nuwara Eliya. The garden has a cool temperate climate because of
                                    altitude is 5,400 feet above the sea level. The mean annual temperature ranges
                                    between 16 °C to 30 °C during course of a year.[3] From December to February it
                                    has a cold climate, while the warm climate persists from April to August.
                                </b></p>
                            </tr>
                            <td><img src={hakgala}/></td>

                        </td>
                    </table>


                    <table>

                        <td align="left">
                            <h4>Gampaha Botanical Garden</h4>
                            <tr>
                                <p><b>
                                    Gampaha Botanical Garden, also known as Henarathgoda Botanical Garden is situated in the suburb of Gampaha.
                                    It was established in 1876 by the British to conduct experiments on exotic economic plants such as Rubber,
                                    and explore plant wealth and development of economy in the colony. The first imported rubber tree to Sri Lanka
                                    was first planted in this garden and it was the first seedlings of Brazilian rubber tree ever planted in Asia.
                                </b></p>
                            </tr>

                            <td><img src={gampaha}/></td>

                        </td>

                    </table>
                </table>
            </div>
        );
    }
}

