import { imageFolderPath } from '../globals/globals';
import '../scss/components/_btn-favs.scss';
import useGlobal from '../store/globalAppState';

// Fav Button

function FavButton({ movieObj, remove }) {
    const globalStateAndglobalActions = useGlobal();
    const globalActions = globalStateAndglobalActions[1];

    function handleAddFav(){
        globalActions.addFav(movieObj);
        console.log('add to Favs');
    }

    function handleRemoveFav(){
        globalActions.removeFav(movieObj.id);
        console.log('remove from Favs');
    }

    return (
        <div className="fav-icon">
            {remove === false ?
            <div onClick={handleAddFav}>
                <img src={`${imageFolderPath}heart-unfilled.png`} alt="Remove from favourites"/>
            </div> : 
            <div onClick={handleRemoveFav}>
                <img src={`${imageFolderPath}heart-filled.png`} alt="Add to favourites"/>
            </div>}
        </div>
    );
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
