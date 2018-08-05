//helmet,sword ,shield, armor
// -2 helmet broken
//-3 sword broken
//h + s -> shild also
//-2shield -> armor

function solve(lostFightCount,helmetPrice,swordPrice,shieldPrice,armorPrice){

    let trashedHelmet = Math.floor(lostFightCount / 2);
    let trashedSword = Math.floor(lostFightCount / 3);
    let trashedShield = Math.floor(lostFightCount / (2 * 3));
    let trashedArmorPrice = Math.floor(lostFightCount / (2 * 3 * 2));

    let result = trashedHelmet * helmetPrice + trashedSword * swordPrice + trashedShield * shieldPrice + trashedArmorPrice * armorPrice;


    console.log(`Gladiator expenses: ${result} aureus`);
}
 
solve(23,12.50,21.50,40,200);

