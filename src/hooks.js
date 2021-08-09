import { useState } from "react";

/** A hook for flipping cards (both Pokemon and playing cards)
 */
const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard]
}

export default useFlip;