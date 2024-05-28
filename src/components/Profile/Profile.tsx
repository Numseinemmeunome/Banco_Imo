import React, { useEffect, useState } from "react";
import './Profile.css';
import { PlayerProfile } from "../../@types/Profile";
import { CardAtribute } from "../../@types/CardAtribute";
import { CardProperty } from "../../@types/CardProperty";

const Profile = () => {

    const initialPlayerProfile: PlayerProfile = {
        id: 0,
        playerName: "player",
        cardAtribute: [],
        cardProperties: [],
        PositiveBonus: 0,
        NegativeBonus: 0,
        lucky: 0,
    };
    
    const [playerProfile, setPlayerProfile] = useState(initialPlayerProfile);

    function calculateTotalLuckBonus(): number {
        let totalLuckBonus = 0;
        for (const cardId of playerProfile.cardAtribute) {
            
            const card = getCardById(cardId); 
    
            if (card) {
                totalLuckBonus += card.luckBonus;
            }
        }
        return totalLuckBonus;
    }

    const [luckProfile, setluckProfile] = useState(calculateTotalLuckBonus());

    useEffect(() => {
        ;
    });

/*    const newCard: CardAtribute = {
        id: 1,
        nameCard: "Lucky Charm",
        descriptionCard: "Increases luck",
        bonusCard: {
            PositiveBonus: 0,
            NegativeBonus: 0,
            luckBonus: 5, // Example luck bonus
        },
    };

    
    addCardToPlayer(newCard);
*/
    return (
        <section className="character-window">
           
            <p>Player Name: {playerProfile.playerName}</p>
            <p>Total Luck Bonus: {calculateTotalLuckBonus()}</p>
            
        </section>
    );
}

export default Profile;
