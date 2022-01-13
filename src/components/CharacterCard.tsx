import {Card} from "./Card";
import {useIsBookmarked} from "../app/hooks";
import {Character} from "../app/types";

type CharacterCardProps = {
    character: Character
}

export function CharacterCard(
    {
        character
    }: CharacterCardProps
): JSX.Element {

    const [isBookmarked, toggleBookmarked] = useIsBookmarked(character.id);

    return <Card
        key={character.id}
        name={character.name}
        image={character.image}
        isFavorite={isBookmarked}
        onToggleFavorite={() =>{
            toggleBookmarked()
        }}
    />
}
