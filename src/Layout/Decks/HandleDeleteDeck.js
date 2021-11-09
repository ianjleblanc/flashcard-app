
import { deleteDeck } from '../../utils/api';

export default function HandleDeleteDeck(id) {
    let result = window.confirm(
        "Delete this deck? You will not be able to recover it"
    );
    if (result) {
        deleteDeck(id)
    }
}
